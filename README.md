# LONGBRICK Website

Minimal logo site for longbrick.com. Built with Astro, deployed to Cloudflare Pages.

## Quick Start

```bash
npm install
npm run dev      # localhost:4321
npm run build    # output to dist/
npm run preview  # preview build
```

## Configuration

All site settings are in `src/config.js`:

```javascript
export const config = {
  // Basic site info
  siteName: 'LONGBRICK',
  siteDescription: 'LONGBRICK',
  siteUrl: 'https://longbrick.com',

  // Analytics (leave empty string to disable)
  googleAnalyticsId: 'G-XXXXXXXXXX',
  clarityProjectId: 'xxxxxxxxxx',
  cloudflareAnalyticsToken: 'xxxxxxxx',

  // Appearance
  backgroundColor: '#000000',
  textColor: '#ffffff',
  logoSize: 'normal', // 'normal' | 'large' | 'massive'

  // Animation
  fadeIn: true,
  fadeInDuration: 1.2,

  // Structured data
  enableStructuredData: true,
  organizationType: 'Organization',
};
```

### Logo Sizes

- **normal**: `min(92vw, 80vh)` - Good for most logos
- **large**: `min(95vw, 90vh)` - For logos that need more presence
- **massive**: `min(98vw, 95vh)` - Edge-to-edge, minimal padding

## File Structure

```
src/
├── config.js          # All site configuration
└── pages/
    ├── index.astro    # Main page
    └── 404.astro      # 404 page
public/
├── logo.svg           # Your logo (replace this)
├── favicon.ico        # Fallback favicon (optional)
├── og-image.png       # Social sharing image
├── robots.txt
└── llms.txt           # AI discoverability
```

## Logo Requirements (SVG)

For best results, your logo SVG should:

1. **Center content within viewBox** - Ensure artwork is centered, not offset
2. **Convert text to outlines** - Eliminates font dependency issues
3. **Use SVGO for optimization** - Reduces file size
4. **Use white/light colors** - Works well on dark backgrounds

### Troubleshooting Off-Center Logos

If your logo appears off-center:

1. Open the SVG in a vector editor (Illustrator, Figma, Inkscape)
2. Select all artwork and center it on the artboard
3. Adjust the viewBox to match the content bounds
4. Re-export with "Use Artboard" or equivalent option

### Optimization

Run your SVG through [SVGO](https://jakearchibald.github.io/svgomg/) with these settings:
- Remove metadata
- Remove comments
- Clean up IDs
- Remove empty containers

## Open Graph Image (og-image.png)

Create `public/og-image.png` for social media sharing:

- **Size**: 1200×630 pixels
- **Content**: Your logo centered on the background color
- **Format**: PNG (or JPG for photos)

This image appears when your site is shared on social media.

## Favicon

The site uses your SVG logo as the primary favicon. For browsers that don't support SVG favicons:

1. Create a 48×48 pixel `favicon.ico`
2. Place it in `public/favicon.ico`

Tools: [favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/)

## llms.txt

The `public/llms.txt` file helps AI assistants understand your site. Edit it with:

- Brief description of your organization
- Services offered
- Contact information
- Any notes for AI systems

Reference: [llmstxt.org](https://llmstxt.org)

## Deployment

### Cloudflare Pages

1. Connect your GitHub repo to Cloudflare Pages
2. Settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Astro

Push to GitHub and Cloudflare auto-deploys.

## Accessibility

The template includes:

- `prefers-reduced-motion` support - Disables animations for users who prefer reduced motion
- Semantic HTML structure
- Proper alt text from config
- High contrast default (white on black)

## Analytics

Three analytics options are supported (all optional):

1. **Google Analytics 4** - Full-featured analytics
2. **Microsoft Clarity** - Session recordings and heatmaps
3. **Cloudflare Web Analytics** - Privacy-focused, ~1KB beacon

Set any to empty string `''` in config to disable.
