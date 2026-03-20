import React, { useState, useEffect } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';

const TopBar = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setCurrentDate(now.toLocaleDateString('en-US', options).replace(/,/g, ''));
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#3b82f6] text-white py-2 px-4 sm:px-6 lg:px-8 border-b-0">
      {/* Subtle background pattern/overlay similar to the image */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay"></div>

      <div className="relative max-w-[1240px] mx-auto flex justify-between items-center z-10">

        {/* Left: Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden border-yellow-400">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emblem_of_Vietnam.svg/1200px-Emblem_of_Vietnam.svg.png" alt="Emblem" className="w-10 h-10 object-contain" />
          </div>
          <span className="font-bold text-lg tracking-wide shadow-sm drop-shadow-md">NATIONAL LAW PORTAL</span>
        </div>

        {/* Right: Search, Date, Language, Profile */}
        <div className="flex items-center space-x-6 text-sm">
          <button className="hover:text-gray-200 transition-colors tooltip relative group cursor-pointer group">
            <Search size={18} />
          </button>

          <div className="hidden md:block font-medium">
            {currentDate}
          </div>

          <div className="flex items-center space-x-2 text-red-500 font-bold bg-white/10 px-2 py-0.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></div>
            <span className="text-white text-xs uppercase tracking-wider">Newest</span>
          </div>

          <a href="#" className="flex items-center space-x-1 hover:text-gray-200 transition-colors font-medium tooltip relative group">
            <span>Vietnamese Edition</span>
            <ArrowUpRight size={14} />
          </a>

          <div className="w-9 h-9 bg-[#2e4385] rounded-full flex items-center justify-center font-bold border border-white/20 hover:bg-[#1e2f65] cursor-pointer transition-colors shadow-sm">
            N
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
