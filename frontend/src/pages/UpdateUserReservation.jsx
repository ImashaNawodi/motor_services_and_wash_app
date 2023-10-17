import React, { useState ,useEffect} from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';
import { enqueueSnackbar, useSnackbar } from 'notistack';

const UpdateUserReservation = () => {
  const [VehicleType, setVehicleType] = useState('');
  const [VehicleNumber, setVehicleNumber] = useState('');
  const [Services, setServices] = useState('');
  const [ServiceStation, setServiceStation] = useState('');
  const [Date, setDate] = useState('');
  const [Time, setTime] = useState('');
  const [Comments, setComments] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const{id}=useParams();
  const{enqueueSnackbar} =useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/users/${id}`)
    .then((response) => {
        setVehicleType(response.data.VehicleType);
        setVehicleNumber(response.data.VehicleNumber)
        setServices(response.data.Services)
        setServiceStation(response.data.ServiceStation)
        setDate(response.data.Date)
        setTime(response.data.Time)
        setComments(response.data.Comments)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])

  const handleUpdateUserReservation = () => {
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
      .put(`http://localhost:5555/users/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Reservation is updated successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error updating reservation', { variant: 'error' });
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
  Update Your Reservation
</h1>

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
          <label className='text-xl mr-4 text-gray-500'>Comments</label>
          <input
            type='text'
            value={Comments}
            onChange={(e) => setComments(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleUpdateUserReservation}>
          Save
        </button>
      </div>
    </div>
  );
}

export default UpdateUserReservation