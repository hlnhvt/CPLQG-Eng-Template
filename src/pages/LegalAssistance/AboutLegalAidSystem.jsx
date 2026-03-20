import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowRight, ArrowDown, Users, Scale, FileText, Handshake, ShieldCheck, Search, Scale3D, HardHat, FileQuestion, BookOpen, MapPin, Phone, Mail } from 'lucide-react';

const AboutLegalAidSystem = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const beneficiaries = [
    { title: "Low-Income Individuals", icon: <Users size={24} />, desc: "Citizens whose income falls below the national poverty line." },
    { title: "Policy Beneficiaries", icon: <ShieldCheck size={24} />, desc: "Veterans, families of martyrs, and individuals with special merit to the nation." },
    { title: "Elderly Persons", icon: <Users size={24} />, desc: "Individuals aged 80+ without sufficient pension or social subsidies." },
    { title: "Children & Minors", icon: <Users size={24} />, desc: "Children and minors involved in special legal circumstances or administrative violations." },
    { title: "Persons with Disabilities", icon: <Users size={24} />, desc: "Individuals with severe or exceptionally severe disabilities facing financial hardship." },
    { title: "Victims of Domestic Violence", icon: <Users size={24} />, desc: "Victims seeking legal protection and representation in family dispute matters." }
  ];

  const services = [
    { title: "Legal Consultation", icon: <FileQuestion size={28} className="text-blue-600" />, desc: "Free, comprehensive advice on legal rights, obligations, and procedures across all fields of law." },
    { title: "Legal Representation", icon: <Scale size={28} className="text-blue-600" />, desc: "Official representation and defense before courts and other competent state agencies in civil, criminal, and administrative cases." },
    { title: "Document Drafting", icon: <FileText size={28} className="text-blue-600" />, desc: "Assistance in preparing legal petitions, contracts, complaints, and other necessary legal documentation." },
    { title: "Mediation & Conciliation", icon: <Handshake size={28} className="text-blue-600" />, desc: "Facilitating dispute resolution outside of court proceedings for family, land, and civil matters." }
  ];

  const legalFramework = [
    { id: "Law on Legal Aid No. 11/2017/QH14", date: "June 20, 2017" },
    { id: "Decree No. 144/2017/ND-CP", date: "Detailing the Law on Legal Aid" },
    { id: "Decree No. 07/2020/ND-CP", date: "Amending Decree 144/2017" },
    { id: "Decision No. 749/QD-TTg", date: "National Program on Legal Aid" }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] border-b-4 border-amber-500">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 flex flex-col items-center text-center">

            <div className="flex justify-center mb-4">
              <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight max-w-4xl mx-auto">
               Free Legal Aid for <span className="text-amber-400">Everyone Who Needs It</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-4xl mx-auto">
               The Vietnamese Legal Aid System provides free legal assistance to eligible individuals across all 63 provinces. Learn how we can help you navigate the legal system ensuring justice and equality for all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button
                  onClick={() => navigate('/legal-aid/providers')}
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
               >
                  Find Legal Aid Near You <Search size={20} />
               </button>
               <button
                  onClick={() => handleScroll('how-to-apply')}
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
               >
                  Learn How to Apply <ArrowDown size={20} />
               </button>
            </div>
         </div>
      </div>

      <main className="flex-grow w-full bg-white">
         
         {/* What is Legal Aid? */}
         <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-6 relative inline-block">
                     What is Legal Aid?
                     <span className="absolute -bottom-2 left-0 w-16 h-1 bg-amber-500 rounded-full"></span>
                  </h2>
                  <div className="prose prose-lg prose-blue text-gray-700 leading-relaxed">
                     <p>
                        Legal Aid is a free public service provided by the Vietnamese government to ensure that every citizen, regardless of financial status, can access professional legal assistance. It forms a cornerstone of equitable justice, embodying the state's responsibility to protect the vulnerable.
                     </p>
                     <p>
                        Governed by the Law on Legal Aid, services are delivered through a nationwide network of State Legal Aid Centers, participating law firms, and certified legal aid collaborators. Whether you need initial advice, document drafting, or full representation in court, the system is designed to support you at no cost.
                     </p>
                  </div>
               </div>
               <div className="w-full lg:w-1/2 relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
                  <img src="https://images.unsplash.com/photo-1555374018-1c1fd4a2374c?auto=format&fit=crop&q=80&w=800" alt="Legal Consultation" className="w-full h-[400px] object-cover rounded-2xl shadow-xl border border-gray-100" />
               </div>
            </div>
         </section>

         {/* Impact Numbers */}
         <section className="bg-[#1e3a8a] py-16 text-white text-center px-4">
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-blue-800">
               <div className="px-4">
                  <span className="block text-4xl md:text-5xl font-extrabold text-amber-400 mb-2">63</span>
                  <span className="text-sm font-bold text-blue-200 uppercase tracking-wider">Provinces Covered</span>
               </div>
               <div className="px-4">
                  <span className="block text-4xl md:text-5xl font-extrabold text-amber-400 mb-2">1,000+</span>
                  <span className="text-sm font-bold text-blue-200 uppercase tracking-wider">Legal Aid Centers</span>
               </div>
               <div className="px-4">
                  <span className="block text-4xl md:text-5xl font-extrabold text-amber-400 mb-2">500k+</span>
                  <span className="text-sm font-bold text-blue-200 uppercase tracking-wider">Cases Annually</span>
               </div>
               <div className="px-4">
                  <span className="block text-4xl md:text-5xl font-extrabold text-green-400 mb-2">100%</span>
                  <span className="text-sm font-bold text-blue-200 uppercase tracking-wider">Free of Charge</span>
               </div>
            </div>
         </section>

         {/* Who We Serve */}
         <section className="bg-[#f8fafc] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
            <div className="max-w-[1200px] mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Who We Serve</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Legal aid is available to individuals who meet specific eligibility criteria defined by law, prioritizing vulnerable groups and those in financial need.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {beneficiaries.map((b, i) => (
                     <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-400 hover:shadow-md transition-all group flex items-start gap-4 cursor-pointer">
                        <div className="bg-blue-50 text-blue-600 p-3 rounded-lg shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                           {b.icon}
                        </div>
                        <div>
                           <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">{b.title}</h3>
                           <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Our Services */}
         <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Services</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">We offer a wide range of free legal services to support you at every stage of your legal journey.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((s, i) => (
                     <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 border border-blue-100">
                           {s.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                        <p className="text-gray-600 leading-relaxed max-w-md">{s.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* How to Get Help (Timeline) */}
         <section id="how-to-apply" className="bg-[#f8fafc] py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
            <div className="max-w-[800px] mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">How to Get Help</h2>
               </div>
               
               <div className="relative border-l-4 border-blue-200 ml-6 md:ml-12 lg:ml-24 space-y-12 pb-8">
                  
                  {[
                     { step: "Step 1", title: "Check Your Eligibility", desc: "Review the eligibility criteria to ensure you qualify for free legal aid under the national framework." },
                     { step: "Step 2", title: "Find a Legal Aid Center", desc: "Locate the nearest state legal aid center, participating law firm, or registered collaborator in your province." },
                     { step: "Step 3", title: "Submit Your Request", desc: "Bring your valid ID, proof of eligibility (e.g., poor household certificate), and related documents to complete the intake form." },
                     { step: "Step 4", title: "Case Review", desc: "A legal aid officer reviews your case within 3 working days to determine the scope and nature of assistance required." },
                     { step: "Step 5", title: "Receive Legal Assistance", desc: "Free legal services begin, whether it is consultation, document drafting, or official court representation." },
                  ].map((s, i) => (
                     <div key={i} className="relative pl-8">
                        <div className="absolute w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-sm -left-4 border-4 border-[#f8fafc] top-0 shadow-sm">
                           {i + 1}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
                        <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">{s.step}</p>
                        <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                     </div>
                  ))}
               </div>

               <div className="mt-12 text-center">
                  <button 
                     onClick={() => navigate('/legal-aid/providers')}
                     className="bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors shadow-md inline-flex items-center gap-2"
                  >
                     Find a Legal Aid Center <ArrowRight size={20} />
                  </button>
               </div>
            </div>
         </section>

         {/* Legal Framework & Contact */}
         <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
               
               {/* Framework */}
               <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-8 border-b border-gray-200 pb-4">Legal Framework</h2>
                  <ul className="space-y-4">
                     {legalFramework.map((lf, i) => (
                        <li key={i} className="flex flex-col border border-gray-100 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer group">
                           <span className="font-bold text-blue-900 group-hover:text-blue-600 mb-1 flex items-center gap-2">
                              <BookOpen size={16} /> {lf.id}
                           </span>
                           <span className="text-sm text-gray-500 pl-6">{lf.date}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Contact */}
               <div className="bg-gradient-to-br from-gray-900 to-[#1e3a8a] rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
                     <Scale3D size={200} />
                  </div>
                  <h2 className="text-2xl font-extrabold mb-8 relative z-10">Contact & Support</h2>
                  
                  <div className="space-y-6 relative z-10">
                     <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">National Department of Legal Aid</span>
                        <div className="flex items-start gap-3">
                           <MapPin size={20} className="text-blue-300 mt-0.5 shrink-0" />
                           <p className="text-sm text-gray-200">60 Tran Phu Street, Ba Dinh District, Hanoi, Vietnam</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <Phone size={20} className="text-blue-300 mt-0.5 shrink-0" />
                        <div>
                           <span className="text-sm text-gray-200 block mb-1">National Legal Aid Hotline</span>
                           <a href="tel:19006275" className="text-2xl font-bold text-white hover:text-amber-400 transition-colors">1900 6275</a>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <Mail size={20} className="text-blue-300 mt-0.5 shrink-0" />
                        <div>
                           <span className="text-sm text-gray-200 block mb-1">Email Support</span>
                           <a href="mailto:tgpl@moj.gov.vn" className="text-lg font-semibold text-white hover:text-amber-400 transition-colors">tgpl@moj.gov.vn</a>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutLegalAidSystem;
