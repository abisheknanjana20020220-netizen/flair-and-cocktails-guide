'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">🍸 Abishek</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-secondary transition">Home</Link>
            <Link href="/courses" className="hover:text-secondary transition">Courses</Link>
            <Link href="/cocktails" className="hover:text-secondary transition">Cocktails</Link>
            <Link href="/flair" className="hover:text-secondary transition">Flair Tricks</Link>
            <Link href="/resources" className="hover:text-secondary transition">Resources</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login" className="btn-secondary">Login</Link>
            <Link href="/signup" className="btn-primary">Sign Up</Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-secondary">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block hover:text-secondary transition py-2">Home</Link>
            <Link href="/courses" className="block hover:text-secondary transition py-2">Courses</Link>
            <Link href="/cocktails" className="block hover:text-secondary transition py-2">Cocktails</Link>
            <Link href="/flair" className="block hover:text-secondary transition py-2">Flair Tricks</Link>
            <Link href="/resources" className="block hover:text-secondary transition py-2">Resources</Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link href="/login" className="btn-secondary">Login</Link>
              <Link href="/signup" className="btn-primary">Sign Up</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
