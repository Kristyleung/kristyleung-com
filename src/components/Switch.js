import React from 'react'
import { focusState } from './Header/styles'
import { useTheme } from '@emotion/react'
import Icon from './Icon'

const switchStyle = ({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing[1],
  margin: 'auto',
  border: 'none',
  color: theme.colors.text,
  cursor: 'pointer',
  outline: 'none',
  ':hover, :focus': {
    color: theme.colors.link,
  },
  ...focusState({ theme }),
})

const Switch = props => {
  const theme = useTheme()
  return (
    <button css={switchStyle({ theme })} {...props}>
      <Icon icon={props.icon} />
    </button>
  )
}

export default Switch
