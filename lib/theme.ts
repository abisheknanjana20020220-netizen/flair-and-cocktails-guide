import { createGlobalStyle } from 'styled-components'

interface ThemeColors {
  primary: string
  secondary: string
  accent: string
}

export const theme: ThemeColors = {
  primary: '#000000',
  secondary: '#D4AF37',
  accent: '#ffffff',
}

export const getContrastColor = (color: string): string => {
  // Simple contrast calculation
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 155 ? '#000000' : '#ffffff'
}
