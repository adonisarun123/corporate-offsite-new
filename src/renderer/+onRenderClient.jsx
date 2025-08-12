// src/renderer/+onRenderClient.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

export { onRenderClient }

async function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext
  const root = document.getElementById('root')

  if (!root) {
    throw new Error('DOM element #root not found')
  }

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Page {...pageProps} />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  )
}
