import { useStaticQuery, graphql } from "gatsby"
export const useAboutPageData = () => {

const aboutPageData = useStaticQuery(
    graphql`
    query aboutPage {
      contentfulAboutPage {
        headline
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
      }
    }
    `
  )
  return aboutPageData.contentfulAboutPage
}