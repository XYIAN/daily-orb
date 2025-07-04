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
