import React from 'react'
import { css } from '@emotion/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'

const preStyle = css({
  padding: 16,
  fontSize: 18,
  lineHeight: 1.25,
  overflow: 'auto',
})

const CodeBlock = ({ children, className, ...props }) => {
  const language = className ? className.replace(/language-/, '') : 'html'
  return (
    <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style} css={preStyle}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
