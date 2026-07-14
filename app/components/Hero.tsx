'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-black to-black overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 h-screen flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-8">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-accent"
            variants={itemVariants}
          >
            Master Bartending &
            <span className="block gradient-text">Flair Bartending</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Learn from Beginner to Professional. Become an Expert Bartender with Our Premium Learning Platform.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <Link href="/courses" className="btn-primary">
              Start Learning
            </Link>
            <Link href="/cocktails" className="btn-secondary">
              Explore Cocktails
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
