import { useStaticQuery, graphql } from "gatsby"
export const renderHomePage = () => {

const homePageData = useStaticQuery(
    graphql`
    query HomePage {
        allContentfulBlogPost(filter: {id: {eq: "f877039c-0280-53b5-a231-26c42ebc9664"}}) {
          nodes {
            title
            datePublished(formatString: "MMM DD, YYYY HH:MM A")
            content {
              childMarkdownRemark {
                html
              }
            }
            image {
              description
              file {
                url
              }
            }
          }
        }
      }
    `
  )
  return homePageData.allContentfulBlogPost.nodes[0]
}