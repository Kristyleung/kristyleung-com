import { mq } from '../../theming/theme'

export const paragraphStyle = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.text,
  fontSize: theme.font.size[5],
  fontWeight: 300,
  lineHeight: 1.7,
  margin: 0,
  marginBottom: theme.spacing[4],
})

export const h1Style = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[10],
})

export const h2Style = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[8],
})

export const h3Style = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[7],
})

export const h4Style = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[6],
})

export const h5Style = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[6],
})

export const h6Style = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[6],
})

export const thematicBreakStyle = ({ theme }) => ({
  fontFamily: theme.font.family.text,
})

export const blockquoteStyle = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.heading,
  p: {
    fontFamily: theme.font.family.heading,
    fontSize: theme.font.size[8],
    lineHeight: 1.7,
    ':before': {
      content: '"— "',
    },
  },
})

export const ulStyle = ({ theme }) => ({
  margin: 0,
  marginBottom: theme.spacing[4],
})

export const olStyle = ({ theme }) => ({
  margin: 0,
  marginBottom: theme.spacing[4],
})

export const liStyle = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.text,
  fontSize: theme.font.size[5],
  lineHeight: 1.7,
})

export const tableStyle = ({ theme }) => ({})

export const theadStyle = ({ theme }) => ({})

export const tbodyStyle = ({ theme }) => ({})

export const trStyle = ({ theme }) => ({})

export const tdStyle = ({ theme }) => [paragraphStyle({ theme }), { marginBottom: 0 }]

export const thStyle = ({ theme }) =>
  mq([
    paragraphStyle({ theme }),
    {
      fontWeight: 'bold',
      textAlign: 'left',
      marginBottom: 0,
    },
  ])

export const emStyle = ({ theme }) => ({
  fontFamily: theme.font.family.text,
})

export const strongStyle = ({ theme }) => ({
  fontFamily: theme.font.family.text,
})

export const delStyle = ({ theme }) => ({
  fontFamily: theme.font.family.text,
})

export const inlineCodeStyle = ({ theme }) => ({
  backgroundColor: theme.colors.text,
  display: 'inline-block',
  fontFamily: 'monospace, monospace',
  fontSize: '1rem',
  padding: '0 4px',
  color: theme.colors.background,
})

export const hrStyle = ({ theme }) => ({
  border: 0,
  height: 2,
  backgroundColor: theme.colors.text,
  margin: 0,
  marginBottom: theme.spacing[4],
})
