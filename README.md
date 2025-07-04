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

### Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

The app includes `netlify.toml` configuration for optimal deployment.

## Project Structure

```
src/
├── app/                    # Next.js 15 App Router pages
│   ├── layout.tsx         # Root layout with PrimeReact provider
│   ├── page.tsx           # Home page with floating orb
│   ├── globals.css        # Global styles and animations
│   ├── about/             # About page
│   ├── archive/           # Archive page with timeline
│   └── your-sign/         # Zodiac sign page
├── components/            # Reusable UI components
│   ├── common/            # Shared components (Navbar, SpeedDial)
│   ├── features/          # Feature-specific components
│   └── index.ts           # Clean exports for @/components imports
├── providers/             # PrimeReact providers and theme setup
├── constants/             # Application constants
│   ├── quotes.ts          # Daily mystical quotes
│   ├── colors.ts          # Lucky colors
│   └── zodiac.ts          # Zodiac signs and forecasts
├── hooks/                 # Custom hooks and business logic
│   ├── useDailyOrb.ts     # Daily orb data generation
│   └── useArchive.ts      # Archive management
├── types/                 # TypeScript type definitions
│   └── index.ts           # All application types
└── utils/                 # Utility functions
    ├── date.ts            # Date formatting and utilities
    └── storage.ts         # localStorage operations
```

## Component Architecture

- **Orb**: Animated floating orb with CSS keyframes
- **QuoteCard**: Displays quotes, lucky colors, and numbers
- **SignPicker**: Zodiac selection with localStorage persistence
- **DailyOrbDialog**: Modal dialog for orb revelations
- **ArchiveTimeline**: Timeline view of past orbs
- **Navbar/SpeedDial**: Navigation components

## Business Logic

- **useDailyOrb**: Generates consistent daily data based on date
- **useArchive**: Manages archive of past orbs with localStorage
- **Constants**: Quotes, colors, and zodiac forecasts
- **Utilities**: Date formatting, storage operations, and helpers

## Key Features

- **Consistent Daily Data**: Same date always produces same results
- **Zodiac Integration**: Personalized forecasts for each sign
- **Archive System**: Persistent storage of past orbs
- **Mobile-First**: Responsive design optimized for all devices
- **Type Safety**: Full TypeScript coverage
- **Error Handling**: Robust localStorage operations

## License

MIT
