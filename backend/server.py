from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="KiraFix / Hopper Modern API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    role: Optional[str] = None
    inquiry_type: str = Field(default="discovery_call")  # discovery_call | general | media
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactInquiryCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    role: Optional[str] = None
    inquiry_type: str = "discovery_call"
    message: str


class NewsletterSignup(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterSignupCreate(BaseModel):
    email: EmailStr


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "KiraFix / Hopper Modern API is running", "version": "1.0"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "ts": datetime.now(timezone.utc).isoformat()}


@api_router.post("/contact", response_model=ContactInquiry)
async def create_contact(payload: ContactInquiryCreate):
    inquiry = ContactInquiry(**payload.model_dump())
    doc = inquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_inquiries.insert_one(doc)
    logger.info(f"New contact inquiry: {inquiry.email} ({inquiry.inquiry_type})")
    return inquiry


@api_router.get("/contact", response_model=List[ContactInquiry])
async def list_contacts(limit: int = 100):
    items = await db.contact_inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for it in items:
        if isinstance(it.get('created_at'), str):
            try:
                it['created_at'] = datetime.fromisoformat(it['created_at'])
            except Exception:
                pass
    return items


@api_router.post("/newsletter", response_model=NewsletterSignup)
async def newsletter_signup(payload: NewsletterSignupCreate):
    existing = await db.newsletter_signups.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        # idempotent
        if isinstance(existing.get('created_at'), str):
            try:
                existing['created_at'] = datetime.fromisoformat(existing['created_at'])
            except Exception:
                pass
        return NewsletterSignup(**existing)
    signup = NewsletterSignup(email=payload.email)
    doc = signup.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.newsletter_signups.insert_one(doc)
    return signup


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
