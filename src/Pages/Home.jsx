import React from 'react'
import Hero from '../Component/Hero'
import AboutSection from '../Component/AboutSection'
import ServicesSection from '../Component/ServicesSection'
import Banner from '../Component/Banner'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutSection/>
        <ServicesSection/>
        <Banner/>
    </div>
  )
}

export default Home