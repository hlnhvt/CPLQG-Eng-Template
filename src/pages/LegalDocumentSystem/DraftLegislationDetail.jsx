import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Calendar, ArrowLeft, Download, ExternalLink, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';

const DraftLegislationDetail = () => {
   const { id } = useParams();

   const handleCopyLink = () => {
      alert("Link copied!");
   };

   return (
      <div className="font-sans min-h-screen flex flex-col bg-slate-50">
         <Header />

         {/* Breadcrumb Info */}
         <div className="bg-white border-b border-gray-200">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
               <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
               <ChevronRight size={14} className="mx-2 shrink-0" />
               <Link to="/draft-legislation" className="hover:text-blue-600 transition-colors">Draft Legislation</Link>
               <ChevronRight size={14} className="mx-2 shrink-0" />
               <span className="text-gray-800 font-medium">Law amending and supplementing...</span>
            </div>
         </div>

         <main className="flex-grow max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">

            <div className="mb-6">
               <Link to="/draft-legislation" className="inline-flex items-center gap-2 text-gray-500 font-medium hover:text-blue-600 transition-colors text-sm mb-6">
                  <ArrowLeft size={16} /> Back to List
               </Link>

               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Law amending and supplementing a number of articles of the Law on Pharmacy
               </h1>

               {/* Status and Share */}
               <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-gray-200">
                  {/* <div className="flex items-center gap-3">
                     <span className="inline-block px-3 py-1 bg-green-100 text-green-800 border border-green-200 text-sm font-bold rounded-full">
                        Open for Comments
                     </span>
                  </div> */}

                  <div className="flex items-center gap-2">
                     <button className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                        <Facebook size={16} />
                     </button>
                     <button className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors">
                        <Twitter size={16} />
                     </button>
                     <button className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-50 transition-colors">
                        <Linkedin size={16} />
                     </button>
                     <button onClick={handleCopyLink} className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors" title="Copy Link">
                        <Copy size={16} />
                     </button>
                  </div>
               </div>
            </div>

            {/* Metadata Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white border border-gray-200 p-6 rounded-xl mb-10 shadow-sm">
               <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Issuing Authority</span>
                  <span className="text-gray-900 font-medium">Ministry of Health</span>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Document Type</span>
                  <span className="text-gray-900 font-medium">Law</span>
               </div>
               <div className="flex flex-col gap-1 mt-2 md:mt-0">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Published Date</span>
                  <span className="text-gray-900 font-medium flex items-center gap-1.5"><Calendar size={14} className="text-gray-500" /> 10/03/2026</span>
               </div>
               <div className="flex flex-col gap-1 mt-2 md:mt-0">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Comment Deadline</span>
                  <span className="text-red-600 font-bold flex items-center gap-1.5"><Calendar size={14} /> 10/05/2026</span>
               </div>
            </div>

            {/* Executive Summary */}
            <h2 className="text-2xl font-bold border-b border-gray-300 pb-3 mb-6 flex items-center gap-3">
               <span>Executive Summary</span>
               <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-bold rounded uppercase tracking-wider">EN</span>
            </h2>

            <div className="prose prose-lg max-w-none text-gray-800 mb-10 leading-relaxed">
               <p>
                  The Ministry of Health has drafted a Law amending and supplementing a number of articles of the Law on Pharmacy to address current shortcomings in the management and supply of medicines in Vietnam.
                  The draft focuses on simplifying administrative procedures for drug registration, tightening quality control over imported materials, and creating a transparent legal framework for e-commerce in the pharmaceutical sector.
               </p>

               <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Key Highlights:</h3>
               <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Streamlined Registration:</strong> Automatic extension of circulation registration certificates under certain conditions.</li>
                  <li><strong>E-commerce Pharmacy:</strong> Legalizes online selling of non-prescription drugs with strict requirements for technical infrastructure and counseling services.</li>
                  <li><strong>Supply Security:</strong> Introduces novel mechanisms to prioritize the purchase of urgently needed generic drugs.</li>
                  <li><strong>Price Management:</strong> Transitions from pre-approval of drug prices to post-audit price declaration, enhancing market competition while preventing monopolistic pricing.</li>
               </ul>
            </div>

            {/* Submit Comment */}
            {/* <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center mb-12 flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Have your say on this Draft</h3>
            <p className="text-gray-600 mb-6 max-w-lg">
               The drafting committee is actively seeking feedback from businesses, experts, and the public before the deadline on <strong className="text-red-500 font-bold">10/05/2026</strong>.
            </p>
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
               Submit Comment
            </button>
         </div> */}

            {/* Full Document Section */}
            <h2 className="text-xl font-bold border-b border-gray-300 pb-3 mb-6">Full Document (Vietnamese)</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
               <div>
                  <h4 className="font-bold text-gray-900 mb-1">Dự thảo Luật sửa đổi, bổ sung một số điều của Luật Dược</h4>
                  <p className="text-sm text-gray-600">Original Vietnamese text. Version 2.0 (Last updated: 10/03/2026)</p>
               </div>
               <div className="flex gap-3 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded font-medium transition-colors text-sm whitespace-nowrap">
                     <ExternalLink size={16} /> View Original
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 px-5 py-2.5 rounded font-medium transition-colors text-sm whitespace-nowrap">
                     <Download size={16} /> Download PDF
                  </button>
               </div>
            </div>

            {/* Related Drafts */}
            {/* <h2 className="text-xl font-bold border-b border-gray-300 pb-3 mb-6">Related Drafts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <Link to="#" className="bg-white p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">Draft Decree detailing the Law on Medical Examination and Treatment</h4>
                  <div className="flex items-center gap-3 text-xs">
                     <span className="text-gray-500">Ministry of Health</span>
                     <span className="text-blue-600 font-medium">Enacted</span>
                  </div>
               </Link>
               <Link to="#" className="bg-white p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">Draft Circular providing guidelines on bidding for drugs at public health facilities</h4>
                  <div className="flex items-center gap-3 text-xs">
                     <span className="text-gray-500">Ministry of Health</span>
                     <span className="text-green-600 font-medium">Open for Comments</span>
                  </div>
               </Link>
            </div> */}

         </main>

         <Footer />
      </div>
   );
};

export default DraftLegislationDetail;
