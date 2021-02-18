import React from 'react'
import Link from '../Link'
import { brandLinkStyle, navLinkStyle } from '../Header/styles'
import { navigationData } from './data'
import { useTheme } from '@emotion/react'
import { mq } from '../../theming/theme'

const footerStyle = ({ theme }) => mq({
  alignItems: ['start', 'start', 'center'],
  display: 'flex',
  flexDirection: ['column', 'column', 'row'],
  justifyContent: 'space-between',
  padding: theme.spacing[2],
  marginTop: theme.spacing[6],
  a: {
    color: theme.colors.text,
    whiteSpace: 'nowrap',
  }
})

const navFooterStyle = ({ theme }) => mq({
  alignItems: 'center',
  display: 'grid',
  gridAutoFlow: ['row', 'column'],
  gridGap: [0, theme.spacing[1]],
})

const Footer = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <footer css={footerStyle({ theme })}>
      <Link to="/" css={brandLinkStyle({ theme })}>
        {`© ${siteTitle} ${new Date().getFullYear()}`}
      </Link>
      <nav css={navFooterStyle({ theme })}>
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
