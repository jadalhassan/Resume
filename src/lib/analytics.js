const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN

let initialized = false

function addScript(src, attrs = {}) {
  if (!src || document.querySelector(`script[src="${src}"]`)) return
  const script = document.createElement('script')
  script.src = src
  script.async = true
  Object.entries(attrs).forEach(([key, value]) => {
    script.setAttribute(key, String(value))
  })
  document.head.appendChild(script)
}

export function initAnalytics() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  if (GA_ID) {
    addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`)
    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID, {
      anonymize_ip: true,
      send_page_view: true,
    })
  }

  if (PLAUSIBLE_DOMAIN) {
    addScript('https://plausible.io/js/script.js', {
      'data-domain': PLAUSIBLE_DOMAIN,
      defer: 'defer',
    })
  }
}

export function trackEvent(name, props = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, props)
  }
  if (typeof window.plausible === 'function') {
    window.plausible(name, { props })
  }
}
