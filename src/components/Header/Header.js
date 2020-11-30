import React, { useContext } from 'react'
import { brandLinkStyle, headerStyle, navStyle, navLinkActiveStyle, navLinkStyle } from './styles'
import { navigationData } from './data'
import { ThemeContext } from '../ThemeContext'
import { useTheme } from '@emotion/react'
import Link from '../Link'
import PropTypes from 'prop-types'
import Switch from '../Switch'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  const [themeState, setThemeState] = useContext(ThemeContext)

  const switchTheme = () => {
    const isDark = !themeState.isDark
    localStorage.setItem('isDark', JSON.stringify(isDark))
    setThemeState({ ...themeState, isDark })
  }
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
        <Switch
          aria-label={`Toggle dark mode ${themeState.isDark ? `off` : `on`}`}
          icon={themeState.isDark ? 'sun' : 'moon'}
          onClick={() => switchTheme()}
        />
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
