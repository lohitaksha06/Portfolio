'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ThemeType = 'blue' | 'red' | 'bw'

interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  glow: string
  bg: string
  gradientStart: string
  gradientMid: string
  gradientEnd: string
}

const themes: Record<ThemeType, ThemeColors> = {
  blue: {
    primary: 'rgb(212, 175, 55)', // Gold
    secondary: 'rgb(169, 169, 169)', // Grey
    accent: 'rgb(255, 215, 0)', // Bright Gold
    glow: 'rgba(212, 175, 55, 0.5)',
    bg: 'rgb(10, 10, 10)',
    gradientStart: 'rgba(212, 175, 55, 0.3)',
    gradientMid: 'rgba(169, 169, 169, 0.2)',
    gradientEnd: 'rgba(10, 10, 10, 0)',
  },
  red: {
    primary: 'rgb(184, 134, 11)', // Dark Goldenrod
    secondary: 'rgb(128, 128, 128)', // Grey
    accent: 'rgb(218, 165, 32)', // Goldenrod
    glow: 'rgba(184, 134, 11, 0.5)',
    bg: 'rgb(5, 5, 5)',
    gradientStart: 'rgba(184, 134, 11, 0.3)',
    gradientMid: 'rgba(128, 128, 128, 0.2)',
    gradientEnd: 'rgba(5, 5, 5, 0)',
  },
  bw: {
    primary: 'rgb(255, 223, 0)', // Yellow Gold
    secondary: 'rgb(192, 192, 192)', // Silver
    accent: 'rgb(255, 250, 205)', // Lemon Chiffon
    glow: 'rgba(255, 223, 0, 0.4)',
    bg: 'rgb(15, 15, 15)',
    gradientStart: 'rgba(255, 223, 0, 0.2)',
    gradientMid: 'rgba(192, 192, 192, 0.15)',
    gradientEnd: 'rgba(15, 15, 15, 0)',
  },
}

interface ThemeContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
  colors: ThemeColors
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('blue')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as ThemeType | null
    if (saved && themes[saved]) {
      setTheme(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    
    // Update CSS variables
    const root = document.documentElement
    const colors = themes[theme]
    root.style.setProperty('--theme-primary', colors.primary)
    root.style.setProperty('--theme-secondary', colors.secondary)
    root.style.setProperty('--theme-accent', colors.accent)
    root.style.setProperty('--theme-glow', colors.glow)
    root.style.setProperty('--theme-bg', colors.bg)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
