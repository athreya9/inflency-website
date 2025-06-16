// Analytics configuration and utilities with secure token handling
export interface AnalyticsEvent {
  name: string
  properties?: Record<string, any>
}

// Safe window check
const isClient = typeof window !== "undefined"

// Track if Mixpanel is initialized
let mixpanelInitialized = false

export const analytics = {
  // Initialize analytics (called automatically)
  init: async () => {
    if (!isClient || mixpanelInitialized) return

    try {
      // Mixpanel will be initialized via the server endpoint in layout.tsx
      // This is just a placeholder for any additional client-side setup
      mixpanelInitialized = true
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.warn("Analytics initialization error:", error)
      }
    }
  },

  // Track authentication events
  trackSignin: (source: "desktop" | "mobile", page: string) => {
    if (!isClient) return
    trackEvent("signin_button_clicked", {
      label: "Header Signin",
      source,
      destination: "dashboard.inflency.com/login",
      timestamp: new Date().toISOString(),
      page,
      category: "Authentication",
    })
  },

  trackJoinUs: (source: "desktop" | "mobile", page: string) => {
    if (!isClient) return
    trackEvent("join_us_button_clicked", {
      label: "Header Join Us",
      source,
      destination: "dashboard.inflency.com/register",
      timestamp: new Date().toISOString(),
      page,
      category: "Authentication",
    })
  },

  // Track navigation events
  trackNavigation: (label: string, source: string, destination: string, page: string) => {
    if (!isClient) return
    trackEvent("navigation_link_clicked", {
      label,
      source,
      destination,
      page,
      category: "Navigation",
    })
  },

  // Track mobile menu usage
  trackMobileMenu: (action: "open" | "close", page: string) => {
    if (!isClient) return
    trackEvent("mobile_menu_toggled", {
      label: "Mobile Menu",
      action,
      page,
      category: "UI Interaction",
    })
  },

  // Generic event tracking
  track: (eventName: string, properties?: Record<string, any>) => {
    if (!isClient) return
    trackEvent(eventName, properties)
  },
}

// Core tracking function with comprehensive error handling
function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (!isClient) return

  try {
    // Google Analytics 4 (gtag) - with safety checks
    if (window.gtag && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        event_category: properties?.category || "General",
        event_label: properties?.label || "",
        custom_source: properties?.source,
        custom_destination: properties?.destination,
        custom_page: properties?.page,
        ...properties,
      })
    }

    // Google Analytics Universal (ga) - Legacy support with safety checks
    if (window.ga && typeof window.ga === "function") {
      window.ga(
        "send",
        "event",
        properties?.category || "General",
        eventName,
        properties?.label || "",
        properties?.value,
      )
    }

    // Mixpanel with safety checks (token loaded securely via server)
    if (window.mixpanel && typeof window.mixpanel.track === "function") {
      window.mixpanel.track(eventName, {
        ...properties,
        timestamp: new Date().toISOString(),
      })
    }

    // Segment with safety checks
    if (window.analytics && typeof window.analytics.track === "function") {
      window.analytics.track(eventName, properties)
    }

    // Facebook Pixel with safety checks
    if (window.fbq && typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, properties)
    }

    // Development logging
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Analytics Event:", eventName, properties)
    }

    // Custom analytics endpoint with proper error handling
    if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
      fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: eventName,
          properties: {
            ...properties,
            timestamp: new Date().toISOString(),
            user_agent: navigator?.userAgent || "unknown",
            referrer: document?.referrer || "",
            url: window.location?.href || "",
          },
        }),
      }).catch((error) => {
        // Silent fail for analytics
        if (process.env.NODE_ENV === "development") {
          console.warn("Custom analytics error:", error)
        }
      })
    }
  } catch (error) {
    // Silent fail for analytics in production, log in development
    if (process.env.NODE_ENV === "development") {
      console.warn("Analytics tracking error:", error)
    }
  }
}

// Page view tracking with error handling
export const trackPageView = (page: string) => {
  if (!isClient) return

  try {
    // Google Analytics 4
    if (window.gtag && typeof window.gtag === "function" && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: document?.title || "",
        page_location: window.location?.href || "",
        page_path: page,
      })
    }

    // Mixpanel
    if (window.mixpanel && typeof window.mixpanel.track === "function") {
      window.mixpanel.track("Page View", {
        page,
        title: document?.title || "",
        url: window.location?.href || "",
      })
    }

    // Development logging
    if (process.env.NODE_ENV === "development") {
      console.log("📄 Page View:", page)
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Page view tracking error:", error)
    }
  }
}

// Type declarations for window objects
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    ga?: (...args: any[]) => void
    mixpanel?: {
      track: (event: string, properties?: any) => void
      init: (token: string, config?: any) => void
      [key: string]: any
    }
    analytics?: {
      track: (event: string, properties?: any) => void
      [key: string]: any
    }
    fbq?: (...args: any[]) => void
  }
}
