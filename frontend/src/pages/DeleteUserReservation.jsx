import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteUserReservation = () => {
  const [reason, setReason] = useState(''); // Initialize with an empty string
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const reasons = [
    'Change of plans',
    'Found another service provider',
    'Booking mistake',
    'Other',
  ];

  const handleDeleteUserReservation = () => {
    if (confirmed) {
      if (!reason) {
        enqueueSnackbar('Please select or provide a reason for cancellation.', {
          variant: 'warning',
        });
      } else {
        setLoading(true);
        const data = { reason };
        axios
          .delete(`http://localhost:5555/users/${id}`, { data })
          .then(() => {
            setLoading(false);
            enqueueSnackbar('Reservation deleted', { variant: 'success' });
            navigate('/');
          })
          .catch((error) => {
            setLoading(false);
            enqueueSnackbar('Error deleting reservation', { variant: 'error' });
            console.log(error);
          });
      }
    } else {
      enqueueSnackbar('Please check the confirmation box to delete the reservation.', {
        variant: 'warning',
      });
    }
  };

  return (
    <div className='p-4'>
      <h1
  className='text-3xl my-4'
  style={{
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '32px',
    textAlign: 'center',
  }}
>
  Delete Your Reservation
</h1>

      <div className='flex flex-col items-left border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure you want to cancel this reservation?</h3>
       <p className='my-4 text-left'>Please select a reason for cancellation:</p>

        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
        >
          <option value=''>Select a reason</option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <div className='flex items-center my-4'>
          <input
            type='checkbox'
            checked={confirmed}
            onChange={() => setConfirmed(!confirmed)}
            className='mr-2'
          />
          <label>Confirm deletion</label>
        </div>
        <div className='flex items-center justify-center my-4'>
  <button
    className='p-2 bg-red-600 text-white w-40 rounded-full'
    onClick={handleDeleteUserReservation}
  >
    Delete
  </button>
</div>


      </div>
    </div>
  );
};

export default DeleteUserReservation;
