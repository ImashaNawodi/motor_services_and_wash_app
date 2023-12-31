import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateUserReservation from './pages/CreateUserReservation';
import DeleteUserReservation from './pages/DeleteUserReservation';
import UpdateUserReservation from './pages/UpdateUserReservation';
import ShowUserReservation from './pages/ShowUserReservation';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Contacts from './pages/Contacts';
import OperatingHours from './pages/OperatingHours';
import Locations from './pages/Locations';
import Services from './pages/Services';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
import Profile from './pages/Profile';


const App = () => {
  return (
    <>
    <div>
      <TopBar/>
      <NavBar/>
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route Path="/home" element={<Home/>}/>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/operatinghours" element={<OperatingHours />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/services" element={<Services />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/users/create" element={<CreateUserReservation />} />
      <Route path="/users/edit/:id" element={<UpdateUserReservation />} />
      <Route path="/users/delete/:id" element={<DeleteUserReservation />} />
      <Route path="/users/details/:id" element={<ShowUserReservation />} />

    </Routes>

    </div>
    
      
    
    </> 
  );
};

export default App;
