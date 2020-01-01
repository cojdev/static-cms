const path = require(`path`);

const getTemplate = filename => path.resolve(`src/templates/${filename}.jsx`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `)
  
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const id = node.id;
    console.log(node.frontmatter.template);
    if (node.frontmatter.path.includes('/posts/')) {
      createPage({
        path: node.frontmatter.path,
        component: getTemplate('post'),
        context: {id}, // additional data can be passed via context
      })
    } else {
      createPage({
        path: node.frontmatter.path,
        component: getTemplate(node.frontmatter.template),
        context: {id}, // additional data can be passed via context
      })
    }
  })
}