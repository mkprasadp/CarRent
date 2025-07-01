import React, { useState } from 'react'
import { assets, dummyUserData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom';

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
            <img src={image ? URL.createObjectURL(image): user?.image || ""} alt="" className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto'/>
            <input type="file" id='image' accept='image/*' hidden onChange={(e)=>setImage(e.target.files[0])}/>

            <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center
            justify-center cursor-pointer'>
              <img src={assets.edit_icon} alt="" />
            </div>

        </label>
      </div>
      
      {image &&(
        <button className='absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer'>Save 
          <img src={assets.check_icon} width={13} alt='' onClick={uploadImage}/>
        </button>
      )}
      <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>
      <div className='w-full'>
        {ownerMenuLinks.map((link, index) => (
          <NavLink key={index} to={link.path} className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6
            ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}>
            <img src={location.pathname === link.path ? link.coloredIcon : link.icon} alt=""/>
          <span className="max-md:hidden">{link.name}</span>
          {location.pathname === link.path && (
            <div className="bg-primary w-1.5 h-8 rounded-r absolute right-0" />
          )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SideBar
