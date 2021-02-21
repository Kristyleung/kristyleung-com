import React from 'react'
import { css, useTheme } from '@emotion/react'
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
    background: `linear-gradient(to bottom, #C27958, #E4B782)`,
  },
  ':after': {
    right: 0,
    background: `linear-gradient(to bottom, #C7C59C, #928A4C, #E2D2C3)`,
  },
})

const sectionStyle = ({ theme }) =>
  mq({
    display: 'grid',
    gridTemplateColumns: ['minmax(24px,1fr) minmax(auto, 960px) minmax(24px,1fr)'],
    '*': {
      gridColumn: 2,
    },
    figure: {
      gridColumn: '1 / -1',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing[3],
      marginTop: 0,
      maxWidth: 1152,
      width: '100%',
    },
    p: {
      a: {
        borderBottom: '1px solid transparent',
        borderColor: theme.colors.link,
      },
    },
  })

const Layout = ({ children, location, siteTitle, title, description, keywords }) => {
  const theme = useTheme()
  return (
    <>
      <a css={skipToContentStyle} href="#content">
        Skip to content
      </a>
      <div css={layoutStyle}>
        <SEO title={title} description={description} keywords={keywords} />
        <Header siteTitle={siteTitle} location={location} />
        <main id="content" role="main">
          <section css={sectionStyle({ theme })}>{children}</section>
        </main>
        <Footer siteTitle={siteTitle} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
