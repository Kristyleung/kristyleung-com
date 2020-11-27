import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { useTheme } from '@emotion/react'

const linkStyle = ({ theme }) => ({
  fontFamily: theme.font.family.text,
  color: theme.colors.primary,
})

const Link = ({ children, to, activeClassName, partiallyActive, ...props }) => {
  const theme = useTheme()
  const internal = /^\/(?!\/)/.test(to)
  console.log(props)
  if (internal) {
    return (
      <GatsbyLink
        css={linkStyle({ theme })}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
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
