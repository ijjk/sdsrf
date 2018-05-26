import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import rehypeReact from 'rehype-react'
import style from '../style/donateStyle'

const paypalLink =
  'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EWDTRLTQ28H52'

const Donate = ({ data }) => {
  const PaypalBtn = () => (
    <div className="paypal">
      <a href={paypalLink} rel="noopener noreferrer" target="_blank">
        <button>Click here to donate with PayPal</button>
        <Img
          resolutions={data.optionsImg.childImageSharp.resolutions}
          alt="Credit Card Badges"
          key="ccImg"
        />
      </a>
    </div>
  )
  const MemoImg = () => (
    <div className="memo">
      <Img
        sizes={data.memoImg.childImageSharp.sizes}
        alt="pointing out memo field on paypal page"
        key="memoImg"
      />
    </div>
  )
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'paypal-button': PaypalBtn,
      'memo-image': MemoImg,
    },
  }).Compiler

  return (
    <div className="content" css={style} key="donate">
      <Helmet title={`${data.site.siteMetadata.title} - Donate`} />
      {renderAst(data.markdownRemark.htmlAst)}
    </div>
  )
}

export default Donate

export const query = graphql`
  query DonateDocQuery {
    site {
      ...SiteTitle
    }
    markdownRemark(frontmatter: { path: { eq: "/donateInfo" } }) {
      htmlAst
    }
    optionsImg: file(relativePath: { eq: "donate/options.png" }) {
      childImageSharp {
        resolutions(width: 276) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    memoImg: file(relativePath: { eq: "donate/memo.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
