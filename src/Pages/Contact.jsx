import React from 'react';
import ContactBox from '../Component/ContactBox';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div>
      <ContactBox />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-4 py-12 sm:px-6 lg:px-24 lg:py-20 bg-white flex flex-col lg:flex-row gap-12"
      >
        <div className="flex-1">
          <p className="text-xl sm:text-2xl font-bold text-red-600 uppercase">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 mb-6 leading-tight text-[#232755]">
            Happy to answer all your questions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.
            Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.
          </p>
        </div>

        <div className="flex-1 bg-gray-100 p-6 sm:p-8 rounded-3xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-[#232755]">Send a  <span className='text-red-600'>messages</span> to staff</h3>
          <p className="text-sm text-gray-600 mb-6">
            Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-4 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="email" placeholder="Your Email" className="p-4 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="tel" placeholder="Your Phone" className="p-4 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input type="text" placeholder="Subject" className="p-4 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <textarea placeholder="Message" className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" rows={5}></textarea>
            
            <button type="submit" className="mt-4 inline-flex items-center gap-2 bg-[#232755] text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition-all">
              Get Cost Estimate <span className="text-xl">↗</span>
            </button>
          </form>
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-4 py-12 sm:px-6 lg:px-24 lg:py-20 bg-gray-50 rounded-3xl shadow-lg max-w-7xl mx-auto mt-12"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-red-600">
          Our Location
        </h3>
        <div className="w-full h-[350px] sm:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.8867468929!2d7.4859590554199125!3d9.043532100000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bad46180a79%3A0x632520ed453ed5c6!2sArea%2011%20shopping%20mall!5e0!3m2!1sen!2sng!4v1749159008295!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;


