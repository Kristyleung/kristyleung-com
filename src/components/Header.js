import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const headerStyle = css({
  fontFamily: 'Public Sans',
  maxWidth: 960,
  margin: 'auto',
  padding: '1.5rem 1rem',
})

const Header = ({ siteTitle }) => (
  <header css={headerStyle}>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <Link to="/">Projects</Link>
    {` `}
    <Link to="/about">About</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
