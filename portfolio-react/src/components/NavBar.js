import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import icon from "../icon.png";

function NavBar({ user, isLoggedin }) {
  const [msgs, setMsgs] = useState("");
  const [links, setLinks] = useState({
    btnRight: "/login",
    dashboard: "/dashboard",
    userinfo: "/user-info",
  });

  useEffect(() => {
    if (isLoggedin) {
      setMsgs({btnRight: `Hello, ${user.name}`, btnLeft: "Dashboard"});
      setLinks({btnRight: "/user-info", btnLeft: "/dashboard"});
    } else {
      setMsgs({btnRight: "Login", btnLeft: "Home"});
      setLinks({btnRight: "/login", btnLeft: "/"});
    }
  }, [isLoggedin]);

  return (
    <nav className="nav-bar">
        <ul className="nav-bar-list">
            {/* <img className="nav-bar-logo" src={icon} alt="logo" /> */}
            <div className="nav-bar-logo">
              <Link to="/">
                <p className="txt txt-logo txt-space">The</p>
                <p className="txt txt-logo">Fit</p>
                <p className="txt txt-logo">Spot.</p>
              </Link>
            </div>
            <li className="txt txt-nav"><Link to={links["btnLeft"]} className="txt-underline">{msgs.btnLeft}</Link></li>
            <li className="txt txt-nav"><Link to="/news" className="txt-underline">News</Link></li>
            <li className="txt txt-nav push-left"><Link to={links["btnRight"]} className="txt-underline">{msgs.btnRight}</Link></li>
        </ul>
    </nav>
  );
}

export default NavBar;