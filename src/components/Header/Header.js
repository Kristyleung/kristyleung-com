import React from 'react'
import Link from '../Link'
import PropTypes from 'prop-types'
import { brandLinkStyle, headerStyle, navHeaderStyle, navLinkActiveStyle, navLinkStyle } from './styles'
import { navigationData } from './data'
import { useTheme } from '@emotion/react'
import { withPrefix } from 'gatsby'

const Header = ({ location, siteTitle }) => {
  const theme = useTheme()
  const isHomepage = location.pathname === withPrefix('/')

  return (
    <header css={headerStyle({ theme })}>
      <div>
        {isHomepage ? (
          ''
        ) : (
          <Link to="/" css={brandLinkStyle({ theme })} aria-label="Home">
            {siteTitle}
          </Link>
        )}
      </div>
      <nav css={navHeaderStyle({ theme })} role="navigation" aria-label="Main navigation">
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
