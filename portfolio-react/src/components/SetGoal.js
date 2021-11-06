import React from "react";
import { useHistory } from 'react-router-dom';

function SetGoal({ user, setUser }) {
    const history = useHistory();

    const selectGoal = (goal) => {
        console.log(goal);
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({goal: goal})
          };
      
          fetch(`/users/${user.id}`, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setUser({...user, goal: goal});
            history.push('/dashboard');
          })
    }

    return (
        <div className="spacer">
            <h1 className="txt txt-title">Set Your Goal</h1>
            <div className="goal-cards">
                <div className="goal-grid-wrapper">
                    <div className="card" onClick={e => selectGoal("cut")}>
                        <h1 className="txt card-header">Cut</h1>
                        <img className="card-img" src="https://i.imgur.com/XQQZY8f.png" alt="cut" />
                        <p className="txt card-info">Minimal rest time, high reps, and low intensity. This is the best goal for weight loss or toning your muscle.</p>
                    </div>
                    <div className="card" onClick={e => selectGoal("maintain")}>
                        <h1 className="txt card-header">Maintain</h1>
                        <img className="card-img" src="https://i.imgur.com/XQQZY8f.png" alt="cut" />
                        <p className="txt card-info">A balance of reps and intensity. Aimed for keeping your current build.</p>
                    </div>
                    <div className="card" onClick={e => selectGoal("bulk")}>
                        <h1 className="txt card-header">Bulk</h1>
                        <img className="card-img" src="https://i.imgur.com/XQQZY8f.png" alt="cut" />
                        <p className="txt card-info">High intensity, low reps, and rest in between sets. Ideal for increasing muscle mass and strength. </p>
                    </div>
                </div>
            </div>
            <h1 className="txt txt-note">
                    Please note: these plans are exclusively exercises.
                    Your diet will play a major role in how quickly you achieve your goal and how closely you can match your desired outcome.
                    The results may vary from user to user.
                    If you wish to develop a nutrition plan, contact a nutritionist.
                </h1>
        </div>
    );
}

export default SetGoal;