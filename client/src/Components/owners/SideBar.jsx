import React, { useState } from 'react'
import { dummyUserData } from '../../assets/assets'
import { useLocation } from 'react-router-dom';

const SideBar = () => {
    const user = dummyUserData;
    const location = useLocation();
    const [image,setImage] = useState('');

    const uploadImage = async()=>{
        user.image = URL.createObjectURL(image);
        setImage('');
    }
  return (
    <div className='relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 
    w-full border-r border-borderColor text-sm'>
      <div className='group relative'>
        <label htmlFor="image">
            <img src={image} alt="" />
        </label>
      </div>
    </div>
  )
}

export default SideBar
