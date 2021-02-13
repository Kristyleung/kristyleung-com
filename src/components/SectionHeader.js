import React from 'react'
import { css, useTheme } from '@emotion/react'

const sectionHeaderStyle = ({ theme }) =>
  css({
    fontFamily: theme.font.family.text,
    borderBottom: `1px solid transparent`,
    borderColor: theme.colors.text,
    paddingTop: theme.spacing[2], 
    paddingBottom: theme.spacing[2], 
  })

const SectionHeader = ({ children }) => {
  const theme = useTheme()
  return <p css={sectionHeaderStyle({ theme })}>{children}</p>
}

export default SectionHeader
