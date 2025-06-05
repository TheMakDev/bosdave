import React from 'react'
import { motion } from 'framer-motion'
import bg from '../assets/img.jpg'

const Banner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative flex items-center min-h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      
      <div className="absolute inset-0 bg-black/80 z-0" />

  
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-white font-semibold text-xl sm:text-2xl max-w-3xl">
          <span className="text-red-500">OUR SERVICES</span>
          <br />
          Development and Construction of Basic Engineering Infrastructure
        </h2>

        <p className="text-white mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed">
          BOSDAVE ENGINEERING COMPANY LIMITED focuses on effective collaboration and win-win solutions to basic engineering infrastructures. We welcome projects of all sizes and have the expertise, machinery, vehicles, and facilities to realize complex state-of-the-art infrastructural designs — from suspended bridges to simple residential buildings.
        </p>

        <button className="mt-6 inline-block rounded-full border border-red-500 px-6 py-2 text-white font-medium text-sm transition-colors hover:bg-red-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-red-500">
          Our Service
        </button>
      </div>
    </motion.section>
  )
}

export default Banner
