import React from 'react'
import { Global } from '@emotion/react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { normalize } from '../utils/normalize'
import theme from '../utils/theme'

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <Global styles={normalize} />
    {children}
  </EmotionThemeProvider>
)
export default ThemeProvider
