import React, { useState, useEffect } from 'react';
import './Profile.css'; 
import Home from './Home';

export default function Profile() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="profile-container">
      <img
        src="/Image/The-Importance-Of-Having-An-Annual-Car-Service.jpg"
        className="profile-image"
        alt="Your Profile Image"
      />
      {showWelcome && (
        <div className="welcome-box">
          <div className="welcome-text">Welcome to MotorCarePro</div>
        </div>
      )}
      <Home />
    </div>
  );
}
