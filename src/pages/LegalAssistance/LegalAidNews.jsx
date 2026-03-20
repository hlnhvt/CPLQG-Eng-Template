import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Search, Calendar, MapPin, Tag, ArrowRight, Mail } from 'lucide-react';

const LegalAidNews = () => {
  const [activeCategory, setActiveCategory] = useState('All News');

  const categories = ['All News', 'Press Releases', 'Community Outreach', 'Policy Updates', 'Success Stories'];

  const featuredArticle = {
    id: 1,
    title: 'Ministry of Justice Launches New Nationwide Legal Aid Portal for Foreign Investors',
    date: '15/03/2026',
    category: 'Press Releases',
    excerpt: 'In a major step towards enhancing the investment climate, the Ministry of Justice today unveiled a comprehensive digital platform offering free legal consultation, bilingual document templates, and compliance guides specifically tailored for Foreign Direct Investment (FDI) enterprises operating in Vietnam.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200'
  };

  const newsList = [
    {
      id: 2,
      title: 'Free Legal Consultation Workshop for Expatriates in Ho Chi Minh City',
      date: '10/03/2026',
      category: 'Community Outreach',
      excerpt: 'Over 200 expats attended our recent seminar covering work permits, residential leasing rights, and family law. Experts from the HCMC Legal Aid Center provided one-on-one sessions.',
      image: 'https://images.unsplash.com/photo-1555374018-1c1fd4a2374c?auto=format&fit=crop&q=80&w=600',
      location: 'Ho Chi Minh City'
    },
    {
      id: 3,
      title: 'Updated Guidelines on Legal Aid Eligibility for Foreign Nationals',
      date: '05/03/2026',
      category: 'Policy Updates',
      excerpt: 'The National Department of Legal Aid has issued Circular 04/2026, clarifying the specific conditions under which foreign nationals, including victims of human trafficking and minors, can access free state-funded legal representation.',
      image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=600',
      location: 'Hanoi'
    },
    {
      id: 4,
      title: 'Success Story: Securing Compensation for Injured Migrant Worker',
      date: '28/02/2026',
      category: 'Success Stories',
      excerpt: 'Through the dedicated efforts of our legal aid lawyers in Binh Duong province, a foreign factory worker successfully obtained full workplace injury compensation after a 6-month dispute.',
      image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&q=80&w=600',
      location: 'Binh Duong'
    },
    {
      id: 5,
      title: 'Annual Symposium on the Role of Legal Aid in Promoting FDI',
      date: '15/02/2026',
      category: 'Press Releases',
      excerpt: 'Legal experts, government officials, and foreign business representatives convened to discuss how robust, accessible legal support systems foster a transparent and attractive environment for international investors.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
      location: 'Da Nang'
    }
  ];

  const filteredNews = activeCategory === 'All News' 
    ? newsList 
    : newsList.filter(news => news.category === activeCategory);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] py-16 relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

            <div className="flex justify-center mb-4">
              <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
               Legal Aid <span className="text-amber-400">News & Activities</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-10">
               Stay updated with the latest press releases, policy changes, community outreach programs, and success stories from the National Legal Aid System.
            </p>

            {/* Filter Categories */}
            <div className="flex flex-wrap justify-center gap-3">
               {categories.map(cat => (
                  <button 
                     key={cat}
                     onClick={() => setActiveCategory(cat)}
                     className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${activeCategory === cat ? 'bg-amber-500 text-gray-900 border-2 border-transparent hover:bg-amber-600' : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'}`}
                  >
                     {cat}
                  </button>
               ))}
            </div>
         </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col gap-16">
         
         {/* Featured Article & Search row */}
         {activeCategory === 'All News' && (
            <section className="flex flex-col lg:flex-row gap-8">
               
               {/* Featured Post (Left 2/3) */}
               <div className="w-full lg:w-2/3">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative group h-full flex flex-col">
                     <div className="h-[300px] md:h-[400px] overflow-hidden relative">
                        <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                        <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-sm uppercase tracking-wider flex items-center gap-1 shadow-md">
                           Featured News
                        </span>
                     </div>
                     
                     <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="flex items-center gap-4 text-xs font-semibold text-blue-200 mb-3 uppercase tracking-wider">
                           <span className="flex items-center gap-1.5"><Tag size={14}/> {featuredArticle.category}</span>
                           <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                           <span className="flex items-center gap-1.5"><Calendar size={14}/> {featuredArticle.date}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4 group-hover:text-amber-400 transition-colors">
                           <Link to={`/legal-aid/news/${featuredArticle.id}`}>{featuredArticle.title}</Link>
                        </h2>
                        <p className="text-gray-300 line-clamp-2 md:line-clamp-3 mb-6 leading-relaxed">
                           {featuredArticle.excerpt}
                        </p>
                        <Link to={`/legal-aid/news/${featuredArticle.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-white transition-colors group/link w-fit">
                           Read Full Article <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                     </div>
                  </div>
               </div>

               {/* Right Sidebar 1/3 */}
               <div className="w-full lg:w-1/3 flex flex-col gap-8">
                  
                  {/* Search Widget */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                     <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                        <Search className="text-blue-600" size={20} /> Search News
                     </h3>
                     <div className="relative">
                        <input 
                           type="text" 
                           placeholder="Type keywords..." 
                           className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all text-sm"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                           <Search size={16} />
                        </button>
                     </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-gradient-to-br from-[#1e3a8a] to-blue-900 rounded-2xl shadow-sm p-6 text-white text-center relative overflow-hidden flex-grow flex flex-col justify-center">
                     <div className="absolute -top-10 -left-10 opacity-10">
                        <Mail size={150} />
                     </div>
                     <h3 className="text-xl font-bold mb-3 relative z-10">Stay Informed</h3>
                     <p className="text-blue-100 text-sm mb-6 relative z-10">Subscribe to receive monthly updates on policy changes, new standard contracts, and legal aid activities.</p>
                     <div className="flex flex-col gap-3 relative z-10">
                        <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-900 text-sm placeholder-gray-500" />
                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 rounded-xl transition-all shadow-md transform hover:-translate-y-0.5">
                           Subscribe Now
                        </button>
                     </div>
                  </div>

               </div>
            </section>
         )}

         {/* Grid List */}
         <section>
            
            <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
               <h2 className="text-2xl font-extrabold text-gray-900">{activeCategory === 'All News' ? 'Recent Articles' : `${activeCategory}`}</h2>
               <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{filteredNews.length} Posts</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
               {filteredNews.map(news => (
                  <div key={news.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all group flex flex-col sm:flex-row overflow-hidden h-[200px]">
                     
                     <div className="w-full sm:w-2/5 h-48 sm:h-full shrink-0 overflow-hidden relative">
                        <Link to={`/legal-aid/news/${news.id}`}>
                           <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </Link>
                        <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-blue-800 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider border border-white/50">
                           {news.category}
                        </span>
                     </div>

                     <div className="p-6 flex flex-col flex-grow w-full sm:w-3/5">
                        <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-400 mb-3 uppercase tracking-widest">
                           <span className="flex items-center gap-1"><Calendar size={12}/> {news.date}</span>
                           <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                           <span className="flex items-center gap-1"><MapPin size={12}/> {news.location}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mb-2 line-clamp-2">
                           <Link to={`/legal-aid/news/${news.id}`}>{news.title}</Link>
                        </h3>
                        
                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-auto">
                           {news.excerpt}
                        </p>
                        
                        <Link to={`/legal-aid/news/${news.id}`} className="mt-4 text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors uppercase tracking-wider w-fit">
                           Read More <ChevronRight size={14} />
                        </Link>
                     </div>
                  </div>
               ))}
            </div>

            {/* Pagination Placeholder */}
            {filteredNews.length > 0 && (
               <div className="mt-12 flex justify-center items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50">
                     {'<'}
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1e3a8a] text-white font-bold shadow-sm">
                     1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-colors">
                     2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-colors">
                     3
                  </button>
                  <span className="px-2 text-gray-400">...</span>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                     {'>'}
                  </button>
               </div>
            )}
         </section>

      </main>

      <Footer />
    </div>
  );
};

export default LegalAidNews;
