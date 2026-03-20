import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, ArrowRight, Target, ShieldCheck, Scale, FileText, CheckCircle2, Download, AlertCircle } from 'lucide-react';

const LegalComplianceGuide = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('All Sectors');

  const topics = [
    {
      id: 1,
      category: 'Market Entry',
      icon: <Target size={24} className="text-amber-500 mb-4" />,
      title: 'Company Registration & Licensing',
      desc: 'Step-by-step compliance checklist for establishing your legal entity, acquiring investment certificates, and maintaining active status.',
      tasks: 8,
      readTime: '10 min',
      progress: 0,
      badge: 'Essential'
    },
    {
      id: 2,
      category: 'Employment',
      icon: <ShieldCheck size={24} className="text-blue-600 mb-4" />,
      title: 'Labor Law & Work Permits',
      desc: 'Ensure compliance with Vietnamese labor contracts, mandatory insurance, working hours, and expatriate work permit regulations.',
      tasks: 12,
      readTime: '15 min',
      progress: 25,
      badge: 'High Priority'
    },
    {
      id: 3,
      category: 'Finance',
      icon: <Scale size={24} className="text-amber-500 mb-4" />,
      title: 'Taxation & Accounting Standards',
      desc: 'Comprehensive guide to Corporate Income Tax (CIT), Value Added Tax (VAT), and adhering to Vietnamese Accounting Standards (VAS).',
      tasks: 6,
      readTime: '12 min',
      progress: 0,
    },
    {
      id: 4,
      category: 'Data & Privacy',
      icon: <FileText size={24} className="text-blue-600 mb-4" />,
      title: 'Data Protection Decree (PDPD)',
      desc: 'How to comply with Vietnam’s Decree 13 on Personal Data Protection, including cross-border data transfer requirements.',
      tasks: 5,
      readTime: '8 min',
      progress: 0,
    }
  ];

  const filteredTopics = activeTab === 'All Sectors' 
    ? topics 
    : topics.filter(t => t.category === activeTab);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] border-b-4 border-amber-500 pt-10 pb-20 md:py-24">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">

            <div className="w-full md:w-3/5 text-center">
              <div className="flex justify-center mb-4">
                <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                 Legal Compliance Guide for <span className="text-amber-400">Foreign Investors</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                 Interactive checklists and comprehensive guides to ensure your business operations in Vietnam meet all legal requirements.
              </p>
            </div>
            
            <div className="w-full md:w-2/5 flex justify-center md:justify-end">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full max-w-sm">
                  <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><CheckCircle2 className="text-amber-400"/> Your Compliance Status</h3>
                  <div className="bg-white/20 h-2 rounded-full mb-2 overflow-hidden">
                     <div className="bg-amber-400 h-full w-[15%]"></div>
                  </div>
                  <p className="text-blue-100 text-sm flex justify-between"><span>15% Complete</span> <span>2/14 Tasks</span></p>
                  <button className="w-full mt-6 bg-white hover:bg-gray-50 text-blue-900 font-bold py-3 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                     Resume Checklist <ArrowRight size={16} />
                  </button>
               </div>
            </div>

         </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col lg:flex-row gap-10">
         
         <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
               <h3 className="font-bold text-gray-900 text-lg mb-4 border-b border-gray-100 pb-3">Sectors</h3>
               <div className="flex flex-col gap-2">
                  {['All Sectors', 'Market Entry', 'Employment', 'Finance', 'Data & Privacy'].map(tab => (
                     <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-between ${activeTab === tab ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent'}`}
                     >
                        {tab}
                        {activeTab === tab && <ChevronRight size={16} />}
                     </button>
                  ))}
               </div>

               <div className="mt-8 bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <AlertCircle className="text-blue-600 mb-3" size={24} />
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Need Help Navigating?</h4>
                  <p className="text-xs text-gray-600 mb-4">If you are unsure which compliance rules apply to your sector, our experts can provide a tailored assessment.</p>
                  <button onClick={() => navigate('/corporate-support')} className="text-xs font-bold text-blue-700 hover:text-blue-900 underline underline-offset-2">Request Assistance</button>
               </div>
            </div>
         </div>

         <div className="w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-extrabold text-gray-900">{activeTab} Compliance Guides</h2>
               <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{filteredTopics.length} Topics</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {filteredTopics.map((topic) => (
                  <div key={topic.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-amber-200 transition-all group flex flex-col h-full relative overflow-hidden">
                     {topic.badge && (
                        <span className="absolute top-4 right-4 bg-red-100 text-red-700 text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider">
                           {topic.badge}
                        </span>
                     )}
                     <div className="flex items-start gap-4 mb-4 mt-2">
                        <div className="bg-gray-50 p-3 rounded-xl shadow-sm border border-gray-100 shrink-0 group-hover:scale-110 transition-transform">
                           {topic.icon}
                        </div>
                        <div>
                           <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                              {topic.title}
                           </h3>
                           <div className="flex items-center gap-3 text-xs font-semibold text-gray-500">
                              <span className="flex items-center gap-1"><CheckCircle2 size={14} className={topic.progress > 0 ? 'text-amber-500' : ''}/> {topic.tasks} Tasks</span>
                              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span>{topic.readTime} read</span>
                           </div>
                        </div>
                     </div>
                     
                     <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                        {topic.desc}
                     </p>
                     
                     {/* Progress Bar & CTA */}
                     <div className="mt-auto pt-6 border-t border-gray-50 flex flex-col gap-4">
                        {topic.progress > 0 && (
                           <div className="w-full">
                              <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400 mb-1.5">
                                 <span>Progress</span>
                                 <span className="text-amber-600">{topic.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                 <div className="bg-amber-500 h-full rounded-full transition-all duration-1000" style={{width: `${topic.progress}%`}}></div>
                              </div>
                           </div>
                        )}
                        <Link to={`/corporate-support/compliance/${topic.id}`} className="bg-gray-50 hover:bg-blue-50 text-gray-900 py-3 rounded-lg text-sm font-bold border border-gray-200 hover:border-blue-200 transition-all text-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                           {topic.progress > 0 ? 'Continue Guide' : 'Start Guide'}
                        </Link>
                     </div>
                  </div>
               ))}
            </div>

            {/* Downloadable Resources CTA */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 opacity-50"></div>
               <div className="flex items-center gap-4">
                  <div className="bg-amber-100 text-amber-600 p-4 rounded-full">
                     <Download size={28} />
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900 text-lg">Download Full Compliance Pack 2026</h3>
                     <p className="text-sm text-gray-600">Get all checklists and guides compiled into a single PDF document.</p>
                  </div>
               </div>
               <button className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
                  Download PDF (5.2 MB)
               </button>
            </div>

         </div>

      </main>

      <Footer />
    </div>
  );
};

export default LegalComplianceGuide;
