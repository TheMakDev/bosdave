import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path to your logo

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src={logo}
        alt="Loading..."
        className="w-24 h-24 spin-slow"
      />
    </div>
  );
};

export default Preloader;
