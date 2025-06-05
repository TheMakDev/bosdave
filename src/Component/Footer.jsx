import {
  FaFacebookF,FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaDownload,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#060b29] text-white px-4 sm:px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-600 pb-8 mb-8 space-y-6 md:space-y-0">
          <Link to="/" className="flex items-center shrink-0">
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-10 sm:h-12 w-auto object-contain"
                    />
                  </Link>
          <button className="flex items-center border border-white px-6 py-3 rounded text-sm hover:bg-white hover:text-black transition">
            <FaDownload className="mr-2 w-5 h-5" />
            DOWNLOAD BROCHURE
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <p className="text-sm text-gray-300">
              <span className='text-white font-bold'>Kaduna:</span> Z 1, Jos Road By Abeokuta Street. <br />
              <span className='text-white font-bold'>ABUJA:</span> No. 12 Block A 3rd Floor, City Plaza <br />
              <span className='text-white font-bold'>Tel</span> 08023550550, 08034922659
            </p>
            <div className="flex space-x-4 mt-4 text-gray-300">
              <FaFacebookF className="w-4 h-4" />
              <FaTwitter className="w-4 h-4" />
              <FaInstagram className="w-4 h-4" />
              <FaPinterestP className="w-4 h-4" />
              <FaYoutube className="w-4 h-4" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Searches</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Apartment for rent</li>
              <li>Office for rent</li>
              <li>Apartment for sale</li>
              <li>Luxuries</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/appointment" className="hover:underline">Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <div className="bg-white rounded-full shadow-md overflow-hidden">
              <div className="flex flex-col sm:flex-row items-stretch relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-black text-sm outline-none"
                />
                <button className="bg-red-500 hover:bg-red-600 px-3 py-3 text-white font-semibold text-sm transition absolute right-0 top-0 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              Esteem and spirit often lead one to say farewell to those who genuinely deserve admiration.
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 border-t border-gray-600 pt-4">
          Copyright ©2025 All rights reserved | Powered by <span className='text-white'>PeterPan IT Solutions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
