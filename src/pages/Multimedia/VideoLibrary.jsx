import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Calendar, Play } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const featuredVideo = {
  id: 1,
  title: 'Prime Minister: Urgently pilot the evaluation and scoring of law-making work',
  date: '12/03/2026',
  duration: '05:32',
  thumbnail: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=1200',
};

const videos = [
  { id: 1, title: 'Prime Minister: Urgently pilot the evaluation and scoring of law-making work', date: '12/03/2026', duration: '05:32', thumbnail: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Minister of Justice speaks at International Legal Conference in Hanoi 2026', date: '10/03/2026', duration: '08:14', thumbnail: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'Overview of the 10th Session of the 15th National Assembly – Opening Ceremony', date: '21/10/2025', duration: '12:47', thumbnail: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'National Law Day Launch Ceremony in Vietnam 2026', date: '09/11/2025', duration: '06:05', thumbnail: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'National Assembly Delegation Visits Japan 2026', date: '18/03/2026', duration: '03:22', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Workshop on Building a Socialist Law-Based State – Session 2', date: '15/02/2026', duration: '45:30', thumbnail: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600' },
  { id: 7, title: 'Free Legal Aid Consultation for Foreign Nationals – HCMC', date: '05/03/2026', duration: '07:18', thumbnail: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=600' },
  { id: 8, title: 'Press Conference: New Investment Law Amendments Explained', date: '02/03/2026', duration: '15:44', thumbnail: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=600' },
  { id: 9, title: 'Anti-Corruption Symposium – Ministry of Justice 2026', date: '28/02/2026', duration: '22:10', thumbnail: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600' },
  { id: 10, title: 'Land Law Reform: Key Changes for Foreign Investors', date: '20/02/2026', duration: '09:33', thumbnail: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=600' },
  { id: 11, title: 'Digital Transformation in Judicial Administration', date: '15/02/2026', duration: '11:05', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
  { id: 12, title: 'Vietnam – EU Legal Cooperation Forum 2026', date: '10/02/2026', duration: '33:21', thumbnail: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=600' },
  { id: 13, title: 'Intellectual Property Rights Enforcement – New Decree Explained', date: '05/02/2026', duration: '08:47', thumbnail: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600' },
  { id: 14, title: 'Corporate Bond Market Reform – Ministry of Finance Briefing', date: '01/02/2026', duration: '14:22', thumbnail: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=600' },
  { id: 15, title: 'Personal Data Protection Decree – Implementation Guide', date: '25/01/2026', duration: '06:55', thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
  { id: 16, title: 'Legal Aid System: Supporting Vulnerable Groups in Vietnam', date: '20/01/2026', duration: '10:12', thumbnail: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=600' },
];

export default function VideoLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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
          <span className="text-[#1e3a8a] font-medium">Videos</span>
        </nav>

        {/* Featured Video */}
        <div className="mb-6">
          <Link to={`/multimedia/videos/${featuredVideo.id}`} className="block group">
            <div className="relative overflow-hidden rounded-lg bg-black" style={{ aspectRatio: '16/9' }}>
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 rounded-full p-5 group-hover:bg-black/80 transition-colors">
                  <Play size={38} className="text-white fill-white ml-1" />
                </div>
              </div>
              <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
                {featuredVideo.duration}
              </span>
            </div>
            <h2 className="mt-3 text-xl font-bold text-gray-800 group-hover:text-[#1e3a8a] transition-colors leading-snug">
              {featuredVideo.title}
            </h2>
            <p className="text-sm text-gray-400 mt-1">{featuredVideo.date}</p>
          </Link>
        </div>

        {/* Search row */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search videos..."
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

        {/* List header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-[#1e3a8a] text-white text-sm font-semibold px-4 py-1.5 rounded">
            Video List
          </span>
          <span className="text-sm text-gray-500">({videos.length} videos)</span>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {videos.map((video) => (
            <Link key={video.id} to={`/multimedia/videos/${video.id}`} className="block group">
              <div className="relative overflow-hidden rounded-lg bg-black" style={{ aspectRatio: '16/9' }}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-300"
                />
                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 rounded-full p-2">
                    <Play size={18} className="text-white fill-white ml-0.5" />
                  </div>
                </div>
                {/* Duration badge */}
                <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-[#1e3a8a] transition-colors leading-snug">
                {video.title}
              </p>
              <p className="text-xs text-[#1e3a8a] mt-1">{video.date}</p>
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
