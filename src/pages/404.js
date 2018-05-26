import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const NotFoundPage = ({ data }) => (
  <div className="content" style={{ paddingTop: 30 }} key="notFound">
    <Helmet title={`${data.site.siteMetadata.title} - Not Found`} />
    <h1>NOT FOUND</h1>
    <p>
      That page couldn't be found... <Link to="/">Home</Link>
    </p>
  </div>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundQ {
    site {
      ...SiteTitle
    }
  }
`
