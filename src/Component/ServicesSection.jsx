import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'

import maintenance from '../assets/img1.jpg'
import building from '../assets/img2.jpg'
import bridge from '../assets/img3.jpg'
import plumbing from '../assets/img4.jpg'

const services = [
  {
    title: 'SUPPLY OF FURNITURE',
    desc: 'At BOSDAVE ENGINEERING COMPANY LIMITED, our Procurement Unit reliably meets national supply demands, specializing in efficient furniture supply and delivery with a single point of contact and full accountability.',
    image: maintenance,
  },
  {
    title: 'SUPPLY OF OFFICE INTERIORS',
    desc: 'BOSDAVE ENGINEERING COMPANY LIMITED delivers complete office interior solutions, from furniture supply to full installations, creating functional and stylish workspaces with trusted quality.',
    image: building,
  },
  {
    title: 'COMPUTER/ STATIONERY SUPPLIES',
    desc: 'BOSDAVE ENGINEERING COMPANY LIMITED supplies a wide range of quality IT products, including hardware, peripherals, and consumables from top brands like HP, Canon, Epson, and Xerox, along with essential office stationery.',
    image: bridge,
  },
  {
    title: 'SOLAR WATER PUMPING SYSTEMS',
    desc: 'Solar water pumping systems provide a cost-effective, eco-friendly solution, reducing fuel costs by using photovoltaic technology. Ideal for rural, agricultural, mobile, and recreational uses, they offer reliable water access with minimal environmental impact.',
    image: plumbing,
  },
]

const ServiceCard = ({ service, index }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      tabIndex={0}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      animate={isFocused ? { opacity: 1, y: 0, scale: 1.05 } : undefined}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      whileHover={{ scale: 1.03 }}
      className="snap-start flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] lg:w-[28%] mx-auto bg-white rounded-xl overflow-hidden shadow border border-gray-200 transition hover:shadow-lg outline-none"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 sm:h-60 object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
        <button className="text-orange-500 font-medium inline-flex items-center group hover:text-orange-600 transition">
          More
          <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  )
}

const ServicesSection = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = container.offsetWidth * 0.9
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
      className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white relative"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
        Our Services
      </h2>

      {/* Scroll Buttons (md and up) */}
      <div className="hidden md:block">
        <button
          onClick={() => scroll('left')}
          className="absolute top-[50%] left-4 z-10 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-gray-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute top-[50%] right-4 z-10 transform -translate-y-1/2 bg-white border border-gray-300 shadow-md p-2 rounded-full hover:bg-gray-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Scrollable Card List */}
      <div
        ref={scrollRef}
        className="flex justify-center sm:justify-start gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

export default ServicesSection
