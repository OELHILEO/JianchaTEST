# Travel Naja Car Rental Reservation System

## 🌐 Live Demo

- https://jianchatravelnaja.vercel.app/

### 🔑 Test Accounts

| Role | Email | Password |
|------|-------|----------|
| Staff | staff@jiancha.com | staff1234 |
| Member | (register via app) | - |

This repository contains a full-stack car rental reservation system built as part of the Travel Naja platform. It demonstrates a simple RESTful API backed by a MySQL database and a modern React/Tailwind frontend using shadcn/ui components. The backend handles user authentication, car listings, bookings, cancellations, staff reporting, and promotion management.

---

## 🚀 Project Overview

- **Domain**: Car rental reservations
- **Purpose**: Allow users to browse available cars, make reservations, view/cancel their bookings, and provide staff with an administrative dashboard and reports.
- **Architecture**: Split into multiple implementations:
  - **Backend** (Node.js/Express) offers JSON APIs and connects to MySQL
  - **Frontend Web** (React + Vite + Tailwind + shadcn/ui) provides a SPA for customers and staff
  - **Mobile App** (Flutter) provides a native Android/iOS client for customers (**NEW**)
  - Docker Compose is used for running the database locally.

---

## ✨ New Features

- **Mobile Application**: A fully functional Flutter mobile app for customers to browse cars, make bookings, and manage their reservations on the go.
- **One-Way Car Rentals**: Customers can now specify different pick-up and drop-off locations, with the system automatically applying a 500 THB drop-off fee.

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Vite, Tailwind CSS (v3), shadcn/ui |
| Mobile | Flutter, Dart |
| Backend | Node.js (>=20), Express, JWT, bcrypt |
| Database | MySQL (dockerized via `docker-compose`) |
| Hosting | Vercel (frontend), Render (backend), Clever Cloud (MySQL) |
| Dev Ops | Docker, Git, GitHub Actions |

---

## ✅ Prerequisites

Make sure you have the following installed:

- Node.js **v20 or later**
- Docker (for MySQL service)
- Git (for cloning the repo)
- Flutter SDK (for mobile app development)

---

## 🛠️ Build & Run Instructions

```bash
# 1. Clone the repository
git clone https://github.com/ICT-Mahidol/2025-ITCS383-JianCha.git
cd 2025-ITCS383-JianCha

# 2. Start MySQL database
docker compose up -d

# 3. Start Backend (Terminal 1)
cd implementations/backend
cp .env.example .env
npm install
npm run dev

# 4. Start Frontend (Terminal 2)
cd implementations/frontend
npm install
npm run dev

# 5. Start Mobile App (Terminal 3)
cd implementations/mobile
flutter pub get
flutter run
```

---

## 🔌 Default Ports

- Backend API: http://localhost:8080
- Frontend app: http://localhost:5173
- Mobile app: Runs on Emulator or Physical Device

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Create a new member account |
| POST | `/api/auth/login` | No | Authenticate and receive JWT |

### Cars
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/cars` | No | List available cars (`?location=&type=`) |
| GET | `/api/cars/:id` | No | Get details for a single car |

### Bookings
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/bookings` | Member | Retrieve bookings for logged-in user |
| POST | `/api/bookings` | Member | Create a new booking (supports `promo_code` & drop-off locations) |
| DELETE | `/api/bookings/:id` | Member | Cancel a booking |
| PUT | `/api/bookings/:id/pay` | Member | Confirm payment for a booking |

### Staff (Admin)
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/staff/dashboard` | Staff | Overview stats (bookings, revenue, cars) |
| GET | `/api/staff/reports/reservations` | Staff | Full reservation report |

> All authenticated endpoints require `Authorization: Bearer <token>` header.

---

## 🎟️ Promo Codes

| Code | Discount |
|------|----------|
| `ONLYTRAVELNAJA` | 30% off |
| `GUBONUS` | 30% off |
| `MEGA` | 30% off |

---

## 📁 Repository Structure

```
.
├── docker-compose.yml
├── designs/                        # D1 - C4 diagrams
├── implementations/
│   ├── backend/                    # Node.js API
│   ├── frontend/                   # React Web App
│   └── mobile/                     # Flutter Mobile App
├── AGENTS.md
├── Jiancha_D3_AILog.md
├── Jiancha_D4_QualityReport.md
├── README.md
└── README2.md                      # This file
```

---

## 🎯 Notes

- Rental period is limited to **30 days**. Contact admin for long-term rentals.
- Past dates cannot be selected for pickup.
- Payment is simulated (no real payment gateway).
- One-way rentals incur a **500 THB drop-off fee**.

Thank you from Jiancha Group
```
6688009	Sunattha	Boonla-or
6688076	Kunruethai	Patimapornchai
6688095	Tinakome	Rasripenngam
6688104	 Phubase	Sangliamthong
6688137	Natnicha	Uppariputthangkul
6688163	Aroonrat	Choochue
---
