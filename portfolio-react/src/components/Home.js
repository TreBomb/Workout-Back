import React from "react";
import { Link } from 'react-router-dom';

function Home({ isLoggedin }) {
    const messages = ["It's time to work.", "Click for gains.", "Get fit.", "Get healthy.", "Let's begin.", "Set up for success.", "Reach for your goals.", "It's time to get results.", "You can do it.", "Let the journey begin.", "The time is now.", "Can't stop, won't stop.", "Set a new bar.", "Surpass expectation.", "It starts here.", "The fit spot.", "Welcome to the fit spot.", "Welcome."];
    const dailyMessage = messages[Math.floor(Math.random() * messages.length)];

    return (
    <div className="home-content">
        <div className="cover">
            <h1 className="txt txt-cover">{dailyMessage}</h1>
            <Link to="/login"><button className="btn btn-primary">Start Now</button></Link>
        </div>
    </div>
    );
}

export default Home;