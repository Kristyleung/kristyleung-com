import React from 'react'
import PropTypes from 'prop-types'
import { Page } from '../components/Page'
import Layout from '../components/Layout'

const Default = ({ data, children }) => {
  console.log('template-data', data)
  return (
    <Layout siteTitle={'Kristy Leung'}>
      <Page>{children}</Page>
    </Layout>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
