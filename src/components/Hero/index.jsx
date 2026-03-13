import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-brand-blue text-white overflow-hidden" style={{ minHeight: '400px' }}>
      {/* Background patterns and map placeholder */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
      <div className="absolute top-0 right-0 h-full w-1/2 opacity-30 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Location_Vietnam_ASEAN.svg/1200px-Location_Vietnam_ASEAN.svg.png')" }}></div>

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-light italic mb-2 tracking-wide text-blue-100">
            Accompanying
          </h2>
          <h1 className="text-3xl sm:text-4xl font-light italic mb-4 tracking-wide text-blue-100">
            people and businesses
          </h1>
          <h1 className="text-4xl sm:text-6xl font-extrabold italic tracking-tight mb-12 uppercase" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            ENTERING THE NEW ERA
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors tooltip relative group">
                <span className="material-icons opacity-90"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>
              </button>
              <button className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors tooltip relative group">
                <span className="material-icons opacity-90"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg></span>
              </button>
              <button className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors tooltip relative group">
                <span className="material-icons opacity-90"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
              </button>
            </div>

            <div className="relative w-full max-w-lg mt-4 sm:mt-0">
              <input
                type="text"
                placeholder="Quick search for legal documents"
                className="w-full pl-6 pr-14 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-light-blue shadow-lg"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-blue text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
