import React from 'react'
import { css } from '@emotion/react'

const sectionStyle = css({
  backgroundColor: 'silver',
})

export const Section = props => <section css={sectionStyle} {...props} />
