'use client'

import { motion } from 'framer-motion'
import { FiDownload, FiBook, FiVideo } from 'react-icons/fi'

const resources = [
  {
    id: 1,
    title: 'Bartender Handbook PDF',
    description: 'Comprehensive guide covering all essential bartending techniques',
    icon: FiDownload,
    type: 'PDF',
  },
  {
    id: 2,
    title: 'Cocktail Ingredient Guide',
    description: 'Detailed information about spirits, liqueurs, and mixers',
    icon: FiBook,
    type: 'Guide',
  },
  {
    id: 3,
    title: 'Video Tutorial Series',
    description: 'Step-by-step video tutorials for all techniques',
    icon: FiVideo,
    type: 'Videos',
  },
  {
    id: 4,
    title: 'Recipe Collection',
    description: '500+ cocktail recipes organized by category',
    icon: FiBook,
    type: 'Guide',
  },
  {
    id: 5,
    title: 'Technique Checklist',
    description: 'Downloadable checklist for mastering flair techniques',
    icon: FiDownload,
    type: 'PDF',
  },
  {
    id: 6,
    title: 'Industry Standards',
    description: 'Learn professional bartending standards and practices',
    icon: FiBook,
    type: 'Guide',
  },
]

export default function ResourcesPage() {
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
              Resources
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Access helpful materials and guides for your bartending journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <motion.div
                  key={resource.id}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-secondary/20 rounded-lg p-6 hover:border-secondary/50 transition"
                >
                  <Icon className="text-secondary text-4xl mb-4" />
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-bold mb-3">
                    {resource.type}
                  </span>
                  <h3 className="text-xl font-bold text-accent mb-2">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <button className="btn-primary w-full">
                    Access Resource
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
