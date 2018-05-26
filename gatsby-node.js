/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem')

exports.onPreBuild = () => {
  global.netlifyProps = {
    'data-netlify': 'true',
    'netlify-honeypot': 'somefield'
  }
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark` && !node.frontmatter.path) {
    let value = createFilePath({ node, getNode })
    value = value.substr(value.length - 1) === '/' ? value.substr(0, value.length - 1) : value
    value = path.join('/blog', value.split('/').pop())
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql, getNode }) => {
  const { createPage } = boundActionCreators;
  const blogPost = path.resolve(`src/templates/blogPost.js`);

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    let postIdx = 0
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if(!node.fields || !node.fields.slug) return // ignore if no slug
      const slugParts = node.fields.slug.split('/').pop().split('-')
      const imgExts = '(jpg|jpeg|png)'
      const relPath = `/\\/${slugParts[2]}\\/${slugParts[0]}-${slugParts[1]}\\/`
      const rPathRegExp =  `${relPath}(?!author).*${imgExts}/`
      const authorRegExp = `${relPath}author.*${imgExts}/`
      const pageOpts = {
        path: node.fields.slug,
        component: blogPost,
        context: {
          slug: node.fields.slug,
          rPathRegExp,
          authorRegExp
        }
      }
      createPage(pageOpts);
      if(postIdx === 0) { // show latest post on /blog path
        postIdx++
        pageOpts.path = '/blog'
        createPage(pageOpts)
      }
    });
  });
};