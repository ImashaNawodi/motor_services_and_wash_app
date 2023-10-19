import "./SignIn.css";
import React from "react";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div className="login">
      <span className="loginTitle">SignIn</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button className="loginButton"><Link to="/home">Login</Link></button>
      </form>
      <div className="agree-continue">
        <input type="checkbox" id="agreeAndContinue" />
        <label htmlFor="agreeAndContinue">Agree and Continue</label>
      </div>
      <div className="welcome-box">
        <p>
          Is this your first time visiting our website? Ready to Join Our Motor Services and Car Wash Experience?
          Sign up today and start your journey with us!
        </p>
      </div>
      <button className="loginRegisterButton">
        <Link to="/signup">Sign Up</Link>
      </button>
    </div>
  );
}
