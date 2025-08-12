# React + Vite: SEO-Ready SSR/SSG Setup (Corrected & Production-Safe)

This guide corrects and completes your snippets into a working, modern stack that supports **SSR and SSG**, clean **SEO**, **sitemap/robots**, and **bundle analysis** — all with **Vite + React**.

> **Why a correction?**  
> `vite-ssg` is Vue-only. For React, use **Vike** (formerly `vite-plugin-ssr`) to do SSR and SSG cleanly.

---

## 1) Install Dependencies

```bash
# Core
npm i react react-dom react-router-dom

# Vite + React + Vike (SSR/SSG)
npm i -D vite @vitejs/plugin-react vike

# SEO
npm i react-helmet-async

# Sitemap + robots
npm i -D sitemap

# Bundle analyzer (visualizer)
npm i -D rollup-plugin-visualizer

# HTML plugin (optional, for meta & minify)
npm i -D vite-plugin-html
```

---

## 2) `vite.config.ts` (or `.js`)

A lean Vite config using React, Vike (SSR/SSG), HTML minification, and bundle visualization.  
We’ll generate the sitemap via a separate script (Section 7) to keep things portable and explicit.

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { visualizer } from 'rollup-plugin-visualizer';

// NOTE: Vike integrates through its file-based conventions; no plugin import needed here.
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Default Title',
          description: 'Default Description',
        },
      },
    }),
    // Open the generated visualization after build: dist/stats.html
    visualizer({
      filename: 'dist/stats.html',
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  ssr: {
    // Add externalizations if needed; Vike handles SSR entry/manifest.
    noExternal: [],
  },
});
```

---

## 3) Project Structure (Vike)

Vike uses file-based routing with special page files. A minimal setup:

```
/src
  /pages
    /about
      +Page.jsx
    /index
      +Page.jsx
  /renderer
    /app
      _default.page.client.jsx
      _default.page.server.jsx
      _default.document.jsx
  /components
    Seo.jsx
public/
  robots.txt
scripts/
  generate-sitemap.mjs
vike.config.ts
```

---

## 4) Vike Config

```ts
// vike.config.ts
import type { Config } from 'vike/types';

export default {
  // Choose 'HTML' for SSG at build-time; switch to 'onRenderHtml'/'onRenderClient' for SSR hybrid as needed.
  prerender: true, // enables SSG for all discoverable routes
  passToClient: ['pageProps'],
} satisfies Config;
```

> **Notes**
> - **SSG**: `prerender: true` will statically generate routes discovered from your `/pages/*/+Page.jsx`.
> - **SSR**: You can deploy with SSR by using a server adapter; Vike supports both modes.

---

## 5) Page Files

### `src/pages/index/+Page.jsx`
```jsx
import Seo from '../../components/Seo';

export default function Page() {
  return (
    <>
      <Seo
        title="Home Page Title"
        description="A detailed description of the Home page."
        canonical="https://yourdomain.com/"
        image="https://yourdomain.com/og-default.jpg"
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Your Site',
          url: 'https://yourdomain.com/',
        }}
      />
      <h1>Welcome to My SEO-Optimized React + Vite + Vike App</h1>
    </>
  );
}
```

### `src/pages/about/+Page.jsx`
```jsx
import Seo from '../../components/Seo';

export default function Page() {
  return (
    <>
      <Seo
        title="About"
        description="Learn more about our company."
        canonical="https://yourdomain.com/about"
        image="https://yourdomain.com/og-about.jpg"
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About',
          url: 'https://yourdomain.com/about',
        }}
      />
      <h1>About Us</h1>
    </>
  );
}
```

---

## 6) App Renderers (Vike + HelmetProvider)

Vike needs client/server renderers. We also add `HelmetProvider` once at the app root so `Seo.jsx` works.

### `src/renderer/app/_default.page.client.jsx`
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

export default function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const root = document.getElementById('root');

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HelmetProvider>
        <Page {...pageProps} />
      </HelmetProvider>
    </React.StrictMode>
  );
}
```

### `src/renderer/app/_default.page.server.jsx`
```jsx
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;

  const helmetContext = {};
  const pageHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <Page {...pageProps} />
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const documentProps = {
    headTags: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
    ].join('\n'),
  };

  return {
    documentHtml: pageHtml,
    pageContext: { documentProps },
  };
}
```

### `src/renderer/app/_default.document.jsx`
```jsx
export { Document };

function Document({ children, pageContext }) {
  const headTags = pageContext?.documentProps?.headTags ?? '';
  return (
    <html lang="en">
      <head dangerouslySetInnerHTML={{ __html: headTags }} />
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
```

---

## 7) `Seo.jsx` (Dynamic SEO Component)

```jsx
// src/components/Seo.jsx
import { Helmet } from 'react-helmet-async';

export default function Seo({
  title = 'Default Title',
  description = 'Default Description',
  canonical,
  image,
  schemaMarkup,
}) {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Structured Data */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}
```

---

## 8) `robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml

User-agent: Googlebot
Disallow: /private
```

---

## 9) Automatic Sitemap Generation

### `scripts/generate-sitemap.mjs`
```js
import { createWriteStream } from 'node:fs';
import { resolve } from 'node:path';
import { SitemapStream } from 'sitemap';

const BASE_URL = 'https://yourdomain.com';

const staticRoutes = ['/', '/about'];

async function dynamicRoutes() {
  return [];
}

async function run() {
  const routes = [...staticRoutes, ...(await dynamicRoutes())];

  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writePath = resolve(process.cwd(), 'dist', 'sitemap.xml');
  const writeStream = createWriteStream(writePath);
  sitemap.pipe(writeStream);

  routes.forEach((url) => {
    sitemap.write({
      url,
      changefreq: 'weekly',
      priority: url === '/' ? 1.0 : 0.7,
    });
  });

  sitemap.end();

  await new Promise((res, rej) => {
    writeStream.on('finish', res);
    writeStream.on('error', rej);
  });

  console.log(`✅ Generated ${writePath}`);
}

run().catch((e) => {
  console.error('Sitemap generation failed:', e);
  process.exit(1);
});
```

---

## 10) Routing Notes

- With Vike, **file paths** define routes:
  - `src/pages/index/+Page.jsx` → `/`
  - `src/pages/about/+Page.jsx` → `/about`

---

## 11) Performance Tips

- **Code-split** big libs via `manualChunks`.
- Use **`React.lazy`** for heavy components.
- Optimize images.
- Use CDN caching.

---

## 12) `package.json` Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && npm run prerender && npm run sitemap",
    "prerender": "vike prerender",
    "preview": "vite preview",
    "sitemap": "node scripts/generate-sitemap.mjs",
    "analyze": "vite build && open dist/stats.html"
  }
}
```

---

## 13) Optional Router in Client Renderer

```jsx
// src/renderer/app/_default.page.client.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

export default function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const root = document.getElementById('root');

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Page {...pageProps} />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
```

---

## 14) Summary of Key Corrections

- Replaced **Vue-only** `vite-ssg` with **Vike** for React SSR/SSG.  
- Added **`HelmetProvider`** for SEO support.  
- Moved sitemap creation to **Node script**.  
- Added **bundle analysis** and **manualChunks**.

---

## 15) Quick Start

```bash
npm run dev
npm run build
npm run preview
```

Visit:
- App: `http://localhost:4173`
- Analyzer: `dist/stats.html`
- Sitemap: `dist/sitemap.xml`
