import React from 'react'
import { mq } from '../theming/theme'

const featuredSectionStyle = () =>
  mq({
    display: 'flex',
    flexWrap: 'wrap',
  })

export const FeaturedSection = (props) => {
  return <div css={featuredSectionStyle}>{props.children}</div>
}
