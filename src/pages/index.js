import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import style from '../style/indexPageStyle'

const getBannerState = (props, state) => {
  const { mobBannerImage, bannerImage } = props.data
  const { bannerMode } = state
  const deskState = {
    bannerMode: 'desk',
    bannerProps: {
      sizes: bannerImage.childImageSharp.sizes,
    },
  }
  const mobState = {
    bannerMode: 'mob',
    bannerProps: {
      resolutions: mobBannerImage.childImageSharp.resolutions,
    },
  }
  if (typeof window === 'undefined') return deskState
  if (window.innerWidth <= 450 && bannerMode !== 'mob') {
    return mobState
  } else if (window.innerWidth > 450 && bannerMode !== 'desk') {
    return deskState
  }
  return null
}

class IndexPage extends Component {
  state = getBannerState(this.props, {})

  checkSize = () => {
    const newState = getBannerState(this.props, this.state)
    if (newState) this.setState(newState)
  }

  componentDidMount() {
    this.checkSize()
    window.addEventListener('resize', this.checkSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkSize)
  }

  render() {
    const { data } = this.props
    const { bannerProps } = this.state
    const sizes = bannerProps.sizes || bannerProps.resolutions

    return (
      <div className="IndexPage" key="IndexPage" css={style}>
        <Helmet title={`${data.site.siteMetadata.title} - Home`} />
        <div className="Banner">
          <div
            className="bg"
            dangerouslySetInnerHTML={{
              __html: `
              <img src="${sizes.base64}" 
                alt='loading image of family in fall' 
                id='placeholder'
              />
              <img src="${sizes.src}"
                srcSet="${sizes.srcSet}"
                alt="family in fall"
                onload="(function() { document.querySelector('#placeholder').style.opacity = 0 })()"
              />
              <noscript><style>#placeholder { opacity: 0; }</style></noscript>
              `,
            }}
          />
          <div className="tagline">
            <div />
            <h4>
              EMPOWERING FAMILIES <br />THROUGH RESEARCH <br />FOR A CURE
            </h4>
          </div>
        </div>

        <div className="section left pad">
          <p className="head">
            Bone marrow failure... Predisposition to fatal blood disorders...
            Potential for a Bone Marrow Transplant...
          </p>
          <div className="image-text content full">
            <div className="text text-left">
              <p>
                These are all phrases used to describe the diagnosis of
                Shwachman-Diamond Syndrome. Usually diagnosed early in life,
                these are words no parent wants to hear. With a median
                life-expectancy of 35-years, these families need hope.
              </p>
              <p>
                When the President of the SDS Research Fund's daughter received
                this rare diagnosis, she quickly learned that the funding for
                research on SDS is just that: RARE.
              </p>
              <div className="split" />
              <h4>Our Mission</h4>
              <p>
                The mission of SDS Research Fund is to empower families through
                research for a cure. In research, there is hope.
              </p>
            </div>
            <Img
              resolutions={data.ribbonImage.childImageSharp.resolutions}
              outerWrapperClassName="Img"
              alt="rare disease ribbon"
              key="ribbonImg"
            />
          </div>
        </div>

        <div className="section right padMed">
          <div className="image-text content full">
            <Img
              resolutions={data.heartImage.childImageSharp.resolutions}
              outerWrapperClassName="Img"
              alt="hands shaped as heart"
              key="heartImg"
            />
            <div className="text text-right">
              <h5>About SDS Research Fund</h5>
              <p>
                SDS Research Fund is a US-based public charity nonprofit
                organization formed in December 2016. Our vision is that
                families of individuals living with Shwachman Diamond Syndrome
                will experience support and gain hope from their communities
                through events that raise funds for research on SDS.
              </p>
              <p>
                SDS Research Fund believes empowerment is the key to a cure for
                SDS. Doctors and researchers need to be empowered with financial
                and other resources to make advances. The families of those
                affected by this chronic condition need to be empowered to help.
                Those affected with SDS need to feel empowered by their
                communities. SDS Research Fund was established to boost the
                funds going toward research for the treatment of and a cure for
                SDS. SDS Research Fund hopes to ignite a spirit of empowerment.
              </p>
            </div>
          </div>
        </div>

        <div className="section left padSm">
          <h4 className="head">Click below for information about</h4>
          <div className="image-text">
            {[
              ['Our Board of Directors', '/board'],
              ['Becoming a Member', '/membership'],
            ].map(item => (
              <Link to={item[1]} key={item[1]}>
                <button>{item[0]}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default IndexPage
export const query = graphql`
  query IndexPageQuery {
    site {
      ...SiteTitle
    }
    mobBannerImage: file(relativePath: { eq: "index/banner.jpg" }) {
      childImageSharp {
        resolutions(width: 450, height: 450, quality: 60, cropFocus: CENTER) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    bannerImage: file(relativePath: { eq: "index/banner.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 900, quality: 60) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    ribbonImage: file(relativePath: { eq: "index/ribbon.png" }) {
      childImageSharp {
        resolutions(width: 160, height: 225) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    heartImage: file(relativePath: { eq: "index/heart.jpg" }) {
      childImageSharp {
        resolutions(width: 250, height: 185, cropFocus: NORTH) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
