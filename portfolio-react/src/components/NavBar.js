import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import icon from "../icon.png";

function NavBar() {
  return (
    <nav className="nav-bar">
        <ul className="nav-bar-list">
            <img className="nav-bar-logo" src={icon} alt="logo" />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li className="push-left"><a href="#">Login</a></li>
        </ul>
    </nav>
  );
}

export default NavBar;