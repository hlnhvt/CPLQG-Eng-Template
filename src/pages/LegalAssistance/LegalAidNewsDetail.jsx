import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ArrowLeft, Calendar, MapPin, Tag, Share2, Printer, Facebook, Twitter, Linkedin, Image as ImageIcon } from 'lucide-react';

const LegalAidNewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock News Data
  const article = {
    id: id,
    title: 'Ministry of Justice Launches New Nationwide Legal Aid Portal for Foreign Investors',
    date: '15/03/2026',
    category: 'Press Releases',
    location: 'Hanoi, Vietnam',
    author: 'Legal Aid Communication Department',
    views: 1245,
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p class="lead">In a major step towards enhancing the investment climate, the Ministry of Justice today unveiled a comprehensive digital platform offering free legal consultation, bilingual document templates, and compliance guides specifically tailored for Foreign Direct Investment (FDI) enterprises operating in Vietnam.</p>
      
      <h3>Bridging the Legal Gap for Investors</h3>
      <p>The newly launched portal aims to demystify the Vietnamese legal framework for international businesses. Addressing common hurdles faced during market entry, the platform consolidates resources on corporate registration, tax compliance, labor law, and intellectual property protection into a single, accessible hub.</p>
      
      <p>"Our goal is to create a transparent, predictable, and legally secure environment for all foreign investors," stated a representative from the National Department of Legal Aid. "By providing free, state-backed legal guidance, we reduce the initial friction of doing business and ensure long-term compliance."</p>
      
      <figure class="my-8">
         <img src="https://images.unsplash.com/photo-1555374018-1c1fd4a2374c?auto=format&fit=crop&q=80&w=800" alt="Press Conference" class="w-full rounded-2xl shadow-md border border-gray-100" />
         <figcaption class="text-sm text-gray-500 mt-3 text-center italic">The official launch event attended by ministry officials and foreign chamber of commerce representatives.</figcaption>
      </figure>

      <h3>Key Features of the Portal</h3>
      <ul>
         <li><strong>Interactive Compliance Checklists:</strong> Step-by-step guides tailored by industry sector to ensure adherence to local regulations.</li>
         <li><strong>Bilingual Document Repository:</strong> Verified templates for NDAs, labor contracts, and commercial leases in both English and Vietnamese.</li>
         <li><strong>Direct Expert Consultation:</strong> A direct channel to request personalized, free legal advice from certified lawyers associated with the State Legal Aid Centers.</li>
      </ul>

      <h3>Phased Nationwide Rollout</h3>
      <p>Currently, the portal's initial phase focuses on the major economic hubs: Hanoi, Ho Chi Minh City, Da Nang, and Binh Duong. A full nationwide rollout, integrating real-time chat support and expanded language options (including Korean, Japanese, and Chinese), is slated for Q4 2026.</p>
      <p>Foreign enterprises are encouraged to register on the platform to access the full suite of specialized legal aid services.</p>
    `,
    tags: ['FDI', 'Legal Portal', 'Ministry of Justice', 'Investment Support']
  };

  const recentNews = [
    { id: 2, title: 'Free Legal Consultation Workshop for Expatriates in Ho Chi Minh City', date: '10/03/2026' },
    { id: 3, title: 'Updated Guidelines on Legal Aid Eligibility for Foreign Nationals', date: '05/03/2026' },
    { id: 4, title: 'Success Story: Securing Compensation for Injured Migrant Worker', date: '28/02/2026' }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col lg:flex-row gap-10">
         
         {/* Article Content Area */}
         <div className="w-full lg:w-2/3 flex flex-col gap-6">
            
            <article className="bg-white text-left rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
               
               {/* Cover Image */}
               <div className="h-[300px] md:h-[450px] relative">
                  <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-amber-500 text-gray-900 text-xs font-extrabold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-lg">
                     {article.category}
                  </div>
               </div>

               <div className="p-6 md:p-10 lg:p-14">
                  
                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 mb-6 uppercase tracking-wider">
                     <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-600"/> {article.date}</span>
                     <span className="flex items-center gap-1.5"><MapPin size={14} className="text-blue-600"/> {article.location}</span>
                     <span className="flex items-center gap-1.5"><Tag size={14} className="text-blue-600"/> {article.author}</span>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-8 tracking-tight">
                     {article.title}
                  </h1>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between py-4 border-y border-gray-100 mb-10">
                     <span className="text-sm text-gray-500 font-medium">{article.views.toLocaleString()} Views</span>
                     
                     <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900 mr-2 hidden sm:inline-block">Share:</span>
                        <button className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><Facebook size={14}/></button>
                        <button className="w-8 h-8 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"><Twitter size={14}/></button>
                        <button className="w-8 h-8 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-colors"><Linkedin size={14}/></button>
                        <div className="w-px h-4 bg-gray-200 mx-2"></div>
                        <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-500 flex items-center justify-center hover:bg-gray-50 transition-colors" title="Print Article"><Printer size={14}/></button>
                        <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-500 flex items-center justify-center hover:bg-gray-50 transition-colors" title="Copy Link"><Share2 size={14}/></button>
                     </div>
                  </div>

                  {/* Prose Content */}
                  <div 
                     className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed 
                     prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:mt-10 prose-headings:mb-6 
                     prose-p:mb-6 prose-a:text-blue-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                     prose-ul:list-disc prose-ul:pl-5 prose-li:mb-2 prose-li:marker:text-blue-500
                     prose-lead:text-xl prose-lead:font-medium prose-lead:text-gray-600 prose-lead:leading-relaxed"
                     dangerouslySetInnerHTML={{ __html: article.content }}
                  ></div>

                  {/* Tags */}
                  <div className="mt-12 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                     <span className="text-sm font-bold text-gray-900 mr-2 flex items-center gap-2">
                        <Tag size={16} className="text-gray-400" /> Tags:
                     </span>
                     {article.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider cursor-pointer transition-colors">
                           {tag}
                        </span>
                     ))}
                  </div>

               </div>
            </article>
         </div>

         {/* Sidebar Area */}
         <div className="w-full lg:w-1/3 flex flex-col gap-8">
            
            {/* Recent News Widget */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-8">
               <div className="border-b border-gray-100 bg-gray-50 p-6">
                  <h3 className="font-extrabold text-gray-900 text-lg uppercase tracking-wide">Recent News</h3>
               </div>
               
               <div className="p-6 flex flex-col gap-6 text-left">
                  {recentNews.map(news => (
                     <Link key={news.id} to={`/legal-aid/news/${news.id}`} className="group flex flex-col gap-2 border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                           <Calendar size={12}/> {news.date}
                        </span>
                        <h4 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-amber-600 transition-colors">
                           {news.title}
                        </h4>
                     </Link>
                  ))}
               </div>
               
               <div className="bg-gray-50 py-4 px-6 border-t border-gray-100 text-center">
                  <Link to="/legal-aid/news" className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-widest transition-colors">
                     View All Articles →
                  </Link>
               </div>
            </div>

            {/* Newsletter Side Banner */}
            <div className="bg-gradient-to-br from-[#1e3a8a] to-blue-900 rounded-2xl p-8 text-white text-center shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-bl-full -z-10 opacity-20"></div>
               <h3 className="text-xl font-bold mb-3 relative z-10">Weekly Updates</h3>
               <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">Get the latest legal news, policy changes, and aid guides delivered directly to your inbox.</p>
               <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-xl border-none outline-none text-gray-900 text-sm mb-3 text-center" />
               <button className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 rounded-xl transition-all shadow-md">
                  Subscribe
               </button>
            </div>

         </div>

      </main>

      <Footer />
    </div>
  );
};

export default LegalAidNewsDetail;
