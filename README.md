# Daily Orb

A mystical, mobile-first web app that delivers daily magical insights, quotes, and lucky charms. Built with Next.js 15, TypeScript, TailwindCSS, and PrimeReact (Lara Green theme).

## Features

- Floating mystical orb animation with click-to-reveal functionality
- Daily quotes, lucky color, and number
- Personalized zodiac readings with localStorage persistence
- Archive of past orbs with timeline view
- PrimeReact themed UI with mobile-first design

## Tech Stack

- Next.js 15.3.3+
- TypeScript
- TailwindCSS
- PrimeReact, PrimeFlex, PrimeIcons

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/                    # Next.js 15 App Router pages
│   ├── layout.tsx         # Root layout with PrimeReact provider
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles and animations
│   ├── about/             # About page
│   ├── archive/           # Archive page
│   └── your-sign/         # Zodiac sign page
├── components/            # Reusable UI components
│   ├── common/            # Shared components (Navbar, SpeedDial)
│   ├── features/          # Feature-specific components
│   └── index.ts           # Clean exports for @/components imports
├── lib/                   # Utility libraries
│   └── providers/         # PrimeReact providers and theme setup
└── hooks/                 # Custom hooks and data logic (coming soon)
```

## Component Architecture

- **Orb**: Animated floating orb with CSS keyframes
- **QuoteCard**: Displays quotes, lucky colors, and numbers
- **SignPicker**: Zodiac selection with localStorage persistence
- **DailyOrbDialog**: Modal dialog for orb revelations
- **ArchiveTimeline**: Timeline view of past orbs
- **Navbar/SpeedDial**: Navigation components

## License

MIT
