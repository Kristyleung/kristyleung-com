import React from 'react'
import { css, useTheme } from '@emotion/react'
import { paragraphStyle } from './styles'
import { Link } from 'gatsby'

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

const projectLinkTitleStyle = ({ theme }) =>
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
        <span css={projectLinkTitleStyle({ theme })}>{title}</span>
        {` — ` + abstract}
      </Link>
    </p>
  )
}

const experienceStyle = ({ theme }) =>
  css({
    fontFamily: theme.font.family.heading,
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
