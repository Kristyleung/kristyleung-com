import React from 'react'
import { useTheme } from '@emotion/react'

const h1Style = ({ theme }) => ({
  fontFamily: theme.font.family.text,
})

const h2Style = ({ theme }) => ({
  fontFamily: theme.font.family.text,
})

const h3Style = ({ theme }) => ({
  fontFamily: theme.font.family.text,
})

const linkStyle = ({ theme }) => ({
  fontFamily: theme.font.family.text,
})

const ulStyle = ({ theme }) => ({})

const olStyle = ({ theme }) => ({})

const liStyle = ({ theme }) => ({
  fontFamily: theme.font.family.text,
  lineHeight: 1.5,
})

const paragraphStyle = ({ theme }) => ({
  fontFamily: theme.font.family.text,
  fontSize: theme.font.size[3],
  lineHeight: 1.5,
  color: theme.colors.black,
})

const H1 = props => {
  const theme = useTheme()
  return (
    <h1 css={h1Style({ theme })} {...props}>
      {props.children}
    </h1>
  )
}

const H2 = props => {
  const theme = useTheme()
  return (
    <h2 css={h2Style({ theme })} {...props}>
      {props.children}
    </h2>
  )
}

const H3 = props => {
  const theme = useTheme()
  return (
    <h3 css={h3Style({ theme })} {...props}>
      {props.children}
    </h3>
  )
}

const Ul = props => {
  const theme = useTheme()
  return <ul css={ulStyle({ theme })} {...props} />
}

const Ol = props => {
  const theme = useTheme()
  return <ol css={olStyle({ theme })} {...props} />
}

const Li = props => {
  const theme = useTheme()
  return <li css={liStyle({ theme })} {...props} />
}

const Link = props => {
  const theme = useTheme()
  return (
    <a css={linkStyle({ theme })} {...props}>
      {props.children}
    </a>
  )
}

const Paragraph = props => {
  const theme = useTheme()
  return <p css={paragraphStyle({ theme })} {...props} />
}

const components = {
  wrapper: function Wrapper({ children, ...props }) {
    return <div {...props}>{children}</div>
  },
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
  a: Link,
  ol: Ol,
  ul: Ul,
  li: Li,
}

export default components
