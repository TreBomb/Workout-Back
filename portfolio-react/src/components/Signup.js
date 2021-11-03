import React from "react";
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="spacer">
        <div className="accounts-div">
            <h1 className="txt txt-form">Create an Account</h1>
            <form className="login-form">
                <input type="text" placeholder="First Name" className="input input-text"/>
                <input type="email" placeholder="Email" className="input input-text"/>
                <input type="password" placeholder="Password" className="input input-text"/>
                <input type="password" placeholder="Confirm Password" className="input input-text"/>
                <button className="btn btn-secondary">Sign Up</button>
            </form>
            <h3 className="txt txt-footer">Already have an account?</h3>
            <Link to="/login"><button className="btn btn-tertiary">Login</button></Link>
        </div>
    </div>
  );
}

export default Signup;