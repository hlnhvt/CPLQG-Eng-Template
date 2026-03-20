import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Filter, ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react';

const ImportantPolicySummaries = () => {
  const [activePage, setActivePage] = useState(1);

  const featuredMain = {
    id: 1,
    title: 'Ứng dụng Trí tuệ nhân tạo trong hoạt động xét xử: Kinh nghiệm quốc tế và kiến nghị cho Việt Nam',
    titleEn: 'Applying Artificial Intelligence in judicial activities: International experiences and recommendations for Vietnam',
    field: 'Hình sự',
    fieldEn: 'Criminal Law',
    author: 'PGS.TS Nguyễn Văn A',
    date: '15/03/2026',
    excerpt: 'Bài viết phân tích thực tiễn ứng dụng AI tại các hệ thống tư pháp tiên tiến như Mỹ, Trung Quốc, EU, từ đó đề xuất lộ trình và khung pháp lý phù hợp nhằm từng bước áp dụng công nghệ này vào hoạt động tố tụng tại Việt Nam.',
    excerptEn: 'The article analyzes the practical application of AI in advanced judicial systems such as the US, China, EU, thereby proposing an appropriate roadmap and legal framework to gradually apply this technology to litigation activities in Vietnam.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200&h=600'
  };

  const subFeatured = [
    {
      id: 2,
      titleEn: 'Improving the law on personal data protection in the context of digital transformation',
      fieldEn: 'Civil',
      author: 'TS Lê Thị B',
      date: '10/03/2026',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      id: 3,
      titleEn: 'Some inadequacies in regulations on electronic contracts and directions for improvement',
      fieldEn: 'Commercial',
      author: 'ThS Trần C',
      date: '05/03/2026',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400'
    },
    {
      id: 4,
      titleEn: 'Intellectual property protection for works created by AI',
      fieldEn: 'Intellectual Property',
      author: 'Viện Khoa học pháp lý',
      date: '28/02/2026',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600&h=400'
    }
  ];

  const articles = [
    {
      id: 5,
      titleEn: 'Non-contractual damage compensation liability caused by AI',
      excerptEn: 'Analyzing principles of compensation liability when AI software automatically causes damage to a third party, based on the current civil law foundation.',
      fieldEn: 'Civil',
      author: 'PGS.TS Nguyễn Văn A',
      date: '20/02/2026',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      id: 6,
      titleEn: 'Legal conflicts in cross-border e-commerce transactions',
      excerptEn: 'Research on jurisdiction and applicable law in international e-commerce disputes, with lessons drawn from the EU.',
      fieldEn: 'Commercial',
      author: 'Nhóm nghiên cứu ĐH Luật HN',
      date: '15/02/2026',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      id: 7,
      titleEn: 'Protecting the rights of workers on technology platforms (Gig economy)',
      excerptEn: 'Evaluating the current legal status and proposing legal solutions to recognize the status and protect the legitimate rights of tech drivers and shippers.',
      fieldEn: 'Labor',
      author: 'TS Lê Thị B',
      date: '10/02/2026',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      id: 8,
      titleEn: 'Resolving administrative disputes through mediation and dialogue',
      excerptEn: 'The practice of applying the Law on Mediation and Dialogue at the Court and the obstacles that need to be removed to improve the rate of out-of-court administrative dispute resolution.',
      fieldEn: 'Administrative',
      author: 'Viện Khoa học pháp lý',
      date: '05/02/2026',
      image: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      id: 9,
      titleEn: 'Law on economic concentration control in the digital technology sector',
      excerptEn: 'Researching M&A trends in the digital tech sector and directions for improving regulations on economic concentration control in Vietnam.',
      fieldEn: 'Commercial',
      author: 'ThS Trần C',
      date: '25/01/2026',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=300'
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      {/* Page Title & Breadcrumb */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-800 font-medium">Important policy summaries</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a] tracking-tight">Important Policy Summaries</h1>
        </div>
      </div>

      {/* Top Main Featured Article */}
      <section className="bg-slate-50 pt-8 pb-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
           <Link to={`/policy-summary/${featuredMain.id}`} className="block relative rounded-xl overflow-hidden group cursor-pointer h-[400px] md:h-[500px]">
              <img 
                src={featuredMain.image} 
                alt={featuredMain.titleEn} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031d5c] via-[#031d5c]/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
                 <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded mb-4 uppercase tracking-wider">
                   {featuredMain.fieldEn}
                 </span>
                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 group-hover:text-blue-200 transition-colors">
                   {featuredMain.titleEn}
                 </h2>
                 <p className="text-slate-300 text-sm md:text-base mb-6 max-w-4xl line-clamp-2 md:line-clamp-none">
                   {featuredMain.excerptEn}
                 </p>
                 <div className="flex items-center gap-4 text-sm text-slate-300 font-medium">
                   <div className="flex items-center gap-1.5"><User size={16} /> {featuredMain.author}</div>
                   <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                   <div className="flex items-center gap-1.5"><Calendar size={16} /> {featuredMain.date}</div>
                 </div>
              </div>
           </Link>
        </div>
      </section>

      {/* 3 Sub-featured Articles */}
      <section className="bg-slate-50 pb-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subFeatured.map(item => (
                 <Link to={`/policy-summary/${item.id}`} key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 group flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                       <img src={item.image} alt={item.titleEn} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                       <span className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-bold rounded uppercase">
                         {item.fieldEn}
                       </span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                       <h3 className="font-bold text-lg leading-snug mb-4 group-hover:text-blue-600 transition-colors flex-grow">
                         {item.titleEn}
                       </h3>
                       <div className="flex justify-between items-center text-xs text-slate-500 font-medium pt-3 border-t border-slate-100">
                         <span>{item.author}</span>
                         <span>{item.date}</span>
                       </div>
                    </div>
                 </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Directory Button */}
      <section className="bg-slate-50 pb-4">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="border-t border-blue-200 pt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-bold shadow hover:bg-blue-700 transition-colors">
                 Research Article Directory
              </button>
           </div>
        </div>
      </section>

      {/* Filter and List Area */}
      <section className="bg-slate-50 pb-16 flex-grow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
           
           {/* Filter Bar */}
           <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4 text-gray-800">
                 <Filter size={20} className="text-blue-600" />
                 <h3 className="font-bold">Search Filter</h3>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-end">
                 <div className="w-full md:w-1/3">
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Legal Field</label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                       <option>All fields</option>
                       <option>Civil Law</option>
                       <option>Commercial Law</option>
                       <option>Labor Law</option>
                    </select>
                 </div>
                 <div className="w-full md:w-1/3">
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Author</label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                       <option>All authors</option>
                    </select>
                 </div>
                 <div className="w-full md:w-1/3">
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-2">Publication Year</label>
                    <select className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                       <option>Any year</option>
                       <option>2026</option>
                       <option>2025</option>
                    </select>
                 </div>
                 <button className="bg-blue-600 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap md:w-auto w-full flex items-center justify-center gap-2">
                    <Filter size={16} /> Filter Results
                 </button>
              </div>
           </div>

           {/* List of Articles */}
           <div className="flex flex-col gap-4 mb-10">
              {articles.map(article => (
                 <Link to={`/policy-summary/${article.id}`} key={article.id} className="bg-white rounded border border-gray-200 p-4 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow group">
                    <div className="w-full sm:w-64 h-40 shrink-0 relative overflow-hidden rounded">
                       <img src={article.image} alt={article.titleEn} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                       <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 text-white text-[10px] font-bold rounded uppercase">
                         {article.fieldEn}
                       </span>
                    </div>
                    <div className="flex flex-col justify-center flex-grow py-2">
                       <h3 className="font-bold text-lg text-[#1e3a8a] mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                         {article.titleEn}
                       </h3>
                       <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                         {article.excerptEn}
                       </p>
                       <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mt-auto">
                         <span className="flex items-center gap-1.5"><User size={13} /> {article.author}</span>
                         <span className="flex items-center gap-1.5"><Calendar size={13} /> {article.date}</span>
                       </div>
                    </div>
                 </Link>
              ))}
           </div>

           {/* Pagination */}
           <div className="flex justify-center items-center gap-2">
             <button 
                className="px-4 py-2 border border-gray-300 rounded text-sm flex items-center gap-1 hover:bg-gray-50 text-gray-500"
                disabled
             >
                <ChevronLeft size={16} /> Previous
             </button>
             <button className="w-10 h-10 flex items-center justify-center rounded bg-blue-600 text-white font-bold shadow-sm">
                1
             </button>
             <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                2
             </button>
             <button className="px-4 py-2 border border-gray-300 rounded text-sm flex items-center gap-1 hover:bg-gray-50 text-gray-700">
                Next <ChevronRight size={16} />
             </button>
           </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImportantPolicySummaries;
