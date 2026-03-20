import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, ChevronDown, ChevronRight, Book, HelpCircle, FileText, Settings, UserPlus, Zap, Image as ImageIcon, PlayCircle, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';

const UserGuide = () => {
  // State for managing views (mh01 = homepage, mh02 = article detail)
  const [currentView, setCurrentView] = useState('mh01');
  const [activeArticle, setActiveArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Sidebar expand/collapse state
  const [expandedCategories, setExpandedCategories] = useState({
    cat1: true,
    cat2: false,
    cat3: false,
    cat4: false
  });

  // Scrollspy logic for Right Sidebar ToC in MH02
  const [activeHeading, setActiveHeading] = useState('');
  const contentRef = useRef(null);

  // Mock Data: Category Tree
  const categories = [
    {
      id: 'cat1',
      title: 'Getting Started',
      icon: PlayCircle,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      desc: 'Essential information to begin using the platform efficiently.',
      articles: [
        { id: 'art1', title: 'Platform Overview & Introduction' },
        { id: 'art2', title: 'Setting Up Your Language Preferences' },
        { id: 'art3', title: 'Understanding the Dashboard' }
      ]
    },
    {
      id: 'cat2',
      title: 'Search & Navigation',
      icon: Search,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      desc: 'Master the full-text search engine and advanced filtering.',
      articles: [
        { id: 'art4', title: 'Basic Keyword Searching' },
        { id: 'art5', title: 'Using Advanced Filters & Metadata' },
        { id: 'art6', title: 'Locating Specific Legal Decisions' }
      ]
    },
    {
      id: 'cat3',
      title: 'Reading & Downloading',
      icon: Book,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      desc: 'How to interact with document details and export files.',
      articles: [
        { id: 'art7', title: 'Reading Document Excerpts' },
        { id: 'art8', title: 'Downloading PDF and DOCX Files' },
        { id: 'art9', title: 'Understanding Legal Status Badges' }
      ]
    },
    {
      id: 'cat4',
      title: 'Account & Support',
      icon: UserPlus,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      desc: 'Managing your profile, bookmarks, and getting technical help.',
      articles: [
        { id: 'art10', title: 'Creating an Account (Coming Soon)' },
        { id: 'art11', title: 'Submitting Feedback on Translations' },
        { id: 'art12', title: 'Contacting Technical Support' }
      ]
    }
  ];

  // Helper functions
  const toggleCategory = (catId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const openArticle = (catId, articleId) => {
    const cat = categories.find(c => c.id === catId);
    const art = cat.articles.find(a => a.id === articleId);

    // Auto-expand the category if it's not already
    setExpandedCategories(prev => ({ ...prev, [catId]: true }));

    // Set active article and switch view
    setActiveArticle({ ...art, category: cat });
    setCurrentView('mh02');
    window.scrollTo(0, 0); // Scroll to top when opening article
  };

  const goHome = () => {
    setCurrentView('mh01');
    setActiveArticle(null);
    setSearchQuery('');
    window.scrollTo(0, 0);
  };

  // Scrollspy Effect for Article View
  useEffect(() => {
    if (currentView !== 'mh02') return;

    const handleScroll = () => {
      if (!contentRef.current) return;
      const headings = Array.from(contentRef.current.querySelectorAll('h2, h3'));
      if (headings.length === 0) return;

      const scrollPosition = window.scrollY + 150; // Offset for header
      let currentActiveId = '';

      for (const heading of headings) {
        if (heading.offsetTop <= scrollPosition) {
          currentActiveId = heading.id;
        } else {
          break; // Stop checking once we pass the current scroll position
        }
      }

      if (currentActiveId && currentActiveId !== activeHeading) {
        setActiveHeading(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView, activeArticle]);

  // Smooth scroll for ToC links
  const scrollToHeading = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120; // Adjust based on your sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveHeading(id);
    }
  };


  // ==========================================
  // RENDER HELPERS
  // ==========================================

  const renderSidebar = () => (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden sticky top-24">
      {/* Search Bar in Sidebar */}
      <div className="p-4 border-b border-slate-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-indigo-400 focus:bg-white transition-all text-slate-700 placeholder-slate-400"
          />
        </div>
      </div>

      {/* Navigation Tree */}
      <div className="p-2 py-4 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar">
        <div className="px-4 mb-3">
          <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Categories</span>
        </div>

        <ul className="space-y-1">
          {categories.map(cat => (
            <li key={cat.id} className="mb-1">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full flex items-center justify-between px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors text-left"
              >
                <span className={`text-sm font-bold flex items-center gap-2 ${expandedCategories[cat.id] ? 'text-indigo-700' : 'text-slate-700'}`}>
                  <cat.icon className={`w-4 h-4 ${expandedCategories[cat.id] ? 'text-indigo-600' : 'text-slate-400'}`} />
                  {cat.title}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${expandedCategories[cat.id] ? 'rotate-180 text-indigo-400' : ''}`} />
              </button>

              {/* Articles List (Collapsible) */}
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedCategories[cat.id] ? 'max-h-[500px] opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                <ul className="relative before:absolute before:inset-0 before:ml-[1.4rem] before:h-full before:w-px before:bg-slate-200 ml-2 space-y-0.5">
                  {cat.articles.map(art => {
                    const isCurrentArticle = activeArticle && activeArticle.id === art.id;
                    return (
                      <li key={art.id} className="relative z-10">
                        <button
                          onClick={() => openArticle(cat.id, art.id)}
                          className={`w-full text-left pl-8 pr-4 py-2 text-[13px] rounded-r-xl rounded-l-md transition-all ${isCurrentArticle ? 'text-indigo-700 font-bold bg-indigo-50/50 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-2/3 before:bg-indigo-600 before:rounded-r-full' : 'text-slate-600 font-medium hover:text-indigo-600 hover:bg-slate-50'}`}
                        >
                          {art.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderMH01 = () => (
    <div className="animate-in fade-in zoom-in-95 duration-500">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">How can we help you?</h2>
        <p className="text-lg text-slate-500">Choose a category below to browse our comprehensive guides and documentation.</p>
      </div>

      {categories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <div key={cat.id}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1 cursor-pointer flex flex-col"
              // Open first article of category as default when clicking the card itself (optional UX enhancement)
              onClick={() => openArticle(cat.id, cat.articles[0].id)}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center shrink-0 shadow-sm border border-slate-50 group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-black px-3 py-1 bg-slate-100 text-slate-500 rounded-lg">{cat.articles.length} articles</span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">{cat.title}</h3>
              <p className="text-sm text-slate-500 mb-8 leading-relaxed font-serif line-clamp-2 flex-grow">{cat.desc}</p>

              <div className="border-t border-slate-100 pt-6 mt-auto">
                <ul className="space-y-3">
                  {cat.articles.slice(0, 3).map(art => (
                    <li key={art.id}>
                      <button
                        onClick={(e) => { e.stopPropagation(); openArticle(cat.id, art.id); }}
                        className="text-[14px] font-medium text-slate-700 hover:text-indigo-600 flex items-center gap-2 group/link w-full text-left"
                      >
                        <FileText className="w-4 h-4 text-slate-400 group-hover/link:text-indigo-500 shrink-0" />
                        <span className="truncate">{art.title}</span>
                      </button>
                    </li>
                  ))}
                  {cat.articles.length > 3 && (
                    <li>
                      <span className="text-[13px] font-bold text-indigo-500 flex items-center gap-1 pl-6">
                        View all {cat.articles.length} articles <ChevronRight className="w-3 h-3" />
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
          <p className="text-slate-500">No content available yet.</p>
        </div>
      )}
    </div>
  );

  const renderMH02 = () => {
    if (!activeArticle) return null;

    // Helper to find next and prev articles
    const flatArticles = categories.flatMap(c => c.articles.map(a => ({ ...a, category: c })));
    const currentIndex = flatArticles.findIndex(a => a.id === activeArticle.id);
    const prevArticle = currentIndex > 0 ? flatArticles[currentIndex - 1] : null;
    const nextArticle = currentIndex < flatArticles.length - 1 ? flatArticles[currentIndex + 1] : null;

    // Static mock content based on article title for demonstration
    const renderMockContent = () => (
      <div className="prose prose-lg prose-indigo max-w-none text-slate-600 font-serif leading-relaxed" ref={contentRef}>
        <p className="lead text-xl text-slate-500 font-sans mb-8">
          This is an automatically generated detail view for <strong>{activeArticle.title}</strong> based on the SRS 222 MH02 specifications.
        </p>

        <h2 id="section-1" className="scroll-mt-32 font-sans font-extrabold text-2xl text-slate-800 mt-10 mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">1</span>
          Introduction to the Topic
        </h2>
        <p>The National Legal Portal is designed with advanced architectural patterns to ensure high availability and ease of access for international users navigating the Vietnamese legal framework. Understanding the core layout will significantly reduce search time.</p>

        {/* Mock Image Placeholder */}
        <div className="my-10 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 flex flex-col items-center justify-center p-12 relative group">
          <ImageIcon className="w-16 h-16 text-slate-300 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1} />
          <p className="font-sans text-sm font-bold text-slate-400">Content Illustration Placeholder</p>
          <p className="text-xs text-slate-400 mt-2 font-sans italic">Image loaded via CMS</p>
        </div>

        <h3 id="section-1-1" className="scroll-mt-32 font-sans font-bold text-xl text-slate-800 mt-8 mb-4">Key Benefits</h3>
        <ul>
          <li><strong>Bilingual Support:</strong> Real-time translation contexts.</li>
          <li><strong>Metadata Rich:</strong> Every document includes deep links to its amending counterparts.</li>
          <li><strong>Export Friendly:</strong> One-click PDF generation.</li>
        </ul>

        <h2 id="section-2" className="scroll-mt-32 font-sans font-extrabold text-2xl text-slate-800 mt-12 mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">2</span>
          Step-by-Step Instructions
        </h2>
        <p>Follow these steps to fully utilize the specific feature described in this article. Ensure you are logged into your organization account if attempting to submit draft feedback.</p>

        <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 my-8 font-sans">
          <ol className="list-decimal list-outside ml-4 space-y-3 text-slate-700">
            <li>Locate the <strong>Global Search Bar</strong> at the top of the interface.</li>
            <li>Enter your precise query (e.g., "Law on Enterprise 2020").</li>
            <li>Press Enter or click the Search icon.</li>
            <li>Filter the results using the Left Sidebar on the Search Results page.</li>
          </ol>
        </div>

        <h2 id="section-3" className="scroll-mt-32 font-sans font-extrabold text-2xl text-slate-800 mt-12 mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">3</span>
          Troubleshooting
        </h2>
        <p>If you experience issues, such as a file failing to download, please check your network connection first. If the problem persists, the document might be undergoing an urgent metadata update by our editorial team.</p>
      </div>
    );

    return (
      <div className="w-full flex flex-col xl:flex-row gap-10 animate-in fade-in slide-in-from-right-8 duration-500">

        {/* Left Side: Article Content */}
        <div className="w-full xl:w-3/4">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8 font-sans overflow-x-auto whitespace-nowrap pb-2">
              <button onClick={goHome} className="hover:text-indigo-600 flex items-center gap-1 transition-colors">
                <Book className="w-4 h-4" /> User Guide
              </button>
              <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
              <button onClick={goHome} className="hover:text-indigo-600 transition-colors">
                {activeArticle.category.title}
              </button>
              <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
              <span className="text-slate-800 font-bold truncate">{activeArticle.title}</span>
            </nav>

            {/* Article Header */}
            <header className="mb-10 pb-8 border-b border-slate-100 relative">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">
                {activeArticle.title}
              </h1>
              <p className="text-lg text-slate-500 font-serif">
                Learn how to navigate and utilize this specific feature within the National Legal Portal.
              </p>
              {/* Decorative accent */}
              <div className="absolute bottom-[-2px] left-0 w-24 h-1 bg-indigo-600 rounded-full"></div>
            </header>

            {/* Mobile/Tablet In-page ToC (Hidden on XL screens where right sidebar takes over) */}
            <div className="xl:hidden bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10">
              <h4 className="font-extrabold text-slate-800 mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-400" /> Article Contents
              </h4>
              <ul className="space-y-3 font-sans text-sm">
                <li><a href="#section-1" onClick={(e) => scrollToHeading(e, 'section-1')} className="text-indigo-600 font-medium hover:underline">1. Introduction to the Topic</a></li>
                <li className="pl-4"><a href="#section-1-1" onClick={(e) => scrollToHeading(e, 'section-1-1')} className="text-slate-600 hover:text-indigo-600">Key Benefits</a></li>
                <li><a href="#section-2" onClick={(e) => scrollToHeading(e, 'section-2')} className="text-indigo-600 font-medium hover:underline">2. Step-by-Step Instructions</a></li>
                <li><a href="#section-3" onClick={(e) => scrollToHeading(e, 'section-3')} className="text-indigo-600 font-medium hover:underline">3. Troubleshooting</a></li>
              </ul>
            </div>

            {/* Article Body */}
            {renderMockContent()}

            {/* Previous / Next Navigation */}
            <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
              {prevArticle ? (
                <button
                  onClick={() => openArticle(prevArticle.category.id, prevArticle.id)}
                  className="flex items-center gap-4 text-left p-4 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                    <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-indigo-600" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider block mb-1">Previous</span>
                    <span className="font-bold text-slate-700 text-sm line-clamp-2 group-hover:text-indigo-700">{prevArticle.title}</span>
                  </div>
                </button>
              ) : <div></div>}

              {nextArticle ? (
                <button
                  onClick={() => openArticle(nextArticle.category.id, nextArticle.id)}
                  className="flex items-center justify-end gap-4 text-right p-4 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition-all group"
                >
                  <div>
                    <span className="text-[11px] font-black uppercase text-slate-400 tracking-wider block mb-1">Next</span>
                    <span className="font-bold text-slate-700 text-sm line-clamp-2 group-hover:text-indigo-700">{nextArticle.title}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-600" />
                  </div>
                </button>
              ) : <div></div>}
            </div>

          </div>
        </div>

        {/* Right Sidebar: In-page ToC (Desktop only) */}
        <div className="hidden xl:block w-1/4 shrink-0 relative">
          <div className="sticky top-28">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h4 className="font-extrabold text-slate-800 mb-6 uppercase text-xs tracking-widest flex items-center gap-2 pb-4 border-b border-slate-100">
                <FileText className="w-4 h-4 text-indigo-400" /> Article Contents
              </h4>

              {/* Scrollspy Navigation */}
              <nav className="relative before:absolute before:inset-y-0 before:left-[3px] before:w-[2px] before:bg-slate-100">
                {/* Animated Active Indicator */}
                <ul className="space-y-4 font-sans text-sm relative">
                  <li className="relative">
                    <a href="#section-1"
                      onClick={(e) => scrollToHeading(e, 'section-1')}
                      className={`pl-4 block transition-colors ${activeHeading === 'section-1' ? 'text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      {activeHeading === 'section-1' && <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-600"></span>}
                      1. Introduction to the Topic
                    </a>
                  </li>
                  <li className="relative">
                    <a href="#section-1-1"
                      onClick={(e) => scrollToHeading(e, 'section-1-1')}
                      className={`pl-8 block text-[13px] transition-colors ${activeHeading === 'section-1-1' ? 'text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      {activeHeading === 'section-1-1' && <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-600"></span>}
                      Key Benefits
                    </a>
                  </li>
                  <li className="relative">
                    <a href="#section-2"
                      onClick={(e) => scrollToHeading(e, 'section-2')}
                      className={`pl-4 block transition-colors ${activeHeading === 'section-2' ? 'text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      {activeHeading === 'section-2' && <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-600"></span>}
                      2. Step-by-Step Instructions
                    </a>
                  </li>
                  <li className="relative">
                    <a href="#section-3"
                      onClick={(e) => scrollToHeading(e, 'section-3')}
                      className={`pl-4 block transition-colors ${activeHeading === 'section-3' ? 'text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                      {activeHeading === 'section-3' && <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-indigo-600"></span>}
                      3. Troubleshooting
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

      </div>
    );
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#fdfdfd] selection:bg-indigo-200">
      <Header />

      {/* Global Header (Applies to both views) */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] pt-20 pb-16 px-4 relative overflow-hidden border-b border-blue-900">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              User Guide
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl font-light">
              Find detailed documentation, tutorials, and answers to help you navigate the National Legal Portal.
            </p>
          </div>

        </div>
      </section>

      <main className="flex-grow max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 lg:gap-12 w-full relative z-20">

        {/* Universal Left Sidebar */}
        <aside className="w-full lg:w-[300px] lg:flex-shrink-0 relative z-20">
          {renderSidebar()}
        </aside>

        {/* Dynamic Content Area */}
        <div className="w-full min-w-0">
          {currentView === 'mh01' ? renderMH01() : renderMH02()}
        </div>

      </main>
      <Footer />
    </div>
  );
};

// Mini icon helper
const BoltIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default UserGuide;
