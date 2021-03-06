import React from 'react'

import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout
    title="404: Not found"
    description="You just hit a route that doesn't exist... the sadness."
    keywords={['404', 'Not found']}
    location={{ pathname: '/404' }}
  >
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
