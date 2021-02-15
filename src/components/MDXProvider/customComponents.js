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

export const ProjectLink = props => {
  const theme = useTheme()
  const { abstract, link, title } = props
  return (
    <p css={paragraphStyle({ theme })}>
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

export const Experience = props => {
  const theme = useTheme()
  const { company, role } = props
  return (
    <p css={paragraphStyle({ theme })}>
      <span css={experienceStyle({ theme })}>{company}</span>
      {` — ` + role}
    </p>
  )
}

const sectionHeaderStyle = ({ theme }) =>
  css({
    color: theme.colors.text,
    fontFamily: theme.font.family.text,
    borderBottom: `1px solid transparent`,
    borderColor: theme.colors.text,
    paddingTop: theme.spacing[2],
    paddingBottom: theme.spacing[2],
  })

export const SectionHeader = ({ children }) => {
  const theme = useTheme()
  return <p css={sectionHeaderStyle({ theme })}>{children}</p>
}

const pageHeadingStyle = ({ theme }) =>
  mq({
    fontFamily: theme.font.family.heading,
    fontSize: [theme.font.size[9], theme.font.size[9], '5vw'],
    marginBottom: 0,
  })

const pageAbstractStyle = ({ theme }) =>
  mq({
    ...paragraphStyle,
    fontSize: [theme.font.size[6], theme.font.size[7], '2.125vw'],
    fontWeight: 300,
    marginTop: '.5em',
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
