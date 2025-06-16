import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Only provide analytics config in production or when explicitly enabled
    const shouldProvideConfig = process.env.NODE_ENV === "production" || process.env.ENABLE_ANALYTICS === "true"

    if (!shouldProvideConfig) {
      return NextResponse.json({
        mixpanelToken: null,
        message: "Analytics disabled in development",
      })
    }

    // Return the Mixpanel token securely from server
    return NextResponse.json({
      mixpanelToken: process.env.MIXPANEL_TOKEN || null, // Note: No NEXT_PUBLIC_ prefix
    })
  } catch (error) {
    console.error("Analytics config error:", error)
    return NextResponse.json({
      mixpanelToken: null,
      error: "Failed to load analytics config",
    })
  }
}
