import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, FileText, Download, ExternalLink, Activity, ArrowRight, ChevronLeft, ChevronRight, SlidersHorizontal, Calendar, Building, BookOpen, Layers, Newspaper } from 'lucide-react';

const SearchContent = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('Investment');
  const [keyword, setKeyword] = useState('Investment');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(searchTerm);
  };

  const tabs = [
    { id: 'All', icon: Layers, count: 5 },
    { id: 'News', icon: Newspaper, count: 2 },
    { id: 'Legal Documents', icon: BookOpen, count: 3 }
  ];

  // Dummy data based on SRS description
  const newsResults = [
    { title: "Foreign Direct Investment in Vietnam increases by 8% in Q1", date: "15/05/2026", desc: "The Ministry of Planning and Investment reported a significant surge in FDI, particularly in high-tech manufacturing..." },
    { title: "New incentives for high-tech investment projects in Da Nang", date: "02/04/2026", desc: "The government has issued new guidelines to attract global tech firms, offering unprecedented tax holidays..." }
  ];

  const docResults = [
    {
      title: "Law on Investment No. 61/2020/QH14",
      date: "17/06/2020",
      status: "In Force",
      statusColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      issued: "17/06/2020",
      effective: "01/01/2021",
      type: "Law",
      authority: "National Assembly"
    },
    {
      title: "Decree No. 31/2021/ND-CP detailing and guiding the implementation of a number of articles of the Law on Investment",
      date: "26/03/2021",
      status: "In Force",
      statusColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      issued: "26/03/2021",
      effective: "26/03/2021",
      type: "Decree",
      authority: "Government"
    },
    {
      title: "Law on Investment No. 67/2014/QH13",
      date: "26/11/2014",
      status: "Expired",
      statusColor: "bg-rose-100 text-rose-700 border-rose-200",
      issued: "26/11/2014",
      effective: "01/07/2015",
      type: "Law",
      authority: "National Assembly"
    }
  ];

  // Highlight helper
  const highlight = (text) => {
    if (!keyword) return text;
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === keyword.toLowerCase() ? <span key={i} className="bg-yellow-200 text-slate-900 border-b border-yellow-400 font-semibold">{part}</span> : part
    );
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#fdfdfd] selection:bg-blue-200">
      <Header />

      {/* CPLQG-EN-225.MH01: Advanced Search Hero */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white pt-16 pb-24 px-4 relative overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="flex justify-center mb-6">
            <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight drop-shadow-md">
            Global Search Engine
          </h1>

          <form onSubmit={handleSearch} className="relative group max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden border-2 border-transparent focus-within:border-blue-300 transition-colors p-1.5 pl-6">
              <Search className="text-slate-400 shrink-0 w-6 h-6 mr-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search laws, decrees, news, or keywords..."
                className="flex-grow bg-transparent text-slate-800 py-3 md:py-4 outline-none text-lg md:text-xl placeholder-slate-400"
              />
              <button type="submit" className="bg-[#2a458d] hover:bg-indigo-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold transition-all shadow-md ml-2 shrink-0 flex items-center gap-2">
                <span>Search</span>
                <ArrowRight className="w-5 h-5 hidden sm:block" />
              </button>
            </div>
          </form>

          {keyword && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-[fadeIn_0.5s_ease-out]">
              <span className="text-blue-200 text-lg">Results for</span>
              <span className="text-indigo-900 font-bold px-4 py-1.5 bg-blue-100 rounded-lg shadow-sm">"{keyword}"</span>
              <span className="text-blue-200 text-lg mx-2">•</span>
              <span className="text-white font-medium bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-sm">
                {newsResults.length + docResults.length} matches found
              </span>
            </div>
          )}
        </div>
      </section>

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full relative z-20 -mt-8">

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Sidebar Filters (CPLQG-EN-225.MH02) */}
          <aside className={`w-full lg:w-1/4 xl:w-1/5 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 lg:sticky lg:top-24 overflow-hidden transition-all ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="p-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-indigo-600" />
                Advanced Filters
              </h3>
            </div>

            <div className="p-5 space-y-8 h-[calc(100vh-250px)] lg:h-auto overflow-y-auto custom-scrollbar">

              {/* Filter Group 1 */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-400" /> Document Type
                </h4>
                <div className="space-y-3">
                  {['Constitution', 'Law', 'Resolution', 'Decree', 'Circular'].map((type, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 transition-colors" />
                      <span className="text-slate-600 group-hover:text-slate-900 transition-colors text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-slate-100"></div>

              {/* Filter Group 2 */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-slate-400" /> Legal Status
                </h4>
                <div className="space-y-3">
                  {['In Force', 'Partially In Force', 'Pending', 'Expired'].map((status, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 transition-colors" />
                      <span className="text-slate-600 group-hover:text-slate-900 transition-colors text-sm">{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-slate-100"></div>

              {/* Filter Group 3 */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Building className="w-4 h-4 text-slate-400" /> Issuing Authority
                </h4>
                <div className="space-y-3">
                  {['National Assembly', 'Government', 'Prime Minister', 'Ministry of Justice', 'Ministry of Finance'].map((auth, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 transition-colors" />
                      <span className="text-slate-600 group-hover:text-slate-900 transition-colors text-sm truncate">{auth}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-slate-100"></div>

              {/* Filter Group 4 */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" /> Issue Year
                </h4>
                <select className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 bg-white text-slate-700">
                  <option>All Years</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020 & earlier</option>
                </select>
              </div>

            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors text-sm shadow-sm">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full lg:hidden flex items-center justify-center gap-2 bg-white border border-slate-200 px-4 py-3 rounded-xl font-bold text-slate-700 shadow-sm"
          >
            <SlidersHorizontal className="w-5 h-5" />
            {showFilters ? 'Hide Filters' : 'Show Advanced Filters'}
          </button>

          {/* Results Content Area */}
          <div className="w-full lg:w-3/4 xl:w-4/5">

            {/* Category Tabs */}
            <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-slate-100 p-2 flex overflow-x-auto hide-scrollbar mb-8">
              {tabs.map(tab => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-3 px-6 rounded-xl font-bold text-sm transition-all whitespace-nowrap flex-1 min-w-min justify-center ${isActive ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100/50' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-transparent'}`}
                  >
                    <tab.icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                    {tab.id}
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-black ${isActive ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-12">

              {/* News Results (CPLQG-EN-225.MH03) */}
              {(activeTab === 'All' || activeTab === 'News') && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-rose-50 rounded-lg text-rose-500">
                      <Newspaper className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">News Articles</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {newsResults.map((news, idx) => (
                      <a href="#" key={idx} className="group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-[0_10px_30px_rgb(0,0,0,0.05)] hover:border-rose-100 transition-all duration-300 flex flex-col">
                        <div className="text-sm font-semibold text-rose-500 mb-3 flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> {news.date}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mb-4 line-clamp-2 leading-snug">
                          {highlight(news.title)}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                          {highlight(news.desc)}
                        </p>
                        <div className="text-sm font-bold text-indigo-600 group-hover:text-indigo-800 flex items-center gap-1">
                          Read Full Article <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              )}

              {/* Legal Document Results (CPLQG-EN-225.MH04) */}
              {(activeTab === 'All' || activeTab === 'Legal Documents') && (
                <section>
                  <div className="flex items-center gap-3 mb-6 mt-12 md:mt-0">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">Legal Documents</h2>
                  </div>

                  <div className="space-y-6">
                    {docResults.map((doc, idx) => (
                      <div key={idx} className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-[0_10px_30px_rgb(0,0,0,0.05)] hover:border-blue-100 transition-all duration-300 flex flex-col md:flex-row gap-6">

                        {/* Icon Area */}
                        <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 items-center justify-center text-slate-400 group-hover:text-indigo-500 transition-colors">
                          <FileText className="w-8 h-8" strokeWidth={1.5} />
                        </div>

                        <div className="flex-grow">
                          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                            <a href="#" className="flex-1 text-xl md:text-2xl font-bold text-[#1e3a8a] hover:text-indigo-600 transition-colors leading-snug pr-4">
                              {highlight(doc.title)}
                            </a>
                            <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${doc.statusColor}`}>
                              {doc.status}
                            </span>
                          </div>

                          {/* Meta grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Type</span>
                              <span className="text-sm font-semibold text-slate-700">{doc.type}</span>
                            </div>
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Authority</span>
                              <span className="text-sm font-semibold text-slate-700">{doc.authority}</span>
                            </div>
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Issued</span>
                              <span className="text-sm font-semibold text-slate-700">{doc.issued}</span>
                            </div>
                            <div>
                              <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Effective</span>
                              <span className="text-sm font-semibold text-slate-700">{doc.effective}</span>
                            </div>
                          </div>

                          {/* Actions Row */}
                          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                            <div className="flex flex-wrap gap-2">
                              <a href="#" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-bold rounded-lg border border-slate-200 transition-colors">
                                <Activity size={16} className="text-slate-400" /> Validity
                              </a>
                              <a href="#" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-bold rounded-lg border border-slate-200 transition-colors">
                                <ArrowRight size={16} className="text-slate-400" /> Related
                              </a>
                              <a href="#" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-bold rounded-lg border border-slate-200 transition-colors">
                                <ExternalLink size={16} className="text-slate-400" /> Original Text
                              </a>
                            </div>
                            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white text-sm font-bold rounded-lg transition-all ml-auto w-full sm:w-auto">
                              <Download className="w-4 h-4" /> Download PDF
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Pagination (CPLQG-EN-225.MH05) */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-slate-500">Items per page:</span>
                  <select className="border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-indigo-500 bg-slate-50 text-slate-700 font-medium text-sm">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-100">
                  <button className="p-2 rounded-lg text-slate-400 hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all disabled:opacity-50" disabled>
                    <ChevronLeft size={20} />
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-white text-indigo-600 font-black shadow-sm border border-slate-200 flex items-center justify-center">1</button>
                  <button className="w-10 h-10 rounded-lg text-slate-600 font-bold hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all flex items-center justify-center">2</button>
                  <button className="w-10 h-10 rounded-lg text-slate-600 font-bold hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all flex items-center justify-center">3</button>
                  <span className="px-2 text-slate-400 font-bold">...</span>
                  <button className="p-2 rounded-lg text-slate-600 hover:bg-white hover:text-indigo-600 hover:shadow-sm transition-all">
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="text-sm font-semibold text-slate-500 hidden lg:block">
                  Showing <span className="text-slate-900">1-5</span> of <span className="text-slate-900">5</span> results
                </div>
              </div>

            </div>
          </div>

        </div>

      </main>
      <Footer />
    </div>
  );
};

export default SearchContent;
