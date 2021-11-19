import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';

function Viewer({ user }) {
    const location = useLocation();
    const history = useHistory();
    const propData = location.state;
    const show = propData["show"];
    const id = propData["id"];
    const [data, setData] = useState({});
    const [days, setDays] = useState([]);

    useEffect(() => {
        if (show != null && id != null && user != null) {
            fetch(`https://fit-spot.herokuapp.com/users/${user.id}/${show}s/${id}`)
            .then(res => res.json())
            .then(info => {
                console.log("data", info);
                setData(info);
            })
            .catch(err => console.log(err));
        }
    }, [])

    const deleteItem = item => {
        fetch(`https://fit-spot.herokuapp.com/${show}s/${item.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            history.push("/dashboard");
        })
        .catch(err => console.log(err));
    }

    if (data["workouts"]) {
        console.log("updated days:", data);
        console.log("workouts:", data.workouts)

        return (
            <div className="home-content">
                <div className="cover">
                    <h1 className="txt txt-cover">{data.routine.name}</h1>
                    {data.workouts.map((day, index) => {
                        const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
                        console.log("obj days:", day)
                        return (
                            <div className="view-info-div" key={day.name}>
                                <p className="txt txt-info-list">{week[index]}:</p>
                                <p className="txt txt-info-list">{day.name}</p>
                                <hr />
                            </div>
                        );
                    })}
                <div className="spacer" />
                <button className="btn btn-primary" onClick={e => deleteItem(data.routine)}>Delete Workout</button>
                </div>
            </div>
        );
    } else if (data["exercises"]) {
        return (
            <div className="viewer-content">
                <div className="spacer" />
                <h1 className="txt txt-cover">{data.name}</h1>
                {data.exercises.map((exercise, index) => {
                    return (
                        <div className="view-info-div" key={index}>
                            <p className="txt txt-info-list">Exercise {index + 1}:</p>
                            <p className="txt txt-info-list">{exercise.name}</p>
                            <hr />
                        </div>
                    );
                })}
                <div className="spacer" />
                <button className="btn btn-primary" onClick={e => deleteItem(data)}>Delete Workout</button>
            </div>
        );
    } else {
        return (
            <div className="home-content">
                <div className="cover">
                    <h1 className="txt txt-cover">Nothing To View</h1>
                    <p>Access this page through the dashboard</p>
                </div>
            </div>
        );
    }

}

export default Viewer;