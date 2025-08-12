// CTA Actions Utility
// This file handles all Call-to-Action button functionality

// Contact information
export const CONTACT_INFO = {
  whatsapp: '+919876543210',
  phone: '+919876543210',
  email: 'hello@corporate-offsite.com',
  emergencyWhatsapp: '+919876500001'
}

// WhatsApp CTA Actions
export const whatsappActions = {
  // General inquiry
  general: () => {
    const message = "Hi! I'm interested in planning a corporate offsite. Can you help me with more details?"
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  },
  
  // Quote request
  quote: (context = '') => {
    const message = `Hi! I'd like to get a quote for a corporate offsite${context ? ` for ${context}` : ''}. Can you provide pricing and availability?`
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  },
  
  // Proposal request
  proposal: (packageName = '') => {
    const message = `Hi! I'm interested in getting a custom proposal${packageName ? ` for the ${packageName}` : ''}. Can you create a detailed proposal for our team?`
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  },
  
  // Emergency contact
  emergency: () => {
    const message = "Emergency support needed for our ongoing offsite. Please assist immediately."
    const url = `https://wa.me/${CONTACT_INFO.emergencyWhatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  },
  
  // Planner contact
  planner: () => {
    const message = "Hi! I'd like to speak with an offsite planner to discuss our requirements in detail."
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }
}

// Phone CTA Actions
export const phoneActions = {
  // General call
  general: () => {
    window.open(`tel:${CONTACT_INFO.phone}`, '_self')
  },
  
  // Schedule callback
  scheduleCall: () => {
    // Open Calendly or similar scheduling tool
    const message = `Hi! I'd like to schedule a call to discuss our corporate offsite requirements. When would be a good time?`
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }
}

// Email CTA Actions
export const emailActions = {
  // General inquiry
  general: () => {
    const subject = "Corporate Offsite Inquiry"
    const body = "Hi,\n\nI'm interested in planning a corporate offsite for our team. Could you please provide more information about your services and packages?\n\nThank you!"
    window.open(`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self')
  },
  
  // Quote request
  quote: (context = '') => {
    const subject = `Quote Request${context ? ` - ${context}` : ''}`
    const body = `Hi,\n\nI'd like to request a quote for a corporate offsite${context ? ` for ${context}` : ''}. Please provide pricing and package details.\n\nThank you!`
    window.open(`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self')
  }
}

// Form submission actions
export const formActions = {
  // Handle contact form submission
  handleContactForm: async (formData) => {
    try {
      // In a real app, you would send this to your backend
      console.log('Contact form submitted:', formData)
      
      // For now, simulate success and show confirmation
      alert('Thank you for your inquiry! We will get back to you within 24 hours.')
      
      // Optional: Also trigger WhatsApp message
      const message = `New contact form submission from ${formData.name} (${formData.email}). Inquiry: ${formData.requirements}`
      // In production, you'd send this to your team's WhatsApp
      
      return { success: true }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Sorry, there was an error submitting your form. Please try WhatsApp or email instead.')
      return { success: false, error }
    }
  },
  
  // Handle venue finder form
  handleVenueFinder: (criteria) => {
    // For now, trigger WhatsApp with the search criteria
    const message = `Hi! I'm looking for venues with the following criteria:
• Location: ${criteria.location}
• Team Size: ${criteria.teamSize}
• Budget: ${criteria.budget}

Can you suggest some suitable venues and provide quotes?`
    
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    
    // Optional: Also navigate to venues page
    // window.location.href = `/venues?location=${criteria.location}&teamSize=${criteria.teamSize}&budget=${criteria.budget}`
  }
}

// Utility functions
export const openExternalLink = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const downloadFile = (url, filename) => {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Navigation actions
export const navigationActions = {
  goToContact: () => {
    window.location.href = '/contact'
  },
  
  goToPackages: () => {
    window.location.href = '/packages'
  },
  
  goToVenues: () => {
    window.location.href = '/venues'
  },
  
  goToAbout: () => {
    window.location.href = '/about'
  }
}

// Success tracking (for analytics)
export const trackCTAClick = (action, context = '') => {
  // In production, integrate with Google Analytics, Mixpanel, etc.
  console.log(`CTA clicked: ${action}`, { context, timestamp: new Date() })
  
  // Example: Google Analytics event
  // gtag('event', 'cta_click', {
  //   event_category: 'engagement',
  //   event_label: action,
  //   context: context
  // })
}
