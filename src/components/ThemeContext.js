import React, { useState, createContext } from 'react'
import { dark, light } from '../theming/theme'

export const themes = {
  light: light,
  dark: dark,
}

const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [currentTheme, setCurrentTheme] = useState(themes.light)
  return <ThemeContext.Provider value={[currentTheme, setCurrentTheme]}>{props.children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
