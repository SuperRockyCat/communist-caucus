import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/global.css"

const layout = ({ children }) => (
<>
<nav className="topnav navbar fixed-top navbar-expand-lg navbar-light navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/strat-2020" className="nav-link">Strategic Approaches 2020</Link>
        </li>
        <li className="nav-item">
            <Link to="/reading-list" className="nav-link">Reading List</Link>
        </li>
        <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
        </li>   
        <li className="nav-item">
            <Link to="/contact" className="nav-link">How Do I Join?</Link>
        </li>
    </ul>
</nav>
<div className="container h-100">
  {children}
</div>
</>
);

export default layout