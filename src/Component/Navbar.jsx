import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-100 py-4 px-4 fixed top-0 left-0 w-full z-50 rounded-b-3xl transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-2 sm:px-4 fade-in">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <li key={link.name} className="fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <Link
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`font-semibold text-2xl hover:text-red-800 transition ${
                  location.pathname === link.path ? 'text-red-600' : 'text-black'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate('/contact')}
          className="hidden lg:block border border-red-600 text-[#232755] font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition fade-in"
          style={{ animationDelay: `${navLinks.length * 100}ms` }}
        >
          Get Quote
        </button>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white backdrop-blur-md shadow-lg rounded-b-3xl px-4 transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 scale-100 py-6 fade-in'
            : 'opacity-0 scale-95 h-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <li key={link.name} className="fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <Link
                to={link.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-semibold ${
                  location.pathname === link.path ? 'text-red-600' : 'text-black'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="fade-in" style={{ animationDelay: '600ms' }}>
            <Search className="w-5 h-5 cursor-pointer" />
          </li>
        </ul>
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            navigate('/contact');
          }}
          className="mt-4 w-full border border-red-600 text-black font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition fade-in"
          style={{ animationDelay: '700ms' }}
        >
          Get Quote ↗
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
