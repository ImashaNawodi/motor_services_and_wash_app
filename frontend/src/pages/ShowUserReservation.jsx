import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';


const ShowUserReservation = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
  
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:5555/users/${id}`)
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);
  
    return (
      <div className='p-4'>
        <BackButton />
        <h1 className='text-3xl my-4'>Show User Reservation</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Id</span>
              <span>{user._id}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>VehicleType</span>
              <span>{user.VehicleType}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>VehicleNumber</span>
              <span>{user.VehicleNumber}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Services</span>
              <span>{user.Services}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>ServiceStation</span>
              <span>{user.ServiceStation}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Date</span>
              <span>{user.Date}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Time</span>
              <span>{user.Time}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Comments</span>
              <span>{user.Comments}</span>
            </div>
            <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(user.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(user.updatedAt).toString()}</span>
          </div>
          </div>
        )}
      </div>
    );
  };



export default ShowUserReservation