import * as React from 'react'

import Layout from '../components/layout'

const IndexPage: React.SFC = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Gatsby Tailwind CSS minimal starter</h1>
        <h2 className="text-xl text-gray-700">Sample app built using Gatsby and Tailwind CSS</h2>
      </div>
    </Layout>
  )
}

export default IndexPage
