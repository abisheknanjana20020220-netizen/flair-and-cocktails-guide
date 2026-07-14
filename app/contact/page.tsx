'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle contact form submission
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-secondary/30 rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-black border border-secondary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-black border border-secondary/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-secondary/30 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-secondary font-bold mb-2">Email</h3>
                <p className="text-gray-400">contact@abishekflair.com</p>
              </div>
              <div>
                <h3 className="text-secondary font-bold mb-2">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-secondary font-bold mb-2">Address</h3>
                <p className="text-gray-400">Bartender's Guild, City</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
