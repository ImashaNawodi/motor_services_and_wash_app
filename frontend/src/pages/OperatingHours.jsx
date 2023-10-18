import React from 'react';
import './OperatingHours.css'; // Import the CSS file

export default function OperatingHours() {
  return (
    <div className="operating-hours-container">
      <h2 className="operating-hours-title">Operating Hours</h2>
      <p className="operating-hours-message">
        These are our operating hours, and you can make a reservation anytime during this period.
      </p>
      <table className="operating-hours-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>9:00 AM - 5:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
