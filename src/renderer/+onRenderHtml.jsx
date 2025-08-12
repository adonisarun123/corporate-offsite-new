// src/renderer/+onRenderHtml.jsx
import React from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'

export { onRenderHtml }

async function onRenderHtml(pageContext) {
  const { Page, pageProps, urlPathname } = pageContext

  const helmetContext = {}
  
  const pageHtml = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={urlPathname}>
          <Page {...pageProps} />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  )

  const { helmet } = helmetContext

  // Extract head tags from helmet
  const headTags = [
    helmet?.title?.toString() || '',
    helmet?.meta?.toString() || '',
    helmet?.link?.toString() || '',
    helmet?.script?.toString() || '',
  ].filter(Boolean).join('\n')

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(headTags)}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add custom props to pageContext for client-side hydration
    }
  }
}
