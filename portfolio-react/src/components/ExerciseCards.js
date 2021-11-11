import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ExerciseCards({ split, user }) {
    const history = useHistory();
    const [search, setSearch] = useState("all");
    const [target, setTarget] = useState("all");
    const [exercises, setExercises] = useState([]);
    const [workoutList, setWorkoutList] = useState([]);
    const [newWorkout, setNewWorkout] = useState("");

    useEffect(() => {
        if (search) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({filter: search, target: target})
              };
          
              fetch('/exercise-filter', requestOptions)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                setExercises(data);
              });
        }
        if (search === "") {
            setSearch("all");
        }
    } ,[search, target]);

    useEffect(() => {
        workoutList.map(exercise => {
            console.log(`New Workout ID: ${newWorkout}, Exercise ID: ${exercise.id}`);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    exercise_id: exercise.id,
                    workout_id: newWorkout
                })
              };
          
            fetch('/workout_exercises', requestOptions)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            // history.push("/set-goal");
            });
        });
    }, [newWorkout])

    const addExercise = (exercise) => {
        if (workoutList.length <= 4) {
            setWorkoutList([...workoutList, exercise]);
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: user.id,
                    name: "Test Workout 0"
                })
              };
          
            fetch('/workouts', requestOptions)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            setNewWorkout(data.id);
            // history.push("/set-goal");
            });
        }
    }

    return (
        <div className="exercises-div">
            <div className="filters">
                <div className="filter-div">
                    <h3 className="txt txt-filters">Filter by muscle group</h3>
                    <select className="filter-select" onChange={(e) => setTarget(e.target.value)}>
                        {split.map(item => {
                            return (
                                <option value="all">All</option>
                            );
                        })}
                        <option value="all">All</option>
                        <option value="chest">Chest</option>
                        <option value="back">Back</option>
                        <option value="arms">Arms</option>
                        <option value="legs">Legs</option>
                        <option value="shoulders">Shoulders</option>
                        <option value="waist">Core</option>
                    </select>
                </div>
                <div className="search-div">
                    <h3 className="txt txt-filters">Search</h3>
                    <input
                        className="search-input"
                        type="text"
                        label="Search"
                        placeholder="Name, Equipment, or Muscle..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <hr />
            <div className="exercise-cards">
                <div className="exercise-grid-wrapper">
                    {exercises.map(exercise => {
                        if (!exercise.name.includes("stretch")) {
                            return (
                                <div className="exercise-card" key={exercise.id}>
                                    <div className="exercise-name">
                                        <h3 className="txt txt-exercise-name">{exercise.name}</h3>
                                    </div>
                                    <img src={exercise.video} alt={exercise.name} className="exercise-gif" />
                                    <div className="exercise-details">
                                        <p className="txt txt-exerise-info">Muscle: {exercise.target}</p>
                                        <p className="txt txt-exerise-info">Equipment: {exercise.equipment}</p>
                                        <button className="btn btn-quaternary" onClick={e => addExercise(exercise)}>Add Exercise</button>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default ExerciseCards;