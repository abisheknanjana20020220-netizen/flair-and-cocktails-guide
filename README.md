# Abishek Flair Bartender Guide

🍸 Master Bartending & Flair Bartending Learning Platform

## Overview

A comprehensive web-based learning platform for bartending and flair bartending. Built with Next.js, React, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- 📚 **Comprehensive Courses**: From beginner to advanced levels
- 🎥 **Video Tutorials**: Step-by-step guides for techniques and cocktails
- 🎭 **Flair Techniques**: Learn impressive bottle manipulation tricks
- 🍹 **Cocktail Recipes**: 500+ cocktail recipes
- 👤 **User Authentication**: Sign up and login system
- 📱 **Responsive Design**: Works on all devices
- ✨ **Smooth Animations**: Beautiful Framer Motion animations
- 🌓 **Dark Theme**: Easy on the eyes

## Pages

- **Home** (`/`) - Landing page with hero section and featured courses
- **Courses** (`/courses`) - Browse all available courses
- **Cocktails** (`/cocktails`) - Explore cocktail recipes
- **Flair** (`/flair`) - Learn flair bartending tricks
- **Resources** (`/resources`) - Download guides and materials
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - Create a new account
- **Contact** (`/contact`) - Get in touch with us
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms and conditions

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abisheknanjana20020220-netizen/flair-and-cocktails-guide.git
cd flair-and-cocktails-guide
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
flair-and-cocktails-guide/
├── app/
│   ├── components/          # Reusable React components
│   ├── api/                 # API routes
│   ├── courses/             # Courses page
│   ├── cocktails/           # Cocktails page
│   ├── flair/               # Flair techniques page
│   ├── resources/           # Resources page
│   ├── login/               # Login page
│   ├── signup/              # Signup page
│   ├── contact/             # Contact page
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms and conditions
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── lib/                     # Utility functions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## API Endpoints

- `GET /api/courses` - Get all courses
- `GET /api/courses/[id]` - Get course details
- `GET /api/cocktails` - Get all cocktails
- `GET /api/flair` - Get flair tricks
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `POST /api/contact` - Send contact message
- `GET /api/health` - API health check

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```ts
colors: {
  primary: '#000000',
  secondary: '#D4AF37',
  accent: '#ffffff',
}
```

### Fonts

Update `app/globals.css` to change fonts.

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is open source and available under the MIT License.

## Contact

- Email: contact@abishekflair.com
- Phone: +1 (555) 123-4567
- GitHub: [@abisheknanjana20020220-netizen](https://github.com/abisheknanjana20020220-netizen)

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Made with ❤️ by Abishek Kumar**
