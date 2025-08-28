import React, { useEffect, useState } from 'react';
import { assets, dummyDashboardData } from '../../assets/assets';
import Title from '../../Components/owners/Title';

const Dashboard = () => {
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBooking: 0,
    recentBooking: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    { title: 'Total Cars', value: data.totalCars, icon: assets.carIconColored },
    { title: 'Total Bookings', value: data.totalBookings, icon: assets.listIconColored },
    { title: 'Pending', value: data.pendingBookings, icon: assets.carIconColored },
    { title: 'Confirmed', value: data.completedBooking, icon: assets.listIconColored },
  ];

  useEffect(() => {
    setData(dummyDashboardData);
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        Title="Admin Dashboard"
        subTitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activities"
      />

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor"
          >
            <div>
              <h1 className="text-xs text-gray-500">{card.title}</h1>
              <p className="text-lg font-medium">{card.value}</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
              <img src={card.icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="flex flex-wrap items-start gap-6 mb-8 w-full">
        <div className="p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full">
          <h1 className="text-lg font-medium">Recent Booking</h1>
          <p className="text-gray-500">Latest Customer Booking</p>

          {(data.recentBooking || []).map((booking, index) => (
            <div
              key={index}
              className="mt-4 flex items-center justify-between border-b pb-3 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <img src={assets.listIconColored} alt="" className="w-5 h-5" />
                </div>
                <div>
                  <p>{booking.car.brand} {booking.car.model}</p>
                  <p>{booking.createdAt.split('T')[0]}</p>
                </div>
              </div>
              <div className='flex items-center gap-2 font-medium'>
                <p className='text-sm text-gray-500'>{booking.price}</p>
                <p className='px-3 py-0.5 border border-borderColor rounded-full'>{booking.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
