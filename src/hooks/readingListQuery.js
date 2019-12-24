import { useStaticQuery, graphql } from "gatsby"
export const useReadingListData = () => {

const readingListData = useStaticQuery(
  graphql`
  query ReadingList {
    contentfulBlogPost(slug: {eq: "reading-list"}) {
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
return readingListData.contentfulBlogPost
}