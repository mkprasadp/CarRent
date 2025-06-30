import React from 'react'
import Title from './Title';
import { assets } from '../assets/assets';

const Testimonial = () => {
    const testimonials = [
        {
            name: "Emma Rodriguez", 
            address: "Barcelona, Spain", 
            image: assets.testimonial_image_1,
            rating: 5, 
            review: "I've rented cars from various companies, but the experience with CarRental was exceptional." 
        },
        {
            name: "John Smith", 
            address: "New York, USA", 
            image: assets.testimonial_image_2, 
            rating: 4, 
            review: "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!"
        },
        {
            name: "Sophia Lee", 
            address: "Seoul, South Korea", 
            image: assets.testimonial_image_1, 
            rating: 5, 
            review: "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service."
        }
    ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44"> 
        <Title title='What Our Customer Say' subTitle='Discover why discrening travelers choose stayVenture for their luxury
        accommodations around the world.'/>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
            {testimonials.map((testimonial,index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 
                transition-all duration-500">
                    <div className="flex items-center gap-3">
                        <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                    <div>
                            <p className="font-playfair text-xl">{testimonial.name}</p>
                            <p className="text-gray-500">{testimonial.address}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 mt-4">
                        {Array(5).fill(0).map((_, index) => (
                            <img key={index} src={assets.star_icon} alt='star-icon'/>
                        ))}
                    </div>
                    <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.review}"</p>
                </div>
            ))}
        </div>
    </div>
   );
}

export default Testimonial
