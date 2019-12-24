import { useStaticQuery, graphql } from "gatsby"
export const useAboutPageData = () => {

const aboutPageData = useStaticQuery(
  graphql`
  query AboutPage {
    contentfulBlogPost(slug: {eq: "strategic-approaches-for-2020"}) {
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
return aboutPageData.contentfulBlogPost
}