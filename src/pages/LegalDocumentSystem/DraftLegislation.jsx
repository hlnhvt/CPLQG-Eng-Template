import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, ChevronDown, Filter, ChevronRight, Check, ChevronLeft, Calendar } from 'lucide-react';

const DraftLegislation = () => {
  const [activeSearchType, setActiveSearchType] = useState('all');

  const drafts = [
    {
      id: 1,
      order: '01',
      title: 'Law amending and supplementing a number of articles of the Law on Pharmacy',
      issuingAuthority: 'Ministry of Health',
      documentType: 'Law',
      publishedDate: '10/03/2026',
      deadline: '10/05/2026',
      status: 'Open for Comments',
      hasEnSummary: true
    },
    {
      id: 2,
      order: '02',
      title: 'Draft Decree regulating detailed implementation of some articles of the Land Law',
      issuingAuthority: 'Ministry of Natural Resources and Environment',
      documentType: 'Decree',
      publishedDate: '01/03/2026',
      deadline: 'Closed',
      status: 'Closed',
      hasEnSummary: true
    },
    {
      id: 3,
      order: '03',
      title: 'Draft Circular guiding corporate income tax',
      issuingAuthority: 'Ministry of Finance',
      documentType: 'Circular',
      publishedDate: '15/02/2026',
      deadline: 'Closed',
      status: 'Enacted',
      hasEnSummary: false
    },
    {
      id: 4,
      order: '04',
      title: 'Law on Data',
      issuingAuthority: 'Ministry of Public Security',
      documentType: 'Law',
      publishedDate: '20/02/2026',
      deadline: '20/04/2026',
      status: 'Open for Comments',
      hasEnSummary: true
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Page Title & Breadcrumb */}
      <div className="bg-white border-b border-gray-200 shadow-sm relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/legal-document-system" className="hover:text-blue-600 transition-colors">Legal document system</Link>
            <ChevronRight size={14} />
            <span className="text-gray-800 font-medium">Draft Legislation</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] tracking-tight">Draft Legislation</h1>
        </div>
      </div>

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col lg:flex-row gap-8">

        {/* Left Filter Panel */}
        <aside className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="bg-blue-50/50 border-b border-gray-200 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-blue-700" />
                  <h2 className="font-bold text-gray-800 text-lg">Filters</h2>
                </div>
             </div>
             
             <div className="p-5 flex flex-col gap-6">
                
                {/* Issuing Authority */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-800 text-sm tracking-wide uppercase">Issuing Authority</h3>
                  </div>
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-2 custom-scrollbar">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                         <input type="checkbox" className="peer sr-only" defaultChecked />
                         <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">All</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                         <input type="checkbox" className="peer sr-only" />
                         <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">Ministry of Justice</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                         <input type="checkbox" className="peer sr-only" />
                         <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">Ministry of Finance</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                         <input type="checkbox" className="peer sr-only" />
                         <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">Ministry of Public Security</span>
                    </label>
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full"></div>

                {/* Document Type */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-800 text-sm tracking-wide uppercase">Document Type</h3>
                  </div>
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-2 custom-scrollbar">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                         <input type="checkbox" className="peer sr-only" />
                         <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">Law</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                         <input type="checkbox" className="peer sr-only" />
                         <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">Ordinance</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                         <input type="checkbox" className="peer sr-only" />
                         <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">Decree</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                         <input type="checkbox" className="peer sr-only" />
                         <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">Decision</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                         <input type="checkbox" className="peer sr-only" />
                         <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">Circular</span>
                    </label>
                  </div>
                </div>

             </div>
          </div>
        </aside>

        {/* Right Search Area */}
        <div className="w-full lg:flex-1 flex flex-col min-w-0">
          
          {/* Search Box */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex gap-2 mb-4">
              <div className="relative flex-grow">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Search size={18} className="text-gray-400" />
                 </div>
                 <input
                   type="text"
                   placeholder="Search..."
                   className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-shadow text-gray-700"
                 />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold shadow-sm whitespace-nowrap transition-colors flex items-center gap-2">
                Search
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
              <div className="flex flex-wrap items-center gap-5">
                 {['all', 'title', 'documentNo', 'exact'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${activeSearchType === type ? 'border-blue-600 bg-white' : 'border-gray-300 bg-white group-hover:border-blue-400'}`}>
                        {activeSearchType === type && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                      </div>
                      <input
                        type="radio"
                        name="searchType"
                        className="sr-only"
                        checked={activeSearchType === type}
                        onChange={() => setActiveSearchType(type)}
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        {type === 'all' && 'All'}
                        {type === 'title' && 'Title'}
                        {type === 'documentNo' && 'Document No.'}
                        {type === 'exact' && 'Exact phrase'}
                      </span>
                    </label>
                 ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between mb-4 text-sm font-medium gap-2">
             <div className="text-gray-600">
               Found <span className="text-gray-900 font-bold">{drafts.length}</span> draft documents
             </div>
             <div className="flex items-center gap-2">
               <span className="text-gray-600">Show:</span>
               <select className="border border-gray-300 rounded px-2 py-1 text-gray-700 focus:outline-none focus:border-blue-500">
                  <option>10 items/page</option>
                  <option>20 items/page</option>
                  <option>50 items/page</option>
               </select>
             </div>
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {drafts.map((draft) => (
              <div key={draft.id} className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row gap-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 text-gray-600 font-bold flex items-center justify-center text-sm border border-gray-200">
                  {draft.order}
                </div>
                
                <div className="flex-grow min-w-0 flex flex-col justify-center">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <Link to={`/draft-legislation/${draft.id}`} className="text-lg font-bold text-[#1e3a8a] hover:text-blue-600 transition-colors leading-snug break-words">
                       {draft.title}
                    </Link>
                    {draft.hasEnSummary && (
                      <span className="shrink-0 bg-green-100 text-green-700 border border-green-200 px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                        EN Summary
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5 font-medium">
                       <span className="text-gray-400">Issuer:</span>
                       <span className="text-gray-800">{draft.issuingAuthority}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                       <span className="text-gray-400">Type:</span>
                       <span className="text-gray-800">{draft.documentType}</span>
                    </div>
                  </div>
                  
                </div>

                <div className="flex-shrink-0 md:w-48 flex flex-col gap-2 text-[13px] text-gray-600 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-5 justify-center">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-400 uppercase tracking-wider text-[10px] mb-0.5">Posted</span>
                    <span className="text-gray-800 font-medium flex items-center gap-1.5"><Calendar size={13} className="text-gray-400" /> {draft.publishedDate}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-400 uppercase tracking-wider text-[10px] mb-0.5">Deadline</span>
                    {draft.deadline === 'Closed' ? (
                       <span className="text-gray-500 font-medium italic pr-2">Closed</span>
                    ) : (
                       <span className="text-gray-800 font-medium flex items-center gap-1.5"><Calendar size={13} className="text-red-400" /> {draft.deadline}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-1.5">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-600 disabled:opacity-50 transition-colors shadow-sm" disabled>
               <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-sm border border-blue-600">
               1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:border-gray-300 transition-colors shadow-sm">
               2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 hover:border-gray-300 transition-colors shadow-sm">
               <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DraftLegislation;
