import facepaint from 'facepaint'
import '../css/typography.css'
import '@fontsource/public-sans/300.css'

export const mq = facepaint(['@media(min-width: 420px)', '@media(min-width: 920px)', '@media(min-width: 1120px)'])

const fonts = {
  heading: `"Tiempos Fine", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  text: `"Public Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
}

const color = {
  amber: '#fca623',
  black: '#000',
  blue: '#0000ff',
  bullet: '#1e1e1e',
  caviar: '#262626',
  grey: '#767676',
  primary: '#707aed',
  red: '#E34140',
  smoke: '#f5f5f7',
  white: '#fff',
}

const sizes = [8, 12, 14, 16, 18, 20, 22, 24, 32, 52, 64]

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
