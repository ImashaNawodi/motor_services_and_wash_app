import React from 'react';

const topBarStyle = {
  backgroundColor: '#DC143C',
  width: '100%',
  height: '75px',
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'space-between', 
};

const textStyle = {
  color: 'black',
  fontWeight: 'bold',
  fontSize: '24px',
  textAlign: 'center',
};

const imageStyle = {
  width: '100px',
  height: '75px',
  
};

const socialIconStyle = {
  fontSize: '24px',
  marginRight: '30px', 
};

export default function TopBar() {
  return (
    <div style={topBarStyle}>
      <img src="/Image/new.png" alt="Logo" style={imageStyle} />
      <p style={textStyle}>Drive In, Experience Excellence, and Feel Welcome!</p>
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" style={socialIconStyle}></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={socialIconStyle}></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={socialIconStyle}></i>
        </a>
      </div>
    </div>
  );
}
