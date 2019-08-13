import React from "react"
import Layout from "../components/layout"
import { renderBlogPage } from "../hooks/blogPageQuery"
import shortid from "shortid"


const blogPage = () => {
    const postsArray = renderBlogPage();
    const posts = []
    
    for (const [index, value] of postsArray.entries()) {
        posts.push(
        <div className="d-flex flex-column w-100 align-items-center justify-content-center bg-light pt-2 mt-3" key={index}>
            <img className="p-2 w-50 h-50" alt={value.node.image.description} src={value.node.image.file.url} />
            <h1 className="p-2" >{value.node.title}</h1>
            <small className="p-2" >Posted: {value.node.datePublished} {"//"} By: {value.node.author}</small>
            <small className="tags">
            <ul className="list-unstyled list-inline p-2">
                Tags: {value.node.tags.map((value, index) => {
                    return  <a key={shortid.generate()} href="#"><li className=" p-1 m-1 text-light bg-dark list-inline-item" key={index}>{value}</li></a>
                })}
            </ul>
            </small>
            <div className="p-2 w-75 text-justify" 
            dangerouslySetInnerHTML={{__html: value.node.content.childMarkdownRemark.html}} />
        </div> 
        )
    };
    return(
    <>
    <Layout>
            {posts}
            {console.log(posts)}
    </Layout>
    </>
    )};

export default blogPage