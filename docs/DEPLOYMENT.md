# Deployment Guide

## Prerequisites
- Node.js 14+
- npm or yarn
- Git

## Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Output: dist/ directory
```

## Deployment Options

### GitHub Pages
```bash
npm run deploy:gh-pages
```

### Netlify
```bash
netlify deploy --prod --dir=dist
```

### Vercel
```bash
vercel --prod
```

### Self-Hosted
```bash
# Copy dist/ to web server
cp -r dist/* /var/www/html/
```

## Environment Variables

- `VITE_API_URL` - API endpoint
- `VITE_ANALYTICS_ID` - Analytics tracking
- `VITE_VERSION` - Build version

## Performance Optimization

1. Minify code
2. Compress assets
3. Enable gzip
4. Use CDN
5. Cache assets

## Monitoring

- Error tracking (Sentry)
- Performance monitoring (New Relic)
- Analytics (Google Analytics)
- Uptime monitoring (Pingdom)
