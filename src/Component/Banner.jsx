import React from 'react'
import { motion } from 'framer-motion'
import bg from '../assets/bg.jpg'

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative flex flex-col justify-center h-90 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 px-4 sm:px-8 md:px-16">
        <h1 className="text-white font-bold text-lg sm:text-4xl lg:text-6xl text-left">
          Are you looking for a Construction <br /> and Industrial Experts?
        </h1>
        <p className="text-white mt-4 text-sm sm:text-base max-w-xl">
          We provide top-notch services tailored to your industrial and construction needs, ensuring quality and reliability.
        </p>
        <button className="bg-transparent border border-amber-500 px-6 py-2 sm:px-8 sm:py-3 text-white rounded-full mt-6 font-medium text-sm sm:text-base hover:bg-amber-500 transition-all">
          Our service
        </button>
      </div>
    </motion.div>
  )
}

export default Banner
