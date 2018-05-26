import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import style from '../style/projectsStyle'

const Projects = ({ data }) => (
  <div className="Projects content" key="projects" css={style}>
    <Helmet title={`${data.site.siteMetadata.title} - Projects`} />
    <div>
      <div className="quoteImg">
        <h6>
          "I like to encourage people to realize that any action is a good
          action if it's proactive and there is positive intent behind it."{' '}
          <br />-{' '}
          <span>
            Michael J. Fox (advocate for research on Parkinson's Disease)
          </span>
        </h6>
        <div>
          <div className="wrap">
            <div className="blur" />
            <div className="blur" />
            <Img
              sizes={data.superKid.childImageSharp.sizes}
              alt="kid putting fist in air like superman"
              outerWrapperClassName="img"
              className="img"
              key="superkidImg"
            />
          </div>
        </div>
        <h6>
          "I like to encourage people to realize that any action is a good
          action if it's proactive and there is positive intent behind it."{' '}
          <br />-{' '}
          <span>
            Michael J. Fox (advocate for research on Parkinson's Disease)
          </span>
        </h6>
      </div>
    </div>

    <div className="info">
      <p>
        SDS Research Fund understands the emotional energy it takes to manage
        and battle a chronic condition. That's why we encourage families to find
        strength through action until one day, no one has to endure a lifetime
        of living with Shwachman Diamond Syndrome.
      </p>
      <p>
        We have a dedicated and experienced team who will work with you to
        coordinate your next FUNdraiser. From small to large gatherings, we have
        ideas for any crowd.
      </p>
      <p>
        SDS Research Fund can assist with promotional materials in print and for
        social media, decorations, associated event costs, and more.{' '}
        <a href="mailto:contactus@sdsresearchfund.org">Contact us</a> today to
        get started!
      </p>
      <div className="wrapPic">
        <Img
          resolutions={data.eventPic.childImageSharp.resolutions}
          alt="Stick it to SDS event 2016"
          outerWrapperClassName="img"
          key="eventImg"
        />
        <h5>Support Events</h5>
        <p>
          It may seem a little daunting to plan an event around an important
          procedure like a bone marrow biopsy. For some, it is a welcome
          distraction and for others, it may seem overwhelming. That's what
          we're here for! Whether it's to celebrate the completion of a bone
          marrow biopsy, to recognize a successful transplant on a Rebirthday,
          or to honor a graduated SDS Warrior who has been promoted beyond this
          life, we're here to help. Experienced and dedicated event coordinators
          are ready to assist you. SDS Research Fund can help with
          brainstorming, planning, and implementing your vision.
        </p>
      </div>
      <h5 className="revealNote">
        Check back for the reveal of upcoming SDS Research Fund projects!
      </h5>
    </div>
  </div>
)

export default Projects

export const query = graphql`
  query ProjectsQuery {
    site {
      ...SiteTitle
    }
    superKid: file(relativePath: { eq: "projects/superkid.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    eventPic: file(relativePath: { eq: "projects/event.jpg" }) {
      childImageSharp {
        resolutions(width: 230, height: 175) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`
