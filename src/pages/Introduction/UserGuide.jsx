import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, Filter, FileText, Eye, Download, ChevronRight, ChevronDown, ChevronLeft, SlidersHorizontal, Settings2, LayoutList } from 'lucide-react';

const UserGuide = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const topics = [
    "Forum", "Feedback", "Legal Support", "Survey", "Technical", "Report", "Notification", "Legal Search", "AI Assistant", "Account", "Consultancy"
  ];

  const operations = [
    "Newsletter", "Expertise", "Technology", "Draft Legal Documents", "Q&A", "Recommendation", "Research & Exchange", "Personal Management", "User Management", "Mobile Devices", "Statistics", "Legal Normative Documents", "Policy Opinions"
  ];

  const guides = [
    {
      id: 1,
      title: "Account Registration and System Login Guide",
      format: "PDF",
      filename: "HDSD_01_DangKy_DangNhap_v1.0.pdf",
      date: "05/01/2026",
      badges: ["Account", "User Management"],
      desc: "Comprehensive steps to create an account, verify email, and log into the National Legal Portal...",
      fileColor: "text-red-500 bg-red-50 border-red-200"
    },
    {
      id: 2,
      title: "Legal Violation Lookup Guide",
      format: "PDF",
      filename: "HDSD_02_TraCuu_VPPL_v2.1.pdf",
      date: "06/01/2026",
      badges: ["Legal Search", "Legal Normative Documents"],
      desc: "Detailed instructions on methods to search for legal normative documents using basic, advanced, and domain-specific search...",
      fileColor: "text-red-500 bg-red-50 border-red-200"
    },
    {
      id: 3,
      title: "Using the Legal Q&A Feature Guide",
      format: "PDF",
      filename: "HDSD_03_HoiDap_PhapLuat_v1.5.pdf",
      date: "10/01/2026",
      badges: ["Legal Support", "Q&A"],
      desc: "Guide users on how to submit legal questions, track processing status, and interact with legal experts...",
      fileColor: "text-red-500 bg-red-50 border-red-200"
    },
    {
      id: 4,
      title: "Online Legal Consultation Booking Guide",
      format: "DOCX",
      filename: "HDSD_04_DatLich_TuVan_v1.0.docx",
      date: "12/01/2026",
      badges: ["Consultancy", "Expertise"],
      desc: "Procedure to schedule an appointment, confirm schedules, participate in video calls with lawyers, and rate consultation quality...",
      fileColor: "text-blue-500 bg-blue-50 border-blue-200"
    },
    {
      id: 5,
      title: "Participating in Draft Document Feedback Guide",
      format: "PDF",
      filename: "HDSD_05_GopY_DuThao_v2.0.pdf",
      date: "15/01/2026",
      badges: ["Feedback", "Draft Legal Documents"],
      desc: "Steps to access draft documents, read detailed contents, and submit contributions to the drafting agencies...",
      fileColor: "text-red-500 bg-red-50 border-red-200"
    },
    {
      id: 6,
      title: "Using AI Legal Assistant Guide",
      format: "PDF",
      filename: "HDSD_06_TroLy_AI_v1.1.pdf",
      date: "18/01/2026",
      badges: ["AI Assistant", "Technology"],
      desc: "How to interact with the integrated AI legal assistant: asking questions in natural language, looking up clauses, reviewing documents...",
      fileColor: "text-red-500 bg-red-50 border-red-200"
    },
    {
      id: 7,
      title: "Personal Legal Bookshelf Management Guide",
      format: "DOCX",
      filename: "HDSD_07_TuSach_CaNhan_v1.0.docx",
      date: "20/01/2026",
      badges: ["Account", "Personal Management"],
      desc: "Save documents into personal collections, create notes, add custom tags, and export list of saved documents...",
      fileColor: "text-blue-500 bg-blue-50 border-blue-200"
    },
    {
      id: 8,
      title: "Legal Information Notification Registration Guide",
      format: "PDF",
      filename: "HDSD_08_DangKy_ThongBao_v1.3.pdf",
      date: "22/01/2026",
      badges: ["Notification", "Newsletter"],
      desc: "Set up areas of interest, frequency of notifications, and manage newsletter subscriptions via email...",
      fileColor: "text-red-500 bg-red-50 border-red-200"
    },
    {
      id: 9,
      title: "Using the Research & Exchange Forum Guide",
      format: "PDF",
      filename: "HDSD_09_DienDan_NghienCuu_v1.1.pdf",
      date: "25/01/2026",
      badges: ["Forum", "Research & Exchange"],
      desc: "Rules for participating in academic forums: posting research articles, commenting, and interacting with colleagues...",
      fileColor: "text-red-500 bg-red-50 border-red-200"
    },
    {
      id: 10,
      title: "Mobile Device Access Guide",
      format: "PDF",
      filename: "HDSD_10_Mobile_PWA_v1.2.pdf",
      date: "28/01/2026",
      badges: ["Technical", "Mobile Devices"],
      desc: "Instructions for accessing and using features of the National Legal Portal on mobile devices, interface customization...",
      fileColor: "text-red-500 bg-red-50 border-red-200"
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f4f7fb] selection:bg-blue-200">
      <Header />
      
      {/* Banner Area */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] pt-12 pb-12 px-4 relative">
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <div className="flex items-center gap-2 text-sm text-blue-200 mb-6 font-medium">
             <a href="/" className="hover:text-white transition-colors">Home</a>
             <ChevronRight className="w-4 h-4" />
             <span className="text-white">User Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            User Guide
          </h1>
          <p className="text-base md:text-lg text-blue-100 max-w-3xl font-light">
            A comprehensive collection of guides, documents, and tutorial videos on all features of the National Legal Portal.
          </p>
        </div>
      </section>

      {/* Overlapping Search Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative -mt-8 z-20 mb-8">
         <div className="bg-white p-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center border border-gray-100">
            <div className="pl-4 pr-3 text-gray-400">
               <Search className="w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Enter document keyword to search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow py-3 bg-transparent outline-none text-gray-800 placeholder-gray-400 font-medium"
            />
            <button className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap">
              <Search className="w-4 h-4" /> Search
            </button>
         </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10 flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar Filter */}
        <aside className="w-full lg:w-1/4 shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
             <div className="flex items-center gap-2 font-bold text-gray-800 mb-6 border-b border-gray-100 pb-4">
                <Settings2 className="w-5 h-5 text-blue-600" />
                <span>Filters</span>
             </div>
             
             {/* Topics Section */}
             <div className="mb-8">
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-4">Topics</h3>
                <ul className="space-y-3">
                   {topics.map((topic, idx) => (
                     <li key={idx} className="flex items-center gap-3">
                        <input type="checkbox" id={`topic-${idx}`} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-600 cursor-pointer" />
                        <label htmlFor={`topic-${idx}`} className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">
                           {topic}
                        </label>
                     </li>
                   ))}
                </ul>
             </div>

             {/* Operations Section */}
             <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-4">Operations</h3>
                <ul className="space-y-3">
                   {operations.map((op, idx) => (
                     <li key={idx} className="flex items-center gap-3">
                        <input type="checkbox" id={`op-${idx}`} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-600 cursor-pointer" />
                        <label htmlFor={`op-${idx}`} className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">
                           {op}
                        </label>
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <div className="w-full lg:w-3/4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             
             {/* Header */}
             <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 p-6 border-b border-gray-100 bg-gray-50/50">
               <LayoutList className="w-4 h-4" />
               <span>Total: <span className="text-gray-900 font-bold">{guides.length} documents</span></span>
             </div>

             {/* List */}
             <div className="flex flex-col">
               {guides.map((guide) => (
                 <div key={guide.id} className="group border-b border-gray-100 last:border-b-0 hover:bg-blue-50/30 transition-colors duration-300 p-6 flex flex-col md:flex-row gap-5">
                    {/* Icon */}
                    <div className="shrink-0 pt-1">
                       <div className={`w-10 h-12 rounded-lg flex items-center justify-center border shadow-sm ${guide.fileColor}`}>
                          <FileText className="w-5 h-5" />
                       </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow">
                       <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-[15px] font-bold text-gray-900 mb-1.5 group-hover:text-[#1e3a8a] transition-colors">
                              {guide.title}
                            </h3>
                            <div className="flex items-center flex-wrap gap-2 text-[13px] text-gray-500 mb-3">
                               <span className="font-bold text-gray-700">{guide.format}</span>
                               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                               <span>{guide.filename}</span>
                               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                               <span>{guide.date}</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                               {guide.badges.map((badge, bIdx) => (
                                 <span key={bIdx} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider rounded border border-blue-100">
                                   {badge}
                                 </span>
                               ))}
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed mb-3">
                              {guide.desc}
                            </p>
                            <button className="text-[13px] font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1 group/btn">
                               <ChevronDown className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" /> Read more
                            </button>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-row gap-2 shrink-0 xl:pt-0 pt-2">
                             <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-blue-50/50 hover:bg-blue-100 text-blue-600 rounded-lg text-[13px] font-semibold transition-colors border border-blue-100 whitespace-nowrap">
                               <Eye className="w-3.5 h-3.5" /> View
                             </button>
                             <button className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 text-gray-700 rounded-lg text-[13px] font-semibold transition-colors border border-gray-200 whitespace-nowrap shadow-sm">
                               <Download className="w-3.5 h-3.5" /> Download
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
             </div>

             {/* Pagination */}
             <div className="p-6 border-t border-gray-100 flex justify-center bg-gray-50/30">
                <div className="flex items-center gap-2">
                   <button className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                      <ChevronLeft className="w-4 h-4" />
                   </button>
                   <button className="w-9 h-9 rounded-md bg-[#1e40af] text-white text-sm font-bold flex items-center justify-center shadow-sm">
                      1
                   </button>
                   <button className="w-9 h-9 rounded-md border border-gray-200 bg-white text-gray-600 text-sm font-bold hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-center">
                      2
                   </button>
                   <button className="w-9 h-9 rounded-md border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center">
                      <ChevronRight className="w-4 h-4" />
                   </button>
                </div>
             </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default UserGuide;
