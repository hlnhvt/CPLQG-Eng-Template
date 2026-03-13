import React from 'react';
import { Landmark, Building2, Gavel, Scale, FileSignature, ShieldAlert, BadgeCheck, Globe2 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const LinkedWebsites = () => {
  const websites = [
    { 
      name: 'Communist Party of Vietnam Portal', 
      url: 'dangcongsan.vn', 
      icon: Landmark, 
      tooltip: 'Official portal of the Communist Party',
      color: 'from-red-500 to-rose-600',
      bgLight: 'bg-red-50 hover:bg-red-100',
      textDark: 'text-red-700'
    },
    { 
      name: 'Government Information Portal', 
      url: 'chinhphu.vn', 
      icon: Building2, 
      tooltip: 'Official portal of the Government of Vietnam',
      color: 'from-blue-500 to-indigo-600',
      bgLight: 'bg-blue-50 hover:bg-blue-100',
      textDark: 'text-blue-700'
    },
    { 
      name: 'National Assembly Portal', 
      url: 'quochoi.vn', 
      icon: Gavel, 
      tooltip: 'Official portal of the National Assembly',
      color: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 hover:bg-amber-100',
      textDark: 'text-amber-700'
    },
    { 
      name: 'Ministry of Justice Portal', 
      url: 'moj.gov.vn', 
      icon: Scale, 
      tooltip: 'Managing authority of the Legal Portal',
      color: 'from-fuchsia-500 to-purple-600',
      bgLight: 'bg-fuchsia-50 hover:bg-fuchsia-100',
      textDark: 'text-fuchsia-700'
    },
    { 
      name: 'Supreme People\'s Court', 
      url: 'toaan.gov.vn', 
      icon: FileSignature, 
      tooltip: 'Highest court of the Socialist Republic of Vietnam',
      color: 'from-emerald-500 to-teal-600',
      bgLight: 'bg-emerald-50 hover:bg-emerald-100',
      textDark: 'text-emerald-700'
    },
    { 
      name: 'Supreme People\'s Procuracy', 
      url: 'vksndtc.gov.vn', 
      icon: ShieldAlert, 
      tooltip: 'Highest prosecutorial authority',
      color: 'from-cyan-500 to-blue-600',
      bgLight: 'bg-cyan-50 hover:bg-cyan-100',
      textDark: 'text-cyan-700'
    },
    { 
      name: 'National Public Service Portal', 
      url: 'dichvucong.gov.vn', 
      icon: BadgeCheck, 
      tooltip: 'Portal for online public administrative services',
      color: 'from-violet-500 to-purple-600',
      bgLight: 'bg-violet-50 hover:bg-violet-100',
      textDark: 'text-violet-700'
    },
    { 
      name: 'Ministry of Foreign Affairs', 
      url: 'mofa.gov.vn', 
      icon: Globe2, 
      tooltip: 'Portal for international relations and diplomacy',
      color: 'from-sky-500 to-blue-600',
      bgLight: 'bg-sky-50 hover:bg-sky-100',
      textDark: 'text-sky-700'
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc] selection:bg-blue-200">
      <Header />
      
      {/* Target: CPLQG-EN-224.MH01: Linked portal system section */}
      
      {/* Decorative Top Banner */}
      <section className="bg-slate-900 border-b border-slate-800 text-white pt-20 pb-24 px-4 relative overflow-hidden">
         {/* Abstract background */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-20 mix-blend-overlay"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-blue-600/20 blur-[100px] rounded-full point-events-none"></div>
         
         <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md">
              Linked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Websites</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Explore the interconnected network of official government portals and core administrative agencies of the Socialist Republic of Vietnam.
            </p>
         </div>
      </section>

      <main className="flex-grow pb-24 px-4 sm:px-6 lg:px-8 relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
             {websites.map((site, idx) => (
               <a 
                 href={`https://${site.url}`} 
                 target="_blank" 
                 rel="noreferrer"
                 key={idx} 
                 className={`group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full border border-slate-100`}
                 style={{ animationDelay: `${idx * 100}ms` }}
               >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                  
                  {/* Top line indicator */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${site.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10`}></div>
                  
                  <div className="relative z-10 flex-grow flex flex-col">
                    {/* Icon Container */}
                    <div className="flex justify-between items-start mb-8">
                       <div className={`w-16 h-16 rounded-2xl ${site.bgLight} ${site.textDark} flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md`}>
                         <site.icon className="w-8 h-8" strokeWidth={1.5} />
                       </div>
                       
                       {/* Link Arrow icon */}
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 ${site.bgLight} ${site.textDark}`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                       </div>
                    </div>
                    
                    <h3 className="font-bold text-slate-800 text-xl md:text-2xl mb-3 group-hover:text-indigo-700 transition-colors leading-tight">
                      {site.name}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                      {site.tooltip}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                       <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{site.url}</span>
                    </div>
                  </div>
               </a>
             ))}
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LinkedWebsites;
