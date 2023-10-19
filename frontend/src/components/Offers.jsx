import React from 'react';

const boxStyle = {
  backgroundColor: '#F3F3F3', // Background color
  padding: '20px',           // Padding around the box
  border: '2px solid #333',  // Border style
  borderRadius: '10px',      // Rounded corners
  maxWidth: '400px',         // Set a maximum width for the box
  margin: '30px auto',       // Adjust top margin for spacing
  textAlign: 'center',       // Center-align text within the box
};

const paragraphStyle = {
  fontStyle: 'italic',      // Apply italic font style
  fontWeight: 'bold',       // Apply bold font weight
  fontSize: '18px',         // Set the font size
};

export default function Offers() {
  return (
    <div style={boxStyle}>
      <p style={paragraphStyle}>
        At MotorCarePro, we value your loyalty and appreciate your continued trust in our services. To show our gratitude, we're excited to introduce a special offer that rewards your commitment. Starting from your fifth reservation with us, you'll automatically unlock a fantastic 10% discount. It's our way of saying thank you for choosing us as your preferred service provider. Whether it's car washes, motor services, or any of our offerings, your fifth reservation marks the beginning of extra savings and added value. We look forward to serving you and making each experience even more rewarding.
      </p>
    </div>
  );
}
