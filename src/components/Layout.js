import React from 'react'
import { css } from '@emotion/react'
import Footer from './Footer'
import Header from './Header'
import PropTypes from 'prop-types'
import SEO from './SEO'
import { mq } from '../theming/theme'

const skipToContentStyle = css(`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  width: 1px;
  z-index: 9999999;
  top: 1rem;
  left: 1rem;
  padding: 8px;
  border-radius: 4px;
  background: white;
  color: black;
  text-decoration: none;
  position: absolute;
  :focus {
    width: auto;
    height: auto;
    clip: auto;
  }
`)

const layoutStyle = mq({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100vh',
  marginLeft: [6, 12],
  marginRight: [6, 12],
  ':before, :after': {
    content: '""',
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: [6, 12],
    zIndex: -1,
  },
  ':before': {
    left: 0,
    background: `linear-gradient(to bottom, #C27958, #F1D9CF, #E9AA77)`,
  },
  ':after': {
    right: 0,
    background: `linear-gradient(to bottom, #C7C59C, #928A4C, #E2D2C3)`,
  },
})

const sectionStyle = mq({
  display: 'grid',
  gridTemplateColumns: ['minmax(24px,1fr) minmax(auto, 960px) minmax(24px,1fr)'],
  '*': {
    gridColumn: 2,
  },
  figure: {
    gridColumn: '1 / -1',
    margin: 'auto !important',
    maxWidth: 960,
    width: '100%',
  },
})

const Layout = ({ children, location, siteTitle, title, description, keywords }) => {
  return (
    <>
      <a css={skipToContentStyle} href="#content">
        Skip to content
      </a>
      <div css={layoutStyle}>
        <SEO title={title} description={description} keywords={keywords} />
        <Header siteTitle={siteTitle} location={location} />
        <main id="content" role="main">
          <section css={sectionStyle}>{children}</section>
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
