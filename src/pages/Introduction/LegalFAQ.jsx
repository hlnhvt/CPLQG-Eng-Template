import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, ChevronDown, FileText, Briefcase, Globe, Settings, HelpCircle, X, MessageSquareQuote } from 'lucide-react';

const LegalFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');
  const [openItems, setOpenItems] = useState({});

  const categories = [
    { id: 'General', label: 'General Information', icon: HelpCircle, count: 5, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 'Legal Documents', label: 'Legal Documents', icon: FileText, count: 8, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'Investment & Business', label: 'Investment & Business', icon: Briefcase, count: 6, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'For Foreign Organizations', label: 'Foreign Organizations', icon: Globe, count: 4, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { id: 'Technical Support', label: 'Technical Details', icon: Settings, count: 3, color: 'text-slate-600', bg: 'bg-slate-100' }
  ];

  const faqData = [
    {
      id: 1, category: 'General',
      question: "Is the content available in English natively?",
      answer: "<p>Yes. This portal serves as the official English version of the National Legal Portal. Our team strives to translate key legislative documents and daily news updates from the Vietnamese government.</p><p>However, please be aware that specialized local documents may only be available in Vietnamese initially.</p>"
    },
    {
      id: 2, category: 'General',
      question: "Are the English translations on this portal legally binding?",
      answer: "<p><strong>No.</strong> While every effort is made to ensure accurate and terminologically sound translations, the English versions provided on the National Legal Portal are for reference only.</p><p>In the event of any discrepancies between the English translation and the Vietnamese original, the original Vietnamese text uniformly holds legal validity in all courts and administrative procedures in the Socialist Republic of Vietnam.</p>"
    },
    {
      id: 3, category: 'Legal Documents',
      question: "How do I perform an advanced search for specific laws?",
      answer: "<ul><li>Use the global search bar located across all pages for quick lookups.</li><li>Enter precise keywords, promulgation numbers, or exact document titles.</li><li>Use the dedicated 'Search Content' page to apply robust filters by <strong>Date</strong>, <strong>Issuing Authority</strong>, and <strong>Legal Status</strong>.</li></ul>"
    },
    {
      id: 4, category: 'Legal Documents',
      question: "In what formats can I download a legal document?",
      answer: "<p>Navigate to any Document Detail page. In the upper right corner of the document reader, click the <strong>Download</strong> button. You can seamlessly select either <strong>.PDF</strong> (for official formatting preservation) or <strong>.DOCX</strong> format (for text analysis and quotation).</p>"
    },
    {
      id: 5, category: 'Legal Documents',
      question: "What exactly is a 'Decree' in the context of Vietnamese law?",
      answer: "<p>A <strong>Decree (Nghị định)</strong> is a critical legal document issued directly by the Government to implement Laws or Ordinances. It is exceptionally crucial for businesses as it typically outlines the specific administrative steps, financial penalties, or compliance details supporting a broader Law passed by the National Assembly.</p>"
    },
    {
      id: 6, category: 'Investment & Business',
      question: "How often are newly promulgated laws regarding FDI updated here?",
      answer: "<p>Laws heavily affecting Foreign Direct Investment (FDI), Corporate operations, Land ownership, and Taxation are highly prioritized by our translation team. They are generally translated and published within <strong>15 to 30 days</strong> after their official promulgation in the Vietnamese Official Gazette.</p>"
    },
    {
      id: 7, category: 'For Foreign Organizations',
      question: "Can foreign investors formally participate in Draft Law Consultations?",
      answer: "<p><strong>Yes absolutely.</strong> The Vietnamese Government highly encourages transparent public participation, including structured feedback from foreign business associations (e.g., EuroCham, AmCham), international NGOs, and individual foreign investors operating in Vietnam. You can submit your insights directly via the 'Draft Legislation Feedback' module during the 60-day consultation window.</p>"
    },
    {
      id: 8, category: 'Technical Support',
      question: "How do I contact support if I encounter a technical issue or broken link?",
      answer: "<p>Navigate to the <strong>Introduction > Contact Information</strong> page and fill out the secure contact form. Our dedicated technical support team operates during standard business hours (UTC+7) and typically responds within 48 hours to resolve access, download, or formatting issues.</p>"
    }
  ];

  // Filtering Logic
  const filteredData = faqData.filter(faq => {
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      return faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term);
    }
    return faq.category === activeCategory;
  });

  const toggleAccordion = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const highlightText = (text, term) => {
    if (!term.trim()) return text;
    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? <span key={index} className="bg-yellow-200 text-slate-900 px-1 rounded-sm border-b-2 border-yellow-400 font-semibold">{part}</span> : part
    );
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#fdfdfd] selection:bg-indigo-200">
      <Header />

      {/* CPLQG-EN-227.MH01: Hero Banner */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] border-b border-slate-800 pt-20 pb-28 px-4 relative overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="flex justify-center mb-6">
            <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Find immediate answers to common questions about Vietnamese law, our platform capabilities, and technical support.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent focus-within:border-indigo-400 transition-colors p-2">
              <div className="pl-4 pr-2">
                <Search className="text-indigo-500 w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="How can we help you today?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent py-3 md:py-4 outline-none text-lg text-slate-800 placeholder-slate-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="p-2 mr-2 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-xl transition-colors shrink-0"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10 w-full relative z-20 -mt-16">

        {/* Sidebar Categories (CPLQG-EN-227.MH02) */}
        <aside className="w-full lg:w-1/3 xl:w-1/4 shrink-0">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden sticky top-24">
            <h3 className="px-6 pt-8 pb-4 font-extrabold text-slate-800 text-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <HelpCircle size={18} strokeWidth={2.5} />
              </div>
              Categories
            </h3>

            <div className="p-3">
              <ul className="space-y-1">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.id && !searchTerm;
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          setActiveCategory(cat.id);
                          setSearchTerm('');
                        }}
                        className={`w-full text-left px-4 py-3.5 rounded-2xl flex items-center justify-between transition-all duration-300 group ${isActive ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                      >
                        <span className="flex items-center gap-3 font-semibold text-sm">
                          <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-white/10 text-white' : `${cat.bg} ${cat.color} group-hover:scale-110`}`}>
                            <cat.icon size={18} strokeWidth={2} />
                          </div>
                          {cat.label}
                        </span>
                        <span className={`text-xs px-2.5 py-1 rounded-lg font-black ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </aside>

        {/* FAQ Accordion Area (CPLQG-EN-227.MH03) */}
        <div className="w-full lg:w-2/3 xl:w-3/4 pb-20">

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 md:p-10 min-h-[500px]">

            {/* Dynamic Header */}
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                {searchTerm ? (
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
                    Results for "<span className="text-indigo-600">{searchTerm}</span>"
                  </h2>
                ) : (
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 flex items-center gap-4 tracking-tight">
                    {categories.find(c => c.id === activeCategory)?.label}
                  </h2>
                )}
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{filteredData.length} articles found</span>
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {filteredData.length > 0 ? (
                filteredData.map((faq, index) => {
                  const isOpen = openItems[faq.id];
                  return (
                    <div key={faq.id}
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-indigo-200 bg-indigo-50/30 shadow-md ring-1 ring-indigo-100' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'}`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <button
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full text-left px-6 py-5 md:py-6 flex items-start justify-between gap-6 focus:outline-none group"
                      >
                        <div className="flex-1">
                          {searchTerm && (
                            <span className="inline-block px-2 py-1 rounded bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-3 border border-slate-200">
                              {faq.category}
                            </span>
                          )}
                          <h3 className={`font-bold text-[17px] md:text-lg leading-snug transition-colors ${isOpen ? 'text-indigo-700' : 'text-slate-800 group-hover:text-indigo-600'}`}>
                            {searchTerm ? highlightText(faq.question, searchTerm) : faq.question}
                          </h3>
                        </div>
                        <div className={`mt-0.5 shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-indigo-600 text-white rotate-180 shadow-md shadow-indigo-200' : 'bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 border border-slate-200 group-hover:border-indigo-100'}`}>
                          <ChevronDown size={20} strokeWidth={2.5} />
                        </div>
                      </button>

                      {/* Expanded Body */}
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div
                            className="p-6 bg-white rounded-xl border border-indigo-100 text-slate-600 leading-relaxed font-serif prose prose-indigo max-w-none shadow-sm text-[15px] md:text-base"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          >
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                /* Empty State (CPLQG-EN-227.MH04) */
                <div className="text-center py-24 bg-slate-50/50 rounded-2xl border border-dashed border-slate-300">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-slate-200 rounded-full animate-ping opacity-20"></div>
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-slate-300 border border-slate-200 shadow-sm relative z-10">
                      <Search size={40} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-800 mb-3 tracking-tight">No results found</h3>
                  <p className="text-slate-500 mb-8 max-w-md mx-auto text-lg">We couldn't find any questions matching your search criteria. Try using different keywords.</p>
                  <button onClick={() => setSearchTerm('')} className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    Clear Search Filters
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default LegalFAQ;
