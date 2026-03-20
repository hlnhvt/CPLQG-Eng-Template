import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Download, Printer, Search, ZoomIn, ZoomOut, Maximize, RotateCw, MoreVertical, LayoutGrid, Bookmark, Paperclip, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const DocumentDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('summary');

  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'content', label: 'Content' },
    { id: 'validity', label: 'Validity' },
    { id: 'vietnamese', label: 'Vietnamese' },
    { id: 'download', label: 'Download' }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Breadcrumb / Top Info */}
      <div className="bg-[#f5f8fd] border-b border-gray-100 pt-6 pb-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-1">
            The Constitution of the Socialist Republic of Vietnam (2013)
          </h1>
          <div className="text-[#3b82f6] text-sm">
            18/2013/L-CTN
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 sm:gap-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 text-[15px] font-medium transition-colors relative ${
                  activeTab === tab.id 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-sm"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* TAB: SUMMARY */}
        {activeTab === 'summary' && (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              The Constitution of the Socialist Republic of Vietnam (2013)
            </h2>
            
            <div className="border border-gray-200 rounded-md overflow-hidden mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="p-4 bg-gray-50 border-r border-gray-200 text-sm font-bold text-gray-700">Issuing body:</div>
                  <div className="p-4 text-sm text-gray-800">National Assembly</div>
                  
                  <div className="p-4 bg-gray-50 border-r border-t border-gray-200 text-sm font-bold text-gray-700">Official number:</div>
                  <div className="p-4 text-sm text-gray-800 border-t border-gray-200">18/2013/L-CTN</div>
                  
                  <div className="p-4 bg-gray-50 border-r border-t border-gray-200 text-sm font-bold text-gray-700">Type:</div>
                  <div className="p-4 text-sm text-gray-800 border-t border-gray-200 italic text-gray-500">Updating</div>

                  <div className="p-4 bg-gray-50 border-r border-t border-gray-200 text-sm font-bold text-gray-700">Issuing date:</div>
                  <div className="p-4 text-sm text-gray-800 border-t border-gray-200">November 28, 2013</div>

                  <div className="p-4 bg-gray-50 border-r border-t border-gray-200 text-sm font-bold text-gray-700">Effective date:</div>
                  <div className="p-4 text-sm text-gray-800 border-t border-gray-200">January 1, 2014</div>

                  <div className="p-4 bg-gray-50 border-r border-t border-gray-200 text-sm font-bold text-gray-700">Fields:</div>
                  <div className="p-4 text-sm text-gray-800 border-t border-gray-200">Constitution and law</div>
                </div>

                <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr]">
                  <div className="p-4 bg-gray-50 border-r border-gray-200 text-sm font-bold text-gray-700">Gazette number:</div>
                  <div className="p-4 text-sm text-gray-800 italic text-gray-500">Updating</div>
                  
                  <div className="p-4 bg-gray-50 border-r border-t border-gray-200 text-sm font-bold text-gray-700">Gazette date:</div>
                  <div className="p-4 text-sm text-gray-800 border-t border-gray-200 italic text-gray-500">Updating</div>

                  <div className="p-4 bg-gray-50 border-r border-t border-gray-200 text-sm font-bold text-gray-700">Signer:</div>
                  <div className="p-4 text-sm text-gray-800 border-t border-gray-200">Truong Tan Sang</div>

                  <div className="p-4 bg-gray-50 border-r border-t border-gray-200 text-sm font-bold text-gray-700">Expiry date:</div>
                  <div className="p-4 text-sm text-gray-800 border-t border-gray-200 italic text-gray-500">Updating</div>

                  <div className="p-4 bg-gray-50 border-r border-t border-gray-200 text-sm font-bold text-gray-700">Effect status:</div>
                  <div className="p-4 text-sm text-green-600 border-t border-gray-200 font-medium">In force</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="font-bold text-gray-800 mb-3">Document summary</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Order No. 18/2013/L-CTN, signed by President Truong Tan Sang, promulgates the 2013 Constitution of Vietnam, the fundamental legal document defining the political system, state structure, human rights, and guiding principles of Vietnamese society.
              </p>
            </div>
          </div>
        )}

        {/* TAB: CONTENT & VIETNAMESE (MOCK PDF VIEWER) */}
        {(activeTab === 'content' || activeTab === 'vietnamese') && (
          <div className="animate-in fade-in duration-300 border border-gray-200 bg-[#525659] h-[800px] rounded flex flex-col overflow-hidden">
            {/* PDF Toolbar */}
            <div className="h-12 bg-gray-100 border-b border-gray-300 flex items-center justify-between px-2 sm:px-4">
              <div className="flex items-center gap-4">
                <Search size={18} className="text-gray-600 cursor-pointer" />
                <div className="flex items-center gap-2">
                   <input type="text" defaultValue="1" className="w-10 text-center border border-gray-300 rounded text-sm py-0.5" />
                   <span className="text-sm text-gray-600">/ 36</span>
                   <ChevronDown size={14} className="text-gray-500" />
                </div>
              </div>
              <div className="flex items-center gap-4 hidden sm:flex">
                 <ZoomOut size={18} className="text-gray-600 cursor-pointer" />
                 <span className="text-sm text-gray-700">90%</span>
                 <ZoomIn size={18} className="text-gray-600 cursor-pointer" />
              </div>
              <div className="flex items-center gap-4">
                 <Maximize size={18} className="text-gray-600 cursor-pointer hidden md:block" />
                 <RotateCw size={18} className="text-gray-600 cursor-pointer hidden md:block" />
                 <Download size={18} className="text-gray-600 cursor-pointer" />
                 <Printer size={18} className="text-gray-600 cursor-pointer" />
                 <MoreVertical size={18} className="text-gray-600 cursor-pointer" />
              </div>
            </div>
            
            <div className="flex flex-1 overflow-hidden">
               {/* Left sidebar nav */}
               <div className="w-12 bg-gray-100 border-r border-gray-300 flex flex-col items-center py-4 gap-6">
                 <LayoutGrid size={20} className="text-gray-600 cursor-pointer p-1 bg-gray-200 rounded" />
                 <Bookmark size={20} className="text-gray-500 cursor-pointer p-1" />
                 <Paperclip size={20} className="text-gray-500 cursor-pointer p-1" />
               </div>
               {/* PDF Canvas Mock */}
               <div className="flex-1 overflow-auto flex justify-center p-8 bg-[#525659]">
                 <div className="w-[800px] h-[1100px] bg-white shadow-2xl p-16 flex flex-col">
                    {/* Mock document content depending on tab */}
                    {activeTab === 'vietnamese' ? (
                       <div className="text-center font-serif text-gray-900 border-b pb-8">
                         <h2 className="font-bold text-xl uppercase mb-1">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
                         <h3 className="font-bold text-lg mb-8">Độc lập - Tự do - Hạnh phúc</h3>
                         <h1 className="font-bold text-2xl uppercase mb-6">HIẾN PHÁP NƯỚC CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h1>
                       </div>
                    ) : (
                       <div className="font-serif text-gray-900">
                         <div className="text-center border-b pb-8 mb-8">
                           <h2 className="font-bold text-xl uppercase mb-1">THE SOCIALIST REPUBLIC OF VIETNAM</h2>
                           <h3 className="font-bold text-lg mb-8">Independence - Freedom - Happiness</h3>
                           <h1 className="font-bold text-2xl uppercase mb-6">THE CONSTITUTION OF THE SOCIALIST REPUBLIC OF VIETNAM</h1>
                         </div>
                         <h4 className="font-bold mb-4 uppercase">PREAMBLE</h4>
                         <p className="text-sm text-justify leading-relaxed mb-4">
                           Throughout their millennia-old history, the Vietnamese People, working diligently and creatively and fighting courageously to build and defend their country, have forged a tradition of patriotism, solidarity, humanity, justice, resilience and indomitableness, and have created the civilization and culture of Vietnam.
                         </p>
                       </div>
                    )}
                 </div>
               </div>
            </div>
          </div>
        )}

        {/* TAB: VALIDITY */}
        {activeTab === 'validity' && (
          <div className="animate-in fade-in duration-300">
             <h2 className="text-lg font-bold text-gray-800 mb-1">Validity</h2>
             <p className="text-sm text-gray-600 mb-6 italic">
               Helps the viewer know the issuance date, effective date, expiration date, and the current validity status of the document being viewed, as well as other documents that amend, supplement, or replace this document.
             </p>
             
             <div className="bg-white border text-sm border-gray-200 rounded-lg p-6 flex flex-col lg:flex-row justify-between lg:items-center gap-6 shadow-sm">
                <div>
                  <h3 className="font-bold text-gray-800 text-base mb-3 leading-snug max-w-2xl">
                    The Constitution of the Socialist Republic of Vietnam (2013)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                     <span className="px-3 py-1 bg-white border border-blue-200 text-blue-600 rounded-full text-xs cursor-pointer hover:bg-blue-50">Summary</span>
                     <span className="px-3 py-1 bg-white border border-blue-200 text-blue-600 rounded-full text-xs cursor-pointer hover:bg-blue-50">Content</span>
                     <span className="px-3 py-1 bg-white border border-blue-200 text-blue-600 rounded-full text-xs cursor-pointer hover:bg-blue-50">Validity</span>
                     <span className="px-3 py-1 bg-white border border-blue-200 text-blue-600 rounded-full text-xs cursor-pointer hover:bg-blue-50">Vietnamese</span>
                     <button className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-600 rounded-full text-xs whitespace-nowrap flex items-center gap-1 hover:bg-blue-100">
                       <Download size={12} /> Download
                     </button>
                  </div>
                </div>
                
                <div className="w-full lg:w-72 bg-gray-50 rounded border border-gray-200 p-4 shrink-0 flex flex-col gap-2">
                  <div className="flex justify-between items-center bg-transparent border-b border-gray-200/50 pb-2">
                     <span className="text-gray-600">Issuing date:</span>
                     <span className="font-medium text-gray-800">November 28, 2013</span>
                  </div>
                  <div className="flex justify-between items-center bg-transparent border-b border-gray-200/50 py-2">
                     <span className="text-gray-600">Effective date:</span>
                     <span className="font-medium text-gray-800">January 1, 2014</span>
                  </div>
                  <div className="flex justify-between items-center bg-transparent border-b border-gray-200/50 py-2">
                     <span className="text-gray-600">Effect status:</span>
                     <span className="font-medium text-green-600">In force</span>
                  </div>
                  <div className="flex justify-between items-center bg-transparent pt-2">
                     <span className="text-gray-600">Update date:</span>
                     <span className="font-medium text-gray-800">November 5, 2025</span>
                  </div>
                </div>
             </div>
          </div>
        )}

        {/* TAB: DOWNLOAD */}
        {activeTab === 'download' && (
          <div className="animate-in fade-in duration-300">
             <h2 className="text-lg font-bold text-gray-800 mb-4">Download</h2>
             
             <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col gap-0 shadow-sm text-sm">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer group">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs uppercase">
                        PDF
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">The Constitution [English].pdf</span>
                   </div>
                   <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded transition-colors shadow-sm">
                     <Download size={16} /> Download
                   </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 cursor-pointer group">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-red-100 flex items-center justify-center text-red-600 font-bold text-xs uppercase">
                        PDF
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">The Constitution [Vietnamese].pdf</span>
                   </div>
                   <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded transition-colors shadow-sm">
                     <Download size={16} /> Download
                   </button>
                </div>
             </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default DocumentDetail;
