'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic
  }

  return (
    <div className="min-h-screen bg-black pt-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-gradient-to-br from-gray-900 to-black border border-secondary/30 rounded-lg p-8">
          <h1 className="text-3xl font-bold gradient-text mb-2 text-center">
            Create Account
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Join our bartending community
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-secondary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-secondary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-black border border-secondary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-black border border-secondary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition"
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full mt-6">
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-secondary hover:text-yellow-400 transition">
              Sign in
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
