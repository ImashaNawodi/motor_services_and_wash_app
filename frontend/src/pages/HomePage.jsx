import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

function HomePage() {
    const headingStyle = {
        fontSize: "50px",
        fontWeight: "bold",
        color: "blue",
        textAlign: "center",
    };

    const paragraphStyle = {
        fontStyle: "italic",
        fontSize: "40px",
        color: "black",
        textAlign: "center",
        padding: "20px",
        fontWeight: "bold",
        marginBottom: "180px",
    };

    const buttonStyle = {
        backgroundColor: "blue",
        color: "white",
        fontSize: "24px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundImage: "url('./Image/Mechanic.png.webp')",
        backgroundSize: "cover",
        opacity: 0.6,
    };

    return (
        <div>
            <h1 style={headingStyle}>A Complete Care Experience for Your Ride</h1>
            <p style={paragraphStyle}>
                Your go-to destination for premium vehicle care.<br />
                We specialize in top-notch vehicle wash and motor services, ensuring your vehicle looks its best and runs smoothly.<br />
                Explore our services and experience excellence like never before.<br />
                Trust us to make your vehicle shine inside and out, with precision and care.
            </p>
          
            <Home>

            </Home>
        </div>
    );
}

export default HomePage;
