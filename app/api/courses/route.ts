import { NextResponse } from 'next/server'

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

export async function GET() {
  return NextResponse.json(courses)
}
