import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, ArrowRight, Building2, CheckCircle2, FileText, Clock, Mail, Phone, MapPin, ExternalLink, Calendar, Users, Scale } from 'lucide-react';

const LegalSupportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for the support program
  const program = {
    id: id,
    title: 'Free Legal Consultation for FDI Enterprises',
    provider: 'Ministry of Justice',
    category: 'Legal Consultation',
    status: 'Active',
    lastUpdated: '15/03/2026',
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1600',
    overview: `This program provides foreign-invested enterprises (FDI) with complimentary initial legal consultations. Our goal is to ensure that international investors fully understand the Vietnamese legal framework, minimizing legal risks and fostering a transparent business environment. The program covers business registration, tax obligations, labor laws, and intellectual property rights.`,
    eligibility: [
      'Newly established or planning to establish an FDI enterprise in Vietnam.',
      'Possess a valid investment certificate or proof of intent to invest.',
      'Have not previously utilized this specific free consultation service within the last 12 months.',
      'Seeking advice on Vietnamese corporate, labor, tax, or commercial law.'
    ],
    documents: [
      'Copy of Enterprise Registration Certificate (if established)',
      'Investment Registration Certificate (if applicable)',
      'Specific legal queries or summary of the issue to be discussed',
      'Valid ID or Passport of the legal representative'
    ],
    procedure: [
      { step: 1, title: 'Submit Request', desc: 'Fill out the online application form and upload the required documents.' },
      { step: 2, title: 'Initial Review', desc: 'Our team will review your application within 2-3 working days.' },
      { step: 3, title: 'Schedule Consultation', desc: 'An expert will contact you to schedule a virtual or in-person meeting.' },
      { step: 4, title: 'Consultation Session', desc: 'Receive up to 2 hours of free legal advice from a certified lawyer.' }
    ],
    contact: {
      address: '60 Tran Phu, Ba Dinh, Hanoi, Vietnam',
      phone: '1900 6275',
      email: 'fdisupport@moj.gov.vn',
      workingHours: 'Monday - Friday, 8:00 AM - 5:00 PM'
    }
  };

  const relatedPrograms = [
    {
      id: 2,
      title: 'Business Registration Assistance',
      icon: <Building2 size={20} className="text-amber-500" />,
      provider: 'Ministry of Planning and Investment'
    },
    {
      id: 3,
      title: 'Tax Compliance Support',
      icon: <FileText size={20} className="text-amber-500" />,
      provider: 'General Department of Taxation'
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Hero Banner Area */}
      <div className="relative bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] border-b-4 border-amber-500 overflow-hidden shrink-0 py-12 px-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pb-10">

          <button
            onClick={() => navigate('/corporate-support')}
            className="group flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors mb-6 text-sm font-medium w-fit"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Support Programs
          </button>

          <div className="flex justify-center mb-4">
            <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {program.category}
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 size={14} /> {program.status}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 max-w-4xl tracking-tight">
            {program.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-300">
            <span className="flex items-center gap-1.5"><Building2 size={16} className="text-amber-400"/> Provider: <span className="text-white">{program.provider}</span></span>
            <span className="flex items-center gap-1.5"><Clock size={16} className="text-blue-400"/> Updated: <span className="text-white">{program.lastUpdated}</span></span>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col lg:flex-row gap-10">
        
        {/* Main Content Column */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10">
          
          {/* Overview Section */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6 relative">
              Program Overview
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-amber-500 rounded-full"></span>
            </h2>
            <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed text-lg">
              <p>{program.overview}</p>
            </div>
          </section>

          {/* Eligibility Section */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6 relative">
              Eligibility Criteria
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <ul className="space-y-4">
              {program.eligibility.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Required Documents Section */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6 relative">
               <h2 className="text-2xl font-bold text-gray-900">
                 Required Documents
                 <span className="absolute -bottom-px left-0 w-16 h-1 bg-amber-500 rounded-full"></span>
               </h2>
               <FileText className="text-gray-300" size={32} />
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {program.documents.map((doc, index) => (
                <li key={index} className="bg-gray-50 rounded-lg p-4 flex items-start gap-3 border border-gray-100">
                   <div className="bg-white p-2 rounded-md shadow-sm border border-gray-200 shrink-0 text-blue-600 font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                   </div>
                   <span className="text-gray-700 text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Procedure Tracker (Stepper) */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
             <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-8 relative">
              Application Process
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600 rounded-full"></span>
            </h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
               {program.procedure.map((step, index) => (
                  <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        {step.step}
                     </div>
                     <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white border border-gray-100 p-5 rounded-xl shadow-sm transition-all group-hover:border-blue-200 group-hover:shadow-md">
                        <div className="flex items-center justify-between mb-2">
                           <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
          </section>

        </div>
        
        {/* Right Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          
          {/* Action Card */}
          <div className="bg-gradient-to-br from-[#1e3a8a] to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
             <div className="absolute -right-10 -top-10 text-white/10">
                <Scale size={160} />
             </div>
             <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-4">Apply for Support</h3>
               <p className="text-blue-100 mb-8 text-sm">Ready to get started? Submit your request online to connect with our legal experts.</p>
               
               <button className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Start Application <ArrowRight size={18} />
               </button>
               
               <div className="mt-4 text-center">
                  <a href="#" className="text-xs text-blue-200 hover:text-white underline underline-offset-2 flex items-center justify-center gap-1">
                     <ExternalLink size={12} /> Download Offline Form (PDF)
                  </a>
               </div>
             </div>
          </div>

          {/* Contact Details Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
             <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="text-blue-600" size={20} /> Support Center Contact
             </h3>
             <div className="space-y-5">
                <div className="flex items-start gap-4">
                   <div className="bg-gray-50 p-3 rounded-lg text-gray-600 shrink-0">
                      <MapPin size={20} />
                   </div>
                   <div>
                      <h4 className="text-xs uppercase font-bold text-gray-400 mb-1">Address</h4>
                      <p className="text-sm text-gray-800 font-medium">{program.contact.address}</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
                      <Phone size={20} />
                   </div>
                   <div>
                      <h4 className="text-xs uppercase font-bold text-gray-400 mb-1">Hotline</h4>
                      <a href={`tel:${program.contact.phone.replace(/\s+/g, '')}`} className="text-lg text-blue-600 font-bold hover:underline">{program.contact.phone}</a>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-gray-50 p-3 rounded-lg text-gray-600 shrink-0">
                      <Mail size={20} />
                   </div>
                   <div>
                      <h4 className="text-xs uppercase font-bold text-gray-400 mb-1">Email Support</h4>
                      <a href={`mailto:${program.contact.email}`} className="text-sm text-gray-800 font-medium hover:text-blue-600 transition-colors">{program.contact.email}</a>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-amber-50 p-3 rounded-lg text-amber-600 shrink-0">
                      <Calendar size={20} />
                   </div>
                   <div>
                      <h4 className="text-xs uppercase font-bold text-gray-400 mb-1">Working Hours</h4>
                      <p className="text-sm text-gray-800 font-medium">{program.contact.workingHours}</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Related Programs */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
             <h3 className="text-lg font-bold text-gray-900 mb-6">Related Programs</h3>
             <div className="flex flex-col gap-4">
                {relatedPrograms.map(rel => (
                   <Link key={rel.id} to={`/corporate-support/programs/${rel.id}`} className="group flex gap-4 p-3 -mx-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-200 transition-all">
                         {rel.icon}
                      </div>
                      <div className="flex flex-col justify-center">
                         <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">{rel.title}</h4>
                         <span className="text-[10px] text-gray-500 uppercase tracking-wide flex items-center gap-1"><Building2 size={10} /> {rel.provider}</span>
                      </div>
                   </Link>
                ))}
             </div>
             <Link to="/corporate-support" className="mt-6 block text-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                View All Programs →
             </Link>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default LegalSupportDetail;
