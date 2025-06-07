import React from 'react';
import bg from '../assets/bg2.jpg';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaRegCalendarAlt } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ContactBox = () => {
  const cards = [
    {
      title: "Mail Us 24/7",
      lines: ["info@bosdave.com", "support@bosdave.com"],
      icon: <FaEnvelope className="text-red-600 w-5 h-5" />
    },
    {
      title: "Our Location",
      lines: ["Z 1, Jos Road By Abeokuta Street.", "No. 12 Block A 3rd Floor, City Plaza"],
      icon: <FaMapMarkerAlt className="text-red-600 w-5 h-5" />
    },
    {
      title: "Call US 24/7",
      lines: ["Phone: +234-8023550550", "Mobile: +234-8034922659"],
      icon: <FaPhone className="text-red-600 w-5 h-5" />
    },
    {
      title: "Working Days",
      lines: ["Mon to Fri - 09:00am To 06:00pm", "Saturday to Sunday - Closed"],
      icon: <FaRegCalendarAlt className="text-red-600 w-5 h-5" />
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col justify-center h-90 bg-cover bg-center mb-7"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 px-4 sm:px-8 md:px-16 py-16">
          <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-7xl text-center">
            Contact <span className='text-red-600'>Us</span>
          </h1>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 mt-12 mb-12">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
            className="relative bg-white rounded-[2rem] p-5 shadow-md h-[220px] flex flex-col justify-between border-1 border-red-600"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#232755] mb-2">{card.title}</h2>
              <div className="text-sm text-gray-700 space-y-1">
                {card.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>

            <div className="absolute bottom-[45px] left-4 w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center">
              {card.icon}
            </div>

            <div className="absolute bottom-0 right-0 w-15 h-15 rounded-full bg-[#f5f5f5] flex items-center justify-center cursor-pointer hover:bg-[#e5e5e5] transition-all">
              <FiArrowUpRight className="text-black text-sm" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactBox;
