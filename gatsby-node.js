const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPost = path.resolve(`./src/pages/blog-post.js`)
    return graphql(
        `
        {
            allContentfulBlogPost {
              edges {
                node {
                  slug
                }
                previous {
                  id
                }
                next {
                  id
                }
              }
            }
          }
        `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }
        
        //Create Blog Post Pages
        const posts = result.data.allContentfulBlogPost.edges

        posts.forEach((post, index) => {

            createPage({
                path: post.node.slug,
                component: blogPost,
                context: {
                    slug: post.node.slug,
                },
            })
        })
    })
}