import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import style from '../style/resourcesStyle'

const Resources = ({ data }) => {
  return (
    <div className="Resources content" key="resources" css={style}>
      <Helmet title={`${data.site.siteMetadata.title} - Resources`} />
      <div className="disclaimer">
        <p className="br">
          The resources provided on this page are intended to be used as a
          starting point for the various needs of SDS families. This list is not
          comprehensive nor exhaustive of all the resources available, in whole
          or in part, to SDS families. SDS Research Fund is not in partnership
          with these organizations. By providing links to these sites, SDS
          Research Fund does not guarantee, approve, nor endorse the information
          or products available on these sites.
        </p>
        <p>
          The Resources provided on this page are not a substitute for the
          medical care and advise your doctor can provide. Please consult with
          your physician before utilizing any new resources.
        </p>
      </div>
      <div className="featured">
        <h4>Feature Resource!</h4>
        <p>
          Informing those who come in close and/or frequent contact with
          individuals affected by Shwachman Diamond Syndrome can be a challenge.
          It can be a lot for friends, family, and others to process. This SDS
          Awareness Card is a great resource to give to anyone who has a need or
          want to know more about SDS.{' '}
        </p>
        <div className="thumb">
          <a href="/resources/awareness_card_1.png" target="_blank">
            <Img
              sizes={data.featured.childImageSharp.sizes}
              outerWrapperClassName="img"
              alt="SDS awareness card front"
              key="f1Img"
            />
          </a>
          <a href="/resources/awareness_card_2.png" target="_blank">
            <Img
              sizes={data.featured2.childImageSharp.sizes}
              outerWrapperClassName="img"
              alt="SDS awareness card front"
              key="f2Img"
            />
          </a>
        </div>
        <p>
          As a multi-system disorder, explaining Shwachman Diamond Syndrome
          isn't an easy elevator speech- it's more of an explanation meant for a
          road trip. When you don't have the time to give a full explanation of
          SDS, consider closing your brief conversation with this awareness
          card, encouraging others to learn more for themselves, and also how
          they can help. Click{' '}
          <a
            href="/resources/SDS Awareness Card.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{' '}
          to download.
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html.replace(
            /href="(\/resources\/.*">)/gi,
            'target="_blank" href="$1'
          ),
        }}
      />
    </div>
  )
}

export default Resources

export const query = graphql`
  query Resources {
    site {
      ...SiteTitle
    }
    markdownRemark(frontmatter: { path: { eq: "/resourceLinks" } }) {
      html
    }
    featured: file(relativePath: { eq: "resources/featured-1.png" }) {
      childImageSharp {
        sizes(maxWidth: 350) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    featured2: file(relativePath: { eq: "resources/featured-2.png" }) {
      childImageSharp {
        sizes(maxWidth: 350) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
