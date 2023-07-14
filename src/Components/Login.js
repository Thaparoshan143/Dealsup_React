import React from 'react';
import "./Login.css";

function Login() {
  return (
    <div className="Log-In page flex-c-se-c">
        <h1 className="theme-text heading">Log in to Dealsup</h1>
        <span>Be part of something extraordinary in Businees world</span>
        <div className="Form-Cont">
            <form className="flex-c-se-c">
                <label>Username : </label>
                <input type="email" placeholder="Username or email" />
                <label>Password : </label>
                <input type="password" placeholder="Enter password here.." />

                <a href="#">Forget password?</a>
                <hr />
                <button className="theme-button">Login</button>
                <span>Don't have account on Dealsup</span>
                <button className="theme-button">Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Login