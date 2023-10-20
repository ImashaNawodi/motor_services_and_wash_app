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
        <button className="loginButton"><Link to="/profile">Login</Link></button>
      </form>
     
      
    </div>
  );
}
