import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Home({ isLoggedin }) {
    const [state, setState] = useState({
        linkto: "/login",
        msg: "Get Started"
    });

    useEffect(() => {
        if (isLoggedin) {
            setState({
                linkto: "/dashboard",
                msg: "Dashboard"
            });
            console.log("logged in");
        } else {
            setState({
                linkto: "/login",
                msg: "Get Started"
            });
            console.log("not logged in");
        }
    }, [isLoggedin]);

    const messages = ["It's time to work.", "Click for gains.", "Get fit.", "Get healthy.", "Let's begin.", "Set up for success.", "Reach for your goals.", "It's time to get results.", "You can do it.", "Let the journey begin.", "The time is now.", "Can't stop, won't stop.", "Set a new bar.", "Surpass expectation.", "It starts here.", "The fit spot.", "Welcome to the fit spot.", "Welcome."];
    const dailyMessage = messages[Math.floor(Math.random() * messages.length)];

    return (
    <div className="home-content">
        <div className="cover">
            <h1 className="txt txt-cover">{dailyMessage}</h1>
            <Link to={state.linkto}><button className="btn btn-primary">{state.msg}</button></Link>
        </div>
    </div>
    );
}

export default Home;