// ReservationTable.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import './ReservationTable.css';

const ReservationTable = ({ users }) => {
  return (
    <table className='reservation-table'>
      <thead>
        <tr>
          <th className='reservation-header'>No</th>
          <th className='reservation-header'>Vehicle Type</th>
          <th className='reservation-header'>Vehicle Number</th>
          <th className='reservation-header'>Services</th>
          <th className='reservation-header'>Service Station</th>
          <th className='reservation-header'>Date</th>
          <th className='reservation-header'>Time</th>
          <th className='reservation-header'>Comments</th>
          <th className='reservation-header'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user._id} className='reservation-row'>
            <td className='reservation-data'>{index + 1}</td>
            <td className='reservation-data'>{user.VehicleType}</td>
            <td className='reservation-data'>{user.VehicleNumber}</td>
            <td className='reservation-data'>{user.Services}</td>
            <td className='reservation-data'>{user.ServiceStation}</td>
            <td className='reservation-data'>{user.Date}</td>
            <td className='reservation-data'>{user.Time}</td>
            <td className='reservation-data'>{user.Comments}</td>
            <td className='reservation-data'>
              <div className='icon-link'>
                <Link to={`/users/details/${user._id}`}>
                  <BsInfoCircle className='reservation-icon' />
                </Link>
                <Link to={`/users/edit/${user._id}`}>
                  <AiOutlineEdit className='reservation-icon' />
                </Link>
                <Link to={`/users/delete/${user._id}`}>
                  <MdOutlineDelete className='reservation-icon' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReservationTable;
