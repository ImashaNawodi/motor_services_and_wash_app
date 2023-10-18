import React from 'react';
import './Contacts.css'; 

export default function Contacts() {
  return (
    <div className="contacts-container">
      <div className="contacts-side">
        <h2>Contact Us</h2>
        <p>
          Feel free to contact us via email for any inquiries or assistance you may need. We're here to help!
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
    </div>
  );
}
