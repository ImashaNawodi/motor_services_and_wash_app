import React, { useState } from 'react';
import './Contacts.css';

export default function Contacts() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Here, you can implement the logic to send the message, such as making an API request.
    // You can use the 'message' state to get the message content.
    alert('Message sent: ' + message);
  };

  return (
    <div className="contacts-container">
      <div className="contacts-side">
        <h3>Contact Us</h3>
        <p className="we-are-here-text">
          We're here to assist you. If you have any questions, feedback, or inquiries, please don't hesitate to get in touch with us. Our dedicated team is committed to providing you with the best support and assistance. You can reach us via the provided contact information. Your input is valuable to us, and we look forward to hearing from you.
        </p>
      </div>

      <div className="contacts-side">
        <h3>Car Care Division</h3>
        <p>
          <strong>Business Address:</strong><br />
          LAUGFS Lubricants Ltd - Car Care division<br />
          6th Floor, No. 101, Maya Avenue, Colombo 06
        </p>
        <p><strong>Phone:</strong> +94 11 556 8080</p>
        <p><strong>Fax:</strong> +94 11 528 9612</p>
        <p><strong>Email:</strong> <a href="mailto:carcare@laugfs.lk">carcare@laugfs.lk</a></p>
        <p><strong>Operating Hours:</strong> Monday - Friday: 9:00 AM to 5:00 PM</p>
      </div>

      <div className="contacts-side">
        <h3>Corporate Office</h3>
        <p>
          <strong>Business Address:</strong><br />
          LAUGFS Holdings Limited<br />
          No: 101, Maya Avenue, Colombo 06
        </p>
        <p><strong>Phone:</strong> +94 11 5 566 222</p>
        <p><strong>Fax:</strong> +94 11 5 286 912</p>
        <p><strong>Email:</strong> <a href="mailto:info@laugfs.lk">info@laugfs.lk</a></p>
        <p><strong>Operating Hours:</strong> Monday - Friday: 9:00 AM to 5:00 PM</p>
      </div>

      <div className="message-container">
        <h3>Send Us a Message</h3>
        <textarea
          rows="4"
          cols="50"
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
