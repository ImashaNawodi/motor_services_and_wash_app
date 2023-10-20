import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import ReservationTable from '../components/home/ReservationTable';
import ReservationCard from '../components/home/ReservationCard';
import './Home.css';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/users')
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4 '>
        <button
          className='button'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='button'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='title'>User Reservation List</h1>
        <Link to='/users/create' className='add-user-link'>
          <MdOutlineAddBox />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="reservation-list-container">
          {showType === 'table' ? (
            <ReservationTable users={users} />
          ) : (
            <ReservationCard users={users} />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
