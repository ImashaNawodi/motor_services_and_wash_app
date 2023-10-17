import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateUserReservation from './pages/CreateUserReservation';
import DeleteUserReservation from './pages/DeleteUserReservation';
import UpdateUserReservation from './pages/UpdateUserReservation';
import ShowUserReservation from './pages/ShowUserReservation';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users/create' element={<CreateUserReservation/>}/>
      <Route path='/users/edit/:id' element={<UpdateUserReservation/>}/>
      <Route path='/users/delete/:id' element={<DeleteUserReservation/>}/>
      <Route path='/users/details/:id' element={<ShowUserReservation/>}/>

      
      
    </Routes>
  )
}

export default App
