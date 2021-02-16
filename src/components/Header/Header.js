import React from 'react'
import Link from '../Link'
import PropTypes from 'prop-types'
import { brandLinkStyle, headerStyle, navStyle, navLinkActiveStyle, navLinkStyle } from './styles'
import { navigationData } from './data'
import { useTheme } from '@emotion/react'
import { withPrefix } from 'gatsby'

const Header = ({ location, siteTitle }) => {
  const theme = useTheme()
  const isHomepage = location.pathname === withPrefix('/')
  return (
    <header css={headerStyle({ theme })}>
      <Link to="/" css={brandLinkStyle({ theme })}>
        {!isHomepage && siteTitle}
      </Link>
      <nav css={navStyle({ theme })}>
        {navigationData.map((item, index) => (
          <Link key={index} activeStyle={navLinkActiveStyle} css={navLinkStyle({ theme })} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  navigation: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
