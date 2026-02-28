## Entry 1 — Project Structure Setup
- **Date:** 2026-02-28
- **Prompt used:** "Setup repo structure for Travel Naja car rental system with React frontend and Express backend"
- **Accepted:** Folder structure for backend/frontend, branch strategy
- **Rejected:** None
- **Verification:** Manually verified folder structure matches project requirements

## Entry 2 — Backend Setup
- **Date:** 2026-02-28
- **Prompt used:** "Setup Express.js backend with MySQL, JWT auth, helmet, rate limiting for car rental system"
- **Accepted:** app.js structure, middleware setup, route scaffolding, trust proxy fix
- **Rejected:** rate-limit without trust proxy (caused validation error in Codespace environment)
- **Verification:** Ran `npm run dev`, hit /health endpoint, returned {"status":"ok"}

## Entry 3 — Database Setup
- **Date:** 2026-02-28
- **Prompt used:** "Create MySQL schema for car rental system with users, cars, bookings tables and Docker setup"
- **Accepted:** Schema design, docker-compose, connection pool
- **Rejected:** None
- **Verification:** Ran docker ps confirmed container up, ran SHOW TABLES confirmed all 3 tables created

## Entry 4 — Controllers and Routes
- **Date:** 2026-02-28
- **Prompt used:** "Implement Express controllers for auth (register/login), car listing, and booking with JWT middleware"
- **Accepted:** All controllers, middleware, updated routes
- **Rejected:** None
- **Verification:** curl POST /api/auth/register returned 201, curl GET /api/cars returned 3 cars from DB

## Entry 4 — Controllers and Routes
- **Date:** 2026-02-28
- **Prompt used:** "Implement Express controllers for auth (register/login), car listing, and booking with JWT middleware"
- **Accepted:** All controllers, middleware, updated routes
- **Rejected:** None
- **Verification:** curl POST /api/auth/register returned 201, curl GET /api/cars returned 3 cars from DB

## Entry 5 — Unit Tests
- **Date:** 2026-02-28
- **Prompt used:** "Write Jest unit tests for auth, car, and booking endpoints using supertest"
- **Accepted:** All test files, jest config
- **Rejected:** None
- **Verification:** npm test — 15/15 passed, 87.59% statement coverage

## Entry 6 — GitHub Actions CI Pipeline
- **Date:** 2026-02-28
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
- **Verification:** Ran `npm run dev`, opened http://localhost:5173, confirmed all pages render correctly

## Entry 8 — Frontend Redesign with shadcn/ui (Travel Naja theme)
- **Tool:** GitHub Copilot
- **Prompt used:** "Redesign React app to look like unified travel platform Travel Naja using shadcn/ui. Home page shows 3 service cards: Flights, Car Rental, Hotels. Flights and Hotels show Coming Soon badge. Keep all existing logic intact."
- **Accepted:** shadcn/ui component integration, Travel Naja branding, service cards layout, dark theme
- **Rejected:** Initial shadcn setup that used incompatible Tailwind v3 syntax with Tailwind v4
- **Verification:** 
  - Fixed CSS by replacing `@tailwind base/components/utilities` with `@import tailwindcss`
  - Installed missing `tailwindcss-animate` package
  - Ran `npm run dev` confirmed no errors
  - Manually tested all pages: Home, Cars, Login, Register, Bookings
  - Confirmed Flights and Hotels cards show "Coming Soon" and are disabled
  - Confirmed Car Rental card links to /cars and booking still works
