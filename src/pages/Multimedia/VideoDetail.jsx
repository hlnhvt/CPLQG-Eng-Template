import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Play, Share2, Copy } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
];

const currentVideo = videos[0];
const relatedVideos = videos.slice(1); // 10 videos

const SLIDES_PER_PAGE = 5;
const TOTAL_SLIDES = Math.ceil(relatedVideos.length / SLIDES_PER_PAGE);

export default function VideoDetail() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const visibleVideos = relatedVideos.slice(
    currentSlide * SLIDES_PER_PAGE,
    currentSlide * SLIDES_PER_PAGE + SLIDES_PER_PAGE
  );

  const handlePrevSlide = () => setCurrentSlide((s) => Math.max(0, s - 1));
  const handleNextSlide = () => setCurrentSlide((s) => Math.min(TOTAL_SLIDES - 1, s + 1));

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
          <Link to="/multimedia/videos" className="hover:text-[#1e3a8a] transition-colors">Video</Link>
          <ChevronRight size={14} />
          <span className="text-[#1e3a8a] font-medium">Detail</span>
        </nav>

        {/* Video Player Area */}
        <div className="mb-4">
          <div className="relative bg-black rounded-t-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
            {/* Left arrow */}
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black rounded-full p-2 transition-colors z-10"
              aria-label="Previous video"
            >
              <ChevronLeft size={22} />
            </button>
            {/* Right arrow */}
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black rounded-full p-2 transition-colors z-10"
              aria-label="Next video"
            >
              <ChevronRight size={22} />
            </button>

            {/* Thumbnail */}
            <img
              src={currentVideo.thumbnail}
              alt={currentVideo.title}
              className="w-full h-full object-cover"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/60 rounded-full p-6">
                <Play size={44} className="text-white fill-white ml-1" />
              </div>
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-10 left-0 right-0 bg-black/70 px-4 py-3">
              <p className="text-white font-semibold text-base leading-snug line-clamp-2">
                {currentVideo.title}
              </p>
            </div>

            {/* Fake controls bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/90 px-4 py-2 flex items-center gap-3">
              {/* Progress bar */}
              <div className="flex-1 bg-gray-600 rounded-full h-1 relative cursor-pointer">
                <div className="bg-[#1e3a8a] h-1 rounded-full w-1/4" />
              </div>
              {/* Time */}
              <span className="text-white text-xs font-mono shrink-0">{currentVideo.duration}</span>
              {/* Icons */}
              <div className="flex items-center gap-2 text-white shrink-0">
                {/* Rewind */}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="cursor-pointer opacity-80 hover:opacity-100">
                  <path d="M12.5 3C7.81 3 4 6.81 4 11.5v.5H2l3 3 3-3H6v-.5C6 7.91 8.91 5 12.5 5S19 7.91 19 11.5 16.09 18 12.5 18c-1.93 0-3.68-.79-4.94-2.06L6.12 17.38C7.74 19 9.99 20 12.5 20c4.69 0 8.5-3.81 8.5-8.5S17.19 3 12.5 3z" />
                  <path d="M13 8h-1.5v5l4.28 2.54.72-1.21-3.5-2.08V8z" />
                </svg>
                {/* Forward */}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="cursor-pointer opacity-80 hover:opacity-100">
                  <path d="M18 9.5V6l6 6-6 6v-3.5c-5 0-8.5 1.5-11 5 1-5 4-10 11-11z" />
                </svg>
                {/* Volume */}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="cursor-pointer opacity-80 hover:opacity-100">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                {/* Fullscreen */}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="cursor-pointer opacity-80 hover:opacity-100">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Info row below video */}
          <div className="flex items-center justify-between bg-white border border-t-0 border-gray-200 rounded-b-lg px-4 py-2.5">
            <span className="text-sm text-gray-500">{currentVideo.date}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="flex items-center gap-1.5 border border-gray-300 text-gray-600 px-3 py-1.5 rounded text-sm hover:bg-gray-50 transition-colors"
              >
                <Copy size={14} />
                Copy Link
              </button>
              <button className="flex items-center gap-1.5 bg-[#1e3a8a] text-white px-3 py-1.5 rounded text-sm hover:bg-[#1e40af] transition-colors">
                <Share2 size={14} />
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Related Videos Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#1e3a8a] uppercase tracking-wide">
              Related Videos
            </h2>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
                className="border border-gray-300 rounded p-1.5 text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNextSlide}
                disabled={currentSlide === TOTAL_SLIDES - 1}
                className="border border-gray-300 rounded p-1.5 text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* 5-column carousel */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 overflow-hidden mb-4">
            {visibleVideos.map((video) => (
              <Link key={video.id} to={`/multimedia/videos/${video.id}`} className="block group">
                <div className="relative overflow-hidden rounded bg-black" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-1.5">
                      <Play size={14} className="text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <p className="mt-1.5 text-xs font-semibold text-gray-800 line-clamp-2 group-hover:text-[#1e3a8a] transition-colors leading-snug">
                  {video.title}
                </p>
                <p className="text-xs text-[#1e3a8a] mt-0.5">{video.date}</p>
              </Link>
            ))}
          </div>

          {/* Dot pagination */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentSlide ? 'bg-[#1e3a8a]' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
