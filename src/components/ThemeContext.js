import React, { useEffect, useState, createContext } from 'react'

const ThemeContext = createContext()

const ThemeContextProvider = props => {
  const [themeState, setThemeState] = useState({
    dark: false,
    themeMounted: false,
  })

  useEffect(() => {
    const getLocalStorage = localStorage

    const dark = getLocalStorage.getItem('dark') === 'true'
    setThemeState(themeState => ({ ...themeState, dark: dark }))

    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (getLocalStorage.length === 0 && matchMedia) {
      setThemeState(themeState => ({ ...themeState, dark: true }))
    }

    setThemeState(themeState => ({ ...themeState, themeMounted: true }))
  }, [setThemeState])

  if (!themeState.themeMounted) {
    return null
  }

  return <ThemeContext.Provider value={[themeState, setThemeState]}>{props.children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
