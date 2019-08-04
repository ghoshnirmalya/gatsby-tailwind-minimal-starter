import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage: React.SFC = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <Link to="/" className="text-blue-700 font-semibold">
          Nothing found here! Click here to go back to the home page.
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
