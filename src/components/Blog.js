import React from 'react'
import PropTypes from 'prop-types'
import { Page } from './Page'

const Blog = ({ children }) => <Page>{children}</Page>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Blog
