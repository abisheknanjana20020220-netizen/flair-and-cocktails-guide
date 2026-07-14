'use client'

import { motion } from 'framer-motion'
import CoursesGrid from '../components/CoursesGrid'

export default function CoursesPage() {
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
              All Courses
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from our comprehensive selection of bartending and flair courses
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CoursesGrid />
        </div>
      </section>
    </div>
  )
}
