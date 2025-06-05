import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
      className={`bg-gray-100 py-4 px-6 fixed top-0 left-0 w-full z-50 rounded-b-3xl transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-[#232755]">
          Bos<span className="text-[#f7931e]">dave</span>
        </div>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`font-semibold hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-black'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate('/contact')}
          className="hidden lg:block border border-[#f7931e] text-[#232755] font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition"
        >
          Get Quote
        </button>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white backdrop-blur-md shadow-lg rounded-b-3xl py-6 px-4 transition-all duration-300">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`font-semibold ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-black'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Search className="w-5 h-5 cursor-pointer" />
            </li>
          </ul>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/contact');
            }}
            className="mt-4 w-full border border-blue-600 text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition"
          >
            Get Quote ↗
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
