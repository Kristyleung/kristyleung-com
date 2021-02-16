import React from 'react'
import { css, useTheme } from '@emotion/react'
import { paragraphStyle } from './styles'
import Link from '../Link'
import { mq } from '../../theming/theme'

const projectLinkStyle = ({ theme }) =>
  css({
    backgroundImage: `linear-gradient(180deg, transparent 65%, #d4d7f9 0)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0% 100%',
    color: theme.colors.text,
    textDecoration: 'none',
    transition: 'background-size .4s ease',
    ':hover': {
      backgroundSize: '100% 100%',
      cursor: 'pointer',
    },
  })

const projectTitleStyle = ({ theme }) =>
  css({
    fontFamily: theme.font.family.heading,
    fontSize: theme.font.size[7],
  })

const projectParagraphStyle = ({ theme }) =>
  css({
    ...paragraphStyle,
    borderTop: `1px solid transparent`,
    borderColor: theme.colors.text,
    fontFamily: theme.font.family.heading,
    fontSize: theme.font.size[6],
    fontWeight: 300,
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
    ...paragraphStyle,
    borderTop: `1px solid transparent`,
    borderColor: theme.colors.text,
    fontSize: theme.font.size[6],
    fontWeight: 300,
    lineHeight: 1.5,
    paddingBottom: '1em',
    paddingTop: '1em',
    margin: 0,
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
    fontSize: theme.font.size[2],
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
