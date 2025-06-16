"use client"

import { useEffect } from "react"

export default function SignupRedirect() {
  useEffect(() => {
    // Simple redirect without complex logic
    window.location.href = "https://dashboard.inflency.com/register"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to sign up...</p>
        <p className="text-sm text-gray-500 mt-2">
          If you're not redirected,{" "}
          <a href="https://dashboard.inflency.com/register" className="text-blue-600 hover:underline">
            click here
          </a>
        </p>
      </div>
    </div>
  )
}
