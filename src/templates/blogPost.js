import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import rehypeReact from 'rehype-react'
import style from '../style/blogPostStyle'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const getDateStr = date => {
  date = new Date(date)
  const month = months[date.getMonth()],
    year = date.getFullYear()
  let day = '' + date.getDate()
  switch (day.substr(day.length - 1, 1)) {
    case '1':
      day += 'st'
      break
    case '2':
      day += 'nd'
      break
    case '3':
      day += 'rd'
      break
    default:
      day += 'th'
      break
  }
  return `${month} ${day}, ${year}`
}
const WrapCenter = ({ children }) => (
  <div className="wrapCenter">{children}</div>
)

export default function Template({ data, pathContext }) {
  const { title, author, date } = data.markdownRemark.frontmatter
  const authFirstName = author.split(' ')[0]
  let authRegExp = pathContext.authorRegExp.split('/author').pop()
  authRegExp = `author${authRegExp.substr(0, authRegExp.length - 1)}`
  authRegExp = new RegExp(authRegExp)

  const ResImg = ({ src, alt, ...props }) => {
    const className = props.className ? ' ' + props.className : ''
    let sizes = src.match(authRegExp)
      ? data.authorImg.childImageSharp.sizes
      : null

    if (!sizes) {
      sizes = data.allFile.edges
        .filter(({ node }) => node.relativePath.split('/').pop() === src)
        .pop().node.childImageSharp.sizes
    }
    return (
      <Img
        {...{ sizes, alt }}
        outerWrapperClassName={'Img' + className}
        key={src}
      />
    )
  }
  const Author = ({ children, src }) => (
    <div className="aboutAuth">
      <ResImg {...{ src }} alt={'picture of ' + authFirstName} />
      <h6>About {authFirstName}</h6>
      {children}
    </div>
  )
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'res-img': ResImg,
      author: Author,
      wrapcenter: WrapCenter,
    },
  }).Compiler

  return (
    <div className="BlogPost content-full" key={date} css={style}>
      <Helmet title={`${data.site.siteMetadata.title} - ${title}`} />
      <div className="post">
        <h5 className="title">{title}</h5>
        <p className="date">
          by {author} - {getDateStr(date)}
        </p>
        {renderAst(data.markdownRemark.htmlAst)}
      </div>
      <div className="sidebar">
        <h5>Archives</h5>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { fields, frontmatter } = node
            return (
              <li key={fields.slug}>
                <Link to={fields.slug}>{getDateStr(frontmatter.date)}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $rPathRegExp: String!
    $authorRegExp: String!
  ) {
    site {
      ...SiteTitle
    }
    authorImg: file(relativePath: { regex: $authorRegExp }) {
      childImageSharp {
        sizes(maxWidth: 100) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    allFile(filter: { relativePath: { regex: $rPathRegExp } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 250) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//blog//" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        author
        date
      }
    }
  }
`
