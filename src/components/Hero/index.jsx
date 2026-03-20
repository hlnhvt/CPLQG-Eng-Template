import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative text-white overflow-hidden bg-center bg-cover bg-no-repeat w-full" style={{ minHeight: '520px', backgroundImage: "url('/hero-bg-3.png')" }}>
      {/* Subtle overlay only if needed, the image itself might be sufficient. Adding a very light gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-900/30 to-transparent"></div>

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex h-full">
        <div className="max-w-3xl flex flex-col justify-center">
          <h2 className="text-3xl sm:text-[36px] font-bold mb-1 leading-tight text-white tracking-wide">
            Accompanying
          </h2>
          <h2 className="text-3xl sm:text-[36px] font-bold mb-3 leading-tight text-white tracking-wide">
            people and businesses
          </h2>
          <h1 className="text-4xl sm:text-[54px] font-extrabold italic tracking-wider mb-10 text-white shadow-sm drop-shadow-md uppercase">
            ENTERING THE NEW ERA
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            {/* 3 Circular Outline Buttons */}
            <div className="flex gap-3">
              <button className="w-11 h-11 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 22 7 12 2"/><line x1="6" x2="6" y1="22" y2="7"/><line x1="18" x2="18" y1="22" y2="7"/><line x1="12" x2="12" y1="22" y2="7"/><line x1="2" x2="22" y1="22" y2="22"/></svg>
              </button>
              <button className="w-11 h-11 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </button>
              <button className="w-11 h-11 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:max-w-md mt-4 sm:mt-0 flex-grow">
              <input
                type="text"
                placeholder="Quick search for legal documents"
                className="w-full pl-6 pr-12 py-3 bg-white rounded-full text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#1e3a8a] text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
