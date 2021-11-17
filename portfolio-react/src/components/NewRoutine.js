import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function NewRoutine({ user, setUser }) {
    const history = useHistory();
    const [days, setDays] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
    const [workouts, setWorkouts] = useState([]);
    const [routineName, setRoutineName] = useState("");
    const [clickedInfo, setClickedInfo] = useState([]);
    const [selected, setSelected] = useState({
        Monday: {name: "", id: "", exercises: []},
        Tuesday: {name: "",id: "",  exercises: []},
        Wednesday: {name: "", id: "", exercises: []},
        Thursday: {name: "", id: "", exercises: []},
        Friday: {name: "", id: "", exercises: []}
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
                setSelected({...selected, [clickedInfo["day"]]: {...selected[clickedInfo["day"]], name: current["name"], id: clickedInfo["workout"], exercises: current["exercises"]}});
            }
            if (clickedInfo["workout"] == "none") {
                setSelected({...selected, [clickedInfo["day"]]: {...selected[clickedInfo["day"]], name: "none", id: "", exercises: []}});
            }
            console.log(selected);
    } ,[clickedInfo]);

    const saveRoutine = selected => {

        const objs = Object.values(selected);
        const filters = objs.filter(obj => obj.name == "none" || obj.name == "");
        console.log(filters, routineName);

        if (filters.length == 0 && routineName != "") {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: user.id,
                    name: routineName,
                    workout1_id: selected["Monday"].id,
                    workout2_id: selected["Tuesday"].id,
                    workout3_id: selected["Wednesday"].id,
                    workout4_id: selected["Thursday"].id,
                    workout5_id: selected["Friday"].id
                })
              };
          
            fetch('/weekly_routines', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                history.push("/dashboard");
            });
        }
    }

    return (
        <div className="routines-form">
            <div className="spacer" />
            <h1 className="txt txt-title">Plan Your Week</h1>
            <hr/>
            <h3 className="txt">Name Your Routine</h3>
            <div className="title-div">
                    <input
                        className="title-input"
                        type="text"
                        label="Name"
                        placeholder="Routine Title"
                        onChange={(e) => setRoutineName(e.target.value)}
                    />
            </div>
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
                    <button className="btn btn-secondary" onClick={e => saveRoutine(selected)}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default NewRoutine;