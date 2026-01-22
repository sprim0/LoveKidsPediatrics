# Jackson Pediatrics Website

A modern, mobile-first pediatric practice website built with React and Vite.

## Features

- 📱 Mobile-first, fully responsive design
- 🎨 Playful yet professional boutique aesthetic
- ✨ Smooth animations and page transitions
- 📅 Multi-step appointment scheduling flow
- ♿ Accessible design with proper ARIA attributes

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation header
│   ├── Navbar.css
│   ├── Footer.jsx      # Site footer
│   ├── Footer.css
│   ├── ScheduleModal.jsx # Appointment booking flow
│   ├── ScheduleModal.css
│   ├── PageTransition.jsx
│   └── PageTransition.css
├── pages/              # Page components
│   ├── Home.jsx
│   └── Home.css
├── styles/             # Global styles
│   ├── variables.css   # Design tokens (colors, spacing, etc.)
│   ├── animations.css  # Animation keyframes & utilities
│   └── global.css      # Base styles & resets
├── App.jsx             # Main app component
├── App.css
└── index.jsx           # Entry point
```

## Design System

### Colors
- **Primary (Sage Green):** Trust, calm, growth
- **Secondary (Coral):** Warmth, care, joy  
- **Accent (Sky Blue):** Playfulness, clarity
- **Warm (Gold):** Happiness, optimism

### Typography
- **Display:** Playfair Display (elegant serif)
- **Body:** DM Sans (clean, readable)

### Spacing
Uses an 8px base grid with CSS custom properties.

## Deployment

Built for Netlify deployment via GitHub:

1. Push to GitHub repository
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Pages

1. **Home** - Hero, services overview, why choose us, contact
2. **About Us** - Dr. profile, staff, mission (Phase 2)
3. **Office Info** - Hours, policies, payment (Phase 2)
4. **Forms** - Downloadable PDF forms (Phase 2)
5. **Resources** - Insurance, vaccinations, links (Phase 2)

## License

Private client project.
