import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Layout from '../../components/Layout'
import { useTheme } from '@emotion/react'

const BlogIndex = () => {
  const theme = useTheme()
  return (
    <StaticQuery
      query={blogIndexQuery}
      render={data => {
        return (
          <Layout
            siteTitle={data.site.siteMetadata.title}
            title="Blog"
            description={data.site.siteMetadata.description}
            keywords={['blog']}
          >
            <ul css={{ listStyleType: 'none', padding: 0 }}>
              {data.allMdx.edges.map(({ node }) => (
                <li css={{ marginBottom: '1em' }} key={node.id}>
                  <Link
                    css={{
                      display: 'block',
                      textDecoration: 'none',
                      color: theme.colors.text,
                      fontFamily: theme.font.family.text,
                    }}
                    to={`/` + node.slug}
                  >
                    <span css={{ color: theme.colors.link, fontSize: theme.font.size[2], textTransform: 'uppercase' }}>
                      <b>{node.frontmatter.categories.join(' / ')}</b>
                    </span>
                    <h3 css={{ fontSize: theme.font.size[6], lineHeight: 1.125, margin: '0.125em 0' }}>{node.frontmatter.title}</h3>
                    <time css={{ color: 'grey', fontSize: theme.font.size[2] }} dateTime={node.frontmatter.date}>
                      {node.frontmatter.date}
                    </time>
                  </Link>
                </li>
              ))}
            </ul>
          </Layout>
        )
      }}
    />
  )
}

export default BlogIndex

const blogIndexQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { slug: { regex: "/blog/" } }) {
      edges {
        node {
          id
          excerpt
          slug
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            keywords
            published
            title
            tags
            categories
          }
        }
      }
    }
  }
`
