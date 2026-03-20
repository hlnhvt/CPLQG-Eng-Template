import React from 'react';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full mt-16 font-sans">
      <div className="bg-[#1e60e0] text-white text-center py-6 relative overflow-hidden text-[13px] md:text-sm shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 h-full w-full opacity-40 bg-gradient-to-l from-blue-900/60 to-transparent"></div>

        <div className="max-w-[1240px] mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden border border-yellow-400 mb-3 shadow-md">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emblem_of_Vietnam.svg/1200px-Emblem_of_Vietnam.svg.png" alt="Emblem" className="w-10 h-10 object-contain" />
          </div>

          <h2 className="text-xl md:text-2xl font-bold tracking-wide mb-1 shadow-sm drop-shadow-md">
            NATIONAL LAW PORTAL
          </h2>
          <p className="mb-2 text-gray-100 font-medium">Supervising authority: Ministry of Justice</p>

          <p className="mb-4 text-gray-200">
            Address: 60 Tran Phu Street, Ba Dinh Ward, Hanoi | Telephone: 024.62739715
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-3 font-medium text-gray-100">
            <a href="#" className="hover:text-white hover:underline transition-all">Regulations on management, operation, and utilization</a>
            <span className="text-blue-300 hidden md:inline">|</span>
            <a href="#" className="hover:text-white hover:underline transition-all">Privacy Policy</a>
            <span className="text-blue-300 hidden md:inline">|</span>
            <a href="/introduction/contact-information" className="hover:text-white hover:underline transition-all">Contact Us</a>
            <span className="text-blue-300 hidden md:inline">|</span>
            <a href="/subscribe" className="hover:text-white hover:underline transition-all">
              Subscribe to Notifications
            </a>
            <span className="text-blue-300 hidden md:inline">|</span>
            <span className="flex items-center gap-2">
              Follow the National Law Portal on
              <a href="#" className="bg-white text-[#1e60e0] p-1 rounded-full hover:bg-gray-100 transition-colors shadow-sm">
                <Facebook size={16} fill="currentColor" />
              </a>
            </span>
          </div>

          <div className="mb-4 font-medium">
            Total visits: <span className="text-yellow-400 font-bold tracking-wider">1,313,165</span>
          </div>

          <div className="text-gray-200 pt-2 w-full max-w-2xl border-t border-blue-400/30">
            © National Legal Portal. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
