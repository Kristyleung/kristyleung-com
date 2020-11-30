import React, { useEffect, useState, createContext } from 'react'

const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [themeState, setThemeState] = useState({
    isDark: false,
    themeMounted: false,
  })

  useEffect(() => {
    const getLocalStorage = localStorage

    const isDark = getLocalStorage.getItem('isDark') === 'true'
    setThemeState(themeState => ({ ...themeState, isDark: isDark }))

    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (getLocalStorage.length === 0 && matchMedia) {
      setThemeState(themeState => ({ ...themeState, isDark: true }))
    }

    setThemeState(themeState => ({ ...themeState, themeMounted: true }))
  }, [setThemeState])

  if (!themeState.themeMounted) {
    return <>...</>
  }

  return <ThemeContext.Provider value={[themeState, setThemeState]}>{props.children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
