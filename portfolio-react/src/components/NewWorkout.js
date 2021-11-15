import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExerciseCards from "./ExerciseCards";

function NewWorkout({ user, setUser }) {
    const [title, setTitle] = useState("Choose Your Split");
    const [split, setSplit] = useState([]);
    const [stage, setStage] = useState("Goals");
    const [workoutName, setWorkoutName] = useState("New Workout");

    const styleTypes = {
        "Single Focus": ["Chest", "Back", "Legs", "Arms", "Shoulders", "Core"],
        "Push/Pull Day": ["Chest/Triceps", "Back/Biceps", "Legs/Shoulders"],
        "Push Day": ["Chest", "Shoulders", "Triceps"],
        "Pull Day": ["Back", "Biceps", "Abs"],
        "Upper/Lower": ["Chest/Shoulders/Back/Arms/Core", "Legs"]
    };
    const descriptions = {
        "Single Focus": "A workout that focuses on a single muscle group each day. Allows for better recovery time.",
        "Push/Pull Day": "This split has a mix of push and pull exercises. Targets opposing groups to lessen fatigue and work the same group multiple times a week.",
        "Push Day": "A plan that uses only push exercises, best paired with a day of only pull exercises. Works on similar sections of mucscle through every exercise that day.",
        "Pull Day": "A plan that uses only pull exercises, best paired with a day of only push exercises. Works on similar sections of mucscle through every exercise that day.",
        "Upper/Lower": "The upper and lower split separates days by upper and lower body. An intense routine targeting the entirety of the body twice a week."
    };

    useEffect(() => {
        if (user) {
            fetch(`/users/${user.id}/workouts`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
        }
    } ,[user]);

    const selectGoal = goal => {
        console.log(goal);
        setTitle("Name Your Workout");
        setSplit(styleTypes[goal]);
        setStage("Name");
    }

    const setName = name => {
        console.log(name);
        setTitle("Select Your Exercises");
        setWorkoutName(name);
        setStage("Exercises");
    }


    if (stage === "Goals") {
        return (
            <div className="workouts-form">
                <div className="spacer" />
                <h1 className="txt txt-title">{title}</h1>
                <hr/>
                <div className="goal-cards">
                    <div className="goal-grid-wrapper">
                        {Object.keys(styleTypes).map(keyName => {
                            return (
                                <div className="goal-grid-wrapper">
                                    <div className="goal-card" onClick={e => selectGoal(keyName)}>
                                        <h1 className="txt card-header">{keyName}</h1>
                                        <p className="txt goal-card-info">{descriptions[keyName]}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            );
    } else if (stage === "Name") {
        return (
            <div className="workouts-form">
                <div className="spacer" />
                <h1 className="txt txt-title">{title}</h1>
                <hr/>
                <div className="title-div">
                    <input
                        className="title-input"
                        type="text"
                        label="Name"
                        placeholder="Workout Title"
                        onChange={(e) => setWorkoutName(e.target.value)}
                    />
                    <button className="btn btn-quaternary" onClick={e => setName(workoutName)}>Done</button>
                </div>
            </div>
        );
    } else if (stage === "Exercises") {
        return (
            <div className="workouts-form">
                <div className="spacer" />
                <h1 className="txt txt-title">{title}</h1>
                <hr/>
                <ExerciseCards split={split} user={user} workoutName={workoutName} />
            </div>
        );
    }
}

export default NewWorkout;