const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve('./src/templates/projectTemplate.js')
  const response = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulProject.edges.forEach(edge => {
    createPage({
      component: template,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
