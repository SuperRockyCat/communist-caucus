import React from "react"
import Layout from "../components/layout"
import { useAboutPageData } from "../hooks/aboutPageQuery"


const useRenderAboutPage = () => {
    const {
        headline,
        content: {
            childMarkdownRemark: {html}
        },
        image: {
            description,
            file: {url}
        }
    } = useAboutPageData();
    return(
    <>
    <Layout>
    <div className="d-flex flex-column w-100 align-items-center justify-content-center pt-900">
        <img className="p-2 w-50 h-50" alt={description} src={url} />
        <h1 className="p-2">{headline}</h1>
        <div className="p-2 w-75 text-justify" dangerouslySetInnerHTML={{__html: html}}/>
    </div>
    </Layout>
    </>
    )}

export default useRenderAboutPage;