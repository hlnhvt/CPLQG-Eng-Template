import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Calendar, Search, Filter, Phone, Mail, MapPin } from 'lucide-react';

const InternationalCooperation = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50">
      <Header />

      {/* Page Title & Breadcrumb */}
      <div className="bg-white border-b border-gray-200 shadow-sm relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="#" className="hover:text-blue-600 transition-colors">Featured News</Link>
            <ChevronRight size={14} />
            <span className="text-gray-800 font-medium">International Cooperation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] tracking-tight">International Cooperation</h1>
        </div>
      </div>

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="w-full lg:w-[70%]">
          
          {/* Featured Article (Hero) */}
          <Link to="/international-cooperation/1" className="block relative rounded-2xl overflow-hidden group mb-8 shadow-md">
            <div className="aspect-[16/9] bg-gray-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=1200" 
                alt="International Conference" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 flex flex-col items-start">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded mb-3">Conference</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3 group-hover:text-amber-400 transition-colors">
                ASEAN Legal Ministers Conference: Enhancing Cross-Border Intellectual Property Enforcement
              </h2>
              <p className="text-gray-200 text-sm md:text-base mb-4 line-clamp-2">
                Lawmakers and IP experts from 10 ASEAN nations gathered in Hanoi to finalize a multilateral agreement aimed at harmonizing patent registration and curbing regional counterfeit networks.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-300 font-medium">
                <span className="flex items-center gap-1.5"><MapPin size={12} /> Hanoi, Vietnam</span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span className="flex items-center gap-1.5"><Calendar size={12} /> 10/03/2026</span>
              </div>
            </div>
          </Link>

          {/* Secondary Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                id: 2,
                title: 'Vietnam-EU Policy Dialogue on Green Technology Trade Barriers',
                type: 'Policy Dialogue',
                badgeColor: 'bg-orange-600',
                date: '05/03/2026',
                location: 'Brussels, Belgium',
                image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=600'
              },
              {
                id: 3,
                title: 'UNDP Workshop: Integrating AI into Judicial Management',
                type: 'Workshop',
                badgeColor: 'bg-green-600',
                date: '28/02/2026',
                location: 'Da Nang, Vietnam',
                image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=600'
              },
              {
                id: 4,
                title: 'Seminar on International Commercial Arbitration in Asia-Pacific',
                type: 'Seminar',
                badgeColor: 'bg-purple-600',
                date: '20/02/2026',
                location: 'Singapore',
                image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=600'
              }
            ].map((article) => (
              <Link to={`/international-cooperation/${article.id}`} key={article.id} className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col">
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <span className={`absolute top-2 left-2 z-10 ${article.badgeColor} text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded backdrop-blur-sm`}>
                    {article.type}
                  </span>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 leading-snug mb-3 line-clamp-3 text-sm flex-grow">
                    {article.title}
                  </h3>
                  <div className="flex flex-col gap-1 text-[11px] text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5"><MapPin size={10} /> {article.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={10} /> {article.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* List View */}
          <div className="space-y-6 mb-12">
            {[
              {
                id: 5,
                title: 'Vietnam - US Bilateral Legal Talks on E-commerce Trade',
                abstract: 'High-level delegations discussed aligning digital taxation and cross-border data transfer policies to facilitate bilateral digital trade.',
                type: 'Policy Dialogue',
                badgeColor: 'bg-orange-600',
                date: '15/02/2026',
                location: 'Washington D.C., USA',
                image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=400'
              },
              {
                id: 6,
                title: 'International Conference on Sustainable Environmental Law',
                abstract: 'Legal scholars and policymakers debate the necessity of incorporating ecocide into domestic penal codes to combat severe environmental harm.',
                type: 'Conference',
                badgeColor: 'bg-blue-600',
                date: '10/02/2026',
                location: 'Ho Chi Minh City, Vietnam',
                image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400'
              },
              {
                id: 7,
                title: 'Workshop: Modernizing the Civil Registry System via Blockchain',
                abstract: 'A technical workshop organized by the Ministry of Justice and the World Bank exploring the feasibility of blockchain-based identity management.',
                type: 'Workshop',
                badgeColor: 'bg-green-600',
                date: '02/02/2026',
                location: 'Hanoi, Vietnam',
                image: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&q=80&w=400'
              }
            ].map((article) => (
              <div key={article.id} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row gap-5 shadow-sm hover:shadow-md transition-shadow group">
                <Link to={`/international-cooperation/${article.id}`} className="flex-shrink-0 relative rounded-lg overflow-hidden w-full md:w-[240px] aspect-[16/9] md:aspect-[4/3]">
                   <span className={`absolute bottom-2 right-2 z-10 ${article.badgeColor} text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded backdrop-blur-sm`}>
                    {article.type}
                  </span>
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="flex flex-col flex-grow min-w-0">
                   <Link to={`/international-cooperation/${article.id}`} className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                     {article.title}
                   </Link>
                   <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                     {article.abstract}
                   </p>
                   <div className="mt-auto flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 border-t border-gray-100 pt-3">
                      <span className="flex items-center gap-1.5"><MapPin size={12} className="text-gray-400" /> {article.location}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="flex items-center gap-1.5"><Calendar size={12} className="text-gray-400" /> {article.date}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mb-10 gap-1.5">
            <button className="h-10 px-4 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 hover:bg-gray-50 disabled:opacity-50 transition-colors text-sm font-medium" disabled>
               Previous
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-sm border border-blue-600">
               1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors shadow-sm">
               2
            </button>
            <button className="h-10 px-4 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors text-sm font-medium shadow-sm">
               Next
            </button>
          </div>

        </div>

        {/* Right Column (Sidebar) */}
        <aside className="w-full lg:w-[30%] flex flex-col gap-6 hide-scrollbar">
           
           {/* Banner */}
           <a href="#" className="block rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
             <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=600" alt="UN Event Banner" className="w-full object-cover" />
           </a>

           {/* Latest Events */}
           <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-[#1e3a8a] text-white px-5 py-3 font-bold text-sm">
                Latest Events
              </div>
              <div className="p-5 flex flex-col gap-4">
                 {[
                   { title: 'Vietnam - US Bilateral Legal Talks on E-commerce Trade', date: '15/02/2026', image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=200' },
                   { title: 'International Conference on Sustainable Environmental Law', date: '10/02/2026', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=200' },
                   { title: 'Workshop: Modernizing the Civil Registry System', date: '02/02/2026', image: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&q=80&w=200' },
                   { title: 'ASEAN Legal Ministers Conference preparation meeting', date: '25/01/2026', image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&q=80&w=200' },
                 ].map((item, idx) => (
                   <Link key={idx} to={`/international-cooperation/${idx+10}`} className="flex gap-3 group">
                     <img src={item.image} alt={item.title} className="w-16 h-12 object-cover rounded bg-gray-100 flex-shrink-0 border border-gray-200" />
                     <div className="flex flex-col justify-between">
                       <h4 className="text-xs font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                         {item.title}
                       </h4>
                       <span className="text-[10px] text-gray-500 font-medium flex items-center gap-1"><Calendar size={10} /> {item.date}</span>
                     </div>
                   </Link>
                 ))}
                 
                 <div className="mt-2 pt-3 border-t border-gray-100 text-center">
                   <Link to="#" className="text-blue-600 text-xs font-bold hover:underline inline-flex items-center gap-1">
                     View all events <ChevronRight size={12} />
                   </Link>
                 </div>
              </div>
           </div>

           {/* Contact Widget */}
           <div className="bg-white rounded-xl border border-gray-200 text-center p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-600"></div>
              <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm">International Relations</h3>
              <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                 We Are Always Listening & Responding. For international partnership, event invitations or media inquiries.
              </p>
              <div className="flex flex-col gap-3">
                 <button className="w-full bg-[#1e3a8a] hover:bg-blue-800 text-white py-2.5 rounded-lg text-sm font-bold flex justify-center items-center gap-2 transition-colors">
                   <Mail size={16} /> Contact Office
                 </button>
                 <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-2.5 rounded-lg text-sm font-bold flex justify-center items-center gap-2 transition-colors">
                   <Phone size={16} /> Hotline: +84 24 9999 8888
                 </button>
              </div>
           </div>

        </aside>

      </main>

      <Footer />
    </div>
  );
};

export default InternationalCooperation;
