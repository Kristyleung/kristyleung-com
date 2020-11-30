import React, { useContext } from 'react'
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { globalStyle } from '../theming/globalStyle'
import { normalize } from '../theming/normalize'
import { ThemeContext } from '../components/ThemeContext'
import { dark, light } from '../theming/theme'

const ThemeProvider = ({ children }) => {
  const useTheme = useContext(ThemeContext)
  const theme = useTheme[0].isDark ? dark : light
  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={normalize} />
      <Global styles={globalStyle({ theme })} />
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
