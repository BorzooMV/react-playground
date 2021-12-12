import React from "react";
import { Link, Router, Route, NavLink } from "react-router-dom";
import Home from "../Pages/Home/Home";
import './Header.css';

const Header = () => {
    return(
        <header>
            <div>
                <h1>React Playground</h1>
                <p>A place to practice <strong>ReactJS</strong></p>
            </div>
            <nav>
                <div className="links">
                        <Link to="/" exact className="navLink">Home</Link>
                        <Link to="docs" className="navLink">Documentation</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;