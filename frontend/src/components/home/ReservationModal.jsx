import { AiOutlineClose } from 'react-icons/ai';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';

const ReservationModal = ({ user, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
         <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
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
        <p className='mt-4'>About Our Vision</p>
        <p className='my-2'>
        "Your trust is our priority. By using our website you acknowledge that you've reviewed our Terms of Service and Privacy Policy. We are committed to safeguarding your information and ensuring a secure and transparent experience 
as you embark on your journey with us."
        </p>
      </div>
    </div>
  );
};

export default ReservationModal;