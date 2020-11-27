import React from 'react'
import { useTheme } from '@emotion/react'

const footerStyle = ({ theme }) => ({
  backgroundColor: theme.colors.smoke,
  color: theme.colors.primary,
  fontFamily: 'Public Sans',
  fontSize: 14,
  gridArea: 'footer',
  padding: 16,
})

const Footer = () => {
  const theme = useTheme()
  return <footer css={footerStyle({ theme })}>Gatsby Theme Glacier</footer>
}

export default Footer
