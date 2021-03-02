import React from 'react'
import { css, useTheme } from '@emotion/react'
import { paragraphStyle } from './styles'
import Link from '../Link'
import { mq } from '../../theming/theme'
import { Paragraph } from './defaultComponents'

const projectLinkStyle = ({ theme }) =>
  css({
    backgroundImage: `linear-gradient(180deg, transparent 65%, #dddcc0 0)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0% 100%',
    color: theme.colors.text,
    fontSize: theme.font.size[6],
    fontWeight: 300,
    textDecoration: 'none',
    transition: 'background-size .4s ease',
    borderBottom: 'none !important',
    ':hover': {
      backgroundSize: '100% 100%',
      cursor: 'pointer',
    },
  })

const projectTitleStyle = ({ theme }) =>
  css({
    fontFamily: theme.font.family.heading,
    fontSize: theme.font.size[7],
    fontWeight: 'bold',
  })

const projectParagraphStyle = ({ theme }) =>
  css({
    borderTop: `1px solid transparent`,
    borderColor: theme.colors.border,
    lineHeight: 1.5,
    paddingBottom: '1em',
    paddingTop: '1em',
    margin: 0,
  })

export const ProjectLink = props => {
  const theme = useTheme()
  const { abstract, link, title } = props
  return (
    <p css={projectParagraphStyle({ theme })}>
      <Link css={projectLinkStyle({ theme })} to={link}>
        <span css={projectTitleStyle({ theme })}>{title}</span>
        {abstract && ` — ` + abstract}
      </Link>
    </p>
  )
}

const experienceStyle = ({ theme }) =>
  css({
    fontFamily: theme.font.family.heading,
    fontSize: theme.font.size[7],
  })

const experienceParagraphStyle = ({ theme }) =>
  css({
    borderTop: `1px solid transparent`,
    borderColor: theme.colors.border,
    fontFamily: theme.font.family.text,
    fontSize: theme.font.size[6],
    fontWeight: 300,
    lineHeight: 1.5,
    margin: 0,
    paddingBottom: '1em',
    paddingTop: '1em',
  })

export const Experience = props => {
  const theme = useTheme()
  const { company, role } = props
  return (
    <p css={experienceParagraphStyle({ theme })}>
      <span css={experienceStyle({ theme })}>{company}</span>
      {` — ` + role}
    </p>
  )
}

const sectionHeaderStyle = ({ theme }) =>
  css({
    color: theme.colors.text,
    fontFamily: theme.font.family.text,
    fontSize: theme.font.size[4],
    fontWeight: 'bold',
    paddingTop: theme.spacing[3],
    paddingBottom: theme.spacing[3],
    marginBottom: 0,
    marginTop: theme.spacing[6],
  })

export const SectionHeader = ({ children }) => {
  const theme = useTheme()
  return <p css={sectionHeaderStyle({ theme })}>{children}</p>
}

const pageHeadingStyle = ({ theme }) =>
  mq({
    fontFamily: theme.font.family.heading,
    fontSize: theme.font.size[9],
    marginBottom: 0,
  })

const pageAbstractStyle = ({ theme }) =>
  mq(paragraphStyle, {
    fontSize: theme.font.size[8],
    lineHeight: 1.3,
    fontWeight: 300,
    marginTop: '2rem',
  })

export const PageHeading = props => {
  const theme = useTheme()
  const { title, abstract } = props
  return (
    <>
      <h1 css={pageHeadingStyle({ theme })}>{title}</h1>
      <p css={pageAbstractStyle({ theme })}>{abstract}</p>
    </>
  )
}

// Project Heading

const projectHeadingStyle = ({ theme }) => ({
  gridColumn: '1 / -1',
  maxWidth: 1200,
  width: '100%',
  margin: 'auto',
  marginBottom: 32,
  padding: '0 24px',
})

const projectHrStyle = ({ theme }) => ({
  border: 0,
  height: 2,
  backgroundColor: theme.colors.text,
  marginTop: '2rem',
  marginBottom: 0,
})

const projectH1Style = ({ theme }) => ({
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[11],
  marginBottom: 0,
})

const projectAbstractStyle = ({ theme }) =>
  mq(paragraphStyle, {
    fontSize: theme.font.size[8],
    lineHeight: 1.3,
    fontWeight: 300,
    marginTop: '2rem',
    marginBottom: 0,
  })

export const ProjectHeading = props => {
  const theme = useTheme()
  const { title, abstract, borderBottom } = props
  return (
    <div css={projectHeadingStyle({ theme })}>
      {title && <h1 css={projectH1Style({ theme })}>{title}</h1>}
      {abstract && <p css={projectAbstractStyle({ theme })}>{abstract}</p>}
      {borderBottom && <hr css={projectHrStyle({ theme })} />}
    </div>
  )
}

// Project information

const projectInfoStyle = ({ theme }) =>
  mq({
    flex: 'auto',
    minWidth: '33%',
  })

export const ProjectInfo = props => {
  const theme = useTheme()
  const { title, abstract } = props
  return (
    <div css={projectInfoStyle({ theme })}>
      <h4
        css={[
          paragraphStyle({ theme }),
          {
            fontWeight: 'bold',
            marginBottom: 0,
            fontSize: theme.font.size[3],
            color: theme.colors.text,
          },
        ]}
      >
        {title}
      </h4>
      <p
        css={[
          paragraphStyle({ theme }),
          {
            fontSize: theme.font.size[3],
            color: theme.colors.text,
          },
        ]}
      >
        {abstract}
      </p>
    </div>
  )
}

// Project information section

const projectSectionStyle = ({ theme }) =>
  mq({
    display: 'flex',
    flexDirection: ['column', 'row'],
    flexWrap: 'wrap',
  })

export const ProjectSection = ({ children }) => {
  const theme = useTheme()
  return <div css={projectSectionStyle({ theme })}>{children}</div>
}

// Button Link

const buttonLinkStyle = ({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  display: 'inline-flex',
  padding: '8px 16px',
})

export const ButtonLink = ({ children, to }) => {
  const theme = useTheme()
  return (
    <Paragraph>
      <Link to={to} css={buttonLinkStyle({ theme })}>
        {children}
      </Link>
    </Paragraph>
  )
}
