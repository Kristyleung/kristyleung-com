import React, { useRef, useEffect, useState, createContext } from 'react'
import { dark, light } from '../theming/theme'

export const themes = {
  light: light,
  dark: dark,
}

const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [currentTheme, setCurrentTheme] = useState(themes.light)
  
  let useThemeRef = useRef()
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      let getTheme = useThemeRef.current = storedTheme
      if (getTheme === 'dark') {
        setCurrentTheme(themes.dark)
      }
    } else {
      const matchTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (matchTheme) {
        setCurrentTheme(themes.dark)
        localStorage.setItem('theme', 'dark')
      }
    }
    },[setCurrentTheme])

  return <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>{props.children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
