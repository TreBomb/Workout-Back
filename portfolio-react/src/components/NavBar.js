import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import icon from "../icon.png";

function NavBar() {
  return (
    <nav className="nav-bar">
        <ul className="nav-bar-list">
            {/* <img className="nav-bar-logo" src={icon} alt="logo" /> */}
            <div className="nav-bar-logo">
              <p className="txt txt-logo txt-space">The</p>
              <p className="txt txt-logo">Fit</p>
              <p className="txt txt-logo">Spot.</p>
            </div>
            <li className="txt txt-nav"><Link to="/">Home</Link></li>
            <li className="txt txt-nav"><Link to="/news">News</Link></li>
            <li className="txt txt-nav push-left"><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  );
}

export default NavBar;