import { Link } from 'react-router-dom';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import ReservationSingleCard from './ReservationSingleCard';

const ReservationCard = ({ users }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {users.map((item) => (
        <ReservationSingleCard key={item._id} user={item} />
      ))}
    </div>
  );
};

export default ReservationCard;