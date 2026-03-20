import React from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, FileText, Download, Target, Calendar, Server, FileCheck, Layers } from 'lucide-react';

const LegalAidDocumentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Try to determine which tab we came from, default to Individuals if not specified
  const isBusiness = location.state?.fromTab === 'Businesses';

  const doc = {
    id: id,
    title: 'Rights Handbook for Foreigners in Vietnam',
    type: 'Handbook',
    docNo: 'GD-MOJ-2026',
    issuedDate: '20/02/2026',
    effectiveDate: '01/03/2026',
    authority: 'Ministry of Justice',
    category: 'Rights Handbook',
    audience: isBusiness ? 'Foreign Enterprises (FDI)' : 'Foreign Individuals',
    summary: 'This official handbook outlines the fundamental legal rights, obligations, and available legal aid services for foreign nationals living and working in Vietnam. It covers essential topics including civil status, employment rights, property leasing, and procedures for seeking emergency legal protection.',
    attachments: [
       { name: 'Rights_Handbook_EN_2026.pdf', type: 'PDF', size: '2.4 MB' },
       { name: 'Emergency_Contacts_Appendix.docx', type: 'DOCX', size: '120 KB' }
    ],
    related: [
       { id: 5, title: 'Circular on Visa Processing and Exemption', type: 'Circular', date: '12/10/2024' },
       { id: 6, title: 'Guide to Marriage Registration between Vietnamese and Foreigners', type: 'Guide', date: '05/08/2023' }
    ]
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Meta Header */}
      <div className="bg-[#1e3a8a] py-6 relative">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-4">

            <button
              onClick={() => navigate('/legal-aid/documents')}
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm font-bold w-fit"
            >
              <ArrowLeft size={16} />
              Back to Documents
            </button>
         </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
         
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Column (Content & Meta) */}
            <div className="w-full lg:w-2/3 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col gap-8 relative overflow-hidden">
               {/* Decorative background shape */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10 opacity-50"></div>

               <div>
                  <span className={`inline-block text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-4 ${
                     doc.type === 'Law' ? 'bg-red-100 text-red-700' : 
                     doc.type === 'Decree' ? 'bg-purple-100 text-purple-700' :
                     doc.type === 'Handbook' || doc.type === 'Guide' ? 'bg-blue-100 text-blue-700' :
                     'bg-green-100 text-green-700'
                  }`}>
                     {doc.type}
                  </span>
                  
                  <div className="flex justify-between items-start gap-4">
                     <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1e3a8a] leading-tight mb-8">
                        {doc.title}
                     </h1>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 bg-gray-50/50 p-6 rounded-xl border border-gray-100 mb-8">
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-gray-500 flex items-center gap-1.5"><FileCheck size={12}/> Document No.</span>
                        <span className="font-semibold text-gray-900">{doc.docNo}</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-gray-500 flex items-center gap-1.5"><Server size={12}/> Issuing Authority</span>
                        <span className="font-semibold text-gray-900">{doc.authority}</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-gray-500 flex items-center gap-1.5"><Calendar size={12}/> Issued Date</span>
                        <span className="font-semibold text-gray-900">{doc.issuedDate}</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-gray-500 flex items-center gap-1.5"><Calendar size={12}/> Effective Date</span>
                        <span className="font-semibold text-gray-900">{doc.effectiveDate}</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-gray-500 flex items-center gap-1.5"><Layers size={12}/> Category</span>
                        <span className="font-semibold text-gray-900">{doc.category}</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase font-bold text-gray-500 flex items-center gap-1.5"><Target size={12}/> Target Audience</span>
                        <span className="font-semibold text-gray-900">{doc.audience}</span>
                     </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">Summary</h3>
                  <div className="prose prose-blue text-gray-700 leading-relaxed max-w-none">
                     <p>{doc.summary}</p>
                     <p>This document is intended strictly for informational purposes. For official translation and legal reliance, please refer to the original Vietnamese text promulgated by the {doc.authority}.</p>
                  </div>
               </div>
            </div>

            {/* Right Column (Attachments & Related) */}
            <div className="w-full lg:w-1/3 bg-gray-50 p-8 flex flex-col gap-8">
               
               {/* Print/Download Main Button */}
               <div className="w-full">
                  <button className="w-full bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md transform hover:-translate-y-0.5">
                     <Download size={20} /> Download Full Archive
                  </button>
               </div>

               {/* Attachments List */}
               <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">Attachments</h3>
                  {doc.attachments.map((file, i) => (
                     <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-blue-300 hover:shadow-sm transition-all group">
                        <div className="flex items-center gap-3 overflow-hidden">
                           <div className={`p-2 rounded-lg shrink-0 border ${file.type === 'DOCX' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-red-50 text-red-600 border-red-200'}`}>
                              <FileText size={18} />
                           </div>
                           <div className="flex flex-col truncate">
                              <span className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors" title={file.name}>{file.name}</span>
                              <span className="text-[10px] uppercase font-bold text-gray-500">{file.size}</span>
                           </div>
                        </div>
                        <button className="text-gray-400 hover:text-blue-600 p-2 shrink-0 transition-colors">
                           <Download size={18} />
                        </button>
                     </div>
                  ))}
               </div>

               {/* Related Documents */}
               <div className="flex flex-col gap-4 mt-4">
                  <h3 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">Related Documents</h3>
                  <div className="flex flex-col gap-3">
                     {doc.related.map((rel, i) => (
                        <Link key={i} to={`/legal-aid/documents/${rel.id}`} className="group flex flex-col gap-1.5 hover:bg-white p-3 -mx-3 rounded-xl transition-colors">
                           <div className="flex items-center gap-2">
                              <span className="text-[10px] font-extrabold text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded uppercase tracking-wider">{rel.type}</span>
                              <span className="text-[10px] font-bold text-gray-400">{rel.date}</span>
                           </div>
                           <h4 className="text-sm font-bold text-gray-800 group-hover:text-amber-600 transition-colors leading-tight line-clamp-2">
                              {rel.title}
                           </h4>
                        </Link>
                     ))}
                  </div>
               </div>

            </div>
         </div>

      </main>

      <Footer />
    </div>
  );
};

export default LegalAidDocumentDetail;
