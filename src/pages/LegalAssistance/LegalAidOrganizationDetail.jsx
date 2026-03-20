import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, MapPin, Phone, Mail, Building2, Globe, Clock, CheckCircle2, Award, Users, Scale, AlertCircle } from 'lucide-react';

const LegalAidOrganizationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock Organization Data
  const org = {
    id: id,
    name: 'State Legal Aid Center of Hanoi',
    role: 'State Legal Aid Center',
    established: '1998',
    rating: '4.9',
    cases: 1250,
    address: '123 Tran Phu Street, Ba Dinh District, Hanoi, Vietnam',
    phone: '024 3823 1234',
    email: 'hanoi.legalaid@moj.gov.vn',
    website: 'www.legalaidhanoi.gov.vn',
    workingHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    description: `The State Legal Aid Center of Hanoi is a government-funded entity under the Department of Justice, dedicated to providing free, high-quality legal assistance to eligible individuals and vulnerable groups. With over two decades of operation, we specialize in civil rights, criminal defense, family law, and recently expanded our services to support foreign investors and expatriates in navigating the Vietnamese legal framework.`,
    tags: ['Civil Law', 'Criminal Defense', 'Administrative Law', 'Foreign Investment'],
    services: [
       { title: 'Legal Consultation', desc: 'Free advice on rights, obligations, and legal procedures.' },
       { title: 'Court Representation', desc: 'Defense lawyers assigned to represent clients in litigation.' },
       { title: 'Document Assistance', desc: 'Drafting petitions, contracts, and administrative forms.' }
    ],
    professionals: [
       { id: 1, name: 'Nguyen Van A', prefix: 'Lawyer', role: 'Senior Defense Attorney' },
       { id: 4, name: 'Tran Thi D', prefix: 'Expert', role: 'FDI Consultant' },
       { id: 5, name: 'Le Hoang C', prefix: 'Director', role: 'Center Administrator' }
    ]
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col lg:flex-row gap-8">
         
         {/* Left Column (Main Info) */}
         <div className="w-full lg:w-2/3 flex flex-col gap-8">
            
            {/* Header Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50/50 rounded-bl-full -z-10"></div>
               
               <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 bg-blue-50 border-2 border-dashed border-blue-200 rounded-2xl flex items-center justify-center text-[#1e3a8a] shadow-inner">
                     <Building2 size={48} strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-grow">
                     <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-[#1e3a8a] text-white text-[10px] font-extrabold px-3 py-1 rounded-sm uppercase tracking-wider">
                           {org.role}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded">
                           <CheckCircle2 size={12} /> State Certified
                        </span>
                     </div>
                     <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] leading-tight mb-4">
                        {org.name}
                     </h1>
                     <div className="flex flex-wrap gap-2 text-sm font-medium text-gray-600">
                        <span className="flex items-center gap-1"><MapPin size={16} className="text-gray-400"/> {org.address}</span>
                     </div>
                  </div>
               </div>

               {/* Stats Bar */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-gray-100">
                  <div className="flex flex-col gap-1">
                     <span className="text-2xl font-extrabold text-amber-500">{org.rating}</span>
                     <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Client Rating</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-2xl font-extrabold text-[#1e3a8a]">{org.cases.toLocaleString()}+</span>
                     <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Cases Resolved</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-2xl font-extrabold text-[#1e3a8a]">{org.professionals.length}</span>
                     <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Legal Experts</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-2xl font-extrabold text-[#1e3a8a]">{org.established}</span>
                     <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Established</span>
                  </div>
               </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
               <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Building2 size={24} className="text-blue-600" /> About the Organization
               </h2>
               <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {org.description}
               </p>

               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Areas of Expertise</h3>
               <div className="flex flex-wrap gap-2">
                  {org.tags.map(tag => (
                     <span key={tag} className="bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-lg">
                        {tag}
                     </span>
                  ))}
               </div>
            </div>

            {/* Services Available */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
               <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                  <Scale size={24} className="text-blue-600" /> Available Services
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {org.services.map((srv, i) => (
                     <div key={i} className="bg-blue-50/50 border border-blue-100 p-6 rounded-xl hover:bg-blue-50 transition-colors">
                        <h4 className="font-bold text-[#1e3a8a] mb-2">{srv.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{srv.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
               <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                     <Users size={24} className="text-blue-600" /> Key Professionals
                  </h2>
                  <Link to={`/legal-aid/providers?org=${org.id}`} className="text-sm font-bold text-blue-600 hover:underline">View All</Link>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {org.professionals.map(pro => (
                     <Link key={pro.id} to={`/legal-aid/individuals/${pro.id}`} className="group flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-sm transition-all bg-gray-50/50 hover:bg-white">
                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-105 transition-transform">
                           {pro.name.charAt(0)}
                        </div>
                        <div>
                           <span className="text-[10px] uppercase font-bold text-gray-500">{pro.prefix}</span>
                           <h4 className="font-bold text-gray-900 group-hover:text-blue-600 line-clamp-1">{pro.name}</h4>
                           <p className="text-xs text-gray-600 line-clamp-1">{pro.role}</p>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>

         </div>

         {/* Right Sidebar (Contact) */}
         <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            <div className="bg-gradient-to-b from-[#1e3a8a] to-blue-900 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-bl-full -z-10 opacity-20"></div>
               
               <h3 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                  Contact Information
               </h3>
               
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-2.5 rounded-lg shrink-0"><Phone size={20} className="text-amber-400" /></div>
                     <div>
                        <span className="text-xs font-bold text-blue-200 uppercase tracking-widest block mb-1">Hotline</span>
                        <a href={`tel:${org.phone.replace(/\s/g, '')}`} className="text-xl font-bold hover:text-amber-400 transition-colors">{org.phone}</a>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-2.5 rounded-lg shrink-0"><Mail size={20} className="text-amber-400" /></div>
                     <div>
                        <span className="text-xs font-bold text-blue-200 uppercase tracking-widest block mb-1">Email</span>
                        <a href={`mailto:${org.email}`} className="text-sm font-medium hover:text-amber-400 transition-colors">{org.email}</a>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-2.5 rounded-lg shrink-0"><Globe size={20} className="text-amber-400" /></div>
                     <div>
                        <span className="text-xs font-bold text-blue-200 uppercase tracking-widest block mb-1">Website</span>
                        <a href={`https://${org.website}`} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-amber-400 transition-colors">{org.website}</a>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="bg-white/10 p-2.5 rounded-lg shrink-0"><Clock size={20} className="text-amber-400" /></div>
                     <div>
                        <span className="text-xs font-bold text-blue-200 uppercase tracking-widest block mb-1">Working Hours</span>
                        <span className="text-sm font-medium">{org.workingHours}</span>
                     </div>
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-white/20">
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                     Request Consultation
                  </button>
               </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm">
               <div className="flex gap-3">
                  <AlertCircle size={24} className="text-amber-600 shrink-0" />
                  <div>
                     <h4 className="font-bold text-amber-900 mb-2">Eligibility Notice</h4>
                     <p className="text-sm text-amber-800 leading-relaxed">
                        Services provided by State Legal Aid Centers are 100% free of charge but are subject to eligibility verification under the Law on Legal Aid. Please ensure you bring valid identification and necessary proof of eligibility when visiting.
                     </p>
                  </div>
               </div>
            </div>

         </div>

      </main>

      <Footer />
    </div>
  );
};

export default LegalAidOrganizationDetail;
