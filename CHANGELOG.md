# Changelog

## [0.1.0] - Initial Setup

- Project bootstrapped with Next.js 15 (App Router, TypeScript, TailwindCSS)
- Prettier config added
- PrimeReact, PrimeFlex, PrimeIcons dependencies installed
- Initial project structure ready

## [0.2.0] - Core Components & Architecture

- PrimeReact provider setup with Lara Green theme
- Component architecture established with common/ and features/ folders
- Created reusable components:
  - Navbar (PrimeReact Menubar)
  - SpeedDial (PrimeReact SpeedDial)
  - Orb (animated floating orb with CSS keyframes)
  - QuoteCard (PrimeReact Card for displaying quotes, colors, numbers)
  - SignPicker (PrimeReact Dropdown for zodiac selection with localStorage)
  - DailyOrbDialog (PrimeReact Dialog wrapper for orb data)
  - ArchiveTimeline (PrimeReact Timeline for past orbs)
- Added custom CSS animations (float, glow) and responsive styles
- Clean component exports via index.ts for @/components imports
- Mobile-first responsive design throughout

## [0.2.1] - Folder Structure Fix

- Reorganized project structure to follow Next.js 15 App Router conventions
- Moved app/, lib/, and components/ to src/ directory
- Updated tsconfig.json paths configuration for @/\* imports
- Fixed import paths to reflect new structure
- Project builds successfully with correct Next.js 15 structure

## [0.3.0] - Business Logic & Data Layer

- Moved providers outside of lib and removed lib folder
- Created comprehensive folder structure:
  - `src/providers/` - PrimeReact providers
  - `src/constants/` - Application constants (quotes, colors, zodiac)
  - `src/hooks/` - Custom hooks (useDailyOrb, useArchive)
  - `src/types/` - TypeScript type definitions
  - `src/utils/` - Utility functions (date, storage)
- Implemented business logic:
  - Daily orb data generation with consistent daily results
  - Zodiac forecasts and personalized readings
  - Archive management with localStorage persistence
  - Date utilities for formatting and seeding
  - Storage utilities with error handling
- Added 20 mystical quotes, 15 lucky colors, and 12 zodiac forecasts
- Consistent daily data generation based on date seeding
- Type-safe localStorage operations with error handling
