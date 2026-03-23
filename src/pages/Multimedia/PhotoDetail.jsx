import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Clock, Download, Link as LinkIcon } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const photoSetData = {
  id: 1,
  title: "80th Anniversary of Vietnam's First National Assembly General Election",
  category: 'CURRENT AFFAIRS',
  subCategory: 'EVENTS – POLITICS',
  date: '06/01/2026 09:00',
  author: 'Minh Tuan – VNA',
  description: "On January 6, 2026, in Hanoi, the National Assembly Standing Committee and the National Assembly Office solemnly organized the Ceremony marking the 80th Anniversary of the First General Election of Vietnam's National Assembly (January 6, 1946 – January 6, 2026). On behalf of the Party and State leadership, General Secretary To Lam attended and delivered a speech at the ceremony. This is a major political event, affirming the great historical significance of the first General Election – the foundation for the birth and development of the Socialist Law-Based State of Vietnam.",
  photos: [
    { url: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=1200', caption: 'Overview of the 80th Anniversary Ceremony of the First General Election at Hanoi Opera House.' },
    { url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200', caption: 'Legal documents and gavel representing the democratic process.' },
    { url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=1200', caption: "Ho Chi Minh City – a symbol of Vietnam's development." },
    { url: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=1200', caption: 'National Assembly delegates attending the ceremony.' },
    { url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200', caption: 'Signing of commemorative documents.' },
    { url: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=1200', caption: 'Cultural performance honoring the anniversary.' },
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200', caption: 'Foreign delegates participating in the event.' },
    { url: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=1200', caption: 'Closing remarks by the National Assembly Chairman.' },
  ],
};

const relatedSets = [
  { id: 2, photoCount: 18, title: 'Minister of Justice Attends International Legal Conference in Hanoi', date: '10/03/2026', category: 'CURRENT AFFAIRS', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400' },
  { id: 3, photoCount: 32, title: 'National Law Day Launch Ceremony 2026', date: '09/11/2025', category: 'CURRENT AFFAIRS', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=400' },
  { id: 4, photoCount: 15, title: 'International Workshop on Building a Socialist Law-Based State', date: '15/02/2026', category: 'CURRENT AFFAIRS', image: 'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=400' },
];

export default function PhotoDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = photoSetData.photos;
  const total = photos.length;

  const handlePrev = () => setCurrentIndex((i) => (i - 1 + total) % total);
  const handleNext = () => setCurrentIndex((i) => (i + 1) % total);

  const currentPhoto = photos[currentIndex];

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
          <Link to="/multimedia/photos" className="hover:text-[#1e3a8a] transition-colors">Photos</Link>
          <ChevronRight size={14} />
          <span className="text-[#1e3a8a] font-medium">Photo Detail</span>
        </nav>

        {/* Main content: 2 columns */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          {/* LEFT COLUMN */}
          <div className="lg:w-[65%]">
            {/* Main image with navigation */}
            <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={currentPhoto.url}
                alt={currentPhoto.caption}
                className="w-full h-full object-contain"
              />
              {/* Left arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>
              {/* Right arrow */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
              {/* Counter */}
              <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {currentIndex + 1} / {total}
              </span>
            </div>

            {/* Caption */}
            <div className="bg-gray-100 px-4 py-2 rounded-b text-xs text-gray-500 italic">
              {currentPhoto.caption}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
              {photos.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
                    idx === currentIndex ? 'border-[#1e3a8a]' : 'border-transparent'
                  }`}
                >
                  <img src={photo.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:w-[35%] flex flex-col gap-4">
            {/* Category label */}
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
              {photoSetData.category} &raquo; {photoSetData.subCategory}
            </p>

            {/* Title */}
            <h1 className="text-xl font-bold text-[#1e3a8a] leading-snug">
              {photoSetData.title}
            </h1>

            {/* Date + Author */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock size={14} className="text-gray-400" />
              <span>{photoSetData.date}</span>
              <span className="text-gray-300">|</span>
              <span>{photoSetData.author}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">{photoSetData.description}</p>

            {/* Action buttons */}
            <div className="flex flex-col gap-2 mt-2">
              <a
                href={currentPhoto.url}
                download
                className="flex items-center justify-center gap-2 bg-[#1e3a8a] text-white px-4 py-2.5 rounded font-medium text-sm hover:bg-[#1e40af] transition-colors"
              >
                <Download size={16} />
                Download Current Photo
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2.5 rounded font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                <LinkIcon size={16} />
                Copy Link
              </button>
            </div>

            {/* Back link */}
            <Link to="/multimedia/photos" className="text-sm text-[#1e3a8a] hover:underline mt-1 inline-flex items-center gap-1">
              <ChevronLeft size={14} />
              Back to photo list
            </Link>
          </div>
        </div>

        {/* Related Photos */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-base font-bold text-[#1e3a8a] uppercase tracking-wide">
              Photos &gt; Current Affairs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedSets.map((item) => (
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
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-1">{item.category}</p>
                  <p className="text-gray-800 font-semibold text-sm leading-snug line-clamp-2 group-hover:text-[#1e3a8a] transition-colors">{item.title}</p>
                  <p className="text-gray-400 text-xs mt-1">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
