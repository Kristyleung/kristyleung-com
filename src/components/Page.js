import React from 'react'
import { css } from '@emotion/react'

const pageStyle = css({
  maxWidth: 960,
  margin: 'auto',
  padding: '1.5rem 1rem',
})

export const Page = props => <div css={pageStyle} {...props} />
