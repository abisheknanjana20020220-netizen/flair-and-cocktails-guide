'use client'

import { motion } from 'framer-motion'
import CourseCard from './CourseCard'

const courses = [
  {
    id: '1',
    title: 'Bartending Basics',
    description: 'Learn essential bartending skills, tools, and techniques from scratch',
    level: 'beginner',
    duration: 10,
    instructor: 'Abishek Kumar',
  },
  {
    id: '2',
    title: 'Classic Cocktails Mastery',
    description: 'Master the preparation of classic cocktails used worldwide',
    level: 'intermediate',
    duration: 15,
    instructor: 'Abishek Kumar',
  },
  {
    id: '3',
    title: 'Flair Bartending 101',
    description: 'Learn basic flair tricks to impress customers and enhance your skills',
    level: 'beginner',
    duration: 12,
    instructor: 'Abishek Kumar',
  },
  {
    id: '4',
    title: 'Advanced Flair Techniques',
    description: 'Master advanced flair bottle juggling and mixing techniques',
    level: 'advanced',
    duration: 20,
    instructor: 'Abishek Kumar',
  },
  {
    id: '5',
    title: 'Mixology & Craft Cocktails',
    description: 'Create unique cocktails and understand flavor pairing principles',
    level: 'intermediate',
    duration: 16,
    instructor: 'Abishek Kumar',
  },
  {
    id: '6',
    title: 'Professional Bar Management',
    description: 'Learn business skills, customer service, and bar management',
    level: 'advanced',
    duration: 18,
    instructor: 'Abishek Kumar',
  },
]

export default function CoursesGrid() {
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
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {courses.map((course) => (
        <motion.div key={course.id} variants={itemVariants}>
          <CourseCard {...course} />
        </motion.div>
      ))}
    </motion.div>
  )
}
