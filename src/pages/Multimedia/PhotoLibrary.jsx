import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Images, Search, Calendar } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const photoSets = [
  { id: 1, photoCount: 24, title: "80th Anniversary of Vietnam's First National Assembly General Election", date: '06/01/2026', category: 'Current Affairs', image: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=800' },
  { id: 2, photoCount: 18, title: 'Minister of Justice Attends International Legal Conference in Hanoi', date: '10/03/2026', category: 'Events', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800' },
  { id: 3, photoCount: 32, title: 'National Law Day Launch Ceremony 2026', date: '09/11/2025', category: 'Current Affairs', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=800' },
  { id: 4, photoCount: 15, title: 'International Workshop on Building a Socialist Law-Based State', date: '15/02/2026', category: 'International', image: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=800' },
  { id: 5, photoCount: 41, title: '10th Session of the 15th National Assembly – Opening Ceremony', date: '21/10/2025', category: 'National Assembly', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800' },
  { id: 6, photoCount: 12, title: 'Ministry of Justice Delegation Visits Japan 2026', date: '18/03/2026', category: 'International', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=800' },
  { id: 7, photoCount: 9, title: 'Free Legal Consultation Workshop for Expatriates in Ho Chi Minh City', date: '05/03/2026', category: 'Community', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800' },
  { id: 8, photoCount: 20, title: 'Anti-Corruption Conference of the Ministry of Justice 2026', date: '28/02/2026', category: 'Events', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800' },
];

export default function PhotoLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const featuredItems = photoSets.slice(0, 2);
  const gridItems = photoSets.slice(2);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8fafc]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-gray-500 mb-5">
          <Link to="/" className="hover:text-[#1e3a8a] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gray-400">Multimedia</span>
          <ChevronRight size={14} />
          <span className="text-[#1e3a8a] font-medium">Photos</span>
        </nav>

        {/* Title row + Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Images size={26} className="text-[#1e3a8a]" />
            <h1 className="text-2xl font-bold text-[#1e3a8a]">Photos</h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#1e3a8a] w-52"
              />
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={15} className="text-gray-400" />
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#1e3a8a] w-32"
              />
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={15} className="text-gray-400" />
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#1e3a8a] w-32"
              />
            </div>
            <button className="bg-[#1e3a8a] text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#1e40af] transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Featured row – 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {featuredItems.map((item) => (
            <Link key={item.id} to={`/multimedia/photos/${item.id}`} className="block group relative overflow-hidden rounded-lg shadow">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.photoCount} photos
                </span>
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-4">
                  <p className="text-white font-semibold text-base leading-snug line-clamp-2">{item.title}</p>
                  <p className="text-gray-300 text-xs mt-1">{item.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Grid – 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {gridItems.map((item) => (
            <Link key={item.id} to={`/multimedia/photos/${item.id}`} className="block group rounded-lg overflow-hidden shadow bg-white">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded">
                  {item.photoCount} photos
                </span>
              </div>
              <div className="p-3">
                <p className="text-gray-800 font-semibold text-sm leading-snug line-clamp-2 group-hover:text-[#1e3a8a] transition-colors">{item.title}</p>
                <p className="text-gray-400 text-xs mt-1">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-1">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-500 disabled:opacity-40 hover:bg-gray-100 transition-colors"
          >
            Previous
          </button>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`px-3 py-1.5 text-sm rounded border transition-colors ${
                currentPage === p
                  ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
            disabled={currentPage === 3}
            className="px-3 py-1.5 text-sm rounded border border-gray-300 text-gray-600 disabled:opacity-40 hover:bg-gray-100 transition-colors"
          >
            Next
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
