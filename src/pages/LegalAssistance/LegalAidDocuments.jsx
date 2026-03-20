import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, FileText, Calendar, Building2, User, ChevronDown, Download, Layers } from 'lucide-react';

const LegalAidDocuments = () => {
  const navigate = useNavigate();

  // "Businesses" or "Individuals"
  const [activeTab, setActiveTab] = useState("Businesses");

  // Sidebar Category Expansion
  const [expandedCats, setExpandedCats] = useState({ 0: true });

  const toggleCat = (index) => {
    setExpandedCats(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const businessCategories = [
    { title: "Investment & Market Entry", sub: ["Investment Laws", "Enterprise Registration", "Incentives"] },
    { title: "Commercial Contracts", sub: ["Trade Agreements", "Dispute Resolution", "Customs"] },
    { title: "Tax & Finance", sub: ["Corporate Tax", "Foreign Exchange", "Accounting Rules"] },
    { title: "Labor & Expatriates", sub: ["Employment Regulations", "Work Permits", "Insurance"] },
    { title: "Land & Real Estate", sub: ["Leasing Rights", "Construction Permits", "Industrial Zones"] }
  ];

  const individualCategories = [
    { title: "Civil Status, Nationality & Adoption", sub: ["Law on Civil Status", "Nationality Laws", "Adoption Procedures"] },
    { title: "Residence & Immigration", sub: ["Visa & Residency", "Permanent Residence", "Deportation Rights"] },
    { title: "Family & Marriage", sub: ["Marriage Registration", "Divorce & Custody", "Domestic Violence Protection"] },
    { title: "Property & Land", sub: ["Ownership Rights for Foreigners", "Transfer Procedures", "Rental Rights"] },
    { title: "Criminal Defense", sub: ["Rights Handbook", "Defense Guides", "Emergency Contacts"] }
  ];

  const categories = activeTab === "Businesses" ? businessCategories : individualCategories;

  // Mock Documents List
  const allDocs = [
    {
       id: 1, tab: "Businesses", title: "Law on Investment No. 61/2020/QH14",
       type: "Law", isNew: false, date: "17/06/2020", effective: "01/01/2021",
       category: "Investment Laws"
    },
    {
       id: 2, tab: "Businesses", title: "Decree No. 31/2021/ND-CP detailed regulations on Law on Investment",
       type: "Decree", isNew: true, date: "26/03/2021", effective: "26/03/2021",
       category: "Investment Laws"
    },
    {
       id: 3, tab: "Businesses", title: "Guide to Foreign Labor Permits 2026",
       type: "Guide", isNew: true, date: "15/01/2026", effective: "15/01/2026",
       category: "Work Permits"
    },
    {
       id: 4, tab: "Individuals", title: "Rights Handbook for Foreigners in Vietnam",
       type: "Handbook", isNew: true, date: "20/02/2026", effective: "01/03/2026",
       category: "Rights Handbook"
    },
    {
       id: 5, tab: "Individuals", title: "Circular on Visa Processing and Exemption for Foreign Nationals",
       type: "Circular", isNew: false, date: "12/10/2024", effective: "01/01/2025",
       category: "Visa & Residency"
    },
    {
       id: 6, tab: "Individuals", title: "Guide to Marriage Registration between Vietnamese and Foreigners",
       type: "Guide", isNew: false, date: "05/08/2023", effective: "05/08/2023",
       category: "Marriage Registration"
    }
  ];

  const displayedDocs = allDocs.filter(d => d.tab === activeTab);

  const stats = displayedDocs.reduce((acc, curr) => {
     acc[curr.type] = (acc[curr.type] || 0) + 1;
     return acc;
  }, {});
  const totalDocs = displayedDocs.length;

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] py-12 relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

            <div className="flex justify-center mb-4">
              <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
               Legal Aid <span className="text-amber-400">Documents</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-8">
               Search and access legal aid materials, laws, handbooks, and regulatory guidelines for foreign enterprises and individuals.
            </p>

            {/* Tab Bar */}
            <div className="flex bg-white/10 p-1.5 rounded-xl border border-white/20 backdrop-blur-md">
               <button 
                  onClick={() => setActiveTab("Businesses")}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all text-sm md:text-base ${activeTab === 'Businesses' ? 'bg-white text-blue-900 shadow-md transform scale-105' : 'text-white hover:bg-white/10'}`}
               >
                  <Building2 size={18} /> FDI Enterprises
               </button>
               <button 
                  onClick={() => setActiveTab("Individuals")}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all text-sm md:text-base ${activeTab === 'Individuals' ? 'bg-white text-blue-900 shadow-md transform scale-105' : 'text-white hover:bg-white/10'}`}
               >
                  <User size={18} /> Foreign Individuals
               </button>
            </div>
         </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col md:flex-row gap-8">
         
         {/* Left Sidebar (Categories Tree & News) */}
         <div className="w-full md:w-1/4 flex flex-col gap-6">
            
            <div className="bg-white border text-left border-gray-200 rounded-xl shadow-sm overflow-hidden sticky top-8">
               <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center gap-2">
                  <Layers className="text-blue-600" size={18} />
                  <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">Document Categories</h3>
               </div>
               
               <ul className="py-2">
                  {categories.map((cat, idx) => (
                     <li key={idx} className="border-b border-gray-50 last:border-none">
                        <button 
                           onClick={() => toggleCat(idx)}
                           className="w-full text-left px-5 py-3 flex items-center justify-between text-sm font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                           {cat.title}
                           <ChevronDown size={16} className={`text-gray-400 transition-transform ${expandedCats[idx] ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Subcategories */}
                        {expandedCats[idx] && (
                           <ul className="bg-gray-50/50 pb-2">
                              {cat.sub.map((sub, i) => (
                                 <li key={i}>
                                    <button className="w-full text-left pl-9 pr-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-white transition-colors relative before:absolute before:left-5 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-300 hover:before:bg-blue-500">
                                       {sub}
                                    </button>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </li>
                  ))}
               </ul>
            </div>

            {/* Related News Widget */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden text-left">
               <div className="bg-amber-500 px-5 py-3">
                  <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">Related News</h3>
               </div>
               <div className="p-5 flex flex-col gap-4">
                  {[1, 2, 3].map((_, i) => (
                     <Link key={i} to="/legal-aid/news/1" className="group flex gap-3 block">
                        <img src={`https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=150&h=150&sig=${i}`} alt="News" className="w-16 h-16 object-cover rounded-md shrink-0 group-hover:opacity-80 transition-opacity" />
                        <div>
                           <span className="text-[10px] text-gray-500 font-bold mb-1 block">15/03/2026</span>
                           <h4 className="text-xs font-bold text-gray-800 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">Ministry of Justice launches new legal aid portal for foreign investors</h4>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>

         </div>

         {/* Right Content Area (Search & List) */}
         <div className="w-full md:w-3/4 flex flex-col gap-6">
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
               <div className="relative flex-grow">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                     <Search size={20} />
                  </span>
                  <input 
                     type="text" 
                     placeholder="Search legal documents by keyword or number..." 
                     className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-gray-900"
                  />
               </div>
               <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-sm transition-colors whitespace-nowrap">
                  Search
               </button>
            </div>

            {/* Stats Summary */}
            <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm text-sm text-gray-700 font-medium">
               Found <span className="font-extrabold text-blue-700 text-lg mx-1">{totalDocs}</span> documents in total: {' '}
               {Object.entries(stats).map(([k, v], i, arr) => (
                  <span key={k} className="inline-block mt-1 sm:mt-0">
                     <span className="font-bold text-blue-900 mx-1">{v}</span> {k}{i < arr.length - 1 ? ',' : ''}
                  </span>
               ))}
            </div>

            {/* Document List */}
            <div className="flex flex-col gap-4">
               {displayedDocs.map((doc, index) => (
                  <div key={doc.id} className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 text-left transition-all flex flex-col md:flex-row gap-5 items-start md:items-center relative group">
                     {/* Number Badge */}
                     <div className="hidden md:flex flex-col items-center justify-center bg-gray-50 text-gray-400 font-extrabold text-lg w-12 h-12 rounded-lg border border-gray-200 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-500 group-hover:border-blue-200 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                     </div>

                     <div className="flex-grow w-full">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                           <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider ${
                              doc.type === 'Law' ? 'bg-red-100 text-red-700' : 
                              doc.type === 'Decree' ? 'bg-purple-100 text-purple-700' :
                              doc.type === 'Circular' ? 'bg-amber-100 text-amber-700' :
                              'bg-green-100 text-green-700'
                           }`}>
                              {doc.type}
                           </span>
                           {doc.isNew && (
                              <span className="text-[10px] font-extrabold uppercase bg-red-500 text-white px-2 py-0.5 rounded tracking-wider animate-pulse">
                                 New
                              </span>
                           )}
                           <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded ml-auto md:ml-0">
                              {doc.category}
                           </span>
                        </div>
                        
                        <Link to={`/legal-aid/documents/${doc.id}`} className="text-lg font-bold text-blue-900 hover:text-blue-600 transition-colors mb-3 inline-block leading-snug pr-8">
                           {doc.title}
                        </Link>
                        
                        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500">
                           <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gray-400"/> Issued: <span className="text-gray-800">{doc.date}</span></span>
                           <span className="flex items-center gap-1.5"><FileText size={14} className="text-gray-400"/> Validity: <span className="text-gray-800">{doc.effective}</span></span>
                        </div>
                     </div>

                     {/* Download Action */}
                     <button className="w-full md:w-auto mt-2 md:mt-0 shrink-0 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-bold py-3 px-6 rounded-lg text-sm transition-colors border border-blue-200 hover:border-transparent flex items-center justify-center gap-2">
                        <Download size={16} /> Download
                     </button>
                  </div>
               ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between bg-white border border-gray-200 px-4 py-3 rounded-xl mt-4 text-sm font-medium">
               <span className="text-gray-600">Showing 1-10 of {totalDocs}</span>
               
               <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-2 mr-4">
                     <span className="text-gray-500">Items per page:</span>
                     <select className="border border-gray-300 rounded p-1 outline-none focus:border-blue-500">
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                     </select>
                  </div>
                  <button className="p-1.5 border border-gray-200 text-gray-400 rounded hover:bg-gray-50 transition-colors disabled:opacity-50">
                     {'<'}
                  </button>
                  <button className="p-1.5 px-3 bg-blue-600 text-white rounded font-bold">1</button>
                  <button className="p-1.5 border border-gray-200 text-gray-400 rounded hover:bg-gray-50 transition-colors disabled:opacity-50">
                     {'>'}
                  </button>
               </div>
            </div>

         </div>

      </main>

      <Footer />
    </div>
  );
};

export default LegalAidDocuments;
