import React from 'react'
import { Page } from '../components/Page'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

const BlogPost = ({ children, pageContext }) => {
  const { title, description, keywords } = pageContext.frontmatter
  return (
    <StaticQuery
      query={blogPostQuery}
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

BlogPost.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogPost

const blogPostQuery = graphql`
  query BlogPostQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
