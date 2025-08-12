# SEO Deployment Instructions

## The Problem
Your hosting platform is serving the default `dist/index.html` for all routes instead of the prerendered SEO-optimized files in `dist-prerender/`.

## Solution Options

### Option 1: Copy Prerendered Files to Dist (Recommended)
```bash
# After building, copy prerendered files to replace the default dist
npm run build
npm run prerender
cp -r dist-prerender/* dist/
```

### Option 2: Deploy dist-prerender as Primary
Deploy the `dist-prerender` folder directly instead of `dist`.

### Option 3: Server Configuration
Configure your hosting platform to serve prerendered files first, then fallback to SPA.

## Quick Fix Commands

1. **Build with SEO files:**
```bash
npm run build:seo-deploy
```

2. **Manual copy (if needed):**
```bash
cp -r dist-prerender/* dist/
```

3. **Deploy the `dist` folder**

## Verification
After deployment, check:
- `/destinations/bangalore/venues/itc-windsor-bangalore` should show venue-specific title
- View page source should show unique meta tags for each page
