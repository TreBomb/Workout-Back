import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from 'react-router-dom';

function Viewer({ user }) {
    const location = useLocation();
    const history = useHistory();
    const propData = location.state;
    const show = propData["show"];
    const id = propData["id"];
    const [data, setData] = useState([]);
    const [days, setDays] = useState([]);

    useEffect(() => {
        if (show != null && id != null && user != null) {
            fetch(`/users/${user.id}/${show}s/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(err => console.log(err));
        }
    }, [])

    const deleteItem = item => {
        fetch(`/${show}s/${item.id}`, {
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

    console.log("show:", show, "id:", id);
    if (data["workout1_id"]) {
        setDays({
            Monday: data["workout1_id"], 
            Tuesday: data["workout2_id"],
            Wednesday: data["workout3_id"],
            Thursday: data["workout4_id"],
            Friday: data["workout5_id"]
        });

        // for (let i = 1; i < 5; i++) {
        //     fetch(`/workouts/${data[`workout${i}_id`]}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setWorkouts({...workouts, [i]: data.name});
        //     });
        // };


        return (
            <div className="home-content">
                <div className="cover">
                    <h1 className="txt txt-cover">{data.name}</h1>
                    {Object.keys(days).map(day => {
                        return (
                            <div className="view-info-div">
                                <p className="txt txt-info-list">{day}:</p>
                                <p className="txt txt-info-list">{days[day]}</p>
                                <hr />
                            </div>
                        );
                    })}
                <div className="spacer" />
                <button className="btn btn-primary" onClick={e => deleteItem(data)}>Delete Workout</button>
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
                        <div className="view-info-div">
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