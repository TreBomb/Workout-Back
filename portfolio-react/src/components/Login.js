import React from "react";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="spacer">
        <div className="accounts-div">
            <h1 className="txt txt-form">Login</h1>
            <form className="login-form">
                <input type="email" placeholder="Email" className="input input-text"/>
                <input type="password" placeholder="Password" className="input input-text"/>
                <button className="btn btn-secondary">Login</button>
            </form>
            <h3 className="txt txt-footer">Don't have an account?</h3>
            <Link to="/signup"><button className="btn btn-tertiary">Sign Up</button></Link>
        </div>
    </div>
  );
}

export default Login;