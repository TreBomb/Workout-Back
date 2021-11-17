import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewRoutine({ user, setUser }) {
    const [days, setDays] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
    const [workouts, setWorkouts] = useState([]);
    const [clickedInfo, setClickedInfo] = useState([]);
    const [selected, setSelected] = useState({
        Monday: {name: "", exercises: []},
        Tuesday: {name: "", exercises: []},
        Wednesday: {name: "", exercises: []},
        Thursday: {name: "", exercises: []},
        Friday: {name: "", exercises: []}
    });

    useEffect(() => {
        if (user) {
            fetch(`/users/${user.id}/workouts`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWorkouts(data);
            })
        }
    } ,[user]);

    useEffect(() => {
            let current = workouts.find(workout => workout.id == clickedInfo["workout"]);
            if (current) {
                setSelected({...selected, [clickedInfo["day"]]: {...selected[clickedInfo["day"]], name: current["name"], exercises: current["exercises"]}});
            }
            if (clickedInfo["workout"] == "none") {
                setSelected({...selected, [clickedInfo["day"]]: {...selected[clickedInfo["day"]], name: "none", exercises: []}});
            }
            console.log(selected);
    } ,[clickedInfo]);

    return (
        <div className="routines-form">
            <div className="spacer" />
            <h1 className="txt txt-title">Plan Your Week</h1>
            <hr/>
            <div className="routine-cards">
                <div className="goal-grid-wrapper">
                    {days.map(day => {
                        return (
                            <div className="goal-card">
                                <div className="routine-content">
                                    <h1 className="txt card-header">{day}</h1>
                                    <h2 className="txt txt-card-title">{selected[day].name != "" && selected[day].name !== "none" ? selected[day].name : "Select A Workout"}</h2>
                                    {selected[day].exercises.map(exercise => {
                                        return (
                                            <p className="txt txt-card-text">- {exercise.name}</p>
                                        );
                                    })}
                                </div>
                                <select className="daily-select" onChange={e => setClickedInfo({workout: e.target.value, day: day})}>
                                    <option value={"none"}>Select Workout</option>
                                    {workouts.map(workout => {
                                        return (
                                            <option value={workout.id}>{workout.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        );
                    })}
                    <div className="goal-card">
                        <div className="routine-content">
                            <h1 className="txt card-header">Sat/Sun</h1>
                            <h2 className="txt txt-card-title">Rest Days</h2>
                            <p className="txt txt-card-text">Take a break. You deserve it!</p>
                        </div>
                    </div>
                </div>
                <div className="grid-gap">
                    <button className="btn btn-secondary">Save</button>
                </div>
            </div>
        </div>
    );
}

export default NewRoutine;