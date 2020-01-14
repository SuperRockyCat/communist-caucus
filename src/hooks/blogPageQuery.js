import { useStaticQuery, graphql } from "gatsby"
export const useBlogPostsData = () => {

const blogPageData = useStaticQuery(
    graphql`
    query BlogPage {
      allContentfulBlogPost {
        edges {
          node {
            title
            author
            image {
              file {
                url
              }
              description
            }
            content {
              childMarkdownRemark {
                excerpt(format: HTML, pruneLength: 800)
              }
            }
            datePublished(formatString: "MMMM DD, YY HH:MM A")
            tags
            slug
          }
        }
      }
    }
    `
  )
  return blogPageData.allContentfulBlogPost.edges
}