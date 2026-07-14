'use client'

import { motion } from 'framer-motion'
import { FiBook, FiVideo, FiAward, FiUsers } from 'react-icons/fi'

const features = [
  {
    icon: FiBook,
    title: 'Comprehensive Courses',
    description: 'Learn from beginner to professional level with structured courses',
  },
  {
    icon: FiVideo,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for every technique and cocktail',
  },
  {
    icon: FiAward,
    title: 'Certifications',
    description: 'Earn recognized certifications upon course completion',
  },
  {
    icon: FiUsers,
    title: 'Community',
    description: 'Connect with bartenders and share your progress',
  },
]

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to become a master bartender
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-secondary/20 rounded-lg p-6 hover:border-secondary/50 transition"
                variants={itemVariants}
              >
                <Icon className="text-secondary text-4xl mb-4" />
                <h3 className="text-xl font-bold text-accent mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
