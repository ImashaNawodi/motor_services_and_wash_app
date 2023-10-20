import React from 'react';

const boxStyle = {
  backgroundColor: '#F3F3F3', 
  padding: '20px',           
  border: '2px solid #333',  
  borderRadius: '10px',      
  maxWidth: '400px',         
  margin: '30px auto',       
  textAlign: 'center',      
};

const paragraphStyle = {
  fontStyle: 'italic',      
  fontWeight: 'bold',      
  fontSize: '18px',        
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
