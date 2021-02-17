import React from 'react'
import Link from '../Link'
import { brandLinkStyle, navStyle, navLinkStyle } from '../Header/styles'
import { navigationData } from './data'
import { useTheme } from '@emotion/react'
export const headerStyle = ({ theme }) => ({
  
})
const footerStyle = ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'wrap',
  justifyContent: 'space-between',
  padding: theme.spacing[2],
  marginTop: theme.spacing[6],
  a: {
    color: theme.colors.text,
  }
})

const Footer = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <footer css={footerStyle({ theme })}>
      <Link to="/" css={brandLinkStyle({ theme })}>
        {`© ${siteTitle} ${new Date().getFullYear()}`}
      </Link>
      <nav css={navStyle({ theme })}>
        {navigationData.map((item, index) => (
          <Link key={index} css={navLinkStyle({ theme })} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
