import React, { useState } from 'react'
import Title from '../../Components/owners/Title';
import { assets } from '../../assets/assets';

const AddCars = () => {

  const [image,SetImage] = useState(null);
  const [car,Setcar] = useState({
    brand:'',
    model:'',
    year:0,
    pricePerDay:0,
    category:'',
    transmission:'',
    fuel_type:'',
    seat_capacity:0,
    location:'',
    description:''
  })

  const onSubmithandler = async()=>{
    e.preventDefault();
  }
  
  return (
    <div className='px-4 py-10 md:px-10 flex-1 '>
      <Title Title="Add New Car" subTitle="Fill in details to list a new car for booking, including pricing, avaliability, and car specifications."/>

      <form onSubmit={onSubmithandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image?URL.createObjectURL(image):assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
            <input type="file" id='car-image' accept='image/*' hidden onChange={e=>SetImage(e.target.files[0])}/>
          </label>
          <p className='text-sm text-gray-500'>Upload a pricture of your car</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input type="text" placeholder='e.g. BMW, Mercedes, Audi...' required 
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={e=>Setcar({...car,brand:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label>Model</label>
            <input type="text" placeholder='e.g. X5, E-class, M4...' required 
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={e=>Setcar({...car,model:e.target.value})}/>
          </div>
        </div>

        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Year</label>
            <input type="text" placeholder='2025' required 
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.year} onChange={e=>Setcar({...car,year:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label>Daliy Price</label>
            <input type="text" placeholder='1000' required 
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.pricePerDay} onChange={e=>Setcar({...car,pricePerDay:e.target.value})}/>
          </div>
        </div>

      </form>

    </div>
  )
}

export default AddCars
