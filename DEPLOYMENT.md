# Deployment Guide — CVLens

To deploy CVLens to production, follow these steps to ensure maximum performance and visibility.

## 🚀 Easy Deployment (Vercel)

1. **Push to GitHub**: Create a repository and push your code.
2. **Connect to Vercel**: Import the project and select "Vite" as the framework preset.
3. **Environment Variables**: Not needed for this static version.
4. **Build & Deploy**: Click Deploy. Vercel automatically handles the build command (`npm run build`) and output directory (`dist`).

## 🛠️ Build Optimizations Included
- **Asset Hashing**: Vite automatically adds hashes to filenames for cache busting.
- **Tree Shaking**: Unused Tailwind CSS classes are stripped during the build process.
- **Image Optimization**: Meta tags and optimized fonts ensure fast LCP (Largest Contentful Paint).

## 🌍 SEO & Meta Checklist
- [x] Title tags properly set in `index.html`.
- [x] Meta description added.
- [x] OpenGraph tags (recommended for social sharing).
- [x] Canonical URL.

## ⚠️ Common Deployment Mistakes to Avoid
1. **Missing Viewport Tag**: Ensures mobile responsiveness. (Fixed in our `index.html`).
2. **Not Handling Single Page App (SPA) Routing**: If you add routing later, ensure your host redirects all requests to `index.html` (e.g., `_redirects` file for Netlify).
3. **Large Image Assets**: Always use compressed formats (WebP/SVG) for logos and icons.
4. **Ignoring Lighthouse Scores**: Run a Lighthouse audit before shipping to catch accessibility and performance regressions.

## 📈 Lighthouse Best Practices
- **Accessibility**: All buttons have descriptive labels.
- **Performance**: Tailwind JIT ensures minimal CSS bundle size.
- **Best Practices**: Current setup uses modern ES6+ and Vite's strict defaults.
