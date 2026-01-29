# Startup Benefits Platform

## Overview
A platform providing early-stage startups with access to exclusive SaaS deals.

## Tech Stack
Frontend: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion  
Backend: Node.js, Express.js, MongoDB, JWT  

## Authentication
JWT-based authentication with protected routes.

## Claim Flow
1. User logs in
2. Views deal
3. Backend checks eligibility
4. Claim created with status "pending"

## Authorization
Unverified users cannot claim locked deals.

## Frontend-Backend Interaction
REST APIs consumed using fetch with Authorization headers.

## Limitations
- No admin panel
- Manual user verification

## Improvements
- Admin dashboard
- Email notifications
- Rate limiting
- Redis caching

## UI & Performance
- Skeleton loaders
- Motion-driven UI
- Optimized API calls
