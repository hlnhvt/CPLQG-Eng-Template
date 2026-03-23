import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, RotateCcw, ChevronDown, Filter, ChevronRight, Check, ChevronLeft, Clock, FileText } from 'lucide-react';

const LegalDocumentSystemPage = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [activeSearchType, setActiveSearchType] = useState('contains');

  const recentDocuments = [
    { id: 1, order: '01', title: 'Resolution No. 203/2025/QH15 Amending and supplementing a number of articles of the Constitution of the Socialist Republic of Vietnam', issuingDate: '16/07/2025', effectiveDate: '16/07/2025', status: 'In force', updateDate: '12/08/2025' },
    { id: 2, order: '02', title: 'Decree No. 58/2025/ND-CP on Management and Development of Industrial Zones and Economic Zones', issuingDate: '10/03/2025', effectiveDate: '01/05/2025', status: 'In force', updateDate: '15/07/2025' },
    { id: 3, order: '03', title: 'Circular No. 12/2025/TT-NHNN Regulating Electronic Banking Transactions and Payment Services', issuingDate: '20/02/2025', effectiveDate: '01/04/2025', status: 'In force', updateDate: '02/07/2025' },
    { id: 4, order: '04', title: 'Law on Investment No. 29/2024/QH15 (Amended)', issuingDate: '28/11/2024', effectiveDate: '01/01/2025', status: 'In force', updateDate: '18/06/2025' },
    { id: 5, order: '05', title: 'Land Law No. 31/2024/QH15', issuingDate: '18/02/2024', effectiveDate: '01/01/2025', status: 'In force', updateDate: '12/03/2025' },
    { id: 6, order: '06', title: 'Decree No. 13/2025/ND-CP on Personal Data Protection', issuingDate: '15/01/2025', effectiveDate: '01/03/2025', status: 'In force', updateDate: '20/02/2025' },
    { id: 7, order: '07', title: 'Law on Enterprises No. 59/2020/QH14 (Consolidated Text 2025)', issuingDate: '17/06/2020', effectiveDate: '01/01/2021', status: 'In force', updateDate: '10/02/2025' },
    { id: 8, order: '08', title: 'Circular No. 02/2025/TT-BTP Guiding Legal Aid Activities for Foreign Nationals', issuingDate: '05/01/2025', effectiveDate: '20/02/2025', status: 'In force', updateDate: '05/02/2025' },
    { id: 9, order: '09', title: 'Resolution No. 171/2024/QH15 on Piloting Commercial Housing Projects using Residential Land Use Rights', issuingDate: '30/11/2024', effectiveDate: '01/04/2025', status: 'In force', updateDate: '20/01/2025' },
    { id: 10, order: '10', title: 'Decree No. 96/2024/ND-CP Detailing a Number of Articles of the Housing Law', issuingDate: '24/07/2024', effectiveDate: '01/08/2024', status: 'In force', updateDate: '08/01/2025' },
  ];

  const searchDocuments = [
    { id: 1, order: '01', title: 'Land Law No. 31/2024/QH15', issuingDate: '18/02/2024', effectiveDate: '01/01/2025', status: 'In force', updateDate: '12/03/2024' },
    { id: 2, order: '02', title: 'The Constitution of the Socialist Republic of Vietnam (2013)', issuingDate: '05/03/2013', effectiveDate: '05/03/2014', status: 'In force', updateDate: '12/03/2024' },
    { id: 3, order: '03', title: 'Resolution No. 203/2025/QH15 Amending and supplementing a number of articles of the Constitution of the Socialist Republic of Vietnam', issuingDate: '16/07/2025', effectiveDate: '16/07/2025', status: 'In force', updateDate: '12/08/2025' },
  ];

  const DocCard = ({ doc, showUpdateDate = false }) => (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
      <div className="flex-grow flex gap-4 min-w-0">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-sm border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {doc.order}
        </div>
        <div className="min-w-0">
          <Link to={`/legal-document/${doc.id}`} className="text-lg font-bold text-[#1e3a8a] hover:text-blue-600 transition-colors block mb-2 leading-snug line-clamp-2">
            {doc.title}
          </Link>
        </div>
      </div>
      <div className="flex-shrink-0 md:w-64 flex flex-col gap-1.5 text-xs text-gray-600 md:border-l border-gray-100 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0 justify-center">
        <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-[10px]">Issuing date</span>
          <span className="text-gray-800 font-medium">{doc.issuingDate}</span>
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-[10px]">Effective date</span>
          <span className="text-gray-800 font-medium">{doc.effectiveDate}</span>
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
          <span className="font-semibold text-gray-500 uppercase tracking-wider text-[10px]">Effect status</span>
          <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded inline-block w-max">{doc.status}</span>
        </div>
        {showUpdateDate && (
          <div className="grid grid-cols-[100px_1fr] gap-2 items-center">
            <span className="font-semibold text-gray-500 uppercase tracking-wider text-[10px]">Update date</span>
            <span className="text-blue-700 font-semibold">{doc.updateDate}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Page Title */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-800 font-medium">Legal document system</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a] tracking-tight">Legal Document System</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab('recent')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'recent'
                  ? 'border-[#1e3a8a] text-[#1e3a8a]'
                  : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              <Clock size={16} />
              Recently Updated Documents
            </button>
            <button
              onClick={() => setActiveTab('search')}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'search'
                  ? 'border-[#1e3a8a] text-[#1e3a8a]'
                  : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              <FileText size={16} />
              Search Legal Documents
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col lg:flex-row gap-8">

        {/* Left Filter Panel — only show on Search tab */}
        {activeTab === 'search' && (
          <aside className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-5">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-blue-50/50 border-b border-gray-200 px-5 py-4 flex items-center gap-2">
                <Filter size={18} className="text-blue-700" />
                <h2 className="font-bold text-gray-800 text-lg">Filter Options</h2>
              </div>
              <div className="p-5 flex flex-col gap-6">
                {/* Document group */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-800 text-sm tracking-wide uppercase">Document group</h3>
                    <button className="text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors">Clear</button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-1 mb-3 border border-gray-100 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={14} className="text-gray-400" />
                    </div>
                    <input type="text" placeholder="Search group..." className="w-full bg-transparent pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400" />
                  </div>
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2">
                    {['All', 'Vietnamese Standard', 'Legal documents'].map(label => (
                      <label key={label} className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                          <input type="checkbox" className="peer sr-only" />
                          <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full"></div>

                {/* Document field */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-800 text-sm tracking-wide uppercase">Document field</h3>
                    <button className="text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors">Clear</button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-1 mb-3 border border-gray-100 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={14} className="text-gray-400" />
                    </div>
                    <input type="text" placeholder="Search field..." className="w-full bg-transparent pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400" />
                  </div>
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2">
                    {['All', 'Health', 'Constitution and law', 'Land'].map(label => (
                      <label key={label} className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                          <input type="checkbox" className="peer sr-only" />
                          <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gray-100 w-full"></div>

                {/* Organization */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-800 text-sm tracking-wide uppercase">Organization</h3>
                    <button className="text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors">Clear</button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-1 mb-3 border border-gray-100 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={14} className="text-gray-400" />
                    </div>
                    <input type="text" placeholder="Search organization..." className="w-full bg-transparent pl-8 pr-3 py-1.5 text-sm focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-400" />
                  </div>
                  <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2">
                    {['All', 'Ministry of Finance', 'National Assembly'].map(label => (
                      <label key={label} className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                          <input type="checkbox" className="peer sr-only" />
                          <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 leading-tight">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Right Content Area */}
        <div className="w-full lg:flex-1 flex flex-col min-w-0">

          {/* ── TAB: Recently Updated Documents ── */}
          {activeTab === 'recent' && (
            <>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Total <span className="text-gray-900 font-bold">{recentDocuments.length}</span> documents found &mdash; sorted by latest update date
                </p>
              </div>
              <div className="space-y-4">
                {recentDocuments.map(doc => (
                  <DocCard key={doc.id} doc={doc} showUpdateDate />
                ))}
              </div>
              <div className="flex justify-center mt-10 gap-1.5">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 disabled:opacity-50 shadow-sm" disabled>
                  <ChevronLeft size={18} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-sm border border-blue-600">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                  <ChevronRight size={18} />
                </button>
              </div>
            </>
          )}

          {/* ── TAB: Search Legal Documents ── */}
          {activeTab === 'search' && (
            <>
              {/* Search Box */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <div className="flex gap-2 mb-4">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter keyword to search..."
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-shadow text-gray-700"
                    />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold shadow-sm whitespace-nowrap transition-colors flex items-center gap-2">
                    Search
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 border border-transparent hover:border-gray-200 px-3 rounded-lg transition-all flex items-center justify-center shrink-0" title="Reset Filters">
                    <RotateCcw size={20} />
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between text-sm gap-4 border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap items-center gap-5">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${activeSearchType === 'contains' ? 'border-blue-600 bg-white' : 'border-gray-300 bg-white group-hover:border-blue-400'}`}>
                        {activeSearchType === 'contains' && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                      </div>
                      <input type="radio" name="searchType" className="sr-only" checked={activeSearchType === 'contains'} onChange={() => setActiveSearchType('contains')} />
                      <span className="text-gray-700 font-medium">Contains</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${activeSearchType === 'exact' ? 'border-blue-600 bg-white' : 'border-gray-300 bg-white group-hover:border-blue-400'}`}>
                        {activeSearchType === 'exact' && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                      </div>
                      <input type="radio" name="searchType" className="sr-only" checked={activeSearchType === 'exact'} onChange={() => setActiveSearchType('exact')} />
                      <span className="text-gray-700 font-medium">Exact Match</span>
                    </label>
                    <div className="w-px h-4 bg-gray-200 mx-1"></div>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                        <input type="checkbox" className="peer sr-only" defaultChecked />
                        <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-medium">Document Number</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 rounded border border-gray-300 bg-white group-hover:border-blue-500 transition-colors">
                        <input type="checkbox" className="peer sr-only" />
                        <Check size={12} className="text-blue-600 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 font-medium">Document Name</span>
                    </label>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-800 hover:underline flex items-center gap-1 whitespace-nowrap transition-colors">
                    Advanced Search <ChevronDown size={16} />
                  </button>
                </div>
              </div>

              <div className="mb-4 text-sm font-medium text-gray-600">
                Total <span className="text-gray-900 font-bold">{searchDocuments.length}</span> documents found
              </div>

              <div className="space-y-4">
                {searchDocuments.map(doc => (
                  <DocCard key={doc.id} doc={doc} />
                ))}
              </div>

              <div className="flex justify-center mt-10 gap-1.5">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-400 disabled:opacity-50 shadow-sm" disabled>
                  <ChevronLeft size={18} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold shadow-sm border border-blue-600">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                  <ChevronRight size={18} />
                </button>
              </div>
            </>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalDocumentSystemPage;
