# Hopper Modern — Static Website

Welcome! This is your complete 5-page website, built as pure **HTML + CSS + JS** so it runs on **any hosting including GoDaddy shared hosting**. No Node, no Python, no database required.

## What's included

```
hopper-modern-site/
├── index.html              # Home
├── about.html              # About Seema Bassi
├── services.html           # 6 Services
├── framework.html          # KiraZ Framework + 7-Day Process
├── contact.html            # Contact form (mailto-based)
├── css/
│   └── style.css           # Full stylesheet (dark theme, orange/gray)
├── js/
│   └── main.js             # Nav toggle, scroll reveals, contact form
└── assets/
    ├── logo.jpg            # Hopper Modern logo
    ├── solution.png        # KiraZ solution graphic
    ├── transformation.png  # 7-day process graphic
    └── services-menu.png   # Services menu graphic
```

---

## How to upload to GoDaddy

### Option 1 — cPanel File Manager (easiest)

1. Log in to your **GoDaddy account** → My Products → **Web Hosting** → **Manage** → **cPanel Admin**.
2. Open **File Manager** → go into the **`public_html`** folder.
3. Click **Upload** and upload the entire contents of the `hopper-modern-site` folder (not the folder itself — its contents).
   - You can also upload a **.zip** of the site and use "Extract" inside File Manager.
4. Make sure `index.html` sits directly inside `public_html/`.
5. Visit your domain — your site is live!

### Option 2 — FTP (FileZilla, Cyberduck, etc.)

1. Get FTP credentials from GoDaddy: cPanel → **FTP Accounts**.
2. Connect with your FTP client.
3. Upload all files/folders into `public_html/`.
4. Done.

---

## Before you go live — a quick checklist

- [ ] Replace `hello@hoppermodern.com` with your real inbox in **`contact.html`** and **`js/main.js`** (search & replace).
- [ ] Replace the LinkedIn `#` links in all 5 pages with your actual LinkedIn URL.
- [ ] Optional: replace the founder-icon placeholder in `about.html` with a real photo of Seema. Save it as `assets/seema.jpg` and swap the placeholder `<div>` for an `<img src="assets/seema.jpg">`.
- [ ] Update the podcast link (Startup Caffe) with the real episode URL.

---

## Contact form — how it works

The form uses a **mailto:** handoff (no backend needed, perfect for shared hosting). When a visitor submits, it opens their email client pre-filled with the message. Works everywhere, no server required.

**If you want a true server-side form** (auto-emails without opening the visitor's email app), you'll need to either:
- Use a free form service like **Formspree** (`formspree.io`) — paste one line into the `<form>` tag.
- Or upgrade to a hosting plan with PHP/Node support and we can add a backend handler.

---

## Need changes?

Just message and I'll update the code. Ask me to:
- Swap colors / fonts / layout
- Add pages (e.g., case studies, blog)
- Convert to multi-language
- Add a real contact-form backend

Enjoy your new site! 🚀
