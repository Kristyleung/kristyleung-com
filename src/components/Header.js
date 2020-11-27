import React from 'react'
import Link from './Link'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

const headerStyle = {
  display: 'flex',
  fontFamily: 'Public Sans',
  fontSize: 18,
  gridArea: 'header',
  justifyContent: 'space-between',
  padding: '1em',
}

const brandLinkStyle = ({ theme }) => ({
  color: theme.colors.black,
  fontWeight: 'bold',
  textDecoration: 'none',
})

const navLinkStyle = {
  padding: '0 .25em',
  textDecoration: 'none',
  ':hover, :focus': {
    textDecoration: 'underline',
  },
}

const linkActiveStyle = {
  textDecoration: 'underline',
}

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header css={headerStyle}>
      <Link to="/" css={brandLinkStyle({ theme })}>
        {siteTitle}
      </Link>
      <nav>
        <Link activeStyle={linkActiveStyle} css={navLinkStyle} to="/">
          Projects
        </Link>
        <Link activeStyle={linkActiveStyle} css={navLinkStyle} to="/blog">
          Blog
        </Link>
        <Link ctiveStyle={linkActiveStyle} css={navLinkStyle} to="/about">
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
