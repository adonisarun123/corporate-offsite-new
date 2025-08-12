import { useEffect } from 'react'

const DocumentHead = ({ title, description, keywords, image, url, structuredData }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return
      
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let metaTag = document.querySelector(selector)
      
      if (!metaTag) {
        metaTag = document.createElement('meta')
        if (property) {
          metaTag.setAttribute('property', name)
        } else {
          metaTag.setAttribute('name', name)
        }
        document.head.appendChild(metaTag)
      }
      
      metaTag.setAttribute('content', content)
    }

    // Update meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    
    // OpenGraph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', url, true)
    
    // Twitter tags
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)

    // Update structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"][data-dynamic]')
      
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script')
        structuredDataScript.type = 'application/ld+json'
        structuredDataScript.setAttribute('data-dynamic', 'true')
        document.head.appendChild(structuredDataScript)
      }
      
      structuredDataScript.textContent = JSON.stringify(structuredData)
    }

    // Cleanup function to remove dynamic structured data when component unmounts
    return () => {
      const dynamicScript = document.querySelector('script[type="application/ld+json"][data-dynamic]')
      if (dynamicScript) {
        dynamicScript.remove()
      }
    }
  }, [title, description, keywords, image, url, structuredData])

  return null // This component doesn't render anything
}

export default DocumentHead
