import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import icon from "../icon.png";

function Footer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
    fetch("/hello")
        .then((r) => r.json())
        .then((data) => setCount(data.count));
    }, []);

    return (
    <nav className="footer">
        <div className="footer-container">
            <div className="footer-left">
                <img className="nav-bar-logo" src={icon} alt="logo" />
                    <p>Page Count: {count}</p>
            </div>
            <div className="footer-right">
                    <p>Check out my other projects</p>
            </div>
        </div>
    </nav>
    );
}

export default Footer;