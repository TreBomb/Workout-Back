import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function ExerciseCards({ split, user, workoutName }) {
    const history = useHistory();
    const [search, setSearch] = useState("all");
    const [target, setTarget] = useState(split[0]);
    const [filteredTerms, setFilteredTerms] = useState([]);
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
          
            //   fetch('https://fit-spot.herokuapp.com/exercise-filter', requestOptions)
            //   .then(response => response.json())
            //   .then(data => {
            //     console.log(data);
            //     setExercises(data);
            //   });
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
          
            // fetch('https://fit-spot.herokuapp.com/workout_exercises', requestOptions)
            // .then(response => response.json())
            // .then(data => {
            // console.log(data);
            // // history.push("/set-goal");
            // });
        });
    }, [newWorkout])

    useEffect(() => {
    if (workoutList.length === 5) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: user.id,
                name: workoutName
            })
          };
      
        // fetch('https://fit-spot.herokuapp.com/workouts', requestOptions)
        // .then(response => response.json())
        // .then(data => {
        // console.log(data);
        // setNewWorkout(data.id);
        // history.push("/dashboard");
        // });
    }
    }, [workoutList])

    const addExercise = (event, exercise) => {
        setWorkoutList([...workoutList, exercise]);
        setFilteredTerms([...filteredTerms, event.currentTarget.querySelector('.exercise-name').querySelector('h3').innerText.toLowerCase()]);
    }

    return (
        <div className="exercises-div">
            <h3 className="txt txt-exercise-guide">Select 5 exercises from the list below to create your workout.</h3>
            <div className="filters">
                <div className="filter-div">
                    <h3 className="txt txt-filters">Filter</h3>
                    <h3 className="txt txt-filters">Search</h3>
                </div>
                <div className="search-div">
                <select className="filter-select" onChange={(e) => setTarget(e.target.value)}>
                        {split.map(item => {
                            return (
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select>
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
                        let exerciseName = exercise.name.trim();
                        if (!filteredTerms.includes(exerciseName.toLowerCase())) {
                            if (!exerciseName.includes("stretch")) {
                                return (
                                    <div className="exercise-card" key={exercise.id} onClick={event => addExercise(event, exercise)}>
                                        <div className="exercise-name">
                                            <h3 className="txt txt-exercise-name">{exercise.name}</h3>
                                        </div>
                                        <img src={exercise.video} alt={exercise.name} className="exercise-gif" />
                                        <div className="exercise-details">
                                            <p className="txt txt-exerise-info">Muscle: {exercise.target}</p>
                                            <p className="txt txt-exerise-info">Equipment: {exercise.equipment}</p>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default ExerciseCards;