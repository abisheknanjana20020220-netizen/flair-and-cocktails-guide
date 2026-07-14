'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiClock, FiBarChart2 } from 'react-icons/fi'

interface CourseCardProps {
  id: string
  title: string
  description: string
  image?: string
  duration?: number
  level: string
  instructor?: string
}

export default function CourseCard({
  id,
  title,
  description,
  image,
  duration,
  level,
  instructor,
}: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400'
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'advanced':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-secondary/20 text-secondary'
    }
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-gray-900 to-black border border-secondary/20 rounded-lg overflow-hidden hover:border-secondary/50 transition"
    >
      {image && (
        <div className="h-48 bg-secondary/10 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-accent flex-1">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${getLevelColor(level)}`}>
            {level}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
          {duration && (
            <div className="flex items-center space-x-1">
              <FiClock size={16} />
              <span>{duration}h</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <FiBarChart2 size={16} />
            <span className="capitalize">{level}</span>
          </div>
        </div>
        {instructor && (
          <p className="text-gray-500 text-xs mb-4">by {instructor}</p>
        )}
        <Link href={`/course/${id}`} className="btn-primary w-full text-center block">
          Enroll Now
        </Link>
      </div>
    </motion.div>
  )
}
