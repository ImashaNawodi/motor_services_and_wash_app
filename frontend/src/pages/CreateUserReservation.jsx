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
  const VehicleTypes = ['Car', 'Van', 'Bus', 'Lorry', 'Jeep'];
  const ServiceOptions = ['Interior Detailing', 'Exterior Detailing', 'Specialty Services', 'Full-Service Package', 'Additional Services'];
  const ServiceStations = ['Bellanthota', 'Dehiwala', 'Galle', 'Kalagedihena'];

  const handleSaveUserReservation = () => {
    const data = {
      VehicleType,
      VehicleNumber,
      Services,
      ServiceStation,
      Date,
      Time,
      Comments,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/users', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Reservation is Created successfully', { variant: 'success' });
        navigate('/profile');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
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
        Place Your Reservation
      </h1>

      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>VehicleType</label>
          <select
            value={VehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          >
            <option value=''>Select Vehicle Type</option>
            {VehicleTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
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
          <select
            value={Services}
            onChange={(e) => setServices(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          >
            <option value=''>Select Service</option>
            {ServiceOptions.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>ServiceStation</label>
          <select
            value={ServiceStation}
            onChange={(e) => setServiceStation(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          >
            <option value=''>Select Service Station</option>
            {ServiceStations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
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
          <label className='text-xl mr-4 text-gray-500'>Comments</label>
          <input
            type='text'
            value={Comments}
            onChange={(e) => setComments(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4 flex items-center justify-center'>
  <button className='p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-700' style={{ width: '100px' }} onClick={handleSaveUserReservation}>
    Save
  </button>
</div>

      </div>
    </div>
  );
}

export default CreateUserReservation;
