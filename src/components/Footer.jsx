// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        {/* Address Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Our Address</h2>
          <p>No 54 Ken Saro-wiwa Road, Former Stadium Road. Elekahia, Port Harcourt, Nigeria.</p>
          <p className="mt-2">
            <span role="img" aria-label="Phone">📞</span> +234 (0) 701 166 1146 <br />
            <span role="img" aria-label="Phone">📞</span> +234 (0) 701 166 1146
          </p>
          <p className="mt-2">
            <span role="img" aria-label="Email">📧</span> info@opticare.com.ng <br />
            opticareeyeclinic@gmail.com
          </p>
        </div>

        {/* Navigation Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Navigation</h2>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Teez Optics</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Our Lenses</a></li>
            <li><a href="#" className="hover:text-gray-400">Our Frames</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>Copyright © 2024 Opti-Care Eye clinic</p>
      </div>
    </footer>
  );
};

export default Footer;
