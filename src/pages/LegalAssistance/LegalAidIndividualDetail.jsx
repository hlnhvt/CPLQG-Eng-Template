import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, MapPin, Phone, Mail, Award, CheckCircle2, Building2, UserCircle2, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';

const LegalAidIndividualDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock Individual Data
  const person = {
    id: id,
    name: 'Nguyen Van A',
    title: 'Senior Legal Aid Lawyer',
    role: 'Defense Attorney',
    experience: '15 Years',
    rating: '5.0',
    casesResolved: 320,
    province: 'Hanoi',
    organization: { id: 1, name: 'State Legal Aid Center of Hanoi' },
    email: 'nguyen.vana@legalaid.gov.vn',
    phone: '090 123 4567',
    languages: 'Vietnamese (Native), English (Fluent)',
    bio: `Lawyer Nguyen Van A has over 15 years of dedicated experience in providing pro-bono legal support to vulnerable communities and foreign investors encountering administrative difficulties in Vietnam. Specializing in criminal defense and administrative law, he is known for his systematic approach to complex state procedures and his commitment to equitable justice.`,
    specialties: ['Criminal Defense', 'Administrative Law', 'Civil Rights', 'Labor Disputes'],
    education: [
       { degree: 'Master of Laws (LL.M)', institution: 'Hanoi Law University', year: '2010' },
       { degree: 'Lawyer Practicing Certificate', institution: 'Ministry of Justice', year: '2012' }
    ],
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col lg:flex-row gap-8">
         
         {/* Left Column (Profile & Stats) */}
         <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Main Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 right-0 h-32 bg-[#1e3a8a] z-0"></div>
               
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4 bg-gray-100">
                     <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-green-100 text-green-700 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                     <CheckCircle2 size={12} /> Certified Lawyer
                  </div>
                  
                  <h1 className="text-2xl font-extrabold text-gray-900 mb-1">{person.name}</h1>
                  <p className="text-amber-600 font-bold mb-4">{person.title}</p>
                  
                  <div className="w-full border-t border-gray-100 pt-6 mt-2 grid grid-cols-2 gap-4">
                     <div className="flex flex-col items-center p-3 bg-gray-50 rounded-xl">
                        <span className="font-extrabold text-lg text-gray-900">{person.experience}</span>
                        <span className="text-[10px] uppercase font-bold text-gray-500 text-center">Experience</span>
                     </div>
                     <div className="flex flex-col items-center p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-1">
                           <span className="font-extrabold text-lg text-gray-900">{person.rating}</span>
                           <Award size={14} className="text-amber-500 mb-0.5" />
                        </div>
                        <span className="text-[10px] uppercase font-bold text-gray-500 text-center">Client Rating</span>
                     </div>
                     <div className="flex flex-col items-center p-3 bg-gray-50 rounded-xl col-span-2">
                        <span className="font-extrabold text-lg text-[#1e3a8a]">{person.casesResolved}+</span>
                        <span className="text-[10px] uppercase font-bold text-gray-500 text-center">Cases Successfully Resolved</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Contact Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
               <button className="w-full bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                  <Mail size={18} /> Request Consultation
               </button>
               <div className="flex flex-col gap-3 mt-2 px-2">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                     <div className="bg-gray-100 p-2 rounded-lg text-gray-500"><Phone size={16} /></div>
                     <span className="font-medium">{person.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                     <div className="bg-gray-100 p-2 rounded-lg text-gray-500"><Mail size={16} /></div>
                     <span className="font-medium">{person.email}</span>
                  </div>
               </div>
            </div>

         </div>

         {/* Right Column (Details) */}
         <div className="w-full lg:w-2/3 flex flex-col gap-8">
            
            {/* Bio & Specialties */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
               <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <UserCircle2 size={24} className="text-blue-600" /> Professional Biography
               </h2>
               <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  {person.bio}
               </p>

               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Areas of Practice</h3>
               <div className="flex flex-wrap gap-2">
                  {person.specialties.map(spec => (
                     <span key={spec} className="bg-blue-50/50 border border-blue-200 text-blue-800 text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-sm">
                        <ShieldCheck size={14} className="text-blue-500" /> {spec}
                     </span>
                  ))}
               </div>
            </div>

            {/* Affiliations & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                     <Building2 size={20} className="text-gray-400" /> Affiliated Organization
                  </h3>
                  <div className="flex items-start gap-4">
                     <div className="bg-amber-50 text-amber-600 p-3 rounded-xl border border-amber-100 shrink-0">
                        <Building2 size={24} />
                     </div>
                     <div>
                        <Link to={`/legal-aid/organizations/${person.organization.id}`} className="font-bold text-[#1e3a8a] hover:text-blue-600 hover:underline transition-colors block leading-tight mb-2">
                           {person.organization.name}
                        </Link>
                        <span className="text-xs font-semibold text-gray-500 flex items-center gap-1 uppercase tracking-wider">
                           <MapPin size={12} /> {person.province}
                        </span>
                     </div>
                  </div>
               </div>

               <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                     <GraduationCap size={20} className="text-gray-400" /> Education & Languages
                  </h3>
                  <div className="flex flex-col gap-4">
                     <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Languages Spoken</span>
                        <p className="text-sm font-semibold text-gray-800">{person.languages}</p>
                     </div>
                     <div className="w-full h-px bg-gray-100"></div>
                     <ul className="flex flex-col gap-3">
                        {person.education.map((edu, i) => (
                           <li key={i} className="flex gap-3">
                              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                              <div>
                                 <p className="text-sm font-bold text-gray-900 leading-tight">{edu.degree}</p>
                                 <p className="text-xs text-gray-500 mt-0.5">{edu.institution} ({edu.year})</p>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

         </div>

      </main>

      <Footer />
    </div>
  );
};

export default LegalAidIndividualDetail;
