import React from 'react';
import { Globe, Cpu, Link as LinkIcon, Milestone, Target, Rocket } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Vision = () => {
  const milestones = [
    { year: "2020", title: "Foundation Established", desc: "Launch of the core legal database covering 90% of active Central-level documents." },
    { year: "2022", title: "AI Integration Phase I", desc: "Introduction of semantic search capabilities and automated categorization." },
    { year: "2024", title: "Bilingual Expansion", desc: "Release of the comprehensive English interface and prioritized translations for FDI sectors." },
    { year: "2026", title: "Interactive Public API", desc: "Opening system data to international legal tech firms and global universities." },
    { year: "2030", title: "Full Automation Goal", desc: "Targeting real-time, automated translation for all newly promulgated documents." }
  ];

  const goals = [
    { title: "Transparency & Accessibility", desc: "Ensure every citizen and foreign investor has instantaneous, free access to the nation's legal heartbeat.", icon: Globe, color: "from-sky-400 to-blue-500" },
    { title: "AI-Driven Interpretation", desc: "Deploy sophisticated Large Language Models to summarize complex circulars into digestible, actionable business insights.", icon: Cpu, color: "from-fuchsia-400 to-purple-600" },
    { title: "Regional Interoperability", desc: "Connect our databases directly with the ASEAN Legal Information Portal to facilitate seamless cross-border compliance.", icon: LinkIcon, color: "from-teal-400 to-emerald-500" }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50 selection:bg-blue-200">
      <Header />

      {/* CPLQG-EN-221.MH01: Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-32 overflow-hidden flex items-center justify-center min-h-[70vh]">
        {/* Parallax Background Video/Image Concept */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/80 via-transparent to-[#3b82f6]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Vision Block */}
          <div className="mb-20 transform -translate-y-4 animate-[fadeIn_1s_ease-out_forwards] flex flex-col items-center text-center">
            <div className="flex justify-center mb-6">
              <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
            </div>
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-100 font-semibold text-sm tracking-widest uppercase mb-8 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                 <Target className="w-4 h-4 text-blue-400" />
                 Long-term Vision
              </div> */}
            <h1 className="text-6xl md:text-6xl font-black uppercase tracking-tighter mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-300 drop-shadow-2xl">
              VISION
            </h1>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-blue-50 max-w-4xl mx-auto italic relative">
              <span className="absolute -top-10 -left-10 text-7xl text-blue-500/30">"</span>
              To become the premier <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">digital legal platform</span> in Vietnam, leveraging advanced technology and artificial intelligence to deliver high-quality legal services.
              <span className="absolute -bottom-10 -right-10 text-8xl text-blue-500/30">"</span>
            </p>
          </div>

          {/* Mission Block */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 to-yellow-500"></div>
            <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Rocket className="w-64 h-64 text-white" />
            </div>
            <div className="inline-flex items-center gap-2 text-red-400 font-bold uppercase tracking-widest mb-4">
              <Milestone className="w-5 h-5" />
              Our Mission
            </div>
            <p className="text-lg md:text-xl font-light text-gray-200 leading-relaxed">
              Bridging the gap between the state's legislative aspirations and practical public implementation through unhindered, intuitive access to legal knowledge for all citizens, businesses, and international users.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
          <span className="text-xs uppercase tracking-widest text-blue-200 mb-2">Scroll</span>
          <div className="w-0.5 h-10 bg-gradient-to-b from-blue-400 to-transparent"></div>
        </div>
      </section>

      <main className="flex-grow py-32 px-4 sm:px-6 lg:px-8 relative z-20 bg-slate-50">

        {/* CPLQG-EN-221.MH02: Strategic Goals */}
        <div className="max-w-7xl mx-auto mb-40">
          <div className="text-center mb-20 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Strategic Goals</h2>
            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {goals.map((goal, idx) => (
              <div key={idx} className="group relative bg-white rounded-3xl p-10 border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-50 to-white rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>

                <div className="flex items-center justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${goal.color} text-white flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                    <goal.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <span className="text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-300 select-none">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                  {goal.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {goal.desc}
                </p>

                {/* Bottom decorative line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${goal.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* CPLQG-EN-221.MH03: Development Milestones */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
            {/* Background embellishments */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

            <div className="text-center mb-24 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Development Milestones</h2>
              <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            </div>

            {/* Responsive Timeline */}
            <div className="relative z-10 hidden md:block">
              {/* Horizontal Line Container */}
              <div className="absolute top-20 left-10 right-10 h-1 rounded-full bg-slate-200">
                {/* Progress Line (e.g. up to 2024 active) */}
                <div className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 w-3/5"></div>
              </div>

              <div className="flex justify-between relative mt-16">
                {milestones.map((m, idx) => {
                  const isActive = parseInt(m.year) <= 2024;
                  return (
                    <div key={idx} className="w-1/5 relative group px-2 flex flex-col items-center">
                      {/* Timeline Node */}
                      <div className={`absolute -top-[52px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 shadow-md z-20 group-hover:scale-150 transition-all duration-300 ${isActive ? 'bg-indigo-600 border-white' : 'bg-white border-slate-300 group-hover:border-indigo-400'}`}></div>

                      {/* Year */}
                      <div className="text-center mb-6 h-8">
                        <span className={`text-3xl font-black transition-colors duration-300 ${isActive ? 'text-indigo-600' : 'text-slate-300 group-hover:text-indigo-400'}`}>
                          {m.year}
                        </span>
                      </div>

                      {/* Content Card */}
                      <div className="text-center flex flex-col items-center">
                        <h4 className={`font-bold mb-3 ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{m.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-[180px]">{m.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="md:hidden relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {milestones.map((m, idx) => {
                const isActive = parseInt(m.year) <= 2024;
                return (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shadow shrink-0 z-10 ${isActive ? 'bg-indigo-600 border-white' : 'bg-white border-slate-300'}`}>
                      <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-slate-400'}`}></div>
                    </div>
                    {/* Content */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className={`font-bold ${isActive ? 'text-indigo-600' : 'text-slate-500'}`}>{m.title}</div>
                        <div className={`text-xs font-black ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>{m.year}</div>
                      </div>
                      <div className="text-slate-500 text-sm">{m.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vision;
