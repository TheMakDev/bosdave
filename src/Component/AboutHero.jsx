import React from 'react';
import bg from '../assets/bridge.jpg';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const cards = [
    {
      title: "Mail Us 24/7",
      lines: ["pbminfotech@gmail.com", "support@pbminfotech.com"],
      icon: <FaEnvelope className="text-[#f7931e] w-5 h-5" />,
    },
    {
      title: "Our Location",
      lines: ["85 Preston, Inglewood, Maine 983", "80, Hoofddorp Noord- 2132"],
      icon: <FaMapMarkerAlt className="text-[#f7931e] w-5 h-5" />,
    },
    {
      title: "Call Us 24/7",
      lines: ["Phone: +001 236-895-4732", "Mobile: +9123 895-4732-236"],
      icon: <FaPhone className="text-[#f7931e] w-5 h-5" />,
    },
  ];

  return (
    <>

      <div
        className="relative h-[24rem] sm:h-[28rem] lg:h-[32rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 sm:px-8 md:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white font-bold text-2xl sm:text-4xl lg:text-5xl leading-snug"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white max-w-2xl font-normal text-sm sm:text-base md:text-lg mt-3 sm:mt-4"
          >
            Contact our team through any of the channels below. We’re here to help you with your construction needs.
          </motion.p>
        </div>
      </div>


      <div className="bg-white py-10 px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 -mt-16 z-20 relative shadow-lg rounded-md mx-4 sm:mx-16 text-center">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white rounded-2xl p-6 border border-[#f7931e] shadow-md"
          >
            <div className="w-10 h-10 mx-auto mb-3 bg-[#f5f5f5] rounded-xl flex items-center justify-center">
              {card.icon}
            </div>
            <h3 className="text-base font-semibold mb-2 text-[#232755]">{card.title}</h3>
            <div className="text-gray-600 text-sm space-y-1">
              {card.lines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            <div className="mt-4 w-10 h-10 mx-auto rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-[#e5e5e5] transition-all cursor-pointer">
              <FiArrowUpRight className="text-black text-sm" />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AboutHero;
