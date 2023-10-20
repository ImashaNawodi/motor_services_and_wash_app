import { Link } from 'react-router-dom';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { useState } from 'react';
import ReservationModal from './ReservationModal';


const ReservationSingleCard = ({ user }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {user.VehicleNumber}
      </h2>
      <h4 className='my-2 text-gray-500'>{user._id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <BsFillCarFrontFill className='text-red-300 text-2xl' />
        <h2 className='my-1'>{user.VehicleType}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <GrLocation className='text-red-300 text-2xl' />
        <h2 className='my-1'>{user.ServiceStation}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/users/details/${user._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/userss/edit/${user._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/users/delete/${user._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>
      {showModal && (
        <ReservationModal user={user} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ReservationSingleCard;