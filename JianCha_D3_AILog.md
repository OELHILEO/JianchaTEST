# Jiancha AI Usage Log (D3)

## Entry 1 — Project Structure Setup
- **Date:** 2026-02-28
- **Tool:** Claude AI
- **Prompt used:** "Setup repo structure for Travel Naja car rental system with React frontend and Express backend"
- **Accepted:** Folder structure for backend/frontend, branch strategy
- **Rejected:** None
- **Verification:** Manually verified folder structure matches project requirements

## Entry 2 — Backend Setup
- **Date:** 2026-02-28
- **Tool:** GitHub Copilot
- **Prompt used:** "Setup Express.js backend with MySQL, JWT auth, helmet, rate limiting for car rental system"
- **Accepted:** app.js structure, middleware setup, route scaffolding, trust proxy fix
- **Rejected:** rate-limit without trust proxy (caused validation error in Codespace environment)
- **Verification:** Ran npm run dev, hit /health endpoint, returned {"status":"ok"}

## Entry 3 — Database Setup
- **Date:** 2026-02-28
- **Tool:** GitHub Copilot
- **Prompt used:** "Create MySQL schema for car rental system with users, cars, bookings tables and Docker setup"
- **Accepted:** Schema design, docker-compose, connection pool
- **Rejected:** None
- **Verification:** Ran docker ps confirmed container up, ran SHOW TABLES confirmed all 3 tables created

## Entry 4 — Controllers and Routes
- **Date:** 2026-02-28
- **Tool:** GitHub Copilot
- **Prompt used:** "Implement Express controllers for auth (register/login), car listing, and booking with JWT middleware"
- **Accepted:** All controllers, middleware, updated routes
- **Rejected:** None
- **Verification:** curl POST /api/auth/register returned 201, curl GET /api/cars returned cars from DB

## Entry 5 — Unit Tests
- **Date:** 2026-02-28
- **Tool:** GitHub Copilot
- **Prompt used:** "Write Jest unit tests for auth, car, and booking endpoints using supertest"
- **Accepted:** All test files, jest config
- **Rejected:** None
- **Verification:** npm test — 15/15 passed, 87.59% statement coverage

## Entry 6 — GitHub Actions CI Pipeline
- **Date:** 2026-02-28
- **Tool:** GitHub Copilot
- **Prompt used:** "Create GitHub Actions CI pipeline with MySQL service container, ESLint, and Jest coverage"
- **Accepted:** Full workflow file, eslint config
- **Rejected:** None
- **Verification:** Pushed to dev branch, checked GitHub Actions tab for green pipeline

## Entry 7 — Frontend Setup with React + Vite
- **Date:** 2026-02-28
- **Tool:** Claude AI
- **Prompt used:** "Setup React Vite frontend with react-router-dom and axios for car rental system"
- **Accepted:** Folder structure, page components, routing, api service
- **Rejected:** None
- **Verification:** Ran npm run dev, opened http://localhost:5173, confirmed all pages render correctly

## Entry 8 — Frontend Redesign with shadcn/ui (Travel Naja theme)
- **Date:** 2026-02-28
- **Tool:** GitHub Copilot
- **Prompt used:** "Redesign React app to look like unified travel platform Travel Naja using shadcn/ui. Home page shows 3 service cards: Flights, Car Rental, Hotels. Flights and Hotels show Coming Soon badge."
- **Accepted:** shadcn/ui component integration, Travel Naja branding, service cards layout, dark theme
- **Rejected:** Initial shadcn setup that used incompatible Tailwind v3 syntax with Tailwind v4
- **Verification:** Ran npm run dev, confirmed all pages render correctly, Flights and Hotels show Coming Soon

## Entry 9 — Frontend Bug Fix (Tailwind v4 + shadcn compatibility)
- **Date:** 2026-02-28
- **Tool:** Claude AI
- **Prompt used:** "Fix tailwindcss PostCSS error bg-background unknown utility class in Vite + shadcn setup"
- **Accepted:** Updated index.css to use @import tailwindcss, installed tailwindcss-animate
- **Rejected:** Downgrading Tailwind version (would break shadcn)
- **Verification:** Error dismissed, npm run dev runs clean, UI renders correctly

## Entry 10 — Fix CORS and Codespace Network Configuration
- **Date:** 2026-02-28
- **Tool:** Claude AI
- **Prompt used:** "Fix CORS policy error between frontend and backend in GitHub Codespace environment"
- **Accepted:** Removed helmet middleware, added explicit CORS config with OPTIONS preflight, set port 8080 to Public
- **Rejected:** CORS with helmet (caused header conflicts)
- **Verification:** Frontend /cars page loaded car listing from backend, Register/Login/Booking all working

## Entry 11 — Frontend Environment Config
- **Date:** 2026-02-28
- **Tool:** Claude AI
- **Prompt used:** "Configure VITE_API_URL env variable to use Codespace backend URL instead of localhost"
- **Accepted:** .env with VITE_API_URL, updated api.js to use import.meta.env
- **Rejected:** Hardcoded localhost (not accessible from browser in Codespace)
- **Verification:** Network tab confirmed requests going to correct Codespace URL

## Entry 12 — Staff Dashboard + Reports
- **Date:** 2026-02-28
- **Tool:** GitHub Copilot
- **Prompt used:** "Add staff dashboard to React + Express car rental app with GET /api/staff/dashboard and GET /api/staff/reports/reservations, protect with JWT role staff"
- **Accepted:** staffRoutes.js, staffController.js, Staff/Dashboard.jsx, Staff/Reports.jsx, protected routes
- **Rejected:** None
- **Verification:** Seeded staff user via API, updated role in DB, confirmed Staff link visible in Navbar

## Entry 13 — Cancel Reservation
- **Date:** 2026-02-28
- **Tool:** GitHub Copilot
- **Prompt used:** "Add cancel reservation feature with DELETE /api/bookings/:id, update status to cancelled, set car is_available back to TRUE"
- **Accepted:** cancelBooking controller, DELETE route, Cancel button in Bookings.jsx
- **Rejected:** None
- **Verification:** Logged in as member, cancelled booking, confirmed status changed and car became available

## Entry 14 — Logo and Favicon
- **Date:** 2026-02-28
- **Tool:** Claude AI
- **Prompt used:** "Add SVG logo as browser tab favicon for Travel Naja React app using inline SVG data URI in index.html"
- **Accepted:** SVG favicon in index.html, Logo.jsx component with gradient design
- **Rejected:** None
- **Verification:** Refreshed browser, confirmed Travel Naja logo appears in browser tab

## Entry 15 — README.md
- **Date:** 2026-02-28
- **Tool:** GitHub Copilot
- **Prompt used:** "Generate professional README.md by reading all project files, include Codespace port 8080 public warning, API endpoints table, test accounts, build steps"
- **Accepted:** Full README with overview, tech stack, build steps, Codespace warning, API table, repo structure
- **Rejected:** None
- **Verification:** Reviewed manually, confirmed all endpoints match actual routes

## Entry 16 — Car Search & Filter + Staff Car CRUD + Calendar Fix + Payment Button Fix
- **Date:** 2026-03-10
- **Tool:** GitHub Copilot
- **Prompt used:** "Fix calendar white theme, fix Pay Now button color, add Staff Car CRUD endpoints and CarManagement page, add Cars page search/filter by name/type/location/sort"
- **Accepted:** Calendar bg-white wrapper, Pay Now button fix, staffCarController.js, CarManagement.jsx, search+filter+sort in Cars.jsx
- **Rejected:** None
- **Verification:** Manually tested calendar navigation, Pay Now button visible, Staff can add/edit/delete cars, search and filter working

## Entry 17 — Date Picker + 30-day Limit + Promo Code + Payment Simulation
- **Date:** 2026-03-10
- **Tool:** GitHub Copilot
- **Prompt used:** "Add calendar date picker, block past dates, max 30 days validation, promo codes ONLYTRAVELNAJA/GUBONUS/MEGA (30% off), payment simulation page with mock credit card form"
- **Accepted:** Calendar popover, date validation frontend+backend, promo code logic, PaymentSimulation.jsx
- **Rejected:** None
- **Verification:** Tested date picker, confirmed past dates blocked, 30-day limit warning shown, promo code applies 30% discount, payment simulation shows success

## Entry 18 — Cart Icon + Toast Notification + Booking Flow Fix
- **Date:** 2026-03-10
- **Tool:** GitHub Copilot
- **Prompt used:** "Add shopping cart icon in Navbar with pending booking count badge, toast notification bottom-right after booking, fix booking flow to not redirect to payment immediately"
- **Accepted:** ShoppingCart icon with badge, toast notification, updated booking flow
- **Rejected:** None
- **Verification:** Booked a car, confirmed toast appears bottom-right, cart badge updates, Pay Now button in Bookings page

## Entry 19 — Staff Reset DB + Pay Now Status Update
- **Date:** 2026-03-10
- **Tool:** GitHub Copilot
- **Prompt used:** "Add staff reset database button with confirmation dialog, add PUT /api/bookings/:id/pay endpoint to update status to confirmed"
- **Accepted:** DELETE /api/staff/reset, AlertDialog confirmation, PUT /api/bookings/:id/pay, Pay Now navigates to payment
- **Rejected:** None
- **Verification:** Staff reset DB cleared all bookings and restored cars, Pay Now updated status to confirmed

## Entry 20 — Promotion Feature
- **Date:** 2026-03-10
- **Tool:** GitHub Copilot
- **Prompt used:** "Add promotion/discount feature: SALE badge on cars, filter by promotion, staff can set discount 10-100% per car, discounted price shown in booking"
- **Accepted:** discount_percent and is_promotion columns, SALE badge, Promotion filter, Staff SetPromo dialog
- **Rejected:** None
- **Verification:** Staff set promotion on cars, SALE badge visible, Promotion filter shows only promo cars, discounted price shown

## Entry 21 — Updated Unit Tests
- **Date:** 2026-03-10
- **Tool:** GitHub Copilot
- **Prompt used:** "Update Jest tests to cover new endpoints: staff dashboard, staff car CRUD, reset DB, pay booking, promo code discount, date validation"
- **Accepted:** tests/staff.test.js, updated tests/booking.test.js
- **Rejected:** None
- **Verification:** npm test — 35/35 passed, 79.52% statement coverage

## Entry 22 — Cloud Deployment
- **Date:** 2026-03-11
- **Tool:** Claude AI
- **Prompt used:** "Deploy car rental app to Vercel (frontend), Render (backend), Clever Cloud MySQL (database)"
- **Accepted:** .env.production for Vercel, Procfile for Render, schema import to Clever Cloud, staff user seeded via API
- **Rejected:** Railway (workspace setup issue)
- **Verification:** Frontend live at https://jiancha-travel-reservation-system-f.vercel.app, backend live at https://jiancha-travel-reservation-system-focus.onrender.com, all features working in production

## Entry 23 — Print PDF for Reports
- **Date:** 2026-03-11
- **Tool:** Claude AI
- **Prompt used:** "Add print to PDF feature to Staff Reports page with stats summary, print header, window.print()"
- **Accepted:** Print button, @media print CSS, stats summary (total, revenue, confirmed, pending, cancelled)
- **Rejected:** None
- **Verification:** Clicked Print Report button, browser print dialog opened, report printed with correct layout

## Entry 24 — Release v1.0
- **Date:** 2026-03-11
- **Tool:** Manual
- **Action:** Merged dev branch into main, tagged release v1.0, updated README with live demo URL and test accounts
- **Verification:** GitHub Actions green on main branch, all features working end-to-end in production
