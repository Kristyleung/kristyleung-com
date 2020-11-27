import React from 'react'
import { Global } from '@emotion/react'
import { globalStyle } from '../utils/globalStyle'
import { normalize } from '../utils/normalize'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import theme from '../utils/theme'

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <Global styles={normalize} />
    <Global styles={globalStyle} />
    {children}
  </EmotionThemeProvider>
)
export default ThemeProvider
