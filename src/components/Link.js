import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { useTheme } from '@emotion/react'

const linkStyle = ({ theme }) => ({
  color: theme.colors.link,
  fontFamily: theme.font.family.text,
  ':focus': {
    outline: '2px dotted transparent',
    outlineColor: theme.colors.focus,
    outlineOffset: 4,
  }
})

const Link = ({ children, to, activeClassName, partiallyActive, ...props }) => {
  const theme = useTheme()
  const internal = /^\/(?!\/)/.test(to)
  if (internal) {
    return (
      <GatsbyLink
        activeClassName={activeClassName}
        css={linkStyle({ theme })}
        partiallyActive={partiallyActive}
        to={to}
        {...props}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a css={linkStyle({ theme })} href={to} {...props}>
      {children}
    </a>
  )
}

export default Link
