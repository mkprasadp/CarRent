import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets';
import Title from '../../Components/owners/Title';

const Dashboard = () => {
  const [data,setDate] = useState({
    totalCars:0,
    totalBookings:0,
    pendingBookings:0,
    completedBooking:0,
    recetBooking: [],
    monthlyRevenvue:0,
  });

  const dashboardCars = [
    {title: "Total Cars",value: data.totalCars, icon: assets.carIconColored},
    {title: "Total Bookings",value: data.totalBookings, icon: assets.listIconColored},
    {title: "Pending",value: data.pendingBookings, icon: assets.carIconColored},
    {title: "Confirmed",value: data.completedBooking, icon: assets.listIconColored},
  ]

  useEffect(()=>{
    setDate(dummyDashboardData);
  },[]);

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
      <Title title="Admin Dashboard" subTitle="Monitor overall platform performance 
      including total cars, bookings, revenue, and recent activities"/>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 
      max-w-3x1'>
        {dashboardCars.map((card,index)=>{
          <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor'>

          </div>
        })}
      </div>
      
    </div>
  )
}

export default Dashboard
