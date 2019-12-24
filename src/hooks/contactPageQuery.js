import { useStaticQuery, graphql } from "gatsby"
export const useContactPageData = () => {

const contactPageData = useStaticQuery(
  graphql`
    query contactPage {
    contentfulContact {
        content {
        childMarkdownRemark {
            html
        }
        }
        title
        image {
        description
        file {
            url
        }
        }
    }
    }`
)
return contactPageData.contentfulContact
}