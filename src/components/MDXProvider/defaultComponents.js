import React from 'react'
import { css } from '@emotion/react'

const h1Style = css({
  fontFamily: 'Public Sans',
})

const h2Style = css({
  fontFamily: 'Public Sans',
})

const h3Style = css({
  fontFamily: 'Public Sans',
})

const linkStyle = css({
  fontFamily: 'Public Sans',
})

const ulStyle = css({})

const olStyle = css({})

const liStyle = css({
  fontFamily: 'Public Sans',
  lineHeight: 1.5,
})

const paragraphStyle = css({
  fontFamily: 'Public Sans',
  lineHeight: 1.5,
})

const H1 = props => (
  <h1 css={h1Style} {...props}>
    {props.children}
  </h1>
)

const H2 = props => (
  <h2 css={h2Style} {...props}>
    {props.children}
  </h2>
)

const H3 = props => (
  <h3 css={h3Style} {...props}>
    {props.children}
  </h3>
)

const Ul = props => <ul css={ulStyle} {...props} />

const Ol = props => <ol css={olStyle} {...props} />

const Li = props => <li css={liStyle} {...props} />

const Link = props => (
  <a css={linkStyle} {...props}>
    {props.children}
  </a>
)

const Paragraph = props => <p css={paragraphStyle} {...props} />

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
