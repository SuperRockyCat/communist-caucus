import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import shortid from "shortid"


const BlogPost = ({data}) => {
  const title = data.contentfulBlogPost.title
  const datePublished = data.contentfulBlogPost.datePublished
  const author = data.contentfulBlogPost.author
  const tags = data.contentfulBlogPost.tags
  const description = data.contentfulBlogPost.image.description
  const url = data.contentfulBlogPost.image.file.url
  const html = data.contentfulBlogPost.content.childMarkdownRemark.html

  return(
    <>
    <Layout> 
    <div className="d-flex flex-column w-100 align-items-center justify-content-center">
      <img className="p-2 w-50 h-50" alt={description} src={url} />
      <h1 className="p-2">{title}</h1>
      <small className="p-2" >Posted: {datePublished} {"//"} By: {author}</small>
      <small className="tags">
            <ul className="list-unstyled list-inline p-2">
                Tags: {tags.map((value, index) => {
                    return  <a key={shortid.generate()} href="#"><li className=" p-1 m-1 text-light bg-dark list-inline-item" key={index}>{value}</li></a>
                })}
            </ul>
      </small>
      <div className="p-2 w-75 text-justify" dangerouslySetInnerHTML={{__html: html}}/>
      <p>-------------------------------------------------------------</p>
      <p><Link to="/blog">Return to Blog</Link></p>
    </div>
    </Layout>
    </>
  )};

export const query = graphql`
  query BlogPostBySlug ($slug : String) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    tags
    datePublished(formatString: "MMMM DD, YY HH:MM A")
    author
    image {
      file {
        url
      }
    description
    }
    content {
      childMarkdownRemark {
        html
      }
    }
  }
}`

export default BlogPost



