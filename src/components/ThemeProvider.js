import React from 'react'
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { globalStyle } from '../theming/globalStyle'
import { normalize } from '../theming/normalize'
import { setTheme } from '../lib/set-theme'

const ThemeProvider = ({ children }) => {
  const theme = setTheme()
  return (
    <EmotionThemeProvider theme={theme}>
      <Global styles={normalize} />
      <Global styles={globalStyle({ theme })} />
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
