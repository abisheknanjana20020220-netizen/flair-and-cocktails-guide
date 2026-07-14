# Abishek Flair Bartender Guide

A premium, modern learning platform for bartending and flair bartending education. Built with Next.js, React, and TypeScript.

## 🎯 Project Overview

A world-class bartending learning platform featuring:
- **Courses**: Beginner to Professional bartending and flair techniques
- **Cocktail Library**: 100+ cocktails with recipes, history, and images
- **Flair Tricks**: Step-by-step tutorials with slow-motion demonstrations
- **Quiz System**: Interactive quizzes with leaderboards and badges
- **Admin Dashboard**: Course and content management
- **User Dashboard**: Progress tracking and certificates

## 🏗️ Project Structure

```
flair-and-cocktails-guide/
├── apps/
│   ├── web/                    # Next.js frontend application
│   └── admin/                  # Admin dashboard (future)
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── database/               # Prisma schema & migrations
│   └── types/                  # Shared TypeScript types
├── docs/                       # Documentation
└── .github/
    └── workflows/              # CI/CD workflows
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Media Storage**: Vercel Blob / AWS S3
- **Admin**: Next.js Dashboard

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database
- Environment variables configured

### Installation

```bash
# Clone the repository
git clone https://github.com/abisheknanjana20020220-netizen/flair-and-cocktails-guide.git
cd flair-and-cocktails-guide

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 📋 Features Roadmap

### Phase 1: Foundation
- [x] Project setup
- [ ] Authentication system
- [ ] Database schema
- [ ] Homepage hero section

### Phase 2: Core Features
- [ ] Course management
- [ ] Video player
- [ ] Cocktail library with search
- [ ] User dashboard

### Phase 3: Learning Features
- [ ] Progress tracking
- [ ] Quiz system
- [ ] Certificates
- [ ] Comments & ratings

### Phase 4: Admin & Optimization
- [ ] Admin dashboard
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] PWA setup

## 📝 License

MIT

## 👤 Author

Abishek Nanjana

---

**Master Bartending & Flair Bartending** - Learn from Beginner to Professional
