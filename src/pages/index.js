import React from 'react'
import { graphql } from 'gatsby'
import {
  Experience,
  PageHeading,
  ProjectLink,
  SectionHeader,
} from '../components/MDXProvider/customComponents'
import Layout from '../components/Layout'
import { FeaturedSection } from '../components/FeaturedSection'
import { FeaturedProject } from '../components/FeaturedProject'

const IndexPage = ({ data, location }) => {
  const title = `Projects`
  const description = `Kristy Leung creates human centered systems and experiences. Currently I am creating a brand new  gaming experience for millions of players at Electronic Arts.`
  const keywords = ['product designer', 'ux']
  const ea = data.eaImage.childImageSharp.fluid
  const ufw = data.ufwImage.childImageSharp.fluid
  const visier = data.visierImage.childImageSharp.fluid
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
        abstract={`Creates human centered systems and experiences. Currently — designing a brand new gaming experience for millions of players at Electronic Arts`}
      />
      <SectionHeader>Experiences I’ve created</SectionHeader>
      <FeaturedSection>
        <FeaturedProject
          company={`Electronic Arts`}
          title={`A Cross-Play Future by Electronic Arts`}
          //abstract={`Enabling millions of players to play with anyone, anywhere`}
          image={ea}
          link={`/electronic-arts/`}
        />
        <FeaturedProject
          company={`United for Wildlife`}
          title={`Taskforce Wildlife by United for Wildlife`}
          //abstract={`Supporting transport businesses in planning safe routes to avoid wildlife traffickers`}
          image={ufw}
          link={`/united-for-wildlife/`}
        />
        <FeaturedProject
          company={`Visier`}
          title={`Workforce Planning by Visier`}
          //abstract={`Facilitating collaboration for businesses to analyse their headcount data`}
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
      <ProjectLink
        title={`Linkedin`}
        link={`https://www.linkedin.com/in/kristyleung/`}
      />
      <ProjectLink
        title={`Resume`}
        link={`./Kristy-Leung-Product-Designer-Resume.pdf`}
      />
      <ProjectLink
        title={`Send me a message`}
        link={`mailto:kristy.leung11@gmail.com`}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
      }
    }
    eaImage: file(relativePath: { regex: "/ea-project-thumbnail.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ufwImage: file(relativePath: { regex: "/ufw-project-thumbnail.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    visierImage: file(
      relativePath: { regex: "/visier-project-thumbnail.png/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
