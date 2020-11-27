import React from 'react'
import Footer from './Footer'
import Header from './Header'
import PropTypes from 'prop-types'
import SEO from './SEO'

const layoutStyle = {
  display: 'grid',
  gridTemplateAreas: `
  'header'
  'main'
  'footer'
  `,
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100vh',
}

export const mainStyle = {
  gridArea: 'main',
  margin: '0 auto',
  maxWidth: 640,
  padding: '0 1em',
  width: '100%',
}

const Layout = ({ children, siteTitle, title, description, keywords }) => {
  return (
    <div css={layoutStyle}>
      <SEO title={title} description={description} keywords={keywords} />
      <Header siteTitle={siteTitle} />
      <main role="main" css={mainStyle}>
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
