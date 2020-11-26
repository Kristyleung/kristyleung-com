import React from 'react'
import { Page } from '../components/Page'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PropTypes from 'prop-types'

const Default = ({ children, pageContext }) => {
  const { title, description, keywords } = pageContext.frontmatter
  return (
    <StaticQuery
      query={templateQuery}
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

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default

const templateQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
