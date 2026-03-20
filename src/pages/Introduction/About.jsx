import React, { useState } from 'react';
import { Play, BookOpen, FileText, MessageSquare, Newspaper, X } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutLayout = ({ children }) => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50 selection:bg-blue-200">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <AboutLayout>
      {/* Hero Banner (CPLQG-EN-218.MH01) */}
      <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-28 px-4 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center p-3 shadow-2xl mb-8 border border-white/20 transform hover:scale-105 transition-transform duration-500">
            <img src="/favicon.svg" alt="National Emblem" className="w-16 h-16 object-contain drop-shadow-md" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-2xl">
            NATIONAL LEGAL PORTAL
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl leading-relaxed italic opacity-90">
            "Accompanying citizens and businesses into the new era"
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Introduction Article & Infographic (CPLQG-EN-218.MH02) */}
        <section className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-2 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">National Legal Portal</span>
            </h2>

            <div className="prose prose-lg text-gray-600 leading-relaxed text-justify space-y-5">
              <p>
                The <strong>National Legal Portal</strong> (Cổng Pháp luật Quốc gia) is the official electronic information system of the Socialist Republic of Vietnam, managed by the Ministry of Justice.
              </p>
              <p className="relative pl-6 border-l-4 border-red-500 bg-red-50/50 py-3 pr-4 rounded-r-lg italic text-gray-700">
                Its primary objective is to build a unified, comprehensive, and modernized database of legal normative documents, serving as a reliable and transparent bridge connecting the state's legislative framework with citizens, enterprises, and the international community.
              </p>
              <p>
                In the context of profound globalization, this English version is tailored specifically for our international users—including foreign investors, multinational corporations, and legal researchers. We leverage cutting-edge technology and artificial intelligence to minimize language barriers, providing instantaneous access to translated constitutional laws, decrees, circulars, and draft legislation.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[45%]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group bg-white p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" alt="Legal framework infographic" className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-in-out" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-white/50 z-20 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-sm text-gray-800 font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Figure 1. Ecosystem of the National Legal Portal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section (CPLQG-EN-218.MH03) */}
        <section className="mb-24 relative">
          <div className="absolute -inset-x-4 sm:-inset-x-6 lg:-inset-x-8 -inset-y-12 bg-gray-900/5 skew-y-3 -z-10"></div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 inline-block relative">
              Introduction Video
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative group bg-black aspect-video flex items-center justify-center cursor-pointer border border-gray-200/50" onClick={() => setIsVideoOpen(true)}>
            <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />

            {/* Play Button */}
            <div className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
              <Play className="w-10 h-10 ml-1 text-white fill-current" />
            </div>
          </div>
        </section>

        {/* Feature Cards (CPLQG-EN-218.MH04) */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 inline-block relative">
              Key Features
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Legal Document Library", desc: "Access thousands of translated legal documents with advanced search filters." },
              { icon: FileText, title: "Draft Legislation", desc: "Review and participate in public consultations for upcoming laws." },
              { icon: MessageSquare, title: "Q&A & Consultation", desc: "Ask questions and receive official legal guidance from authorities." },
              { icon: Newspaper, title: "News & Media", desc: "Stay informed with daily updates on policies, resolutions, and legal news." }
            ].map((feature, idx) => (
              <a href="#" key={idx} className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 shadow-inner transition-all duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>

                <h3 className="relative z-10 text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </a>
            ))}
          </div>
        </section>

      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition-colors backdrop-blur-md"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </AboutLayout>
  );
};

export default About;
