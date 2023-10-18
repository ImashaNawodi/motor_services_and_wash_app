import React from 'react';
import './Locations.css'; // Import a CSS file for styling

export default function Locations() {
  return (
    <div className="locations-container">
      <LocationCard
        name="Bellanthota"
        address="No 86, Attidiya Road, Nikape, Dehiwala"
        phone="0775507558"
        hours="Monday - Friday: 8:00 AM to 6:00 PM, Weekends: 7:00 AM to 6:00 PM"
      />

      <LocationCard
        name="Dehiwala"
        address="130, Galle Road, Dehiwala"
        phone="0113588800"
        hours="Monday - Friday: 8:00 AM to 8:00 PM, Weekends: 7:00 AM to 8:00 PM"
      />

      <LocationCard
        name="Galle"
        address="102A/1, Sri Hemananda Mawatha, Beligaha, Galle"
        phone="0915701553"
        hours="Monday - Friday: 8:00 AM to 6:00 PM, Weekends: 7:00 AM to 6:00 PM"
      />

      <LocationCard
        name="Kalagedihena"
        address="365, Kandy Road, Kalagedihena"
        phone="0332287467"
        hours="Monday - Friday: 8:00 AM to 8:00 PM, Weekends: 7:00 AM to 8:00 PM"
      />

      
    </div>
  );
}

function LocationCard({ name, address, phone, hours }) {
  return (
    <div className="location-card">
      <h2>{name}</h2>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Operating Hours:</strong> {hours}</p>
    </div>
  );
}
