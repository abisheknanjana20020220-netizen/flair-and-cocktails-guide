'use client'

import { motion } from 'framer-motion'
import { FiGlasses, FiDroplet } from 'react-icons/fi'

const cocktails = [
  {
    id: 1,
    name: 'Margarita',
    category: 'Classic',
    spirit: 'Tequila',
    description: 'A classic cocktail with tequila, lime juice, and triple sec',
    ingredients: ['Tequila', 'Triple Sec', 'Lime Juice', 'Salt'],
  },
  {
    id: 2,
    name: 'Mojito',
    category: 'Refreshing',
    spirit: 'Rum',
    description: 'A refreshing rum-based drink with mint and lime',
    ingredients: ['White Rum', 'Mint', 'Lime', 'Sugar', 'Soda Water'],
  },
  {
    id: 3,
    name: 'Cosmopolitan',
    category: 'Modern',
    spirit: 'Vodka',
    description: 'A stylish cocktail with vodka, cranberry, and lime',
    ingredients: ['Vodka', 'Cranberry Juice', 'Lime Juice', 'Triple Sec'],
  },
  {
    id: 4,
    name: 'Old Fashioned',
    category: 'Classic',
    spirit: 'Whiskey',
    description: 'A timeless drink featuring whiskey and bitters',
    ingredients: ['Whiskey', 'Bitters', 'Sugar', 'Water', 'Orange'],
  },
  {
    id: 5,
    name: 'Daiquiri',
    category: 'Classic',
    spirit: 'Rum',
    description: 'A simple yet elegant rum cocktail',
    ingredients: ['White Rum', 'Lime Juice', 'Simple Syrup'],
  },
  {
    id: 6,
    name: 'Piña Colada',
    category: 'Tropical',
    spirit: 'Rum',
    description: 'A creamy tropical drink with rum and coconut',
    ingredients: ['White Rum', 'Coconut Cream', 'Pineapple Juice'],
  },
]

export default function CocktailsPage() {
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
              Cocktail Recipes
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Master the art of creating delicious cocktails
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cocktails.map((cocktail) => (
              <motion.div
                key={cocktail.id}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-secondary/20 rounded-lg p-6 hover:border-secondary/50 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <FiGlasses className="text-secondary text-3xl" />
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-bold">
                    {cocktail.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-accent mb-2">{cocktail.name}</h3>
                <div className="flex items-center space-x-2 text-gray-400 mb-3">
                  <FiDroplet size={16} className="text-secondary" />
                  <span>{cocktail.spirit}</span>
                </div>
                <p className="text-gray-400 mb-4">{cocktail.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-secondary mb-2">Ingredients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cocktail.ingredients.map((ingredient, idx) => (
                      <span key={idx} className="text-xs bg-secondary/10 text-gray-300 px-2 py-1 rounded">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="btn-primary w-full">
                  View Recipe
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
