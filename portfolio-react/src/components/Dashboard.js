import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard({ user, setUser }) {
    const [workoutList, setWorkoutList] = useState([]);
    const [routinesList, setRoutinesList] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://fit-spot.herokuapp.com/users/${user.id}/workouts`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWorkoutList(data);
            })

            fetch(`https://fit-spot.herokuapp.com/users/${user.id}/weekly_routines`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRoutinesList(data);
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
                    {workoutList.map(workout => {
                        return (
                            <div key={workout.id} className="dashboard-workout-card">
                                <h3>{workout.name}</h3>
                            </div>
                        );
                    })}
                </div>
                <Link to="/new-workout"><button className="btn btn-quaternary">New Workout</button></Link>
            </div>
            <div className="dashboard-card">
                <h2>Weekly Routines</h2>
                <div className="dashboard-card-content">
                {routinesList.map(routine => {
                        return (
                            <div key={routine.id} className="dashboard-routine-card">
                                <h3>{routine.name}</h3>
                            </div>
                        );
                    })}
                </div>
                <Link to="/new-routine"><button className="btn btn-quaternary">New Routine</button></Link>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;