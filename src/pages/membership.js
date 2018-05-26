import React from 'react'
import Helmet from 'react-helmet'
import MemContent from '../components/MemContent'

const Membership = props => (
  <MemContent {...props} key="membership">
    <Helmet title={`${props.data.site.siteMetadata.title} - Membership`} />
  </MemContent>
)
export default Membership

export const query = graphql`
  fragment pillholderImg on File {
    childImageSharp {
      resolutions(width: 300) {
        ...GatsbyImageSharpResolutions
      }
    }
  }

  query MembershipQuery {
    site {
      ...SiteTitle
    }
    pillholder: file(relativePath: { eq: "membership/pillholder.jpg" }) {
      ...pillholderImg
    }
  }
`
