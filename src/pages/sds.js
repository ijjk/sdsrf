import React from 'react'
import Helmet from 'react-helmet'
import style from '../style/sdsStyle'

const SDS = ({ data }) => (
  <div className="content" key="sds" css={style}>
    <Helmet title={`${data.site.siteMetadata.title} - SDS`} />
    <div
      dangerouslySetInnerHTML={{
        __html: data.markdownRemark.html,
      }}
    />
  </div>
)

export default SDS

export const query = graphql`
  query SDSInfoQuery {
    site {
      ...SiteTitle
    }
    markdownRemark(frontmatter: { path: { eq: "/sdsInfo" } }) {
      html
    }
  }
`
