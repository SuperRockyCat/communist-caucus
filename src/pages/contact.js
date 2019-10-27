import React from "react"
import Layout from "../components/layout"
import { useAboutPageData } from "../hooks/aboutPageQuery"

const useRenderContactPage = () => {
    const {
        image: {
            description,
            file: {url}
        } 
    } = useAboutPageData();
    const buttonColor = {
        background : "#F0CBCA",
        border : "#F0CBCA"
    };
    return(
    <>
    <Layout>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <img className="p-2 w-50 h-50" alt={description} src={url} />
        <h1 className="p-2 row">Contact Us</h1>
        <form method="post" action="https://formspree.io/rckola@mac.com" className="w-100">
            <div className="form-group row">
                <div className="w-100 ">
                    <small><label htmlFor="inputEmail">Email address</label></small>
                    <input name="name" type="email" class="form-control" id="inputEmail" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
            </div>
            <div className="form-group row">
                <div className="w-50 col-xs-6 pr-2">
                    <small><label htmlFor="inputFirstName">First Name</label></small>
                    <input name="name" type="firstName" class="form-control" id="inputFirstName" placeholder="First Name"/>
                </div>
                <div className="w-50 col-xs-6">
                    <small><label htmlFor="inputLastName">Last Name</label></small>
                    <input name="name" type="firstName" class="form-control" id="inputLastName" placeholder="Last Name"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="w-100">
                    <small><label htmlFor="details">Anything else we should know? </label></small>
                    <textarea name="name" class="form-control" id="details" placeholder="(optional)" rows="5"></textarea>
            </div>
            </div>
            <div className="row pb-5">
                <button type="submit" class="btn btn-primary" style={buttonColor}>Submit</button>
            </div>
        </form>
        </div>
    </Layout>
    </>
    )};

export default useRenderContactPage