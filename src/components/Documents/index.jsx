import React from 'react';
import { ChevronRight } from 'lucide-react';

const Documents = () => {
  const docs = [
    { date: '21/01/2025', desc: 'Resolution No. 13-NQ/TW of the Central Executive Committee on summarizing the implementation... of policy...' },
    { date: '20/01/2025', desc: 'Prime Minister issues Decision 120/QD-TTg promulgating the Implementation Plan for the enforcement of the Law on Drug Prevention and Control 2024' },
    { date: '21/01/2025', desc: 'Decision 2212/QD-BCT of the Ministry of Industry and Trade on extending the period for investigating...' },
    { date: '20/01/2025', desc: 'Decision 2212/QD-BCT of the Ministry of Industry and Trade on promulgating the temporary lists...' }
  ];

  return (
    <section className="mt-24 sm:mt-16 w-full max-w-[1240px] mx-auto px-4 sm:px-0">
      <h2 className="text-2xl font-bold text-brand-blue mb-4 flex items-center">
        Recently promulgated legal documents
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3 border border-gray-200 rounded shadow-sm bg-white overflow-hidden">
          <div className="bg-brand-blue text-white grid grid-cols-[120px_1fr] p-3 text-sm font-semibold">
            <div>Date of issuance</div>
            <div>Content</div>
          </div>
          <div className="divide-y divide-gray-100">
            {docs.map((doc, idx) => (
              <div key={idx} className="grid grid-cols-[120px_1fr] p-3 hover:bg-gray-50 transition-colors text-sm items-start">
                <div className="font-medium text-gray-500">{doc.date}</div>
                <a href="#" className="text-gray-800 hover:text-brand-blue">{doc.desc}</a>
              </div>
            ))}
          </div>
          <div className="p-3 text-right bg-gray-50 border-t border-gray-100">
            <a href="#" className="text-brand-blue font-medium text-sm flex items-center justify-end hover:underline">
              See more <ChevronRight size={16} />
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 min-h-[250px] relative rounded overflow-hidden shadow-sm group cursor-pointer group">
          <div className="absolute inset-0 bg-red-600 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <div className="w-12 h-12 mb-4 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Communist_star.svg/1200px-Communist_star.svg.png')] bg-contain bg-no-repeat bg-center"></div>
            <h3 className="text-yellow-400 font-bold text-xl uppercase leading-tight mb-2 shadow-sm drop-shadow-md">
              WELCOME TO THE<br/>14TH NATIONAL CONGRESS<br/>OF THE COMMUNIST<br/>PARTY OF VIETNAM
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
