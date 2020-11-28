import React, { useContext } from 'react'
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { globalStyle } from '../theming/globalStyle'
import { normalize } from '../theming/normalize'
import { ThemeContext } from '../components/ThemeContext'
import { dark, light } from '../theming/theme'

const ThemeProvider = ({ children }) => {
  const useTheme = useContext(ThemeContext)
  let theme = {}
  if (useTheme[0].dark) {
    theme = dark
  } else {
    theme = light
  }
  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={normalize} />
      <Global styles={globalStyle({ theme })} />
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
