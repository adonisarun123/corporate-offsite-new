# Corporate-Offsite Website

A modern React website for Corporate-Offsite, a company specializing in corporate team offsites and retreats across India, Southeast Asia, and GCC regions.

## Features

- **Modern React App**: Built with React 18+ and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-page Navigation**: React Router for smooth navigation
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Component Library**: Reusable UI components
- **Professional Design**: Clean, corporate-friendly interface

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd corporate-offsite-new
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── ui/           # Base UI components (Button, Card, Badge)
│   ├── VenueCard.jsx
│   ├── ActivityCard.jsx
│   ├── PackageCard.jsx
│   └── TestimonialCard.jsx
├── pages/            # Page components
│   ├── AboutPage.jsx
│   ├── PackagesPage.jsx
│   ├── VenuesPage.jsx
│   └── ...
├── App.jsx          # Main app component
├── App.css          # Global styles
└── main.jsx         # Entry point
```

## Deployment

### Build for Production
```bash
npm run build
```

The build folder will contain optimized production files ready for deployment.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify

## Key Pages

- **Homepage**: Hero section, features, testimonials
- **About**: Company story, team, values
- **Packages**: Curated offsite packages with filtering
- **Venues**: Venue listings with search and filters
- **Activities**: Team building activities catalog
- **Destinations**: Featured locations across Asia
- **Blog**: Industry insights and guides
- **Case Studies**: Client success stories
- **Contact**: Contact forms and information

## Technology Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## License

All rights reserved. Corporate-Offsite © 2024
