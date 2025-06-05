import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Preloader from './Component/Preloader'; // Import Preloader

// Lazy-loaded pages
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Blog = lazy(() => import('./Pages/Blog'));
const Portfolio = lazy(() => import('./Pages/Portfolio'));
const Services = lazy(() => import('./Pages/Services'));
const Contact = lazy(() => import('./Pages/Contact'));

const App = () => {
  const location = useLocation();

  return (
    <div>
      <div className="mb-20">
        <Navbar />
      </div>

      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Home key={location.key} />} />
          <Route path="/about" element={<About key={location.key} />} />
          <Route path="/blog" element={<Blog key={location.key} />} />
          <Route path="/portfolio" element={<Portfolio key={location.key} />} />
          <Route path="/services" element={<Services key={location.key} />} />
          <Route path="/contact" element={<Contact key={location.key} />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
