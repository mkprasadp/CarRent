import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home'
import CarDetails from './Pages/CarDetails';
import Cars from './Pages/Cars';
import MyBooking from './Pages/MyBooking';
import Footer from './Components/Footer';
import Layout from './Pages/owners/Layout';
import AddCars from './Pages/owners/AddCars';
import ManageCars from './Pages/owners/ManageCars';
import ManageBooking from './Pages/owners/ManageBooking';

const App = () => {

  const [showLogin ,setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<MyBooking/>}/>
        <Route path='/owner' element={<Layout/>}>
          <Route path='add-cars' element={<AddCars/>}/>
          <Route path='manage-cars' element={<ManageCars/>}/>
          <Route path='manage-bookings' element={<ManageBooking/>}/>
        </Route>
      </Routes>
      
      {!isOwnerPath && <Footer/>}
    </>
  )
}

export default App
