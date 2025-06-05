import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../assets/assests'; // Adjust path if needed
import ServicesHero from '../Component/ServiceHero';

const ServicesSection = () => {
  return (
    <>
    <ServicesHero/>
      <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white relative"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
        Our <span className='text-red-600'>Service</span>
      </h2>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="w-full flex-shrink-0 relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="relative w-full h-75">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              
            </div>

            <div className="p-4 -mt-4 bg-white rounded-b-2xl">
              <h3 className="text-lg font-bold text-red-500">{item.title}</h3>
              <p className="text-gray-700 mt-2 text-sm">{item.description}</p>
              
            </div>
          </motion.div>
        ))}
      </section>
    </motion.section>
    </>
    
  );
};

export default ServicesSection;
