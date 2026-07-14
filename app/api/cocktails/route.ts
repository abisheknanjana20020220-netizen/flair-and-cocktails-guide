import { NextResponse } from 'next/server'

const cocktails = [
  {
    id: 1,
    name: 'Margarita',
    category: 'Classic',
    spirit: 'Tequila',
    description: 'A classic cocktail with tequila, lime juice, and triple sec',
    ingredients: ['Tequila', 'Triple Sec', 'Lime Juice', 'Salt'],
    recipe: 'Pour tequila and triple sec into a salt-rimmed glass...'
  },
  {
    id: 2,
    name: 'Mojito',
    category: 'Refreshing',
    spirit: 'Rum',
    description: 'A refreshing rum-based drink with mint and lime',
    ingredients: ['White Rum', 'Mint', 'Lime', 'Sugar', 'Soda Water'],
    recipe: 'Muddle mint with sugar and lime juice...'
  },
  {
    id: 3,
    name: 'Cosmopolitan',
    category: 'Modern',
    spirit: 'Vodka',
    description: 'A stylish cocktail with vodka, cranberry, and lime',
    ingredients: ['Vodka', 'Cranberry Juice', 'Lime Juice', 'Triple Sec'],
    recipe: 'Shake vodka with cranberry juice and lime juice...'
  },
  {
    id: 4,
    name: 'Old Fashioned',
    category: 'Classic',
    spirit: 'Whiskey',
    description: 'A timeless drink featuring whiskey and bitters',
    ingredients: ['Whiskey', 'Bitters', 'Sugar', 'Water', 'Orange'],
    recipe: 'Muddle sugar with bitters and water...'
  },
  {
    id: 5,
    name: 'Daiquiri',
    category: 'Classic',
    spirit: 'Rum',
    description: 'A simple yet elegant rum cocktail',
    ingredients: ['White Rum', 'Lime Juice', 'Simple Syrup'],
    recipe: 'Shake rum with lime juice and simple syrup...'
  },
  {
    id: 6,
    name: 'Piña Colada',
    category: 'Tropical',
    spirit: 'Rum',
    description: 'A creamy tropical drink with rum and coconut',
    ingredients: ['White Rum', 'Coconut Cream', 'Pineapple Juice'],
    recipe: 'Blend rum with coconut cream and pineapple juice...'
  },
]

export async function GET() {
  return NextResponse.json(cocktails)
}
