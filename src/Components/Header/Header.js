import React from "react";
import './Header.css';

const Header = () => {
    return(
        <header>
            <div>
                <h1>React Playground</h1>
                <p>A place to practice <strong>ReactJS</strong></p>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Documentation</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;