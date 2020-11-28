import React from 'react'
import Link from './Link'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

const headerStyle = ({ theme }) => ({
  display: 'flex',
  gridArea: 'header',
  justifyContent: 'space-between',
  padding: `${theme.spacing[3] + 'px ' + theme.spacing[2] + 'px'}`,
})

const brandLinkStyle = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[3],
  fontWeight: 'bold',
  textDecoration: 'none',
})

const navLinkStyle = ({ theme }) => ({
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[3],
  marginLeft: theme.spacing[2],
  padding: '0 .25em',
  textDecoration: 'none',
  ':hover, :focus': {
    textDecoration: 'underline',
  },
})

const navLinkActiveStyle = {
  textDecoration: 'underline',
}

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header css={headerStyle({ theme })}>
      <Link to="/" css={brandLinkStyle({ theme })}>
        {siteTitle}
      </Link>
      <nav>
        <Link activeStyle={navLinkActiveStyle} css={navLinkStyle({ theme })} to="/">
          Projects
        </Link>
        <Link activeStyle={navLinkActiveStyle} css={navLinkStyle({ theme })} to="/blog">
          Blog
        </Link>
        <Link activeStyle={navLinkActiveStyle} css={navLinkStyle({ theme })} to="/about">
          About
        </Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
