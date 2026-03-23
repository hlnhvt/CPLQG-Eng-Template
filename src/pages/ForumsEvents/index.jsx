import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ChevronRight, Search } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "CELEBRATING THE ELECTION DAY OF THE 16TH NATIONAL ASSEMBLY AND PEOPLE'S COUNCIL MEMBERS FOR THE 2026–2031 TERM",
    excerpt:
      'On March 15, 2026, voters nationwide will cast ballots to elect members of the 16th National Assembly and People\'s Councils at all levels for the 2026–2031 term. This is a major...',
    type: 'Event',
    speakers: [],
    from: '15/03/2026 07:00',
    to: 'Updating',
    status: 'Ongoing',
    image:
      'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    title: 'IDENTIFYING BOTTLENECKS AND PROPOSING SOLUTIONS RELATED TO THE LAND LAW',
    excerpt:
      'The conference focused on exchanging and discussing difficulties and obstacles that businesses face in the field of land and institutional matters related to land law enforcement...',
    type: 'Forum',
    speakers: ['Mr. Nguyen Thanh Ngoc', 'Mr. Nguyen Thanh Tu'],
    from: '22/09/2025 14:00',
    to: '22/09/2025 17:15',
    status: 'Ended',
    image:
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: 'RESPONDING TO THE LAW DAY OF THE SOCIALIST REPUBLIC OF VIETNAM 2025',
    excerpt:
      'On November 7, 2025, at the Ministry of Justice headquarters, the Law Day Ceremony of Vietnam 2025 will be held in a direct format combined with an online broadcast...',
    type: 'Event',
    speakers: ['Ministry of Justice'],
    from: '07/11/2025 15:00',
    to: '07/11/2025 18:00',
    status: 'Ended',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    title: 'CELEBRATING THE 14TH NATIONAL CONGRESS OF THE COMMUNIST PARTY OF VIETNAM',
    excerpt:
      'The 14th National Congress of the Communist Party of Vietnam is a major political event, defining the direction of national development in the new era. In the context...',
    type: 'Event',
    speakers: [],
    from: '19/01/2026 08:00',
    to: '25/01/2026 12:59',
    status: 'Ended',
    image:
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=400',
  },
];

const EVENT_TYPES = ['Forum', 'Event', 'Seminar', 'Conference'];
const STATUSES = ['Upcoming', 'Ongoing', 'Ended'];

const statusBadge = (status) => {
  if (status === 'Ongoing')
    return (
      <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-700">
        Ongoing
      </span>
    );
  if (status === 'Upcoming')
    return (
      <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-green-100 text-green-700">
        Upcoming
      </span>
    );
  return (
    <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-red-100 text-red-600">
      Ended
    </span>
  );
};

const ForumsEvents = () => {
  const [selectedTypes, setSelectedTypes] = useState(new Set());
  const [selectedStatuses, setSelectedStatuses] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const toggleType = (type) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      next.has(type) ? next.delete(type) : next.add(type);
      return next;
    });
    setCurrentPage(1);
  };

  const toggleStatus = (status) => {
    setSelectedStatuses((prev) => {
      const next = new Set(prev);
      next.has(status) ? next.delete(status) : next.add(status);
      return next;
    });
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedTypes(new Set());
    setSelectedStatuses(new Set());
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setSearchQuery(inputValue);
    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const filtered = events.filter((ev) => {
    const matchType = selectedTypes.size === 0 || selectedTypes.has(ev.type);
    const matchStatus = selectedStatuses.size === 0 || selectedStatuses.has(ev.status);
    const matchQuery =
      searchQuery === '' ||
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchStatus && matchQuery;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center gap-1.5 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-700 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-800 font-medium">Forums &amp; Events</span>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow max-w-[1200px] mx-auto px-4 py-8 w-full flex flex-col lg:flex-row gap-6">
        {/* Filter panel */}
        <aside className="w-full lg:w-[280px] flex-shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            {/* Filter header */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-gray-800 text-base">Filter</span>
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:underline"
              >
                Clear
              </button>
            </div>

            {/* Event type */}
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">
                Event type
              </p>
              <div className="flex flex-col gap-2">
                {EVENT_TYPES.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-blue-700 rounded"
                      checked={selectedTypes.has(type)}
                      onChange={() => toggleType(type)}
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <hr className="border-gray-200 my-4" />

            {/* Status */}
            <div>
              <p className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">
                Status
              </p>
              <div className="flex flex-col gap-2">
                {STATUSES.map((status) => (
                  <label
                    key={status}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-blue-700 rounded"
                      checked={selectedStatuses.has(status)}
                      onChange={() => toggleStatus(status)}
                    />
                    <span className="text-sm text-gray-700">{status}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Content area */}
        <section className="flex-1 min-w-0 flex flex-col gap-4">
          {/* Search row */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search events & forums..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-5 py-2.5 bg-[#1e3a8a] hover:bg-[#1e3490] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </div>

          {/* Sub-row */}
          <div className="flex items-center justify-between">
            <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
              Advanced search ▼
            </button>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="text-sm border border-gray-300 rounded-md px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value={10}>10 events/page</option>
              <option value={20}>20 events/page</option>
              <option value={50}>50 events/page</option>
            </select>
          </div>

          {/* Result count */}
          <p className="text-sm text-gray-600">
            Total: <span className="font-semibold">{filtered.length}</span> event{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Event cards */}
          <div className="flex flex-col gap-4">
            {paginated.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-400 text-sm">
                No events found matching your criteria.
              </div>
            ) : (
              paginated.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex gap-4 hover:shadow-md transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="flex-shrink-0">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-[180px] h-[120px] object-cover rounded-lg"
                    />
                  </div>

                  {/* Middle */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <Link
                        to={`/forums-events/${ev.id}`}
                        className="text-[#1e3a8a] font-bold uppercase text-sm leading-snug hover:underline line-clamp-2 block"
                      >
                        {ev.title}
                      </Link>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{ev.excerpt}</p>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-700">
                        {ev.type}
                      </span>
                      {ev.speakers.map((sp) => (
                        <span
                          key={sp}
                          className="px-2 py-0.5 rounded text-xs font-semibold bg-green-100 text-green-700"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right box */}
                  <div className="w-[180px] flex-shrink-0 bg-gray-50 rounded-lg border border-gray-200 p-3 text-xs flex flex-col gap-1">
                    <div>
                      <span className="text-gray-500 font-medium">From:</span>{' '}
                      <span className="text-gray-800 font-semibold">{ev.from}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-medium">To:</span>{' '}
                      <span className="text-gray-800 font-semibold">{ev.to}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-gray-500 font-medium">Status:</span>{' '}
                      {statusBadge(ev.status)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 || filtered.length > 0 ? (
            <div className="flex items-center justify-center gap-1 mt-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-3 py-1.5 rounded-md text-sm border border-gray-300 bg-white text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
                    currentPage === page
                      ? 'bg-[#1e3a8a] text-white border-[#1e3a8a] font-semibold'
                      : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-3 py-1.5 rounded-md text-sm border border-gray-300 bg-white text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Next
              </button>
            </div>
          ) : null}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForumsEvents;
