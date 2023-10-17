import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const ReservationTable = ({users}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md'>
                            No
                        </th>
                        <th className='border border-slate-600 rounded-md'>
                            VehicleType
                        </th>
                        <th className='border border-slate-600 rounded-md '>
                            VehicleNumber
                        </th>
                        <th className='border border-slate-600 rounded-md '>
                            Services
                        </th>
                        <th className='border border-slate-600 rounded-md '>
                            ServiceStation
                        </th>
                        <th className='border border-slate-600 rounded-md'>
                            Date
                        </th>
                        <th className='border border-slate-600 rounded-md'>
                            Time
                        </th>
                        <th className='border border-slate-600 rounded-md '>
                            Comments
                        </th>
                        <th className='border border-slate-600 rounded-md'>
                            Operations   
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) =>(
                        <tr key ={user._id} className='h-8'>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {index+1}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {user.VehicleType}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center '>
                                {user.VehicleNumber}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center '>
                                {user.Services}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {user.ServiceStation}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                {user.Date}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center '>
                                {user.Time}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center '>
                                {user.Comments}
                            </td>
                            <td className='border border-slate-700 rounded-md text-center '>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`/users/details/${user._id}`}>
                                        <BsInfoCircle className='text-2xl text-green-800'/>
                                    </Link>
                                    <Link to={`/users/edit/${user._id}`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-800'/>
                                    </Link>
                                    <Link to={`/users/delete/${user._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-800'/>
                                    </Link>

                                </div>
                                
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
  )
}

export default ReservationTable
