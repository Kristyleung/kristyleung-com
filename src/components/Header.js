import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { useTheme } from '@emotion/react'
import Link from './Link'
import Icon from './Icon'
import PropTypes from 'prop-types'

const headerStyle = ({ theme }) => ({
  display: 'flex',
  gridArea: 'header',
  justifyContent: 'space-between',
  padding: `${theme.spacing[3] + 'px ' + theme.spacing[2] + 'px'}`,
})

const brandLinkStyle = ({ theme }) => ({
  alignItems: 'center',
  color: theme.colors.text,
  display: 'inline-flex',
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[3],
  fontWeight: 'bold',
  textDecoration: 'none',
  ':focus': {
    outline: '2px dotted transparent',
    outlineColor: theme.colors.focus,
  }
})

const navStyle = ({ theme }) => ({
  alignItems: 'center',
  display: 'inline-flex',
})

const navLinkStyle = ({ theme }) => ({
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[4],
  padding: theme.spacing[2],
  paddingTop: theme.spacing[1],
  paddingBottom: theme.spacing[1],
  textDecoration: 'none',
  ':hover, :focus': {
    textDecoration: 'underline',
  },
  ':focus': {
    outline: '2px dotted transparent',
    outlineColor: theme.colors.focus,
  }
})

const navLinkActiveStyle = {
  textDecoration: 'underline',
}

const toggleStyle = ({ theme }) => ({
  color: theme.colors.text,
  backgroundColor: 'transparent',
  padding: 0,
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    color: theme.colors.link,
  },
  ':focus': {
    outline: '2px dotted transparent',
    outlineColor: theme.colors.focus,
    outlineOffset: 3,
  },
})

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  const [themeState, setThemeState] = useContext(ThemeContext)

  const toggleTheme = () => {
    const dark = !themeState.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    setThemeState({ ...themeState, dark })
  }

  return (
    <header css={headerStyle({ theme })}>
      <Link to="/" css={brandLinkStyle({ theme })}>
        {siteTitle}
      </Link>
      <nav css={navStyle({ theme })}>
        <Link activeStyle={navLinkActiveStyle} css={navLinkStyle({ theme })} to="/">
          Projects
        </Link>
        <Link activeStyle={navLinkActiveStyle} css={navLinkStyle({ theme })} to="/blog">
          Blog
        </Link>
        <Link activeStyle={navLinkActiveStyle} css={navLinkStyle({ theme })} to="/about">
          About
        </Link>
        <button css={toggleStyle({ theme })} onClick={() => toggleTheme()}>
          <Icon icon={themeState.dark ? 'sun' : 'moon'} />
        </button>
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
