"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
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
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Inflency
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons - SIGNIN & JOIN US */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://dashboard.inflency.com/login"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Signin
              </a>
              <Button asChild>
                <a href="https://dashboard.inflency.com/register">Join Us</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="https://dashboard.inflency.com/login"
                  className="block w-full text-center py-2 px-4 text-gray-700 border border-gray-300 rounded-md"
                >
                  Signin
                </a>
                <a
                  href="https://dashboard.inflency.com/register"
                  className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
