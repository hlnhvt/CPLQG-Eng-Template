import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, FileText, Download, CheckCircle2, Clock, ShieldCheck, Mail, Share2, Printer, Eye } from 'lucide-react';

const DocumentContractDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock document data
  const doc = {
    id: id,
    title: 'Non-Disclosure Agreement (NDA) - Dual Language',
    category: 'Standard Contracts',
    date: '10/03/2026',
    downloads: 1250,
    size: '45 KB',
    fileType: 'DOCX',
    language: 'English, Vietnamese (Bilingual)',
    pages: 5,
    lastReviewed: 'Ministry of Justice - Jan 2026',
    description: `A comprehensive Non-Disclosure Agreement (NDA) template tailored for foreign investors entering the Vietnamese market. This bilingual document (English and Vietnamese) ensures mutual understanding and legal enforceability under Vietnam's Civil Code and Intellectual Property laws.`,
    features: [
       'Mutual or one-way disclosure options included.',
       'Governing law specified as Vietnamese Law.',
       'Dispute resolution via commercial arbitration (VIAC) or local courts.',
       'Clear definition of confidential information and exceptions.'
    ],
    previewImage: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&q=80&w=800'
  };

  const relatedDocs = [
    { id: 2, title: 'Labor Contract Template for Foreign Nationals', type: 'DOCX' },
    { id: 5, title: 'Commercial Lease Agreement Template', type: 'DOCX' },
    { id: 7, title: 'Memorandum of Understanding (MoU)', type: 'PDF' }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col lg:flex-row gap-10">
         
         {/* Main Content (Preview & Info) */}
         <div className="w-full lg:w-2/3 flex flex-col gap-8">
            
            <button 
              onClick={() => navigate('/corporate-support/documents')}
              className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm font-bold w-fit mb-2"
            >
              <ArrowLeft size={16} />
              Back to Documents
            </button>

            {/* Title & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
               <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                     <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                        {doc.category}
                     </span>
                     <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                        <ShieldCheck size={14} /> Verified Legal Template
                     </span>
                  </div>
                  <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
                     {doc.title}
                  </h1>
               </div>
               
               {/* Fixed Mobile/Desktop Download Button */}
               <div className="shrink-0 w-full md:w-auto flex flex-col gap-3">
                  <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                     <Download size={20} /> Download {doc.fileType}
                  </button>
                  <p className="text-xs text-center text-gray-500 font-medium">Free • {doc.size}</p>
               </div>
            </div>

            {/* Document Preview Area (Mock) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden relative">
               <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                     <Eye size={18} className="text-blue-600" /> Document Preview
                  </div>
                  <div className="flex items-center gap-3">
                     <button className="text-gray-500 hover:text-gray-900 transition-colors"><Printer size={18} /></button>
                     <button className="text-gray-500 hover:text-gray-900 transition-colors"><Share2 size={18} /></button>
                  </div>
               </div>
               
               <div className="relative h-[400px] md:h-[600px] bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Decorative blurred background */}
                  <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=800')] opacity-20 blur-sm bg-cover"></div>
                  
                  {/* Mock Paper */}
                  <div className="relative z-10 w-3/4 max-w-[500px] h-[90%] bg-white shadow-xl rotate-[1deg] p-8 overflow-hidden pointer-events-none border border-gray-300">
                     <div className="w-full h-4 bg-gray-200 rounded mb-6 w-1/2 mx-auto"></div>
                     <div className="w-full h-2 bg-gray-100 rounded mb-3"></div>
                     <div className="w-full h-2 bg-gray-100 rounded mb-3"></div>
                     <div className="w-full h-2 bg-gray-100 rounded mb-8 w-5/6"></div>

                     <div className="w-full h-3 bg-gray-200 rounded mb-4 w-1/3"></div>
                     <div className="w-full h-2 bg-gray-100 rounded mb-3"></div>
                     <div className="w-full h-2 bg-gray-100 rounded mb-3"></div>
                     <div className="w-full h-2 bg-gray-100 rounded mb-3"></div>
                     <div className="w-full h-2 bg-gray-100 rounded mb-3 w-4/5"></div>
                     
                     <div className="absolute bottom-8 right-8 w-20 h-20 border-4 border-red-500/20 rounded-full flex items-center justify-center rotate-[-15deg]">
                        <span className="text-red-500/30 font-bold text-xs uppercase tracking-widest">Sample</span>
                     </div>
                  </div>

                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end justify-center pb-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                     <span className="text-white text-sm font-bold bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-sm">
                        Preview pages 1 of {doc.pages}
                     </span>
                  </div>
               </div>
            </div>

            {/* Description & Features */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
               <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">Document Details</h3>
               <p className="text-gray-700 leading-relaxed mb-8">
                  {doc.description}
               </p>

               <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-600" /> Key Features</h4>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doc.features.map((feat, i) => (
                     <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="bg-blue-50 p-1 rounded mt-0.5 shrink-0"><CheckCircle2 size={12} className="text-blue-600"/></div>
                        <span>{feat}</span>
                     </li>
                  ))}
               </ul>
            </div>

         </div>

         {/* Right Sidebar */}
         <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Meta Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
               <h3 className="font-bold text-gray-900 text-lg mb-6 border-b border-gray-100 pb-3">Metadata</h3>
               
               <div className="space-y-4">
                  <div className="flex items-start justify-between border-b border-gray-50 pb-3">
                     <span className="text-xs uppercase font-bold text-gray-400">Language</span>
                     <span className="text-sm font-semibold text-gray-800 text-right">{doc.language}</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-gray-50 pb-3">
                     <span className="text-xs uppercase font-bold text-gray-400">Format</span>
                     <span className="text-sm font-semibold text-gray-800 text-right">{doc.fileType}</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-gray-50 pb-3">
                     <span className="text-xs uppercase font-bold text-gray-400">Pages</span>
                     <span className="text-sm font-semibold text-gray-800 text-right">{doc.pages} Pages</span>
                  </div>
                  <div className="flex items-start justify-between border-b border-gray-50 pb-3">
                     <span className="text-xs uppercase font-bold text-gray-400">Last Reviewed</span>
                     <span className="text-sm font-semibold text-gray-800 text-right max-w-[150px] leading-tight">{doc.lastReviewed}</span>
                  </div>
                  <div className="flex items-start justify-between pb-1">
                     <span className="text-xs uppercase font-bold text-gray-400">Downloads</span>
                     <span className="text-sm font-semibold text-gray-800 text-right flex items-center gap-1"><Download size={14} className="text-amber-500" /> {doc.downloads.toLocaleString()}</span>
                  </div>
               </div>
            </div>

            {/* Need Customization Card */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
               <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck size={24} />
               </div>
               <h3 className="font-bold text-gray-900 mb-2">Need Customization?</h3>
               <p className="text-xs text-gray-600 mb-6 px-4">Our legal experts can tailor this standard document specifically to your business requirements.</p>
               <button onClick={() => navigate('/contact')} className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-amber-300 font-bold py-2.5 rounded-lg text-sm transition-colors shadow-sm flex items-center justify-center gap-2">
                  <Mail size={16} /> Contact Legal Team
               </button>
            </div>

            {/* Related Documents */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
               <h3 className="font-bold text-gray-900 text-lg mb-4 border-b border-gray-100 pb-3">Related Templates</h3>
               <div className="flex flex-col gap-4">
                  {relatedDocs.map(rel => (
                     <Link key={rel.id} to={`/corporate-support/documents/${rel.id}`} className="group flex items-start gap-3">
                        <div className={`p-2 rounded-lg shrink-0 border ${rel.type === 'DOCX' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-red-50 text-red-600 border-red-200'}`}>
                           <FileText size={16} />
                        </div>
                        <div>
                           <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight mb-1 line-clamp-2">
                              {rel.title}
                           </h4>
                           <span className="text-[10px] uppercase font-bold text-gray-500">{rel.type}</span>
                        </div>
                     </Link>
                  ))}
               </div>
               <Link to="/corporate-support/documents" className="mt-6 block text-center text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-all">
                  Browse All Documents
               </Link>
            </div>

         </div>

      </main>

      <Footer />
    </div>
  );
};

export default DocumentContractDetail;
