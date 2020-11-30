import React from 'react'
import { useTheme } from '@emotion/react'

const footerStyle = ({ theme }) => ({
  backgroundColor: theme.colors.footer,
  color: theme.colors.link,
  fontFamily: theme.font.family.text,
  fontSize: theme.font.size[2],
  padding: theme.spacing[2],
})

const Footer = () => {
  const theme = useTheme()
  return <footer css={footerStyle({ theme })}>Gatsby Theme Glacier</footer>
}

export default Footer
