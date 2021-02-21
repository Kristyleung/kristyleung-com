import React from 'react'
import Link from '../Link'
import PropTypes from 'prop-types'
import {
  brandLinkStyle,
  headerStyle,
  navHeaderStyle,
  navLinkActiveStyle,
  navLinkStyle,
} from './styles'
import { navigationData } from './data'
import { useTheme } from '@emotion/react'
import { withPrefix } from 'gatsby'
import { isBrowser } from '../../lib/is-browser'

const Header = ({ location, siteTitle }) => {
  const theme = useTheme()
  const isHomepage = isBrowser && location.pathname === withPrefix('/')
  return (
    <header css={headerStyle({ theme })}>
      <Link to="/" css={brandLinkStyle({ theme })}>
        {!isHomepage && siteTitle}
      </Link>
      <nav css={navHeaderStyle({ theme })}>
        {navigationData.map((item, index) => (
          <Link
            key={index}
            activeStyle={navLinkActiveStyle}
            css={navLinkStyle({ theme })}
            to={item.to}
          >
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
