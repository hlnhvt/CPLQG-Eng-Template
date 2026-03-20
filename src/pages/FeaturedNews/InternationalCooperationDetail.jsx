import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Calendar, ArrowLeft, Facebook, Twitter, Linkedin, Copy, MapPin, Building2 } from 'lucide-react';

const InternationalCooperationDetail = () => {
  const { id } = useParams();

  const handleCopyLink = () => {
     alert("Link copied!");
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      
      {/* Breadcrumb Info */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
           <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
           <ChevronRight size={14} className="mx-2 shrink-0" />
           <Link to="/international-cooperation" className="hover:text-blue-600 transition-colors">International Cooperation</Link>
           <ChevronRight size={14} className="mx-2 shrink-0" />
           <span className="text-gray-800 font-medium">ASEAN Legal Ministers Conference...</span>
        </div>
      </div>

      {/* Article Cover */}
      <div className="w-full bg-gray-900 border-b border-gray-300">
         <div className="max-w-[1000px] mx-auto aspect-[16/6] md:aspect-[21/9] relative overflow-hidden bg-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=1200" 
              alt="Conference Cover" 
              className="w-full h-full object-cover opacity-60"
            />
         </div>
      </div>

      <main className="flex-grow max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
         
         <div className="mb-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 -mt-20 relative z-10">
            <Link to="/international-cooperation" className="inline-flex items-center gap-2 text-gray-500 font-medium hover:text-blue-600 transition-colors text-sm mb-6">
               <ArrowLeft size={16} /> Back to List
            </Link>
            
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded mb-4">
              Conference
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
               ASEAN Legal Ministers Conference: Enhancing Cross-Border Intellectual Property Enforcement
            </h1>
            
            {/* Metadata Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
               <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 text-blue-600" size={18} />
                  <div>
                     <span className="block text-xs font-bold text-gray-500 uppercase">Date of Event</span>
                     <span className="text-gray-900 font-medium">10 March 2026 - 12 March 2026</span>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 text-blue-600" size={18} />
                  <div>
                     <span className="block text-xs font-bold text-gray-500 uppercase">Location</span>
                     <span className="text-gray-900 font-medium">National Convention Center, Hanoi, Vietnam</span>
                  </div>
               </div>
               <div className="flex items-start gap-3 md:col-span-2">
                  <Building2 className="mt-0.5 text-blue-600" size={18} />
                  <div>
                     <span className="block text-xs font-bold text-gray-500 uppercase">Hosted By</span>
                     <span className="text-gray-900 font-medium">Ministry of Justice (Vietnam) in cooperation with ASEAN Secretariat</span>
                  </div>
               </div>
            </div>

            <div className="flex justify-end gap-2 mb-8">
                 <button className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                    <Facebook size={16} />
                 </button>
                 <button className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors">
                    <Twitter size={16} />
                 </button>
                 <button className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-50 transition-colors">
                    <Linkedin size={16} />
                 </button>
                 <button onClick={handleCopyLink} className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors" title="Copy Link">
                    <Copy size={16} />
                 </button>
            </div>

             <div className="prose prose-lg max-w-none text-gray-800 leading-loose">
               <p className="lead text-xl text-gray-600 font-medium italic mb-8 border-l-4 border-blue-600 pl-6">
                  Lawmakers and Intellectual Property (IP) experts from 10 ASEAN nations gathered in Hanoi to finalize a multilateral agreement aimed at harmonizing patent registration and curbing regional counterfeit networks.
               </p>
               
               <p>
                  As cross-border e-commerce flourishes, intellectual property violations are becoming increasingly sophisticated. The ASEAN Legal Ministers Conference 2026 focused on crafting binding frameworks to allow swift takedowns of infringing content across member states.
               </p>

               <h2 className="text-2xl font-bold text-[#1e3a8a] mt-8 mb-4">Key Outcomes of the Conference</h2>
               <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>The Hanoi Declaration on Digital Rights:</strong> A unified pledge to protect copyrights of digital creators across borders.</li>
                  <li><strong>ASEAN IP Fast-Track Mechanism:</strong> Approvals granted in one member state will be expedited for review in others, slashing wait times by up to 60%.</li>
                  <li><strong>Joint Task Force Establishment:</strong> A cooperative police and legal task force to investigate and dismantle organized counterfeit manufacturing rings.</li>
               </ul>
               
               <h2 className="text-2xl font-bold text-[#1e3a8a] mt-8 mb-4">Vietnam's Commitment</h2>
               <p>
                  At the plenary session, the Vietnamese delegation unveiled recent amendments to the IP Law, which dramatically increase administrative fines and allow for criminal prosecution of platform operators knowingly hosting counterfeit transactions. These steps underscore Vietnam's active commitment to a healthy, innovative regional business environment.
               </p>
            </div>
         </div>

         {/* Share at bottom */}
         <div className="flex flex-wrap items-center justify-center gap-4 py-8 mb-4">
            <span className="font-bold text-gray-700">Share this event:</span>
            <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-sm">
               <Facebook size={18} />
            </button>
            <button className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors shadow-sm">
               <Twitter size={18} />
            </button>
            <button className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors shadow-sm">
               <Linkedin size={18} />
            </button>
         </div>

         {/* Related Articles */}
         <div className="bg-white border text-center border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <Link to="#" className="group flex flex-col gap-3">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                     <span className={`absolute top-2 left-2 z-10 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded backdrop-blur-sm`}>
                        Policy Dialogue
                     </span>
                     <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related 1" />
                  </div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Vietnam-EU Policy Dialogue on Green Tech</h4>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> 05/03/2026</span>
               </Link>
               <Link to="#" className="group flex flex-col gap-3">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                      <span className={`absolute top-2 left-2 z-10 bg-green-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded backdrop-blur-sm`}>
                        Workshop
                     </span>
                     <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related 2" />
                  </div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">UNDP Workshop: Integrating AI into Judicial Management</h4>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> 28/02/2026</span>
               </Link>
               <Link to="#" className="group flex flex-col gap-3">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                     <span className={`absolute top-2 left-2 z-10 bg-purple-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded backdrop-blur-sm`}>
                        Seminar
                     </span>
                     <img src="https://images.unsplash.com/photo-1520694478166-daaaaaec74b4?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related 3" />
                  </div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Seminar on International Commercial Arbitration</h4>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> 20/02/2026</span>
               </Link>
            </div>
         </div>

      </main>

      <Footer />
    </div>
  );
};

export default InternationalCooperationDetail;
