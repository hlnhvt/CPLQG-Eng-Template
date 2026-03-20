import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Layers, FileText, Settings, Landmark, ChevronRight, Scale, BookOpen, ShieldCheck, Building2 } from 'lucide-react';

const LegalSystem = () => {
  const [activeSection, setActiveSection] = useState('framework');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['framework', 'types', 'process', 'authorities'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 120, behavior: 'smooth' });
    }
  };

  const menu = [
    { id: 'framework', label: '1. Legal Framework', icon: Layers },
    { id: 'types', label: '2. Types of Documents', icon: FileText },
    { id: 'process', label: '3. Law-making Process', icon: Settings },
    { id: 'authorities', label: '4. Key Authorities', icon: Landmark }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50 selection:bg-blue-200 scroll-smooth">
      <Header />

      {/* CPLQG-EN-226.MH01: Header */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-24 px-4 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="flex justify-center mb-6">
            <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg tracking-tight">
            Vietnamese Legal System
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl font-light leading-relaxed">
            A comprehensive guide to understanding the structure, legislative process, and authoritative bodies of Vietnam.
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12 w-full items-start relative z-20">

        {/* Sticky Sidebar */}
        <aside className="w-full lg:w-1/4 hidden lg:block sticky top-28">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest pl-4 mb-4 mt-2">Navigation</h3>
            <ul className="space-y-2 relative before:absolute before:inset-0 before:ml-[1.375rem] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              {menu.map(item => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="relative z-10">
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${isActive ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 border border-transparent hover:border-slate-100'}`}
                    >
                      <div className={`p-1.5 rounded-lg transition-colors ${isActive ? 'bg-indigo-100 text-indigo-600' : 'bg-white text-slate-400 border border-slate-200'}`}>
                        <item.icon className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      {item.label}
                      {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-600 rounded-r-full"></div>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Content Area */}
        <div className="w-full lg:w-3/4 space-y-24">

          {/* Section: Legal Framework (CPLQG-EN-226.MH02) */}
          <section id="framework" className="scroll-mt-32 relative">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 text-indigo-600 flex items-center justify-center text-xl shrink-0 shadow-sm border border-indigo-200">
                <Layers className="w-6 h-6" />
              </span>
              Legal Framework Hierarchy
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row gap-12 items-center">

              <div className="flex-1 space-y-6 text-lg text-slate-600 font-serif leading-relaxed">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-indigo-800 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                  Vietnam's legal system is a civil law system rooted deeply in its historical and constitutional development.
                </p>
                <p>
                  The hierarchy of legal normative documents encompasses various levels of legislation, with the Constitution being the supreme law of the land. Documents at a higher level possess superior legal validity, and lower-level documents must strictly comply with them.
                </p>
              </div>

              {/* Premium Pyramid Illustration */}
              <div className="flex-1 w-full max-w-md relative flex flex-col items-center justify-end font-sans group">
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full -z-10 group-hover:bg-blue-500/10 transition-colors duration-500"></div>

                <div className="w-[35%] h-16 bg-gradient-to-r from-red-600 to-rose-600 text-white flex items-center justify-center font-bold text-sm mb-1.5 rounded-t-xl group-hover:-translate-y-2 transition-transform duration-500 shadow-lg border-b border-white/20 relative z-40">
                  <span className="drop-shadow-md">Constitution</span>
                </div>
                <div className="w-[55%] h-16 bg-gradient-to-r from-blue-800 to-indigo-800 text-white flex items-center justify-center font-bold text-sm mb-1.5 rounded-sm group-hover:-translate-y-1 transition-transform duration-500 shadow-lg border-b border-white/20 relative z-30">
                  <span className="drop-shadow-md">Laws / Codes</span>
                </div>
                <div className="w-[75%] h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-1.5 rounded-sm group-hover:translate-y-1 transition-transform duration-500 shadow-lg border-b border-white/20 relative z-20">
                  <span className="drop-shadow-md">Decrees / Ordinances</span>
                </div>
                <div className="w-[95%] h-16 bg-gradient-to-r from-blue-400 to-indigo-400 text-white flex items-center justify-center font-bold text-sm rounded-b-xl group-hover:translate-y-2 transition-transform duration-500 shadow-lg relative z-10">
                  <span className="drop-shadow-md">Circulars / Decisions</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Types of Legal Documents (CPLQG-EN-226.MH03) */}
          <section id="types" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 text-teal-600 flex items-center justify-center text-xl shrink-0 shadow-sm border border-teal-200">
                <FileText className="w-6 h-6" />
              </span>
              Types of Documents
            </h2>
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                      <th className="px-6 py-5 border-b border-slate-200 font-bold w-1/4">Document Type</th>
                      <th className="px-6 py-5 border-b border-slate-200 font-bold w-1/2">Description & Scope</th>
                      <th className="px-6 py-5 border-b border-slate-200 font-bold w-1/4">Issuing Authority</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700 font-medium align-top">
                    {[
                      { type: 'Constitution', desc: 'The fundamental law shaping the political regime, economic system, and human rights.', auth: 'National Assembly', bg: 'bg-white' },
                      { type: 'Law / Code', desc: 'Regulates basic relations in socio-economic development, defense, and international affairs.', auth: 'National Assembly', bg: 'bg-slate-50/50' },
                      { type: 'Ordinance', desc: 'Regulates issues assigned by the National Assembly, pending formal legislation.', auth: 'Standing Committee (NA)', bg: 'bg-white' },
                      { type: 'Decree', desc: 'Provides detailed, actionable guidance for the implementation of Laws. Crucial for business.', auth: 'Government', bg: 'bg-slate-50/50' },
                      { type: 'Circular', desc: 'Specific administrative procedures and instructions issued at the ministerial level.', auth: 'Ministries', bg: 'bg-white' },
                      { type: 'Decision', desc: 'Specific administrative orders, policies, or localized regulations for specific entities.', auth: 'PM / President / Agencies', bg: 'bg-slate-50/50' }
                    ].map((row, i) => (
                      <tr key={i} className={`${row.bg} hover:bg-blue-50/50 transition-colors border-b border-slate-100 last:border-0 group`}>
                        <td className="px-6 py-5 font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{row.type}</td>
                        <td className="px-6 py-5 text-sm text-slate-600 leading-relaxed font-serif">{row.desc}</td>
                        <td className="px-6 py-5">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
                            {row.auth}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section: Law-making Process (CPLQG-EN-226.MH04) */}
          <section id="process" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-orange-600 flex items-center justify-center text-xl shrink-0 shadow-sm border border-orange-200">
                <Settings className="w-6 h-6" />
              </span>
              Law-making Process
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">

              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10"></div>

              <div className="relative">
                {/* Desktop Horizontal Connecting Line */}
                <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-1 bg-slate-100 rounded-full">
                  {/* Animated progress bar */}
                  <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-orange-400 to-rose-500 rounded-full opacity-50"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 relative z-10 w-full">
                  {[
                    { step: '01', title: 'Proposal', desc: 'Agencies formally propose the law; a specialized drafting committee is formed.', color: 'text-orange-600 border-orange-200 bg-orange-50' },
                    { step: '02', title: 'Consultation', desc: 'Drafts are published on portals for public and business feedback for at least 60 days.', color: 'text-rose-600 border-rose-200 bg-rose-50' },
                    { step: '03', title: 'Appraisal', desc: 'Ministry of Justice thoroughly appraises; the Government formally reviews the draft.', color: 'text-fuchsia-600 border-fuchsia-200 bg-fuchsia-50' },
                    { step: '04', title: 'Promulgation', desc: 'National Assembly votes to adopt. The President signs the final promulgation order.', color: 'text-indigo-600 border-indigo-200 bg-indigo-50' }
                  ].map((item, i) => (
                    <div key={i} className="flex md:flex-col items-start md:items-center gap-6 md:gap-4 md:w-1/4 group flex-1">
                      <div className={`w-16 h-16 rounded-2xl bg-white border-2 flex items-center justify-center font-black text-2xl shadow-sm shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg ${item.color} group-hover:bg-current group-hover:text-white`}>
                        {item.step}
                      </div>
                      <div className="md:text-center mt-1 md:mt-4">
                        <h4 className="font-extrabold text-slate-800 text-lg mb-2 leading-tight group-hover:text-indigo-600 transition-colors uppercase tracking-wide">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-serif">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Section: Key Legal Authorities (CPLQG-EN-226.MH05) */}
          <section id="authorities" className="scroll-mt-32">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-100 to-red-100 text-red-600 flex items-center justify-center text-xl shrink-0 shadow-sm border border-red-200">
                <Landmark className="w-6 h-6" />
              </span>
              Key Authorities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Legislative */}
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-6 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-black uppercase text-red-500 tracking-widest mb-6 border-b border-red-100 pb-4">Legislative Branch</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">National Assembly</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3">(Quốc hội)</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-serif">The highest representative body of the people and highest organ of State power. Sole authority to enact the Constitution and Laws.</p>
                  </div>
                </div>
              </div>

              {/* Executive */}
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-black uppercase text-blue-500 tracking-widest mb-6 border-b border-blue-100 pb-4">Executive Branch</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Government / PM</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">(Chính phủ)</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-serif">Highest State administrative body. Enacts Decrees and Decisions to enforce Laws.</p>
                  </div>
                  <div className="pt-4 border-t border-slate-50">
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Ministry of Justice</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">(Bộ Tư pháp)</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-serif">Appraises drafts, monitors law execution, and manages this National Legal Portal.</p>
                  </div>
                </div>
              </div>

              {/* Judicial */}
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-black uppercase text-emerald-500 tracking-widest mb-6 border-b border-emerald-100 pb-4">Judicial Branch</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Supreme People's Court</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">(Tòa án NDTC)</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-serif">The highest judicial body. Issues Judicial Precedents (Án lệ) for nationwide application.</p>
                  </div>
                  <div className="pt-4 border-t border-slate-50">
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Supreme Procuracy</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">(Viện kiểm sát NDTC)</p>
                    <p className="text-sm text-slate-600 leading-relaxed font-serif">Exercises prosecutorial power and ensures the unified observation of law.</p>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalSystem;
