import { useStaticQuery, graphql } from "gatsby"
export const useHomePageData = () => {

const homePageData = useStaticQuery(
    graphql`
      query HomePage {
        contentfulBlogPost(slug: {eq: "welcome-post"}) {
          author
          content {
            childMarkdownRemark {
              html
            }
          }
          image {
            file {
              url
            }
            description
          }
          slug
          tags
          title
          datePublished(formatString: "MMM DD, YYYY HH:MM A")
        }
      }`
  )
  return homePageData.contentfulBlogPost
}