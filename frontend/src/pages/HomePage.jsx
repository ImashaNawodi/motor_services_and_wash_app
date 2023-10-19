import React from "react";



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

  const headingStyle = {
    fontSize: "50px",
    fontWeight: "bold",
    color: "blue",
  };

  const paragraphStyle = {
    fontStyle: "italic",
    fontSize: "40px",
    color: "black",
    padding: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const buttonContainerStyle = {
    marginTop: "20px", // Space between the buttons and text
  };

  const buttonStyle = {
    backgroundColor: "#FF8C00", // Change button color to #1E90FF
    color: "black", // Change font color to black
    fontSize: "24px",
    textTransform: "uppercase", // Make button text uppercase
    padding: "10px 40px", // Equal length and height
    border: "none",
    borderRadius: "5px", // Adjusted corner radius
    cursor: "pointer",
    marginRight: "20px",
  };
 
  

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>A Complete Care Experience for Your Ride</h1>
      <p style={paragraphStyle}>
        Your go-to destination for premium vehicle care.<br />
        We specialize in top-notch vehicle wash and motor services, ensuring your vehicle looks its best and runs smoothly.<br />
        Explore our services and experience excellence like never before.<br />
        Trust us to make your vehicle shine inside and out, with precision and care.
      </p>
      
    </div>
  );
}

export default HomePage;
