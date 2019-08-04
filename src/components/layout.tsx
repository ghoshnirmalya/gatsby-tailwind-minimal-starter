import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'

import '../../static/assets/css/tailwind.css'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const Layout = ({ children }: any) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          bodyAttributes={{
            class: 'h-screen text-sm bg-gray-100'
          }}
        >
          <html lang="en" />
        </Helmet>
        <div className="flex p-6 bg-white mb-10 shadow">
          <ul className="flex container mx-auto px-4">
            <li className="mr-6">
              <Link className="text-blue-500 hover:text-blue-800" to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="container mx-auto px-4">{children}</div>
      </>
    )}
  />
)

export default Layout
