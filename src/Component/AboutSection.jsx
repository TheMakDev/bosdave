import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import worker from "../assets/bg2.jpg";

const AboutSection = () => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-16 bg-white" ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src={worker}
            alt="construction worker"
            className="w-[90%] max-w-sm md:max-w-full h-auto rounded-xl shadow-md"
          />
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            We Serve all of your <br className="hidden sm:block" />
            <span className="text-orange-500">Construction Services</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-3">
            “BOSDAVE ENGINEERING COMPANY LIMITED was established in 2002 and registered with the Companies and Allied Matters Act 1990 of Corporate Affairs Commission as DAVE ELECTRICAL SYSTEM which later metamorphosed to BOSDAVE ENGINEERING COMPANY LIMITED. ”
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            The company's corporate head office is located in the nation's capital, Abuja. The organization is a general contractor, offering services in various sectors like, Construction, Civil, Cleaning, Borehole Drilling and General Supply, etc. The company is a human resource nub where contractors and job handlers with maximum guarantee can shop for and access Engineers, skill workers, artisan and unskilled manual labourers depending on customers's construction needs.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
            ABOUT US
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
