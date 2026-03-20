import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Calendar, ArrowLeft, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';

const PolicyHighlightDetail = () => {
  const { id } = useParams();

  const handleCopyLink = () => {
     alert("Link copied!");
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      
      {/* Breadcrumb Info */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
           <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
           <ChevronRight size={14} className="mx-2 shrink-0" />
           <Link to="/policy-highlights" className="hover:text-blue-600 transition-colors">Policy Highlights</Link>
           <ChevronRight size={14} className="mx-2 shrink-0" />
           <span className="text-gray-800 font-medium">Application of Artificial Intelligence...</span>
        </div>
      </div>

      {/* Article Cover */}
      <div className="w-full bg-gray-900 border-b border-gray-300">
         <div className="max-w-[1000px] mx-auto aspect-[16/6] md:aspect-[21/9] relative overflow-hidden bg-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200" 
              alt="Cover" 
              className="w-full h-full object-cover opacity-60"
            />
         </div>
      </div>

      <main className="flex-grow max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
         
         <div className="mb-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 -mt-20 relative z-10">
            <Link to="/policy-highlights" className="inline-flex items-center gap-2 text-gray-500 font-medium hover:text-blue-600 transition-colors text-sm mb-6">
               <ArrowLeft size={16} /> Back to List
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
               Application of Artificial Intelligence in Judicial Activities: International Experience and Recommendations for Vietnam
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100">
               <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">Assoc.Prof.Dr. Nguyen Van A</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5 mt-1"><Calendar size={12} /> Published: 15/03/2026</span>
               </div>
               
               <div className="flex items-center gap-2">
                 <button className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                    <Facebook size={16} />
                 </button>
                 <button className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-sky-500 hover:bg-sky-50 transition-colors">
                    <Twitter size={16} />
                 </button>
                 <button className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-50 transition-colors">
                    <Linkedin size={16} />
                 </button>
                 <button onClick={handleCopyLink} className="w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors" title="Copy Link">
                    <Copy size={16} />
                 </button>
               </div>
            </div>

             <div className="prose prose-lg max-w-none text-gray-800 mt-8 leading-loose">
               <p className="lead text-xl text-gray-600 font-medium italic mb-8 border-l-4 border-blue-600 pl-6">
                  Artificial Intelligence (AI) is penetrating profoundly into every aspect of life, and the judicial sector is no exception. In developed jurisdictions, AI participates in automating legal document drafting, analyzing data to assist judicial decision-making, and even predicting case outcomes. This article introduces models currently applied and outlines an applicable path for Vietnam.
               </p>
               
               <h2 className="text-2xl font-bold text-[#1e3a8a] mt-8 mb-4">1. Overview of AI in the Judiciary globally</h2>
               <p>
                  In the United States, applications like COMPAS are used to assess the risk of recidivism of offenders. In China, "Smart Courts" are strongly encouraged where AI assists judges in comparing precedents, checking litigation files, and generating draft judgments to optimize the procedural timeframe. In Europe, despite a high emphasis on privacy, algorithmic tools are still employed for judicial administrative operations.
               </p>
               
               <h2 className="text-2xl font-bold text-[#1e3a8a] mt-8 mb-4">2. Current Status and Challenges in Vietnam</h2>
               <p>
                  Vietnam is in the early stages of digital transformation for courts. E-court software and online precedent search engines have gradually been deployed, but there lacks a profound AI application capable of logical reasoning or decision support.
               </p>
               <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Principal Challenges:</h3>
               <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Data Infrastructure:</strong> Court records and historical judgments are not fully digitized, lacking standardized data for AI training.</li>
                  <li><strong>Legal Framework:</strong> There is no specific legal principle regulating the legality and evidential value of outputs generated by AI.</li>
                  <li><strong>Ethical Risks:</strong> Problems related to "algorithmic bias" or the "black box" nature of AI decisions could harm the fundamental principles of fairness in adjudication.</li>
               </ul>

               <h2 className="text-2xl font-bold text-[#1e3a8a] mt-8 mb-4">3. Legal Roadmap Recommendations</h2>
               <p>
                  To effectively integrate technology into litigation without compromising judicial fairness, Vietnam should take methodical steps:
               </p>
               <ol className="list-decimal pl-5 space-y-2">
                  <li>Establish a rigorous standard framework for judicial AI tools, demanding transparency in algorithms.</li>
                  <li>In the short term, apply AI strictly to administrative assistant tasks: spelling checks, document categorization, and precedent recommendations.</li>
                  <li>Enact regulations ensuring that the final judgment and ultimate responsibility rest strictly with the Judge, affirming AI only acts as a supplementary tool.</li>
               </ol>
            </div>
         </div>

         {/* Share at bottom */}
         <div className="flex flex-wrap items-center justify-center gap-4 py-8 mb-4">
            <span className="font-bold text-gray-700">Share this article:</span>
            <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-sm">
               <Facebook size={18} />
            </button>
            <button className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors shadow-sm">
               <Twitter size={18} />
            </button>
            <button className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors shadow-sm">
               <Linkedin size={18} />
            </button>
         </div>

         {/* Related Articles */}
         <div className="bg-white border text-center border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <Link to="#" className="group flex flex-col gap-3">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related 1" />
                  </div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Civil liability for non-contractual damages caused by AI</h4>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> 20/02/2026</span>
               </Link>
               <Link to="#" className="group flex flex-col gap-3">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related 2" />
                  </div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Conflict of laws in cross-border e-commerce transactions</h4>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> 15/02/2026</span>
               </Link>
               <Link to="#" className="group flex flex-col gap-3">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related 3" />
                  </div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Protecting the rights of workers on technological platforms</h4>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> 10/02/2026</span>
               </Link>
            </div>
         </div>

      </main>

      <Footer />
    </div>
  );
};

export default PolicyHighlightDetail;
