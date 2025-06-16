"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/for-influencers", label: "For Influencers" },
    { href: "/for-brands", label: "For Brands" },
    { href: "/services", label: "Services" },
    { href: "/podcast", label: "Podcast" },
    { href: "/about", label: "About" },
  ]

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 relative z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-blue-600">
              Inflency
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Auth Buttons - SIGNIN & JOIN US */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://dashboard.inflency.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Login
              </a>
              <a
                href="https://dashboard.inflency.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Sign up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="https://dashboard.inflency.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 px-4 text-gray-700 border border-gray-300 rounded-md"
                >
                  Login
                </a>
                <a
                  href="https://dashboard.inflency.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
