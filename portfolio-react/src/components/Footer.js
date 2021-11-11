import React from "react";
import icon from "../icon.png";

function Footer() {
    return (
    <div className="mega-spacer">
        <nav className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img className="nav-bar-logo" src={icon} alt="logo" />
                    <p className="txt txt-footer">The Fit Spot.</p>
                    <p className="txt txt-footer">|</p>
                    <p className="txt txt-footer">All exercises come from <a href="https://www.exercisedb.io/" className="link-dark">ExerciseDB</a></p>
                </div>
                <div className="footer-right">
                    <p className="txt txt-footer">A Project by Trestin Ishak</p>
                    <p className="txt txt-footer">|</p>
                    <p className="txt txt-footer">Check out my <a href="" className="link-dark">Portfolio!</a></p>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default Footer;