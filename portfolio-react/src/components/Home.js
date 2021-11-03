import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    const messages = ["It's time to work.", "Click for gains.", "Get fit.", "Get healthy.", "Let's begin.", "Set up for success.", "Reach for your goals.", "It's time to get results.", "You can do it.", "Just click the button.", "Let the journey begin.", "The time is now.", "Can't stop, won't stop.", "Set a new bar.", "Surpass expectation.", "It starts here."];
    const dailyMessage = messages[Math.floor(Math.random() * messages.length)];

    return (
    <div className="home-content">
        <div className="cover">
            <h1>{dailyMessage}</h1>
            <Link to="/login"><button className="btn btn-primary">Get Started</button></Link>
        </div>
    </div>
    );
}

export default Home;