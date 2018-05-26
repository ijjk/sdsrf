import React from 'react'
import Helmet from 'react-helmet'
import BoardMems from '../components/BoardMems/BoardMems'

const Board = ({ data }) => (
  <div
    className="Board"
    key="board"
    css={{
      padding: '40px 0',
      '& .content:nth-child(1) p': {
        marginBottom: 22,
      },
    }}
  >
    <Helmet title={`${data.site.siteMetadata.title} - Board`} />
    <div className="content">
      <h5>SDS Research Fund Board</h5>
      <p>
        SDS Research Fund is composed of a volunteer Board of Directors. The
        members of the Board bring different skills, perspectives, and
        contributions to supporting the mission of the Research Fund. They do
        not receive compensation for serving the Research Fund.
      </p>
      <p>
        Members of the Board are elected by vote at the end of a position's term
        limit. The Board of Directors of SDS Research Fund is committed to three
        primary legal duties: duty of care, duty of loyalty, and duty of
        obedience. The Board welcomes your input and is always looking to tap
        into the strengths and talents of others in SDS community.{' '}
        <a href="mailto:contactus@sdsresearchfund.org">Contact us</a> today!
      </p>
      <p>Click pictures below for info on our volunteer Board of Directors.</p>
    </div>
    <BoardMems {...data} />
  </div>
)

export default Board

export const query = graphql`
  query BoardQuery {
    site {
      ...SiteTitle
    }
    markdownRemark(frontmatter: { path: { eq: "/boardMems" } }) {
      htmlAst
    }
    profileImgs: allFile(
      filter: { relativePath: { regex: "/board/profile/" } }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 150, maxHeight: 200, cropFocus: CENTER) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    familyImgs: allFile(filter: { relativePath: { regex: "/board/family/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 250, cropFocus: NORTH) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
