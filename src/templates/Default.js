import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

const Default = ({ children, pageContext }) => {
  const { title, description, keywords } = pageContext.frontmatter
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        return (
          <Layout siteTitle={data.site.siteMetadata.title} title={title} description={description} keywords={keywords}>
            {children}
          </Layout>
        )
      }}
    />
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default

const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
