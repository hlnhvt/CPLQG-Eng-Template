import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, RotateCcw, ChevronDown } from 'lucide-react';

const LegalDocumentSystemPage = () => {
  const [activeSearchType, setActiveSearchType] = useState('contains');
  
  const documents = [
    {
      id: 1,
      order: '01',
      title: 'Land Law No. 31/2024/QH15',
      issuingDate: '18/02/2024',
      effectiveDate: '01/01/2025',
      status: 'In force',
      updateDate: '12/03/2024'
    },
    {
      id: 2,
      order: '02',
      title: 'The Constitution of the Socialist Republic of Vietnam (2013)',
      issuingDate: '05/03/2013',
      effectiveDate: '05/03/2014',
      status: 'In force',
      updateDate: '12/03/2024'
    },
    {
      id: 3,
      order: '03',
      title: 'Resolution No. 203/2025/QH15 Amending and supplementing a number of articles of the Constitution of the Socialist Republic of Vietnam',
      issuingDate: '16/07/2025',
      effectiveDate: '16/07/2025',
      status: 'In force',
      updateDate: '12/08/2025'
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      {/* Page Title */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-[#1e3a8a]">Legal document system</h1>
        </div>
      </div>

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Filter Panel */}
        <aside className="w-full lg:w-1/4 flex flex-col gap-6">
          {/* Document group */}
          <div className="bg-white rounded p-0 border-none shadow-none">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-800">Document group</h3>
              <button className="text-sm text-blue-600 hover:underline">Bỏ chọn</button>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="w-full px-3 py-1.5 border border-gray-200 rounded text-sm mb-3 focus:outline-none focus:border-blue-400"
              />
              <div className="space-y-2 max-h-48 overflow-y-auto">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Tất cả
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Vietnamese Standard
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Legal documents
                </label>
              </div>
            </div>
          </div>

          {/* Document field */}
          <div className="bg-white rounded p-0 border-none">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-800">Document field</h3>
              <button className="text-sm text-blue-600 hover:underline">Bỏ chọn</button>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="w-full px-3 py-1.5 border border-gray-200 rounded text-sm mb-3 focus:outline-none focus:border-blue-400"
              />
              <div className="space-y-2 max-h-48 overflow-y-auto">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Tất cả
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Health
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Constitution and law
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Land
                </label>
              </div>
            </div>
          </div>

          {/* Organization */}
          <div className="bg-white rounded p-0 border-none">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-800">Organization</h3>
              <button className="text-sm text-blue-600 hover:underline">Bỏ chọn</button>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <input 
                type="text" 
                placeholder="Tìm kiếm..." 
                className="w-full px-3 py-1.5 border border-gray-200 rounded text-sm mb-3 focus:outline-none focus:border-blue-400"
              />
              <div className="space-y-2 max-h-48 overflow-y-auto">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Tất cả
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Ministry of Finance
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> National Assembly
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Search Area */}
        <div className="w-full lg:w-3/4 flex flex-col">
          {/* Search Box */}
          <div className="mb-6">
            <div className="flex gap-2 mb-3">
              <input 
                type="text" 
                placeholder="Tìm kiếm" 
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium whitespace-nowrap transition-colors">
                Tìm kiếm
              </button>
              <button className="text-gray-500 hover:text-gray-700 px-2 transition-colors tooltip" title="Reset">
                <RotateCcw size={20} />
              </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-between text-sm gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input 
                    type="radio" 
                    name="searchType" 
                    checked={activeSearchType === 'contains'}
                    onChange={() => setActiveSearchType('contains')}
                    className="text-blue-600 focus:ring-blue-500" 
                  /> 
                  So sánh có chứa
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input 
                    type="radio" 
                    name="searchType" 
                    checked={activeSearchType === 'exact'}
                    onChange={() => setActiveSearchType('exact')}
                    className="text-blue-600 focus:ring-blue-500" 
                  /> 
                  Cụm từ chính xác
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer ml-2">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked /> Document Number
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" /> Document Name
                </label>
              </div>
              <button className="text-blue-600 hover:underline flex items-center gap-1 whitespace-nowrap">
                Tìm kiếm nâng cao <ChevronDown size={14} />
              </button>
            </div>
          </div>
          
          <div className="mb-4 font-bold text-gray-800">
            Có tất cả {documents.length} dữ liệu
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow transition-shadow">
                <div className="flex-grow flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                    {doc.order}
                  </div>
                  <div>
                    <Link to={`/legal-document/${doc.id}`} className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors block mb-2 leading-snug">
                      {doc.title}
                    </Link>
                  </div>
                </div>
                
                <div className="flex-shrink-0 md:w-64 flex flex-col gap-1 text-[13px] text-gray-600 border-l-0 md:border-l border-gray-200 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0">
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="font-medium">Issuing date:</span>
                    <span className="text-gray-800">{doc.issuingDate}</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="font-medium">Effective date:</span>
                    <span className="text-gray-800">{doc.effectiveDate}</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="font-medium">Effect status:</span>
                    <span className="text-green-600 font-medium">{doc.status}</span>
                  </div>
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="font-medium">Update date:</span>
                    <span className="text-gray-800">{doc.updateDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination (Placeholder) */}
          <div className="flex justify-center mt-8 gap-1">
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>&lt;</button>
             <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white font-medium border border-blue-600">1</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50" disabled>&gt;</button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalDocumentSystemPage;
