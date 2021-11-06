import React, { useState, useEffect } from "react";

function Dashboard({ user, setUser }) {

    useEffect(() => {
        fetch("/exercises")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    } ,[]);

    return (
    <div className="news-cards">
        <div className="spacer" />
        <h1>Your Dashboard</h1>
        <hr/>
        <div className="dashboard-div">
            <div className="dashboard-card">
                <h2>Daily Workouts</h2>
                <div className="dashboard-card-content">
                </div>
            </div>
            <div className="dashboard-card">
                <h2>Weekly Routines</h2>
                <div className="dashboard-card-content">
                </div>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;