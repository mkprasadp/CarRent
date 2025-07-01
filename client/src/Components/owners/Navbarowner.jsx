import React from 'react'
import { assets, dummyUserData } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbarowner = () => {
    const user = dummyUserData
  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor 
    relative transition-all'>
      <Link to='/'>
        <img src={assets.logo} alt="" />
      </Link>
      <p>Welcome, {user.name || "Owner"}</p>
    </div>
  )
}

export default Navbarowner
