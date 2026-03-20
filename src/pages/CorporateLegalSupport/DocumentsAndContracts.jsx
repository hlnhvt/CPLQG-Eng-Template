import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Search, FileText, CheckCircle2, ChevronDown, Download, Eye } from 'lucide-react';

const DocumentsAndContracts = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Standard Contracts', 'Statutory Forms', 'Legal Opinions', 'Guidelines'];

  const documents = [
    {
      id: 1,
      title: 'Non-Disclosure Agreement (NDA) - Dual Language',
      category: 'Standard Contracts',
      date: '10/03/2026',
      downloads: 1250,
      description: 'Standard bilingual (English - Vietnamese) NDA template for preliminary business discussions and data sharing in Vietnam.',
      fileType: 'DOCX',
      size: '45 KB',
      isHot: true
    },
    {
      id: 2,
      title: 'Labor Contract Template for Foreign Nationals',
      category: 'Standard Contracts',
      date: '15/02/2026',
      downloads: 840,
      description: 'Vietnamese statutory labor contract template adapted for expatriate employees, complying with the latest Labor Code.',
      fileType: 'DOCX',
      size: '62 KB'
    },
    {
      id: 3,
      title: 'Form 01: Application for Work Permit Exemption',
      category: 'Statutory Forms',
      date: '05/01/2026',
      downloads: 530,
      description: 'Official application form for expats eligible for work permit exemption (e.g., internal corporate transferees, investors).',
      fileType: 'PDF',
      size: '120 KB'
    },
    {
      id: 4,
      title: 'Guidelines on Foreign Exchange Control',
      category: 'Guidelines',
      date: '20/12/2025',
      downloads: 320,
      description: 'Comprehensive manual on opening DICA, profit repatriation, and foreign loan registrations.',
      fileType: 'PDF',
      size: '2.5 MB'
    },
    {
      id: 5,
      title: 'Commercial Lease Agreement Template',
      category: 'Standard Contracts',
      date: '12/11/2025',
      downloads: 670,
      description: 'Bilingual template for leasing office space or industrial land in Vietnam, protecting tenant rights under civil law.',
      fileType: 'DOCX',
      size: '85 KB'
    }
  ];

  const filteredDocs = activeCategory === 'All' 
    ? documents 
    : documents.filter(doc => doc.category === activeCategory);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] py-16 relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

            <div className="flex justify-center mb-4">
              <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
               Business <span className="text-amber-400">Document Templates</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-8">
               Access verified, bilingual contract templates and statutory forms designed specifically to assist foreign investors operating in Vietnam.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-3xl relative">
               <div className="relative flex items-center">
                   <input 
                      type="text" 
                      placeholder="Search for NDAs, Labor Contracts, Legal Forms..." 
                      className="w-full pl-6 pr-32 py-4 rounded-xl shadow-lg border-2 border-transparent focus:border-amber-400 focus:outline-none text-gray-900 transition-all font-medium placeholder-gray-400"
                   />
                   <div className="absolute right-2 flex items-center">
                      <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2">
                         Search <Search size={18} />
                      </button>
                   </div>
               </div>
               <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs font-semibold text-blue-200">
                  <span>Popular searches:</span>
                  <button className="hover:text-white underline underline-offset-2">Employment Contract</button>
                  <button className="hover:text-white underline underline-offset-2">Office Lease</button>
                  <button className="hover:text-white underline underline-offset-2">Board Resolution</button>
               </div>
            </div>

         </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col lg:flex-row gap-8">
         
         {/* Categories Sidebar */}
         <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
               <h3 className="font-bold text-gray-900 text-lg mb-4 border-b border-gray-100 pb-3">Categories</h3>
               <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                     <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-between ${activeCategory === cat ? 'bg-amber-50 text-amber-700 border border-amber-200' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent'}`}
                     >
                        {cat}
                        {activeCategory === cat && <ChevronRight size={16} />}
                     </button>
                  ))}
               </div>
            </div>
         </div>

         {/* Document List */}
         <div className="w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
               <div>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-1">{activeCategory} Documents</h2>
                  <p className="text-sm text-gray-500 font-semibold">Showing {filteredDocs.length} matching templates</p>
               </div>
               <div className="flex items-center gap-2 bg-white border border-gray-200 py-2 px-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-sm font-semibold text-gray-700">Sort by: Newest</span>
                  <ChevronDown size={16} className="text-gray-500" />
               </div>
            </div>

            <div className="flex flex-col gap-6">
               {filteredDocs.map((doc) => (
                  <div key={doc.id} className="bg-white border text-left border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col md:flex-row justify-between gap-6 relative overflow-hidden group">
                     {/* Decorative background shape */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10 group-hover:bg-blue-100/50 transition-colors"></div>

                     <div className="flex items-start gap-5 flex-grow">
                        <div className={`p-4 rounded-xl shrink-0 border ${doc.fileType === 'DOCX' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-red-50 text-red-600 border-red-200'}`}>
                           <FileText size={32} />
                        </div>
                        <div>
                           <div className="flex items-center gap-3 mb-2">
                              {doc.isHot && <span className="bg-amber-100 text-amber-700 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">Most Downloaded</span>}
                              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{doc.category}</span>
                           </div>
                           <Link 
                              to={`/corporate-support/documents/${doc.id}`}
                              className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors leading-tight mb-2 inline-block"
                           >
                              {doc.title}
                           </Link>
                           <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-2xl line-clamp-2">
                              {doc.description}
                           </p>
                           
                           <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500">
                              <span className="bg-gray-100 px-2.5 py-1 rounded text-gray-800">{doc.fileType} • {doc.size}</span>
                              <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500"/> Verified Template</span>
                              <span>Updated: {doc.date}</span>
                              <span>{doc.downloads.toLocaleString()} Downloads</span>
                           </div>
                        </div>
                     </div>
                     
                     <div className="shrink-0 flex flex-row md:flex-col gap-3 justify-center items-end border-t border-gray-100 md:border-t-0 md:border-l md:border-gray-100 pt-4 md:pt-0 md:pl-6">
                        <Link 
                           to={`/corporate-support/documents/${doc.id}`} 
                           className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-2.5 px-6 rounded-lg text-sm transition-colors border border-gray-200 w-full md:w-auto text-center flex items-center justify-center gap-2"
                        >
                           <Eye size={16} /> View Details
                        </Link>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 w-full md:w-auto shadow-sm">
                           <Download size={16} /> Download
                        </button>
                     </div>
                  </div>
               ))}
            </div>

            {/* Pagination Placeholder */}
            {filteredDocs.length > 0 && (
               <div className="mt-10 flex justify-center items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50">
                     {'<'}
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-sm">
                     1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-colors">
                     2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-colors">
                     3
                  </button>
                  <span className="px-2 text-gray-400">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                     {'>'}
                  </button>
               </div>
            )}
         </div>

      </main>

      <Footer />
    </div>
  );
};

export default DocumentsAndContracts;
