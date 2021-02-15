import React, { useState, createContext } from 'react'

const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [themeState, setThemeState] = useState({
    isDark: false,
    themeMounted: false,
  })
  return <ThemeContext.Provider value={[themeState, setThemeState]}>{props.children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
