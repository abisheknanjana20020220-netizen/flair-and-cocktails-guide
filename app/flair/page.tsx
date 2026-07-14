'use client'

import { motion } from 'framer-motion'

const flairTricks = [
  {
    id: 1,
    name: 'Basic Bottle Flip',
    level: 'Beginner',
    description: 'Learn the fundamental bottle flip technique',
    steps: [
      'Hold bottle by neck with fingers',
      'Flick wrist upward sharply',
      'Catch bottle by neck on backhand',
    ],
  },
  {
    id: 2,
    name: 'Around the World',
    level: 'Intermediate',
    description: 'Master the circular bottle manipulation',
    steps: [
      'Start with bottle in right hand',
      'Rotate around back of hand',
      'Catch at starting position',
    ],
  },
  {
    id: 3,
    name: 'Double Flip',
    level: 'Intermediate',
    description: 'Execute two flips in succession',
    steps: [
      'Perform basic flip',
      'Catch and immediately flip again',
      'Land with control',
    ],
  },
  {
    id: 4,
    name: 'Bottle Pour',
    level: 'Beginner',
    description: 'Perfect the pouring technique',
    steps: [
      'Hold bottle at 45 degrees',
      'Pour smoothly from 6 inches above glass',
      'Stop pour cleanly',
    ],
  },
  {
    id: 5,
    name: 'Juggling Pattern',
    level: 'Advanced',
    description: 'Juggle multiple bottles simultaneously',
    steps: [
      'Start with two bottles',
      'Master timing and height',
      'Add third bottle for pattern',
    ],
  },
  {
    id: 6,
    name: 'Behind the Back Flip',
    level: 'Advanced',
    description: 'Flip bottle behind your back',
    steps: [
      'Swing arm behind back',
      'Execute controlled flip',
      'Catch in front with precision',
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Beginner':
      return 'bg-green-500/20 text-green-400'
    case 'Intermediate':
      return 'bg-yellow-500/20 text-yellow-400'
    case 'Advanced':
      return 'bg-red-500/20 text-red-400'
    default:
      return 'bg-secondary/20 text-secondary'
  }
}

export default function FlairPage() {
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
              Flair Tricks
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Learn impressive bottle manipulation techniques
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flairTricks.map((trick) => (
              <motion.div
                key={trick.id}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-secondary/20 rounded-lg p-6 hover:border-secondary/50 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-accent flex-1">{trick.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${getLevelColor(trick.level)}`}>
                    {trick.level}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{trick.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-secondary mb-2">Steps:</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-400 text-sm">
                    {trick.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
                <button className="btn-primary w-full">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
