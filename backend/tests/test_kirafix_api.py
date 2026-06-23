"""Backend API tests for KiraFix/Hopper Modern marketing site."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://enterprise-boost-ai.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        body = r.json()
        assert "message" in body
        assert "KiraFix" in body["message"] or "Hopper" in body["message"]

    def test_health(self, client):
        r = client.get(f"{API}/health")
        assert r.status_code == 200
        body = r.json()
        assert body.get("status") == "ok"
        assert "ts" in body


# ---------- Contact ----------
class TestContact:
    def test_create_contact_valid(self, client):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_User_{unique}",
            "email": f"test_{unique}@example.com",
            "company": "TEST_Co",
            "role": "VP People",
            "inquiry_type": "discovery_call",
            "message": "TEST inquiry message for automated regression.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["email"] == payload["email"]
        assert data["name"] == payload["name"]
        assert data["inquiry_type"] == "discovery_call"
        assert "created_at" in data and "T" in data["created_at"]  # ISO

        # Verify persistence via GET
        g = client.get(f"{API}/contact")
        assert g.status_code == 200
        items = g.json()
        assert isinstance(items, list)
        assert any(i.get("id") == data["id"] for i in items), "Contact inquiry not persisted"

    def test_create_contact_invalid_email(self, client):
        payload = {
            "name": "Bad",
            "email": "not-an-email",
            "company": "X",
            "role": "Y",
            "inquiry_type": "general",
            "message": "TEST invalid email",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_create_contact_missing_required(self, client):
        r = client.post(f"{API}/contact", json={"email": "a@b.com"})
        assert r.status_code == 422


# ---------- Newsletter ----------
class TestNewsletter:
    def test_signup_new(self, client):
        email = f"test_news_{uuid.uuid4().hex[:8]}@example.com"
        r = client.post(f"{API}/newsletter", json={"email": email})
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["email"] == email
        assert "id" in data
        first_id = data["id"]

        # Idempotency: second call should return existing record (same id)
        r2 = client.post(f"{API}/newsletter", json={"email": email})
        assert r2.status_code == 200
        d2 = r2.json()
        assert d2["email"] == email
        assert d2["id"] == first_id, "Newsletter signup not idempotent"

    def test_signup_invalid_email(self, client):
        r = client.post(f"{API}/newsletter", json={"email": "nope"})
        assert r.status_code == 422
