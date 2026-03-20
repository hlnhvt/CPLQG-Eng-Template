import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Calendar, ArrowLeft, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';

const LegalReformNewsDetail = () => {
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
           <Link to="/legal-reform-news" className="hover:text-blue-600 transition-colors">Legal Reform News</Link>
           <ChevronRight size={14} className="mx-2 shrink-0" />
           <span className="text-gray-800 font-medium">Landmark changes in the revised Investment Law...</span>
        </div>
      </div>

      {/* Article Cover */}
      <div className="w-full bg-gray-900 border-b border-gray-300">
         <div className="max-w-[1000px] mx-auto aspect-[16/6] md:aspect-[21/9] relative overflow-hidden bg-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=1200" 
              alt="Cover" 
              className="w-full h-full object-cover opacity-60"
            />
         </div>
      </div>

      <main className="flex-grow max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
         
         <div className="mb-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 -mt-20 relative z-10">
            <Link to="/legal-reform-news" className="inline-flex items-center gap-2 text-gray-500 font-medium hover:text-blue-600 transition-colors text-sm mb-6">
               <ArrowLeft size={16} /> Back to List
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
               Landmark changes in the revised Investment Law: Opening doors for High-Tech FDI
            </h1>
            
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-100">
               <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">Ministry of Planning and Investment</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5 mt-1"><Calendar size={12} /> Published: 12/03/2026</span>
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
               <p className="lead text-xl text-gray-600 font-medium italic mb-8 border-l-4 border-amber-500 pl-6">
                  The National Assembly has officially passed the amended Investment Law, introducing unprecedented incentives for semiconductor and clean energy projects, aiming to position Vietnam as the new tech hub of Southeast Asia.
               </p>
               
               <h2 className="text-2xl font-bold text-[#1e3a8a] mt-8 mb-4">Strategic shifts towards high-tech industries</h2>
               <p>
                  Recognizing the urgent need to transition from labor-intensive manufacturing to a knowledge-based economy, the revised law explicitly categorizes semiconductor manufacturing, artificial intelligence research, and advanced renewable energy infrastructure as "special investment incentive sectors."
               </p>
               <p>
                  Projects meeting the capital threshold of $500 million in these sectors will automatically qualify for specialized support packages, which include fast-tracked land clearance and tailored corporate tax brackets over an extended 15-year period.
               </p>
               
               <h2 className="text-2xl font-bold text-[#1e3a8a] mt-8 mb-4">Streamlining administrative procedures</h2>
               <p>
                  One of the most praised reforms is the establishment of the "One-Stop-Shop" digital portal for foreign direct investment (FDI). Investors can now submit all required documentation online, and cross-ministerial appraisals are mandated to be completed within 30 working days.
               </p>
               <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Automatic Approvals:</strong> Certain non-conditional business lines will benefit from a "register-and-run" mechanism.</li>
                  <li><strong>Decentralization:</strong> Provincial authorities are given more autonomy to approve mid-sized tech projects without requesting Prime Minister confirmation.</li>
                  <li><strong>Post-audit transition:</strong> The government is shifting from pre-licensing heavy inspection to post-operational audits to ensure swift market entry.</li>
               </ul>

               <h2 className="text-2xl font-bold text-[#1e3a8a] mt-8 mb-4">Impact on the global supply chain</h2>
               <p>
                  Experts predict that these sweeping reforms will fortify Vietnam's position amidst the global supply chain restructuring. By offering a transparent, stable, and highly incentivized legal framework, Vietnam is ready to welcome the next wave of "eagle" investors in the tech sector.
               </p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
               <Link to="#" className="group flex flex-col gap-3">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related 1" />
                  </div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Digital transformation in judicial record issuance</h4>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> 20/02/2026</span>
               </Link>
               <Link to="#" className="group flex flex-col gap-3">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related 2" />
                  </div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">New tax relief measures for SMEs approved</h4>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> 15/02/2026</span>
               </Link>
               <Link to="#" className="group flex flex-col gap-3">
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200">
                     <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Related 3" />
                  </div>
                  <h4 className="font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">Strengthening intellectual property enforcement</h4>
                  <span className="text-xs text-gray-500 flex items-center gap-1.5"><Calendar size={12} /> 10/02/2026</span>
               </Link>
            </div>
         </div>

      </main>

      <Footer />
    </div>
  );
};

export default LegalReformNewsDetail;
