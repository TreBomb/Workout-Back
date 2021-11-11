import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewRoutine({ user, setUser }) {

    useEffect(() => {
        if (user) {
            fetch(`/users/${user.id}/workouts`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
        }
    } ,[user]);

    return (
    <div className="news-cards">
        <div className="spacer" />
        <h1 className="txt txt-title">Your Dashboard</h1>
        <hr/>
        <div className="dashboard-div">
            <div className="dashboard-card">
                <h2>Daily Workouts</h2>
                <div className="dashboard-card-content">
                </div>
                <Link to="/new-workout"><button className="dashboard-button">New Workout</button></Link>
            </div>
            <div className="dashboard-card">
                <h2>Weekly Routines</h2>
                <div className="dashboard-card-content">
                </div>
                <Link to="/new-routine"><button className="dashboard-button">New Routine</button></Link>
            </div>
        </div>
    </div>
    );
}

export default NewRoutine;