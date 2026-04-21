import { createContext, useContext, useState, useEffect } from 'react'
import { dark, light } from './themes'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('nrfgd-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const theme = isDark ? dark : light

  const toggle = () => {
    setIsDark(d => {
      const next = !d
      localStorage.setItem('nrfgd-theme', next ? 'dark' : 'light')
      return next
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    document.body.style.background = theme.bg
    document.body.style.color = theme.text
  }, [isDark, theme.bg, theme.text])

  return (
    <ThemeContext.Provider value={{ theme, toggle, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
