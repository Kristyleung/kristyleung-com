const fonts = {
  heading: 'Public Sans',
  text: 'Public Sans',
}

const color = {
  amber: '#fca623',
  black: '#000',
  bullet: '#1e1e1e',
  caviar: '#262626',
  grey: '#767676',
  primary: '#707aed',
  smoke: '#f5f5f7',
  white: '#fff',
}

const sizes = [8, 12, 14, 16, 18, 24, 32, 64]

const spacings = [4, 8, 16, 24, 32, 64]

const baseTheme = {
  font: {
    family: fonts,
    size: sizes,
  },
  spacing: spacings,
}

export const light = {
  ...baseTheme,
  colors: {
    background: color.white,
    figcaption: color.grey,
    focus: color.amber,
    footer: color.smoke,
    header: color.white,
    link: color.primary,
    text: color.caviar,
  },
}

export const dark = {
  ...baseTheme,
  colors: {
    background: color.caviar,
    figcaption: color.grey,
    focus: color.amber,
    footer: color.bullet,
    header: color.white,
    link: color.primary,
    text: color.smoke,
  },
}
