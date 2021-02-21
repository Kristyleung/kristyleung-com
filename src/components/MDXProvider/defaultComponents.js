import React from 'react'
import Link from '../Link'
import { useTheme } from '@emotion/react'
import {
  paragraphStyle,
  h1Style,
  h2Style,
  h3Style,
  h4Style,
  h5Style,
  h6Style,
  thematicBreakStyle,
  blockquoteStyle,
  ulStyle,
  olStyle,
  liStyle,
  tableStyle,
  theadStyle,
  tbodyStyle,
  trStyle,
  tdStyle,
  thStyle,
  emStyle,
  strongStyle,
  delStyle,
  inlineCodeStyle,
  hrStyle,
} from './styles'
import CodeBlock from '../CodeBlock'
import {
  Experience,
  PageHeading,
  ProjectInfo,
  ProjectLink,
  ProjectSection,
  SectionHeader,
} from './customComponents'

/** https://mdxjs.com/table-of-components */

export const Paragraph = (props) => {
  const theme = useTheme()
  return <p css={paragraphStyle({ theme })} {...props} />
}

const H1 = (props) => {
  const theme = useTheme()
  return (
    <h1 css={h1Style({ theme })} {...props}>
      {props.children}
    </h1>
  )
}

const H2 = (props) => {
  const theme = useTheme()
  return (
    <h2 css={h2Style({ theme })} {...props}>
      {props.children}
    </h2>
  )
}

const H3 = (props) => {
  const theme = useTheme()
  return (
    <h3 css={h3Style({ theme })} {...props}>
      {props.children}
    </h3>
  )
}

const H4 = (props) => {
  const theme = useTheme()
  return (
    <h4 css={h4Style({ theme })} {...props}>
      {props.children}
    </h4>
  )
}

const H5 = (props) => {
  const theme = useTheme()
  return (
    <h5 css={h5Style({ theme })} {...props}>
      {props.children}
    </h5>
  )
}

const H6 = (props) => {
  const theme = useTheme()
  return (
    <h6 css={h6Style({ theme })} {...props}>
      {props.children}
    </h6>
  )
}

const ThematicBreak = (props) => {
  const theme = useTheme()
  return <div css={thematicBreakStyle({ theme })} {...props} />
}

const Blockquote = (props) => {
  const theme = useTheme()
  return <blockquote css={blockquoteStyle({ theme })} {...props} />
}

const Ul = (props) => {
  const theme = useTheme()
  return <ul css={ulStyle({ theme })} {...props} />
}

const Ol = (props) => {
  const theme = useTheme()
  return <ol css={olStyle({ theme })} {...props} />
}

const Li = (props) => {
  const theme = useTheme()
  return <li css={liStyle({ theme })} {...props} />
}

const Table = (props) => {
  const theme = useTheme()
  return <table css={tableStyle({ theme })} {...props} />
}

const Thead = (props) => {
  const theme = useTheme()
  return <thead css={theadStyle({ theme })} {...props} />
}

const Tbody = (props) => {
  const theme = useTheme()
  return <tbody css={tbodyStyle({ theme })} {...props} />
}

const Tr = (props) => {
  const theme = useTheme()
  return <tr css={trStyle({ theme })} {...props} />
}

const Td = (props) => {
  const theme = useTheme()
  return <td css={tdStyle({ theme })} {...props} />
}

const Th = (props) => {
  const theme = useTheme()
  return <th css={thStyle({ theme })} {...props} />
}

const Pre = (props) => {
  return <React.Fragment {...props} />
}

const Em = (props) => {
  const theme = useTheme()
  return <em css={emStyle({ theme })} {...props} />
}

const Strong = (props) => {
  const theme = useTheme()
  return <strong css={strongStyle({ theme })} {...props} />
}

const Del = (props) => {
  const theme = useTheme()
  return <strike css={delStyle({ theme })} {...props} />
}

const InlineCode = (props) => {
  const theme = useTheme()
  return <code css={inlineCodeStyle({ theme })} {...props} />
}

const Hr = (props) => {
  const theme = useTheme()
  return <hr css={hrStyle({ theme })} {...props} />
}

const components = {
  wrapper: function Wrapper({ children, ...props }) {
    return <div {...props}>{children}</div>
  },
  p: Paragraph,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  thematicBreak: ThematicBreak,
  blockquote: Blockquote,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  td: Td,
  th: Th,
  pre: Pre,
  code: CodeBlock,
  em: Em,
  strong: Strong,
  del: Del,
  inlineCode: InlineCode,
  hr: Hr,
  a: Link,
  // img is rendered by gatsby-remark-images

  // Custom MDX components
  Experience,
  PageHeading,
  ProjectInfo,
  ProjectLink,
  ProjectSection,
  SectionHeader,
}

export default components
