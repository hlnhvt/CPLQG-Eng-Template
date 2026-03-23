import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Target, CheckCircle2, Circle, FileText, Download, AlertTriangle, BookOpen, ExternalLink } from 'lucide-react';

const ComplianceTopicDetail = () => {
  const { id } = useParams();

  // Mock data for the topic
  const topic = {
    id: id,
    title: 'Company Registration & Licensing',
    category: 'Market Entry',
    lastUpdated: '01/03/2026',
    progress: 25,
    description: 'A comprehensive, step-by-step compliance checklist for establishing your legal entity in Vietnam, from securing investment certificates to obtaining necessary sub-licenses for specific sectors.',
    checklist: [
       { id: 1, title: 'Determine the Business Line & Legal Structure', desc: 'Verify if your target business sector is open to foreign investment under the WTO commitments and Vietnamese Law on Investment. Choose between LLC, JSC, or Branch Office.', status: 'completed' },
       { id: 2, title: 'Apply for Investment Registration Certificate (IRC)', desc: 'Submit the investment project proposal to the Department of Planning and Investment (DPI) or applicable Industrial Zone Management Board. Processing time: ~15 working days.', status: 'completed' },
       { id: 3, title: 'Apply for Enterprise Registration Certificate (ERC)', desc: 'Register the company’s legal entity. This officially forms the company. Processing time: ~3 working days after IRC approval.', status: 'pending' },
       { id: 4, title: 'Open Capital & Current Accounts', desc: 'Open a Direct Investment Capital Account (DICA) at a licensed bank in Vietnam to inject charter capital, and a standard current account for daily operations.', status: 'pending' },
       { id: 5, title: 'Initial Tax Registration & Invoice Issuance', desc: 'Register with the local tax department, purchase a digital signature, pay the annual business license tax, and register for e-invoicing.', status: 'pending' },
       { id: 6, title: 'Apply for Sub-Licenses (If applicable)', desc: 'For conditional business lines (e.g., retail, education, health), apply for the relevant operating licenses from sector-specific ministries.', status: 'pending' },
    ],
    resources: [
       { title: 'Law on Investment No. 61/2020/QH14', type: 'PDF', size: '1.2 MB', category: 'Legal Document' },
       { title: 'Law on Enterprises No. 59/2020/QH14', type: 'PDF', size: '1.5 MB', category: 'Legal Document' },
       { title: 'IRC Application Form (Standard Template)', type: 'DOCX', size: '250 KB', category: 'Template' },
    ]
  };

  const [checklistState, setChecklistState] = useState(topic.checklist);

  const toggleTask = (taskId) => {
     setChecklistState(prev => prev.map(task => 
        task.id === taskId 
          ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } 
          : task
     ));
  };

  const completedCount = checklistState.filter(t => t.status === 'completed').length;
  const currentProgress = Math.round((completedCount / checklistState.length) * 100);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] pt-8 pb-16">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
               <div className="w-full md:w-2/3 text-center md:text-left">
                  <div className="flex justify-center mb-4">
                  <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
                  </div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
                     {topic.title}
                  </h1>
                  <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
                     {topic.description}
                  </p>
               </div>
               
               {/* Progress indicator */}
               <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shrink-0">
                  <div className="flex justify-between items-end mb-4">
                     <div>
                        <p className="text-blue-200 text-xs font-bold uppercase tracking-wide mb-1">Your Progress</p>
                        <p className="text-white font-extrabold text-3xl">{currentProgress}%</p>
                     </div>
                     <div className="text-right">
                        <p className="text-white text-sm font-semibold">{completedCount} of {checklistState.length}</p>
                        <p className="text-blue-200 text-xs">Tasks Completed</p>
                     </div>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                     <div className="bg-amber-400 h-full rounded-full transition-all duration-500" style={{width: `${currentProgress}%`}}></div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col lg:flex-row gap-8 -mt-8 relative z-10">
         
         {/* Checklist Section (Main Column) */}
         <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
               <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                     <BookOpen className="text-blue-600" size={24} /> Step-by-Step Checklist
                  </h2>
                  <span className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">Updated: {topic.lastUpdated}</span>
               </div>
               
               <div className="divide-y divide-gray-100">
                  {checklistState.map((task, index) => (
                     <div 
                        key={task.id} 
                        className={`p-6 flex gap-4 transition-colors ${task.status === 'completed' ? 'bg-blue-50/50' : 'hover:bg-gray-50'}`}
                     >
                        <button 
                           onClick={() => toggleTask(task.id)}
                           className="shrink-0 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                        >
                           {task.status === 'completed' ? (
                              <CheckCircle2 size={28} className="text-green-500" />
                           ) : (
                              <Circle size={28} className="text-gray-300 hover:text-blue-400 transition-colors" />
                           )}
                        </button>
                        <div className="flex-grow">
                           <h3 className={`text-lg font-bold mb-2 transition-colors ${task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                              Step {index + 1}: {task.title}
                           </h3>
                           <p className={`text-sm leading-relaxed ${task.status === 'completed' ? 'text-gray-400' : 'text-gray-600'}`}>
                              {task.desc}
                           </p>
                           
                           {/* Simulated expandable content link */}
                           {task.status !== 'completed' && (
                              <button className="mt-3 text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors">
                                 Read Detailed Guidelines <ChevronRight size={14} />
                              </button>
                           )}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Warning / Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
               <AlertTriangle className="text-amber-500 shrink-0" size={24} />
               <div>
                  <h4 className="font-bold text-amber-800 mb-1">Important Disclaimer</h4>
                  <p className="text-sm text-amber-700 leading-relaxed">
                     The checklist provided is for general guidance purposes only and may vary depending on the specific sector, province, and scale of investment. It is strongly recommended to consult with qualified legal counsel before making investment decisions in Vietnam.
                  </p>
               </div>
            </div>

         </div>

         {/* Right Sidebar (Resources) */}
         <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 sticky top-8">
               <div className="p-6 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                     <FileText className="text-blue-600" size={20} /> Downloadable Resources
                  </h3>
               </div>
               
               <div className="p-6 flex flex-col gap-4">
                  {topic.resources.map((res, i) => (
                     <div key={i} className="group border border-gray-100 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors flex items-start gap-3 cursor-pointer">
                        <div className="bg-red-100 text-red-600 text-[10px] font-extrabold px-2 py-1 rounded tracking-wider shrink-0 mt-1">
                           {res.type}
                        </div>
                        <div className="flex-grow">
                           <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1 line-clamp-2">
                              {res.title}
                           </h4>
                           <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{res.category}</span>
                              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span>{res.size}</span>
                           </div>
                        </div>
                        <Download size={18} className="text-gray-400 group-hover:text-blue-600 shrink-0 transition-colors mt-1" />
                     </div>
                  ))}
               </div>

               <div className="p-6 bg-gray-50 border-t border-gray-100 rounded-b-2xl">
                  <p className="text-xs text-gray-500 mb-3 text-center">Cannot find what you need?</p>
                  <button className="w-full bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-700 text-gray-700 font-bold py-2.5 rounded-lg text-sm transition-colors shadow-sm flex items-center justify-center gap-2">
                     Access Legal Database <ExternalLink size={14} />
                  </button>
               </div>
            </div>
         </div>

      </main>

      <Footer />
    </div>
  );
};

export default ComplianceTopicDetail;
