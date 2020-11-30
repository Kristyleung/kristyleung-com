export const globalStyle = ({ theme }) => ({
  html: {
    boxSizing: 'border-box',
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },

  body: {
    backgroundColor: theme.colors.background,
  },

  /* gatsby-remark-images style
     ========================================================================== */

  '.gatsby-resp-image-figcaption': {
    fontFamily: theme.font.family.text,
    fontSize: theme.font.size[2],
    color: theme.colors.figcaption,
    margin: '16px',
  },
})
