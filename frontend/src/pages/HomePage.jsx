import React, { useEffect } from "react";

function HomePage() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: "url('./Image/Mechanic.png.webp')",
    backgroundSize: "cover",
    opacity: 0.6,
    textAlign: "center",
  };

  const welcomeTextStyle = {
    fontSize: "28px",
    color: "blue",
    marginBottom: "20px",
    
  };

 

  const boxStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    width: "900px",
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    color: "blue",
  };

  const paragraphStyle = {
    fontStyle: "italic",
    fontSize: "20px",
    color: "black",
    padding: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <p id="welcome-text" style={welcomeTextStyle}>
        Welcome to MotorCare Pro
      </p>
      <div style={boxStyle}>
        <h1 style={headingStyle}>A Complete Care Experience for Your Ride</h1>
        <p style={paragraphStyle}>
          Your go-to destination for premium vehicle care.<br />
          We specialize in top-notch vehicle wash and motor services, ensuring your vehicle looks its best and runs smoothly.<br />
          Explore our services and experience excellence like never before.<br />
          Trust us to make your vehicle shine inside and out, with precision and care.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
