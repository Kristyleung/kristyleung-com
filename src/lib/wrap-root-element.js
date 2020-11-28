import React from 'react'
import { ThemeContextProvider } from '../components/ThemeContext'
import MDXProvider from '../components/MDXProvider'
import ThemeProvider from '../components/ThemeProvider'

const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <MDXProvider element={element} />
      </ThemeProvider>
    </ThemeContextProvider>
  )
}

export default wrapRootElement
