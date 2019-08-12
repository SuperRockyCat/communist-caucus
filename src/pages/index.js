import React from "react"
import Layout from "../components/layout"
import { renderHomePage } from "../hooks/homePageQuery"



const HomePage = () => {
  const {
    title,
    datePublished,
    content: {
      childMarkdownRemark: {html}
    },
    image: {
      description,
      file: {url}
    }
  } = renderHomePage();
  return(
    <>
    <Layout>
    <div className="d-flex flex-column w-100 align-items-center justify-content-center">
      <img className="p-2 w-50 h-50" alt={description} src={url} />
      <h1 className="p-2">{title}</h1>
      <small className="p-2" >Posted: {datePublished}</small>
      <div className="p-2 w-75 text-justify" dangerouslySetInnerHTML={{__html: html}}/>
    </div>
    </Layout>
    </>
  )};

export default HomePage;
