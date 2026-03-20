import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Calendar, User, Clock, ArrowLeft, FileText, Share2, Printer, Bookmark } from 'lucide-react';

const PolicySummaryDetail = () => {
  const { id } = useParams();

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      {/* Breadcrumb Info */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center text-sm text-gray-500 overflow-x-auto whitespace-nowrap">
           <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
           <ChevronRight size={14} className="mx-2 shrink-0" />
           <Link to="/policy-summaries" className="hover:text-blue-600 transition-colors">Important Policy Summaries</Link>
           <ChevronRight size={14} className="mx-2 shrink-0" />
           <span className="text-gray-800 font-medium">Applying Artificial Intelligence in judicial activities...</span>
        </div>
      </div>

      <main className="flex-grow max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
         
         {/* Article Header */}
         <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded mb-4 uppercase tracking-wider">
               Criminal Law
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight mb-6 mt-1">
               Applying Artificial Intelligence in judicial activities: International experiences and recommendations for Vietnam
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200">
               <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                 <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                      <User size={16} className="text-slate-500" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Assoc.Prof.Dr. Nguyen Van A</div>
                      <div className="text-xs">Legal Science Institute</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-1.5">
                    <Calendar size={16} /> 
                    <span>March 15, 2026</span>
                 </div>
                 <div className="flex items-center gap-1.5">
                    <Clock size={16} /> 
                    <span>15 min read</span>
                 </div>
               </div>
               
               <div className="flex items-center gap-2">
                 <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors tooltip relative group">
                    <Share2 size={16} />
                 </button>
                 <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors tooltip relative group">
                    <Bookmark size={16} />
                 </button>
                 <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors tooltip relative group">
                    <Printer size={16} />
                 </button>
               </div>
            </div>
         </div>

         {/* Article Body */}
         <article className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed">
            
            <p className="lead font-medium text-xl text-gray-600 mb-8">
              The article analyzes the practical application of AI in advanced judicial systems such as the US, China, and EU, thereby proposing an appropriate roadmap and legal framework to gradually apply this technology to litigation activities in Vietnam.
            </p>

            <img 
               src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200&h=600" 
               alt="Gavel and books" 
               className="w-full rounded-xl mb-8 shadow-sm"
            />

            <h2>1. The Context of Digital Transformation in the Judiciary</h2>
            <p>
              In the context of the Industrial Revolution 4.0, integrating digital technology, specifically Artificial Intelligence (AI), into government operations—and particularly the judiciary—is becoming a global trend. AI promises to help reduce the workload for judges, speed up trial times, and limit subjective errors in legal assessment.
            </p>
            <p>
              According to a report by the Ministry of Justice, court cases have increased by an average of 8% per year over the last 5 years. This massive workload requires courts to find new methods to process documents, extract evidence, and even advise on sentencing accurately and effectively.
            </p>

            <h2>2. International Experiences with Judicial AI</h2>
            <ul>
              <li><strong>The United States:</strong> Utilizes risk assessment algorithms like COMPAS to help judges make informed decisions on granting bail and sentencing. However, there are ongoing debates regarding racial bias embedded within these algorithms.</li>
              <li><strong>China:</strong> The "Smart Court" system fully integrates AI into document review and evidence cross-checking, significantly speeding up procedures. AI can alert judges if evidence contradicts testimony.</li>
              <li><strong>European Union (EU):</strong> Focuses intensely on ethical frameworks. The AI Act emphasizes that AI used in justice and democratic processes must be classified as "high risk," requiring strict auditing and human oversight.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
               <h4 className="font-bold text-blue-900 mt-0 mb-2">Key Policy Shift</h4>
               <p className="text-blue-800 m-0 text-base">
                 Resolution No. 27-NQ/TW has identified the establishment of an "e-Court" as a central task in judicial reform to 2030, marking the official policy opening for piloting AI technologies in case management and judicial assistance in Vietnam.
               </p>
            </div>

            <h2>3. Recommendations for Vietnam</h2>
            <p>
              Applying AI in the Vietnamese judiciary requires a cautious, phased approach to ensure legal integrity, fairness, and human rights.
            </p>
            <ol>
              <li>
                <strong>Phase 1 (2025-2027): Automation of administrative tasks</strong>
                <p>Implement AI to digitize case files, automatically extract entity names, dates, and related statutes to speed up file processing.</p>
              </li>
              <li>
                <strong>Phase 2 (2027-2030): Intelligent judicial assistance</strong>
                <p>Deploy Virtual Assistant systems for judges that can suggest similar precedents and highlight contradictory evidence within large case files.</p>
              </li>
              <li>
                <strong>Phase 3 (Post 2030): Advanced Predictive Analysis</strong>
                <p>Use AI for predictive analysis on sentencing trends, but strictly maintain the principle that <i>AI only advises; the human judge makes the final binding decision</i>.</p>
              </li>
            </ol>

            <h3>Legal Framework Adjustments Required</h3>
            <p>
              To implement this roadmap, the National Assembly must consider supplementing the Procedural Codes (Criminal, Civil, and Administrative) to recognize the legal validity of e-documents processed by AI and to clearly define liability if an AI system generates flawed advice leading to a wrongful conviction.
            </p>
            
            <hr className="my-10" />

         </article>

         {/* Link to Source Document */}
         <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center text-blue-600 shrink-0">
                  <FileText size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-900 mb-1">Related Legal Document</h4>
                 <p className="text-sm text-gray-600">Resolution No. 27-NQ/TW on continuing to build and perfect the socialist rule-of-law State of Vietnam</p>
               </div>
            </div>
            <Link to="/legal-document/27" className="shrink-0 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded font-medium transition-colors text-sm whitespace-nowrap text-center">
               View full document
            </Link>
         </div>

         {/* Navigation Bottom */}
         <div className="border-t border-gray-200 mt-12 py-6">
            <Link to="/policy-summaries" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors">
               <ArrowLeft size={16} /> Back to Important Policy Summaries
            </Link>
         </div>

      </main>

      <Footer />
    </div>
  );
};

export default PolicySummaryDetail;
