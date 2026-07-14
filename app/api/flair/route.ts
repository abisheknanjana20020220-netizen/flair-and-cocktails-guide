import { NextResponse } from 'next/server'

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
    difficulty: 1,
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
    difficulty: 3,
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
    difficulty: 3,
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
    difficulty: 1,
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
    difficulty: 5,
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
    difficulty: 5,
  },
]

export async function GET() {
  return NextResponse.json(flairTricks)
}
