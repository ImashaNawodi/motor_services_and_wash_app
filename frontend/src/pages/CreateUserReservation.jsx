import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateUserReservation = () => {
  const [VehicleType, setVehicleType] = useState('');
  const [VehicleNumber, setVehicleNumber] = useState('');
  const [Services, setServices] = useState('');
  const [ServiceStation, setServiceStation] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveUserReservation = () => {
    const data = {
      VehicleType,
      VehicleNumber,
      Services,
      ServiceStation,
      Date,
      Time,
      Comments
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/users', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Reservation is Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create New User Reservation</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>VehicleType</label>
          <input
            type='text'
            value={VehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>VehicleNumber</label>
          <input
            type='text'
            value={VehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Services</label>
          <input
            type='text'
            value={Services}
            onChange={(e) => setServices(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>ServiceStation</label>
          <input
            type='text'
            value={ServiceStation}
            onChange={(e) => setServiceStation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Date</label>
          <input
            type='date'
            value={Date}
            onChange={(e) => setDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Time</label>
          <input
            type='time'
            value={Time}
            onChange={(e) => setTime(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Commnents</label>
          <input
            type='text'
            value={Comments}
            onChange={(e) => setComments(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveUserReservation}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateUserReservation