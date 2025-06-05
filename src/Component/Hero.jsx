import React from 'react'
import bg from '../assets/bg.jpg'
import { FaPencilRuler, FaHardHat, FaTools } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-[24rem] sm:h-[28rem] lg:h-[32rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-8 md:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white font-bold text-2xl sm:text-4xl lg:text-5xl leading-snug"
          >
            We Build Your Home <br /> Secure And Safe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-white max-w-3xl font-normal text-sm sm:text-base md:text-lg mt-3 sm:mt-4"
          >
            We are a team of professionals dedicated to delivering top-quality service.
            Our goal is to build homes with a strong focus on safety and high standards.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-transparent border border-amber-500 px-5 py-2 sm:px-6 sm:py-3 text-white rounded-full mt-4 sm:mt-5 font-medium text-sm sm:text-base"
          >
            Our service
          </motion.button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-10 px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 -mt-16 z-20 relative shadow-lg rounded-md mx-4 sm:mx-16 text-center">
        {[
          {
            icon: <FaPencilRuler className="text-orange-500 text-4xl mx-auto mb-3" />,
            title: "FINANCIAL CAPABILITY",
            description: "We are fully committed to executing awarded projects and sourcing necessary funds for key contractual obligations. We consistently meet our clients’ needs, regardless of size, scope, or location, with the resources and capacity to handle all demands"
          },
          {
            icon: <FaHardHat className="text-orange-500 text-4xl mx-auto mb-3" />,
            title: "TEAM EFFORT",
            description: "We see the entire site as a community and use a team approach to identify safety and quality issues, developing proactive solutions. All site personnel, including subcontractors, are certified professionals committed to maintaining high safety standards. We foster a strong culture of hard work and collaboration."
          },
          {
            icon: <FaTools className="text-orange-500 text-4xl mx-auto mb-3" />,
            title: "OUR AFFORDABILITY",
            description:"Though clients often expect us to be expensive due to our high standards, we surprise them with our down-to-earth pricing. We use the best skilled teams and equipment but ensure our services remain affordable and accessible to all customers."
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
          >
            {item.icon}
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Hero
