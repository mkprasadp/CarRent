import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home'
import CarDetails from './Pages/CarDetails';
import Cars from './Pages/Cars';
import MyBooking from './Pages/MyBooking';
import Footer from './Components/Footer';

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
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
