import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function SignUp() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/logins/signup", {
        fullname,
        email,
        password,
      });
      res.data && window.location.replace("/signin");
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="register">
      <span className="registerTitle">Sign Up</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setFullname(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="registerButton" type="submit">
        <Link className="link" to="/signin">
          Sign Up
        </Link>
        </button>
      </form>
      {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
    </div>
  );
}
