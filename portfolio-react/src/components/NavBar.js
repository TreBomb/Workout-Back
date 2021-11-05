import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import icon from "../icon.png";

function NavBar({ user, isLoggedin }) {
  const [msg, setMsg] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (isLoggedin) {
      setMsg(`Hello, ${user.name}`);
      setLink("/user-info");
    } else {
      setMsg("Login");
      setLink("/login");
    }
  }, [isLoggedin]);

  return (
    <nav className="nav-bar">
        <ul className="nav-bar-list">
            {/* <img className="nav-bar-logo" src={icon} alt="logo" /> */}
            <div className="nav-bar-logo">
              <p className="txt txt-logo txt-space">The</p>
              <p className="txt txt-logo">Fit</p>
              <p className="txt txt-logo">Spot.</p>
            </div>
            <li className="txt txt-nav"><Link to="/" className="txt-underline">Home</Link></li>
            <li className="txt txt-nav"><Link to="/news" className="txt-underline">News</Link></li>
            <li className="txt txt-nav push-left"><Link to={link} className="txt-underline">{msg}</Link></li>
        </ul>
    </nav>
  );
}

export default NavBar;