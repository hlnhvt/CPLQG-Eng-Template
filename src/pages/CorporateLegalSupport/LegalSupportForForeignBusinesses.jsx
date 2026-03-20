import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, ArrowRight, Building2, Briefcase, Scale, BadgeDollarSign, Mail, Phone, Users } from 'lucide-react';

const LegalSupportForForeignBusinesses = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      icon: <Scale size={24} className="text-blue-600 mb-4" />,
      title: 'Free Legal Consultation for FDI Enterprises',
      description: 'Receive complimentary legal advice regarding Vietnamese law, market entry, and investment regulations from verified legal experts.',
      provider: 'Ministry of Justice',
    },
    {
      id: 2,
      icon: <Building2 size={24} className="text-blue-600 mb-4" />,
      title: 'Business Registration Assistance',
      description: 'Step-by-step guidance on establishing your legal entity in Vietnam, including required documentation and fast-track processing.',
      provider: 'Ministry of Planning and Investment',
    },
    {
      id: 3,
      icon: <Briefcase size={24} className="text-blue-600 mb-4" />,
      title: 'Labor Law Advisory',
      description: 'Understand and comply with local employment laws, work permits for expatriates, and compulsory insurance schemes.',
      provider: 'Vietnam Chamber of Commerce',
    },
    {
      id: 4,
      icon: <BadgeDollarSign size={24} className="text-blue-600 mb-4" />,
      title: 'Tax Compliance Support',
      description: 'Navigate Vietnam\'s corporate tax structure, value-added tax, and identifying applicable investment incentives.',
      provider: 'General Department of Taxation',
    },
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] border-b-4 border-amber-500">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">

            <div className="flex justify-center mb-4">
              <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl tracking-tight">
               Legal Support for Foreign Businesses in Vietnam
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
               Comprehensive legal assistance programs to help FDI enterprises navigate Vietnamese law with confidence.
            </p>
            <button 
               onClick={() => document.getElementById('programs-section').scrollIntoView({ behavior: 'smooth' })}
               className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
               Explore Programs <ArrowRight size={20} />
            </button>
         </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm relative z-20 -mt-10 mx-4 md:mx-auto max-w-[1000px] rounded-xl overflow-hidden">
         <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
            <div className="p-6 text-center">
               <span className="block text-3xl font-extrabold text-blue-800 mb-1">500+</span>
               <span className="text-xs font-bold text-gray-500 uppercase">FDI Enterprises</span>
            </div>
            <div className="p-6 text-center">
               <span className="block text-3xl font-extrabold text-blue-800 mb-1">15+</span>
               <span className="text-xs font-bold text-gray-500 uppercase">Support Programs</span>
            </div>
            <div className="p-6 text-center">
               <span className="block text-3xl font-extrabold text-blue-800 mb-1">24/7</span>
               <span className="text-xs font-bold text-gray-500 uppercase">Online Resources</span>
            </div>
            <div className="p-6 text-center">
               <span className="block text-3xl font-extrabold text-amber-500 mb-1">100%</span>
               <span className="text-xs font-bold text-gray-500 uppercase">Free Consultation</span>
            </div>
         </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
         
         <section className="mb-20 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12">How to Get Legal Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
               <div className="hidden md:block absolute top-[45px] left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0"></div>
               
               {[
                 { step: 1, title: 'Browse Programs', desc: 'Find the legal assistance program that fits your needs.' },
                 { step: 2, title: 'Contact Provider', desc: 'Reach out using the contact information provided in the program details.' },
                 { step: 3, title: 'Submit Documents', desc: 'Provide necessary corporate documentation to verify eligibility.' },
                 { step: 4, title: 'Receive Support', desc: 'Get expert guidance from our certified legal officers.' }
               ].map((item) => (
                 <div key={item.step} className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-100 shadow-md flex items-center justify-center text-3xl font-extrabold text-blue-600 mb-6 relative">
                       {item.step}
                       <div className="absolute inset-0 rounded-full border border-blue-200 animate-ping opacity-20"></div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500 max-w-[200px]">{item.desc}</p>
                 </div>
               ))}
            </div>
         </section>

         <section id="programs-section" className="mb-20">
            <div className="flex flex-col items-center mb-12">
               <h2 className="text-3xl font-extrabold text-gray-900 inline-block relative">
                 Available Support Programs
                 <span className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-amber-500 rounded-full"></span>
               </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {programs.map((program) => (
                  <div key={program.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all group flex flex-col h-full relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-600 transition-colors opacity-50 duration-500"></div>
                     {program.icon}
                     <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {program.title}
                     </h3>
                     <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                        {program.description}
                     </p>
                     
                     <div className="mt-auto pt-6 border-t border-gray-50 flex items-end justify-between">
                        <div className="flex flex-col">
                           <span className="text-[10px] uppercase font-bold text-gray-400 mb-1">Provider</span>
                           <span className="text-xs font-semibold text-gray-800 flex items-center gap-1.5"><Building2 size={12} className="text-amber-500" /> {program.provider}</span>
                        </div>
                        <Link to={`/corporate-support/programs/${program.id}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                           Learn More <ChevronRight size={16} />
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <section className="bg-gradient-to-br from-[#1e3a8a] to-blue-900 rounded-3xl p-10 md:p-14 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
               <Users size={48} className="text-amber-400 mb-6" />
               <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Need Personalized Legal Advice?</h2>
               <p className="text-blue-100 text-lg mb-10">Our legal experts are ready to provide tailored guidance for your specific business needs ensuring full compliance and operational efficiency.</p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                  <button onClick={() => navigate('/contact')} className="bg-white hover:bg-gray-50 text-[#1e3a8a] px-8 py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                     <Mail size={18} /> Contact Us
                  </button>
                  <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-3.5 rounded-xl font-bold transition-colors shadow-lg flex items-center justify-center gap-2">
                     <Phone size={18} /> Send a Request
                  </button>
               </div>
            </div>
         </section>
      </main>

      <Footer />
    </div>
  );
};

export default LegalSupportForForeignBusinesses;
