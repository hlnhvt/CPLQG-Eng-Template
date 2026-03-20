import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, MessageCircleQuestion, Mail, Plus, Minus, ArrowRight } from 'lucide-react';

const FAQForInternationalEnterprises = () => {
  const [activeCategory, setActiveCategory] = useState("Investment & Setup");
  const [openItems, setOpenItems] = useState({ 0: true });

  const categories = [
    "Investment & Setup",
    "Tax & Accounting",
    "Employment & Visas",
    "Contracts & Dispute Resolution", 
    "Intellectual Property"
  ];

  const faqs = {
    "Investment & Setup": [
      {
         question: "What are the common forms of foreign investment in Vietnam?",
         answer: "Foreign investors typically invest in Vietnam through establishing a new corporate entity (most commonly a Limited Liability Company or Joint Stock Company), contributing capital to an existing Vietnamese enterprise, establishing a Branch or Representative Office, or through Public-Private Partnership (PPP) contracts."
      },
      {
         question: "How long does it take to set up a 100% Foreign-Owned Enterprise (FOE)?",
         answer: "Generally, the process takes between 3 to 6 weeks. It involves two main steps: obtaining an Investment Registration Certificate (IRC) from the Department of Planning and Investment (approx. 15 working days), followed by obtaining an Enterprise Registration Certificate (ERC) (approx. 3-5 working days)."
      },
      {
         question: "Are there any restricted sectors for foreign investors?",
         answer: "Yes. Vietnam maintains a negative list for market access. Certain sectors are completely closed to foreign investment (e.g., traditional security services, news broadcasting), while others have conditional access requiring joint ventures, foreign ownership limits, or specific sub-licenses (e.g., banking, logistics, retail)."
      }
    ],
    "Tax & Accounting": [
      {
         question: "What is the standard Corporate Income Tax (CIT) rate in Vietnam?",
         answer: "The standard CIT rate in Vietnam is 20%. However, preferential tax rates (10%, 15%, or 17%) and tax holidays (up to 4 years of tax exemption and 9 years of 50% reduction) are available for investment projects in encouraged sectors or socio-economically disadvantaged regions."
      },
      {
         question: "Are there profit repatriation restrictions?",
         answer: "Foreign investors are allowed to repatriate profits abroad annually or upon termination of the investment, provided they have fulfilled all financial obligations to the Vietnamese State and submitted audited financial statements and tax finalization declarations."
      }
    ],
    "Employment & Visas": [
      {
         question: "Do foreign employees require a work permit?",
         answer: "Yes, generally all foreign nationals working in Vietnam require a work permit. However, there are exemptions (e.g., expats who are capital contributors of an LLC with capital contribution value above 3 billion VND). A foreign worker without a valid work permit (or exemption certificate) may be deported."
      },
      {
         question: "What is the probation period in Vietnam?",
         answer: "Under the Labor Code, probation periods are limited to 6 days for unskilled labor, 30 days for positions requiring professional degrees, 60 days for positions requiring college/university degrees or higher, and 180 days for enterprise executive positions."
      }
    ],
    "Contracts & Dispute Resolution": [
       {
          question: "Can business contracts be governed by foreign law?",
          answer: "Yes, parties to a commercial contract with a foreign element may agree to choose foreign law as the governing law, provided that the application of such foreign law does not contradict the fundamental principles of Vietnamese law."
       }
    ],
    "Intellectual Property": [
       {
          question: "Is Vietnam a member of international IP treaties?",
          answer: "Yes, Vietnam is a signatory to major international intellectual property treaties, including the Paris Convention, the Berne Convention, the Madrid Protocol for Trademark Registration, and the Patent Cooperation Treaty (PCT)."
       }
    ]
  };

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] pt-16 pb-24 relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

            <div className="flex justify-center mb-4">
              <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
               Frequently Asked Questions
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-10">
               Find quick answers to common legal questions regarding foreign investment, employment, tax, and corporate compliance in Vietnam.
            </p>

            <div className="w-full max-w-2xl relative">
                <input 
                  type="text" 
                  placeholder="Search FAQs... (e.g. 'work permit', 'tax rate')" 
                  className="w-full pl-6 pr-14 py-4 rounded-xl shadow-lg border-2 border-transparent focus:border-amber-400 focus:outline-none text-gray-900 transition-all font-medium placeholder-gray-400"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-colors">
                   <Search size={20} />
                </button>
            </div>

         </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col md:flex-row gap-8 -mt-10 relative z-20">
         
         {/* Categories Sidebar */}
         <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-8">
               <div className="p-5 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                  <MessageCircleQuestion className="text-blue-600" size={20} />
                  <h2 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Categories</h2>
               </div>
               <ul className="flex flex-col py-2">
                  {categories.map((cat) => (
                     <li key={cat}>
                        <button 
                           onClick={() => {
                              setActiveCategory(cat);
                              setOpenItems({ 0: true }); // Open first item by default on category change
                           }}
                           className={`w-full text-left px-6 py-3.5 text-sm font-semibold transition-all border-l-4 ${activeCategory === cat ? 'bg-blue-50 text-blue-700 border-blue-600 shadow-inner' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                        >
                           {cat}
                        </button>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         {/* FAQ Accordion */}
         <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
               <h2 className="text-2xl font-extrabold text-gray-900 mb-8 border-b border-gray-100 pb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">Q</span>
                  {activeCategory}
               </h2>

               <div className="space-y-4">
                  {faqs[activeCategory] ? (
                     faqs[activeCategory].map((faq, index) => (
                        <div 
                           key={index} 
                           className={`border rounded-xl overflow-hidden transition-all duration-300 ${openItems[index] ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200 hover:border-blue-300 bg-white'}`}
                        >
                           <button 
                              onClick={() => toggleItem(index)}
                              className="w-full px-6 py-5 flex items-start justify-between text-left focus:outline-none"
                           >
                              <h3 className={`font-bold pr-8 leading-tight ${openItems[index] ? 'text-blue-700 text-lg' : 'text-gray-900 text-base'}`}>
                                 {faq.question}
                              </h3>
                              <div className={`mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${openItems[index] ? 'bg-blue-200 text-blue-800' : 'bg-gray-100 text-gray-500'}`}>
                                 {openItems[index] ? <Minus size={14} /> : <Plus size={14} />}
                              </div>
                           </button>
                           
                           <div 
                              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openItems[index] ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                           >
                              <div className="w-12 h-1 bg-amber-400 rounded-full mb-4"></div>
                              <p className="text-gray-700 leading-relaxed text-[15px]">
                                 {faq.answer}
                              </p>
                              <div className="mt-4 pt-4 border-t border-gray-200/50 flex">
                                 <button className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors">
                                    Related Guidelines <ArrowRight size={14} />
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))
                  ) : (
                     <p className="text-gray-500">No FAQs available for this category yet.</p>
                  )}
               </div>

               {/* Didn't find answer Box */}
               <div className="mt-12 bg-gradient-to-br from-[#1e3a8a] to-blue-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-bl-full -z-10 opacity-20"></div>
                  
                  <div className="relative z-10 flex-grow text-center md:text-left">
                     <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                     <p className="text-blue-100 text-sm">Our legal consulting team is ready to analyze your specific situation and provide detailed guidance.</p>
                  </div>
                  
                  <button className="relative z-10 shrink-0 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2">
                     <Mail size={18} /> Contact Support
                  </button>
               </div>
            </div>
         </div>

      </main>

      <Footer />
    </div>
  );
};

export default FAQForInternationalEnterprises;
