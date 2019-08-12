import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/global.css"

const layout = ({ children }) => (
<>
<nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
        </li>   
        <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
        </li>
    </ul>
</nav>
<div className="container h-100">
  {children}
</div>
</>
);

export default layout