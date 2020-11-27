import { css } from '@emotion/react'

export const globalStyle = css`
  /* Good, Better, and (Probably) Best box-sizing Reset
  ========================================================================== */

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* gatsby-remark-images
     ========================================================================== */

  .gatsby-resp-image-figcaption {
    font-family: Public Sans;
    font-size: 14px;
    color: grey;
    margin: 1em auto;
  }
`
