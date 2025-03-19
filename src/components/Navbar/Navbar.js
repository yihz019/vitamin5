import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">My Website</div>
            <ul className="nav-links">
                <li><Link to="/"></Link></li>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/NotHome">Not Home</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;