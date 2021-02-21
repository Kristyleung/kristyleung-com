import React from 'react'
import { useTheme } from '@emotion/react'
import GatsbyImage from 'gatsby-image'
import { paragraphStyle, h1Style } from '../components/MDXProvider/styles'
import Link from '../components/Link'
import { mq } from '../theming/theme'

const featuredStyle = ({ theme }) =>
  mq({
    borderTop: `1px solid transparent`,
    borderColor: theme.colors.border,
    display: 'flex',
    flexDirection: ['column', 'row'],
    paddingBottom: theme.spacing[3],
    paddingTop: theme.spacing[3],
    width: '100%',
    h2: {
      display: 'inline',
      backgroundImage: `linear-gradient(180deg, transparent 65%, #dddcc0 0)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '0% 100%',
      textDecoration: 'none',
      transition: 'background-size .4s ease',
    },
    ':hover': {
      h2: {
        backgroundSize: '100% 100%',
        cursor: 'pointer',
      },
    },
  })

const featuredContentStyle = ({ theme }) =>
  mq({
    flexDirection: 'column',
    flex: 1,
    paddingLeft: [0, theme.spacing[3]],
    paddingTop: [theme.spacing[2], 0],
  })

const featuredImageStyle = ({ theme }) =>
  mq({
    width: ['100%', 300],
    height: 300,
  })

export const FeaturedProject = props => {
  const theme = useTheme()
  const { title, abstract, image, company, link } = props
  return (
    <Link css={featuredStyle({ theme })} to={link}>
      <GatsbyImage css={featuredImageStyle} fluid={image} />
      <div css={featuredContentStyle({ theme })}>
        {company && (
          <p css={[paragraphStyle({ theme }), { marginBottom: 0, fontSize: theme.font.size[6] }]}>{company}</p>
        )}
        {title && (
          <h2
            css={[
              h1Style({ theme }),
              {
                fontSize: theme.font.size[9],
                marginTop: theme.spacing[1],
                marginBottom: theme.spacing[2],
              },
            ]}
          >
            {title}
          </h2>
        )}
        {abstract && <p css={[paragraphStyle({ theme }), { fontSize: theme.font.size[6], marginBottom: 0, marginTop: 16 }]}>{abstract}</p>}
      </div>
    </Link>
  )
}
