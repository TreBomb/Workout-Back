import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';

function UserInfo({ user, setUser, isLoggedin, setIsLoggedin }) {
    const history = useHistory();
    const [msgs, setMsgs] = useState({
        nameData: "",
        emailData: "",
        goalData: "",
        workoutData: "",
        routineData: ""
    });
  
    useEffect(() => {
      if (isLoggedin) {
        setMsgs({...msgs,
            nameData: `username: ${user.name}`,
            emailData: `email: ${user.email}`,
            goalData: `current goal: ${user.goal}`,
            workoutData: "",
            routineData: ""
        });
      } else {
        setMsgs("Login to view this page");
      }
    }, [isLoggedin]);

    const logoutFunction = e => {
        e.preventDefault();
        fetch(`https://fit-spot.herokuapp.com/logout`, {
            method: 'DELETE',
            credentials: 'include'
          })
            .then(res => {
              if (res.ok) {
                console.log("Deleted!")
                setIsLoggedin(false);
                setUser(null);
                history.push('/');
              }
            })
    }

    return (
    <div className="user-info">
        <div className="spacer" />
        <h1 className="txt txt-form">{msgs.nameData}</h1>
        <h1 className="txt txt-form">{msgs.emailData}</h1>
        <h1 className="txt txt-form">{msgs.goalData}</h1>
        <button className="btn btn-secondary" onClick={logoutFunction}>Logout</button>
    </div>
    );
}

export default UserInfo;