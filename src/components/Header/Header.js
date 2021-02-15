import React from 'react'
import { brandLinkStyle, headerStyle, navStyle, navLinkActiveStyle, navLinkStyle } from './styles'
import { navigationData } from './data'
import { useTheme } from '@emotion/react'
import Link from '../Link'
import PropTypes from 'prop-types'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header css={headerStyle({ theme })}>
      <Link to="/" css={brandLinkStyle({ theme })}>
        {siteTitle}
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
