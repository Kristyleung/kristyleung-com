import React from 'react'
import { Page } from '../components/Page'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

const Blog = ({ children, pageContext }) => {
  const { title, description, keywords } = pageContext.frontmatter
  return (
    <StaticQuery
      query={blogQuery}
      render={data => {
        return (
          <Layout siteTitle={data.site.siteMetadata.title} title={title} description={description} keywords={keywords}>
            <Page>{children}</Page>
          </Layout>
        )
      }}
    />
  )
}

Blog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogPost

const blogQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
