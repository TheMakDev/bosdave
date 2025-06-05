import React from 'react';
import bg from '../assets/bridge.jpg';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServicesHero = () => {
  const features = [
    {
      icon: <FaEnvelope className="text-[#f7931e] text-4xl mx-auto mb-3" />,
      title: "Mail Us 24/7",
      description: "Get in touch anytime with our dedicated email support.",
    },
    {
      icon: <FaMapMarkerAlt className="text-[#f7931e] text-4xl mx-auto mb-3" />,
      title: "Our Location",
      description: "Visit us at our conveniently located offices worldwide.",
    },
    {
      icon: <FaPhone className="text-[#f7931e] text-4xl mx-auto mb-3" />,
      title: "Call Us 24/7",
      description: "We are available by phone around the clock to assist you.",
    },
  ];

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
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-white max-w-3xl font-normal text-sm sm:text-base md:text-lg mt-3 sm:mt-4"
          >
            Contact our team through any of the channels below. We’re here to help you with your construction needs.
          </motion.p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-10 px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 -mt-16 z-20 relative shadow-lg rounded-md mx-4 sm:mx-16 text-center">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
          >
            {feature.icon}
            <h3 className="text-base font-semibold mb-2 text-[#232755]">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ServicesHero;
