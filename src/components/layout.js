import React from 'react'
import SEO from './SEO'
import PropTypes from 'prop-types'
import Header from './Header'

const Layout = ({ children, siteTitle, title, description, keywords }) => {
  return (
    <>
      <SEO title={siteTitle || title} description={description} keywords={keywords} />
      <Header siteTitle={siteTitle} />
      <main role="main">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
