import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Clock, Download, FileImage, User } from 'lucide-react';

const eventData = {
  id: 2,
  type: 'Forum',
  status: 'Ended',
  title: 'Identifying Bottlenecks and Proposing Solutions Related to the Land Law',
  startTime: '22/09/2025',
  startClock: '14:00',
  endTime: '22/09/2025',
  endClock: '17:15',
  description: `The conference focused on exchanging and discussing difficulties and obstacles that businesses face in the field of land and institutional matters related to land law enforcement in the context of implementing major guidelines of the Party and State at Resolution No. 66-NQ/TW dated April 30, 2025 of the Politburo on innovating the work of building and enforcing laws to meet the requirements of national development in the new era; Resolution No. 68-NQ/TW dated May 4, 2025 of the Politburo on private economic development, creating a legal basis and conditions to propose, research, and contribute to improving institutions and legal policies on land suitable to the requirements of socio-economic development of the country in the coming time.`,
  attachments: [
    'Organization of the Seminar on land-related issues (1).docx',
    'Issuing the Plan to organize the Seminar on land-related issues (1).docx',
    'Program of the Land Law Seminar (1).docx',
  ],
  speakers: [
    {
      name: 'Mr. Nguyen Thanh Ngoc',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Mr. Nguyen Thanh Tu',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    },
    { name: 'Ministry of Agriculture Leadership', image: null },
  ],
  schedule: [
    { time: '13:30 – 14:00', activity: 'Registration and welcoming delegates' },
    { time: '14:00 – 14:10', activity: 'Announcing the reason and introducing delegates' },
    { time: '14:10 – 14:20', activity: 'Opening remarks' },
    { time: '14:20 – 14:45', activity: 'Main presentation' },
    { time: '14:45 – 15:45', activity: 'Discussion and Q&A session' },
    { time: '15:45 – 16:30', activity: 'Group discussion on proposed solutions' },
    { time: '16:30 – 17:00', activity: 'Summary and closing remarks' },
  ],
  organizations: [
    'Representative of the Leadership of the Department of Civil – Economic Law, Ministry of Justice',
    'Representative of the Leadership of the Land Management Department, Ministry of Agriculture and Environment',
    'Mr. Phan Duc Hieu',
    'Mr. Can Van Luc',
    'Mr. Nguyen Quoc Hiep',
    'Mr. Nguyen Van Dinh',
  ],
};

const StatusBadge = ({ status }) => {
  if (status === 'Ended')
    return (
      <span className="inline-block px-3 py-1 rounded text-sm font-semibold bg-red-100 text-red-600">
        Ended
      </span>
    );
  if (status === 'Ongoing')
    return (
      <span className="inline-block px-3 py-1 rounded text-sm font-semibold bg-blue-100 text-blue-600">
        Ongoing
      </span>
    );
  return (
    <span className="inline-block px-3 py-1 rounded text-sm font-semibold bg-green-100 text-green-600">
      Upcoming
    </span>
  );
};

const StatusText = ({ status }) => {
  if (status === 'Ended') return <span className="text-sm font-semibold text-red-600">Ended</span>;
  if (status === 'Ongoing')
    return <span className="text-sm font-semibold text-blue-600">Ongoing</span>;
  return <span className="text-sm font-semibold text-green-600">Upcoming</span>;
};

const EventDetail = () => {
  const { id } = useParams();
  // In a real app you'd look up by id; here we use the single mock record
  const ev = eventData;

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />

      <main className="flex-grow">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          {/* Back link */}
          <Link
            to="/forums-events"
            className="text-sm text-[#1e3a8a] hover:underline inline-flex items-center gap-1"
          >
            ← Back to list
          </Link>

          {/* Page label */}
          <p className="text-gray-500 text-sm font-medium mt-4">Forums &amp; Events</p>

          {/* Badges row */}
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-block px-3 py-1 rounded text-sm font-semibold bg-blue-100 text-blue-700">
              {ev.type}
            </span>
            <StatusBadge status={ev.status} />
          </div>

          {/* Event title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-4 leading-snug">
            {ev.title}
          </h1>

          {/* Metadata grid */}
          <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-2 gap-4 mb-6 border border-gray-200">
            {/* Start time */}
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">
                Start time
              </p>
              <p className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                <Clock size={14} className="text-gray-400" />
                {ev.startTime} {ev.startClock}
              </p>
            </div>
            {/* End time */}
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">
                End time
              </p>
              <p className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                <Clock size={14} className="text-gray-400" />
                {ev.endTime} {ev.endClock}
              </p>
            </div>
            {/* Type */}
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">
                Type
              </p>
              <p className="text-sm font-semibold text-gray-800">{ev.type}</p>
            </div>
            {/* Status */}
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">
                Status
              </p>
              <StatusText status={ev.status} />
            </div>
          </div>

          {/* Two-column layout: left 60% / right 40% */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Left column */}
            <div className="flex-[3] min-w-0 flex flex-col gap-6">
              {/* Description */}
              <div>
                <h2 className="font-bold text-lg border-b border-gray-200 pb-2 mb-3 text-gray-800">
                  Description
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">{ev.description}</p>
              </div>

              {/* Attachments */}
              <div>
                <h2 className="font-bold text-lg border-b border-gray-200 pb-2 mb-3 text-gray-800">
                  Attachments
                </h2>
                <ul className="flex flex-col gap-2">
                  {ev.attachments.map((file, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-sm text-[#1e3a8a] hover:underline flex items-center gap-2"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Download size={14} className="flex-shrink-0 text-blue-500" />
                        {file}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speakers / Chairs */}
              <div>
                <h2 className="font-bold text-lg border-b border-gray-200 pb-2 mb-3 text-gray-800">
                  Speakers / Chairs
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {ev.speakers.map((speaker, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-gray-200 rounded-xl p-4 text-center"
                    >
                      {speaker.image ? (
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                          <User size={28} className="text-blue-400" />
                        </div>
                      )}
                      <p className="text-sm font-medium text-gray-800 leading-tight">
                        {speaker.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex-[2] min-w-0">
              <div className="bg-gray-100 rounded-xl border border-gray-200 aspect-video flex flex-col items-center justify-center gap-2">
                <FileImage size={48} className="text-gray-300" />
                <span className="text-xs text-gray-400">No media available</span>
              </div>
            </div>
          </div>

          {/* Bottom two columns: Schedule (55%) + Organizations (45%) */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Schedule */}
            <div className="flex-[11] min-w-0">
              <h2 className="font-bold text-lg border-b border-gray-200 pb-2 mb-4 text-gray-800">
                Schedule
              </h2>
              <ol className="flex flex-col gap-3">
                {ev.schedule.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-mono text-blue-600 font-semibold">
                        {item.time}
                      </span>
                      <p className="text-sm text-gray-800 mt-0.5">{item.activity}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Participating Organizations */}
            <div className="flex-[9] min-w-0">
              <h2 className="font-bold text-lg border-b border-gray-200 pb-2 mb-4 text-gray-800">
                Participating Organizations
              </h2>
              <ul>
                {ev.organizations.map((org, idx) => (
                  <li
                    key={idx}
                    className="border-b border-gray-100 py-2 text-sm text-[#1e3a8a] hover:underline cursor-pointer last:border-b-0"
                  >
                    {org}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
