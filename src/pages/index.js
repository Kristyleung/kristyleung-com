import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Experience, PageHeading, ProjectLink, SectionHeader } from '../components/MDXProvider/customComponents'
import Layout from '../components/Layout'
import { FeaturedSection } from '../components/FeaturedSection'
import { FeaturedProject } from '../components/FeaturedProject'

const IndexPage = ({ location }) => {
  return (
    <StaticQuery
      query={indexQuery}
      render={data => {
        const title = `Product design portfolio`
        const keywords = ['product designer', 'vancouver']
        const description = `The portfolio of Kristy Leung, a product designer based in Vancouver. Currently creating human centered gaming experiences for millions of players at Electronic Arts.`
        const ea = data.eaImage
        const ufw = data.ufwImage
        const visier = data.visierImage
        return (
          <Layout
            siteTitle={data.site.siteMetadata.title}
            title={title}
            description={description}
            keywords={keywords}
            location={location}
          >
            <PageHeading
              title={`Kristy Leung`}
              abstract={`Creates human centered systems and experiences. Currently — designing a brand new gaming experience for millions of players at Electronic Arts.`}
            />
            <SectionHeader>Experiences I’ve created</SectionHeader>
            <FeaturedSection>
              <FeaturedProject
                abstract={`Supporting companies in the transport sector in becoming more resilient to the exploitation of illegal wildlife traffickers`}
                title={` Taskforce Wildlife by United for Wildlife`}
                image={ufw}
                link={`/united-for-wildlife/`}
              />
              <FeaturedProject
                abstract={`Enabling millions of players to play with anyone on any gaming console and device`}
                title={`A Cross-Play Future by Electronic Arts`}
                image={ea}
                link={`/electronic-arts/`}
              />
              <FeaturedProject
                abstract={`Facilitating collaboration for businesses to analyse their workforce`}
                title={`Workforce Planning by Visier`}
                image={visier}
                link={`/visier/`}
              />
            </FeaturedSection>
            <SectionHeader>About</SectionHeader>
            <Experience company={`Electronic Arts`} role={`Product Designer`} />
            <Experience company={`8it`} role={`Product Designer`} />
            <Experience company={`Edenspiekermann`} role={`UX Designer`} />
            <Experience company={`Visier`} role={`UX Design Intern`} />
            <SectionHeader>Connect</SectionHeader>
            <ProjectLink title={`Linkedin`} link={`https://www.linkedin.com/in/kristyleung/`} />
            <ProjectLink title={`Resume`} link={`./Kristy-Leung-Product-Designer-Resume.pdf`} />
            <ProjectLink title={`Send me a message`} link={`mailto:kristy.leung11@gmail.com`} />
          </Layout>
        )
      }}
    />
  )
}

export default IndexPage

const indexQuery = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    eaImage: file(relativePath: { regex: "/ea-project-thumbnail.png/" }) {
      childImageSharp {
        gatsbyImageData(width: 600, placeholder: BLURRED, formats: WEBP)
      }
    }
    ufwImage: file(relativePath: { regex: "/ufw-project-thumbnail.png/" }) {
      childImageSharp {
        gatsbyImageData(width: 600, placeholder: BLURRED, formats: WEBP)
      }
    }
    visierImage: file(relativePath: { regex: "/visier-project-thumbnail.png/" }) {
      childImageSharp {
        gatsbyImageData(width: 600, placeholder: BLURRED, formats: WEBP)
      }
    }
  }
`
