import React from 'react'
import Hero from '../Components/Hero'
import FeaturedSection from '../Components/FeaturedSection'
import Banner from '../Components/Banner'
import Testimonial from '../Components/Testimonial'
import Newletter from '../Components/Newletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedSection/>
      <Banner/>
      <Testimonial/>
      <Newletter/>
    </div>
  )
}

export default Home
