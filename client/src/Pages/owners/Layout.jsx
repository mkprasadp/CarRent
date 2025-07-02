import React from 'react'
import Navbarowner from '../../Components/owners/Navbarowner'
import AddCars from './AddCars'
import SideBar from '../../Components/owners/SideBar'
import { Outlet } from 'react-router-dom'
import Dashboard from './Dashboard'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Navbarowner/>
      <div className='flex'>
        <SideBar/>
        <Outlet/>
        <Dashboard/>
      </div>
    </div>
  )
}

export default Layout
