import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const OpenLetter = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50 selection:bg-blue-200">
      <Header />

      {/* Title Area (CPLQG-EN-219.MH01) */}

      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0b2447]/5 to-transparent pointer-events-none"></div>

        <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] overflow-hidden border border-gray-100 relative group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.12)]">

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-red-500 transform origin-left transition-transform duration-1000 group-hover:scale-x-105"></div>
          <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-multiply"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110"></div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10">
            {/* Header of Letter */}
            <header className="flex flex-col md:flex-row justify-between items-center md:items-start mb-14 border-b border-gray-100 pb-10 gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 font-semibold text-xs tracking-wider uppercase mb-4 border border-red-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                  Official Message
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                  Open Letter to Our <span className="italic text-blue-700">International Users</span>
                </h2>
              </div>
              <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center p-3 shadow-xl shrink-0 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Emblem_of_Vietnam.svg/1200px-Emblem_of_Vietnam.svg.png" alt="Emblem of Vietnam" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
            </header>

            {/* Letter Content */}
            <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed font-serif text-justify selection:bg-blue-100">
              <p className="first-letter:text-7xl first-letter:font-bold first-letter:text-blue-800 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                It is my great honor and privilege to welcome you to the English version of the National Legal Portal.
              </p>
              <p>
                In an era marked by deep global integration, the Socialist Republic of Vietnam is committed to fostering a transparent, secure, and predictable legal and investment environment. We recognize that accessing accurate legal information is paramount for foreign investors, international organizations, and researchers engaging with Vietnam.
              </p>
              <p>
                This portal has been meticulously developed to serve as the single point of truth for Vietnam's legal system in the English language. It reflects our unwavering dedication to administrative reform and digital transformation, aiming to eliminate language barriers and facilitate your meaningful participation in our nation's development.
              </p>
              <p>
                On this platform, you will find authoritative translations of key legislative documents, timely policy updates, and channels for public consultation on draft laws. We actively invite your feedback to continuously enhance the usability and comprehensiveness of this vital resource.
              </p>
              <p className="text-xl italic text-gray-800 font-medium text-center md:text-right mt-10">
                "Thank you for your interest and partnership in building a prosperous future."
              </p>
            </div>

            {/* Signature Block */}
            <footer className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
              <div className="flex items-center gap-6 order-2 md:order-1">
                {/* Portrait */}
                <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-red-500 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-white">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" alt="Portrait of Minister" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>

              </div>

              <div className="text-center md:text-right order-1 md:order-2">
                <p className="text-gray-500 italic mb-6 font-serif">Hanoi, January 2026</p>

                {/* Faux Signature */}
                <div className="mb-4 transform hover:scale-105 transition-transform origin-right duration-300 flex justify-center md:justify-end">
                  <div className="h-[4.5rem] flex items-center text-5xl text-slate-800 opacity-80 -rotate-2 select-none pointer-events-none" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
                    Nguyen Van A
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="font-bold text-2xl text-gray-900 tracking-wide">Nguyen Van A</p>
                  <p className="text-blue-700 font-medium uppercase tracking-widest text-sm">Minister of Justice</p>
                </div>
              </div>
            </footer>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default OpenLetter;
