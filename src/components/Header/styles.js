export const focusState = ({ theme }) => ({
  ':focus': {
    outline: '2px dotted transparent',
    outlineColor: theme.colors.focus,
  },
})

export const headerStyle = ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'wrap',
  justifyContent: 'space-between',
  padding: theme.spacing[2],
})

export const brandLinkStyle = ({ theme }) => ({
  color: theme.colors.text,
  fontFamily: theme.font.family.heading,
  fontSize: theme.font.size[3],
  padding: theme.spacing[1],
  textDecoration: 'none',
  ...focusState({ theme }),
})

export const navStyle = ({ theme }) => ({
  alignItems: 'center',
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: theme.spacing[1],
})

export const navLinkStyle = ({ theme }) => ({
  fontSize: theme.font.size[3],
  padding: theme.spacing[1],
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  ...focusState({ theme }),
})

export const navLinkActiveStyle = {
  textDecoration: 'underline',
}
