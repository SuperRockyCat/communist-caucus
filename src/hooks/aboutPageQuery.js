import { useStaticQuery, graphql } from "gatsby"
export const renderAboutPage = () => {

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