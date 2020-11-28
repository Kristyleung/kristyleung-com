import React, { useContext } from 'react'
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { globalStyle } from '../theming/globalStyle'
import { normalize } from '../theming/normalize'
import { ThemeContext } from '../components/ThemeContext'

const ThemeProvider = ({ children }) => {
  const setTheme = useContext(ThemeContext)
  const theme = setTheme[0]
  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={normalize} />
      <Global styles={globalStyle({ theme })} />
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
