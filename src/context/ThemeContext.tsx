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
    primary: 'rgb(6, 182, 212)',
    secondary: 'rgb(139, 92, 246)',
    accent: 'rgb(0, 229, 255)',
    glow: 'rgba(6, 182, 212, 0.5)',
    bg: 'rgb(15, 23, 42)',
    gradientStart: 'rgba(6, 182, 212, 0.4)',
    gradientMid: 'rgba(139, 92, 246, 0.3)',
    gradientEnd: 'rgba(6, 182, 212, 0)',
  },
  red: {
    primary: 'rgb(255, 0, 110)',
    secondary: 'rgb(255, 85, 0)',
    accent: 'rgb(255, 50, 150)',
    glow: 'rgba(255, 0, 110, 0.5)',
    bg: 'rgb(25, 15, 20)',
    gradientStart: 'rgba(255, 0, 110, 0.4)',
    gradientMid: 'rgba(255, 85, 0, 0.3)',
    gradientEnd: 'rgba(255, 0, 110, 0)',
  },
  bw: {
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgb(150, 150, 150)',
    accent: 'rgb(200, 200, 200)',
    glow: 'rgba(255, 255, 255, 0.4)',
    bg: 'rgb(10, 10, 10)',
    gradientStart: 'rgba(255, 255, 255, 0.2)',
    gradientMid: 'rgba(150, 150, 150, 0.15)',
    gradientEnd: 'rgba(255, 255, 255, 0)',
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
