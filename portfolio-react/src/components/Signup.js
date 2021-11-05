import React, {useState, useEffect} from "react";
import { Link, useHistory } from 'react-router-dom';

function Signup({ setUser, setIsLoggedin }) {
  const history = useHistory();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  const handleSubmit = e => {
    e.preventDefault();
    console.log(info);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    };

    fetch('/signup', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setUser(data);
      setIsLoggedin(true);
      history.push("/");
    });
  }

  return (
    <div className="spacer">
        <div className="accounts-div">
            <h1 className="txt txt-form">Create an Account</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" className="input input-text" onChange={e => setInfo({...info, name: e.target.value})} />
                <input type="email" placeholder="Email" className="input input-text" onChange={e => setInfo({...info, email: e.target.value})} />
                <input type="password" placeholder="Password" className="input input-text" onChange={e => setInfo({...info, password: e.target.value})} />
                <input type="password" placeholder="Confirm Password" className="input input-text" onChange={e => setInfo({...info, password_confirmation: e.target.value})} />
                <button className="btn btn-secondary">Sign Up</button>
            </form>
            <h3 className="txt txt-footer">Already have an account?</h3>
            <Link to="/login"><button className="btn btn-tertiary">Login</button></Link>
        </div>
    </div>
  );
}

export default Signup;