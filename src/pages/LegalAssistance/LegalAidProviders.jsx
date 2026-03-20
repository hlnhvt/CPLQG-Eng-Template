import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Search, MapPin, Building2, UserCircle2, Phone, Mail, Award, Filter, BookmarkCheck } from 'lucide-react';

const LegalAidProviders = () => {
  const navigate = useNavigate();

  // "Organizations" or "Individuals"
  const [activeTab, setActiveTab] = useState("Organizations");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("All");

  const provinces = ["All", "Hanoi", "Ho Chi Minh City", "Da Nang", "Binh Duong", "Dong Nai"];

  // Mock Organizations
  const organizations = [
    {
       id: 1, name: "State Legal Aid Center of Hanoi",
       province: "Hanoi", role: "State Center", rating: "4.9", cases: 1250,
       address: "123 Tran Phu, Ba Dinh, Hanoi",
       phone: "024 3823 1234",
       tags: ["Civil", "Criminal", "Administrative"]
    },
    {
       id: 2, name: "Vietnam Lawyers Association - HCMC Branch",
       province: "Ho Chi Minh City", role: "Participating NGO", rating: "4.7", cases: 840,
       address: "45 Nguyen Hue, District 1, HCMC",
       phone: "028 3822 4567",
       tags: ["Family Law", "Labor Disputes"]
    },
    {
       id: 3, name: "Binh Duong Legal Support Center",
       province: "Binh Duong", role: "State Center", rating: "4.8", cases: 920,
       address: "10 Binh Duong Blvd, Thu Dau Mot",
       phone: "0274 381 2233",
       tags: ["FDI Support", "Industrial Relations"]
    }
  ];

  // Mock Individuals
  const individuals = [
    {
       id: 1, name: "Nguyen Van A", title: "Senior Legal Aid Lawyer",
       province: "Hanoi", exp: "15 Years", rating: "5.0", cases: 320,
       org: "State Legal Aid Center of Hanoi",
       specialties: ["Criminal Defense", "Administrative Law"],
       image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
       id: 2, name: "Tran Thi B", title: "Certified Legal Collaborator",
       province: "Ho Chi Minh City", exp: "8 Years", rating: "4.8", cases: 150,
       org: "Vietnam Lawyers Association - HCMC Branch",
       specialties: ["Family & Marriage", "Civil Disputes"],
       image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
       id: 3, name: "Le Hoang C", title: "Legal Expert",
       province: "Da Nang", exp: "12 Years", rating: "4.9", cases: 400,
       org: "Da Nang Legal Consulting Firm",
       specialties: ["Foreign Investment", "Labor Law"],
       image: "https://randomuser.me/api/portraits/men/55.jpg"
    }
  ];

  const getFilteredData = () => {
     let data = activeTab === "Organizations" ? organizations : individuals;
     
     if (selectedProvince !== "All") {
        data = data.filter(item => item.province === selectedProvince);
     }

     if (searchQuery) {
        data = data.filter(item => 
           item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           (item.role && item.role.toLowerCase().includes(searchQuery.toLowerCase())) ||
           (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()))
        );
     }
     return data;
  };

  const displayedData = getFilteredData();

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#1e3a8a] to-[#1e4fad] py-14 relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

            <div className="flex justify-center mb-4">
              <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight">
               Find Legal Aid <span className="text-amber-400">Providers</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed mb-8">
               Search our nationwide directory of certified legal aid organizations, defense lawyers, and consultants ready to assist you.
            </p>

            {/* Tab Bar within Header */}
            <div className="flex bg-white/10 p-1.5 rounded-xl border border-white/20 backdrop-blur-md">
               <button 
                  onClick={() => setActiveTab("Organizations")}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all text-sm md:text-base ${activeTab === 'Organizations' ? 'bg-white text-blue-900 shadow-md transform scale-105' : 'text-white hover:bg-white/10'}`}
               >
                  <Building2 size={18} /> Organizations
               </button>
               <button 
                  onClick={() => setActiveTab("Individuals")}
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all text-sm md:text-base ${activeTab === 'Individuals' ? 'bg-white text-blue-900 shadow-md transform scale-105' : 'text-white hover:bg-white/10'}`}
               >
                  <UserCircle2 size={18} /> Individual Providers
               </button>
            </div>
         </div>
      </div>

      <main className="flex-grow max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col md:flex-row gap-8">
         
         {/* Filter Sidebar */}
         <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col gap-6">
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 sticky top-8">
               <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-3">
                  <Filter size={18} className="text-blue-600" />
                  <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">Refine Search</h3>
               </div>

               <div className="flex flex-col gap-5">
                  {/* Location Filter */}
                  <div>
                     <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Location (Province/City)</label>
                     <select 
                        className="w-full border border-gray-200 bg-gray-50 rounded-lg p-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        value={selectedProvince}
                        onChange={(e) => setSelectedProvince(e.target.value)}
                     >
                        {provinces.map(prov => (
                           <option key={prov} value={prov}>{prov}</option>
                        ))}
                     </select>
                  </div>

                  {/* Expertise Filter (Placeholder) */}
                  <div>
                     <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Field of Law</label>
                     <select className="w-full border border-gray-200 bg-gray-50 rounded-lg p-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                        <option>All Fields</option>
                        <option>Criminal Defense</option>
                        <option>Civil Disputes</option>
                        <option>Family & Marriage</option>
                        <option>Foreign Investment</option>
                     </select>
                  </div>

                  {/* Reset Button */}
                  <button 
                     onClick={() => {
                        setSelectedProvince('All');
                        setSearchQuery('');
                     }}
                     className="w-full mt-2 text-xs font-bold text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
                  >
                     Reset Filters
                  </button>
               </div>
            </div>
         </div>

         {/* Results Area */}
         <div className="w-full md:w-3/4 lg:w-3/4 flex flex-col gap-6">
            
            {/* Search Input */}
            <div className="relative">
               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={20} />
               </span>
               <input 
                  type="text" 
                  placeholder={`Search for a specific ${activeTab.slice(0, -1).toLowerCase()}...`}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-gray-900 font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
               <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-lg shadow-sm transition-colors text-sm">
                  Search
               </button>
            </div>

            {/* Results Count Summary */}
            <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm flex items-center justify-between">
               <span className="text-gray-700 font-medium text-sm">
                  Found <span className="font-extrabold text-blue-700 text-lg mx-1">{displayedData.length}</span> {activeTab.toLowerCase()} matching your criteria.
               </span>
            </div>

            {/* List View */}
            <div className="flex flex-col gap-5">
               {displayedData.length === 0 ? (
                  <div className="bg-white border border-gray-100 p-10 text-center rounded-xl shadow-sm">
                     <p className="text-gray-500">No results found for your search criteria. Please adjust your filters.</p>
                  </div>
               ) : (
                  displayedData.map((item) => (
                     <div key={item.id} className="bg-white border border-gray-200 p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col sm:flex-row gap-6 relative group overflow-hidden">
                        
                        {/* Status Label (Mock) */}
                        <div className="absolute top-0 right-0 bg-green-100 text-green-700 text-[10px] font-extrabold px-3 py-1 rounded-bl-lg uppercase tracking-wider flex items-center gap-1">
                           <BookmarkCheck size={12} /> Certified
                        </div>

                        {/* Visual Entity Icon/Image */}
                        <div className="shrink-0 flex items-start justify-center">
                           {activeTab === "Organizations" ? (
                              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center border-2 border-dashed ${item.role === 'State Center' ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-amber-50 border-amber-200 text-amber-600'}`}>
                                 <Building2 size={32} strokeWidth={1.5} />
                              </div>
                           ) : (
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              </div>
                           )}
                        </div>

                        {/* Content */}
                        <div className="flex-grow flex flex-col justify-center">
                           
                           {/* Meta tags above title */}
                           <div className="flex flex-wrap items-center gap-2 mb-2">
                              {activeTab === "Organizations" ? (
                                 <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider ${item.role === 'State Center' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
                                    {item.role}
                                 </span>
                              ) : (
                                 <span className="text-[10px] bg-sky-100 text-sky-700 font-extrabold uppercase px-2 py-0.5 rounded tracking-wider">
                                    {item.title}
                                 </span>
                              )}
                              <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded flex items-center gap-1">
                                 <MapPin size={10} /> {item.province}
                              </span>
                           </div>

                           <h3 className="text-xl font-extrabold text-[#1e3a8a] group-hover:text-blue-600 transition-colors mb-2">
                              {item.name}
                           </h3>
                           
                           {/* Details & Tags */}
                           {activeTab === "Organizations" ? (
                              <div className="flex flex-col gap-2 mb-4">
                                 <span className="text-sm font-medium text-gray-700 flex items-center gap-1.5"><MapPin size={14} className="text-gray-400"/> {item.address}</span>
                                 <span className="text-sm font-medium text-gray-700 flex items-center gap-1.5"><Phone size={14} className="text-gray-400"/> {item.phone}</span>
                              </div>
                           ) : (
                              <div className="flex flex-col gap-2 mb-4 text-sm font-medium text-gray-700">
                                 <p><strong>Organization:</strong> {item.org}</p>
                                 <p className="flex items-center gap-2">
                                    <Award size={14} className="text-amber-500" /> {item.exp} Experience • {item.cases} Cases Completed
                                 </p>
                              </div>
                           )}
                           
                           <div className="flex flex-wrap gap-2 mt-auto">
                              {(activeTab === "Organizations" ? item.tags : item.specialties).map((tag, i) => (
                                 <span key={i} className="bg-gray-50 border border-gray-200 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                    {tag}
                                 </span>
                              ))}
                           </div>

                        </div>
                        
                        {/* Right Action Area */}
                        <div className="shrink-0 flex sm:flex-col justify-center gap-3 pt-4 sm:pt-0 sm:pl-6 sm:border-l border-gray-100 mt-4 sm:mt-0">
                           <Link 
                              to={`/legal-aid/${activeTab.toLowerCase()}/${item.id}`}
                              className="w-full sm:w-auto bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors text-center whitespace-nowrap shadow-sm"
                           >
                              View Profile
                           </Link>
                           <button className="w-full sm:w-auto bg-white border border-amber-300 hover:bg-amber-50 text-amber-700 font-bold py-2.5 px-6 rounded-lg text-sm transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap">
                              <Phone size={14} /> Contact
                           </button>
                        </div>

                     </div>
                  ))
               )}
            </div>

            {/* Pagination Placeholder */}
            {displayedData.length > 0 && (
               <div className="mt-8 flex justify-center items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50">
                     {'<'}
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1e3a8a] text-white font-bold shadow-sm">
                     1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold transition-colors">
                     2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                     {'>'}
                  </button>
               </div>
            )}
         </div>

      </main>

      <Footer />
    </div>
  );
};

export default LegalAidProviders;
