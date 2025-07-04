# Deployment Guide

## Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Netlify Deployment

### Automatic Deployment

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18
3. Deploy!

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `.next` folder to Netlify
3. Configure redirects in `netlify.toml`

### Environment Variables

No environment variables required for this app.

### Build Configuration

The app uses static export for optimal Netlify performance:

- `output: 'export'` in `next.config.ts`
- Static generation for all pages
- Optimized for CDN delivery

## Features for Production

### Performance

- Static site generation
- Optimized bundle sizes
- Lazy loading for components
- CDN-ready assets

### SEO

- Meta tags for all pages
- Sitemap.xml included
- Open Graph tags
- Mobile-optimized

### Security

- Content Security Policy headers
- XSS protection
- Secure localStorage operations
- Input sanitization

## Troubleshooting

### Build Issues

- Ensure Node.js version 18+
- Clear `.next` folder and rebuild
- Check for TypeScript errors

### Deployment Issues

- Verify build command and publish directory
- Check Netlify build logs
- Ensure all dependencies are in `package.json`

### Local Issues

- Clear browser cache
- Check localStorage in browser dev tools
- Verify all imports are correct
