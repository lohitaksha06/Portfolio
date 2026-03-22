'use client'

import { motion } from 'framer-motion'
import { useTheme, ThemeType } from '@/context/ThemeContext'

const themeOptions: { key: ThemeType; label: string; colors: string[] }[] = [
  { key: 'blue', label: 'Gold', colors: ['#d4af37', '#808080'] },
  { key: 'red', label: 'Bronze', colors: ['#b8860b', '#808080'] },
  { key: 'bw', label: 'Silver Gold', colors: ['#ffdf00', '#c0c0c0'] },

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {themeOptions.map((opt) => (
        <motion.button
          key={opt.key}
          onClick={() => setTheme(opt.key)}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 ${
            theme === opt.key
              ? 'border-white/40 bg-white/20 scale-105'
              : 'border-white/10 bg-white/5 hover:bg-white/10'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={opt.label}
        >
          <div className="flex gap-1">
            {opt.colors.map((color, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className="text-xs text-white/80 font-medium hidden sm:inline">
            {opt.label}
          </span>
          {theme === opt.key && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 rounded-full border-2 border-white/50"
              initial={false}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  )
}
