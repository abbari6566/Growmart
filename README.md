# GrowMart – Gardening Business Website

A full-stack website for a gardening business: equipment, flowers, pots, seeds, and more.

- **Front-end:** Next.js 15 (React 19), green theme
- **Back-end:** FastAPI, SQLite via SQLAlchemy

## Quick start

### 1. Backend (FastAPI)

```bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
# source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

API runs at **http://localhost:8000**. Docs: http://localhost:8000/docs

The SQLite database `growmart.db` is created in the `backend` folder on first run, and seed data (categories and products) is loaded automatically.

### 2. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Site runs at **http://localhost:3000**.

The frontend calls the API at `http://localhost:8000` by default. To use another URL, set:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

in `frontend/.env.local`.

## Project layout

- `backend/` – FastAPI app, SQLite DB, REST API for categories and products
- `frontend/` – Next.js app (home, products list with filters, product detail)

## Features

- **Home:** Hero, category links, featured products
- **Products:** List with category filter and search, product cards
- **Product detail:** Single product view with price and description
- Green-themed UI (various shades of green, garden feel)

## Deploy on GitHub Pages

The site can be hosted on GitHub Pages. On every push to `main`, GitHub Actions builds the frontend (with the backend running for build-time data) and deploys the static export.

1. In your repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`; the workflow will build and deploy. The site will be at:
   - **https://abbari6566.github.io/Growmart/**
