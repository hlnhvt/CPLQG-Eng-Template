import React from 'react';
import { BookOpen, FileText, MessageCircle, Newspaper, Zap, Briefcase } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Functions = () => {
  const groups = [
    {
      id: "01",
      title: "Legal Document Access",
      desc: "Provide comprehensive access to the entire database of Vietnamese Legal Normative Documents. Includes digitized search, full-text reading, PDF downloads, and tracking of legal validity status.",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/20"
    },
    {
      id: "02",
      title: "Draft Law Consultation",
      desc: "Facilitate transparency by publishing draft legislations (Laws, Decrees, Circulars) for public review. Allow users to submit structured comments and feedback directly to drafting committees.",
      icon: FileText,
      color: "from-rose-500 to-red-600",
      shadow: "shadow-red-500/20"
    },
    {
      id: "03",
      title: "Legal Q&A Services",
      desc: "Operate a digitized Legal Q&A system linking questions from citizens and businesses to appropriate ministries and agencies for official, binding responses.",
      icon: MessageCircle,
      color: "from-amber-400 to-orange-500",
      shadow: "shadow-orange-500/20"
    },
    {
      id: "04",
      title: "News & Information",
      desc: "Publish daily news updates, policy highlights, press releases from ministries, and deep-dive articles analyzing newly issued legal frameworks.",
      icon: Newspaper,
      color: "from-emerald-400 to-teal-500",
      shadow: "shadow-teal-500/20"
    },
    {
      id: "05",
      title: "Policy Highlights",
      desc: "Deliver summarized infographics, video briefs, and executive summaries for complex legal codes to ensure rapid comprehension by business leaders and foreign investors.",
      icon: Zap,
      color: "from-purple-500 to-fuchsia-600",
      shadow: "shadow-purple-500/20"
    },
    {
      id: "06",
      title: "Business Support Network",
      desc: "Provide a dedicated channel for corporate legal support, integrating links to national public services, tax portals, and customs documentation.",
      icon: Briefcase,
      color: "from-cyan-400 to-blue-500",
      shadow: "shadow-cyan-500/20"
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50 selection:bg-blue-200">
      <Header />

      {/* Title Section (CPLQG-EN-220.MH01) */}
      <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-12 px-4 overflow-hidden">
        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-red-600 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="flex justify-center mb-6">
            <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
          </div>
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-100 font-semibold text-sm tracking-wider uppercase mb-6 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            Core Ecosystem
          </div> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-xl">
            Functions & Responsibilities
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed opacity-90">
            The National Legal Portal is the central hub for legal data in Vietnam, operating across several core functional domains.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0b2447]/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8">
            {groups.map((group, index) => (
              <div
                key={group.id}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden border border-gray-100/80 hover:-translate-y-2 flex flex-col h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative Background Gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Large Background Number */}
                <div className="absolute -right-4 -bottom-4 text-9xl font-black text-slate-100 opacity-60 select-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 pointer-events-none z-0">
                  {group.id}
                </div>

                <div className="relative z-10 flex-grow flex flex-col">
                  {/* Gradient Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${group.color} text-white flex items-center justify-center mb-8 shadow-lg ${group.shadow} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <group.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {group.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-base flex-grow">
                    {group.desc}
                  </p>
                </div>

                {/* Discover More Link */}
                {/* <div className="relative z-10 mt-8 pt-6 border-t border-slate-100 flex items-center text-sm font-semibold text-blue-600 group-hover:text-indigo-600 transition-colors">
                   <span>Explore Feature</span>
                   <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                 </div> */}

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${group.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Functions;
