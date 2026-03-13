import React from 'react';
import { Calendar, Users, Laptop } from 'lucide-react';

const Events = () => {
  return (
    <section className="mt-12 w-full max-w-[1240px] mx-auto px-4 sm:px-0">
      <div className="bg-brand-light-blue p-6 rounded-lg text-white mb-8">
        <h2 className="text-2xl font-bold mb-6">Events & Activities</h2>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-6 text-gray-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Calendar size={100} />
            </div>
            <div className="flex items-center text-sm font-semibold text-brand-blue mb-2 gap-2 uppercase relative z-10">
              <Calendar size={16} /> Upcoming Events
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-6 uppercase leading-tight relative z-10">
              WELCOME TO THE 14TH NATIONAL CONGRESS OF THE COMMUNIST PARTY OF VIETNAM
            </h3>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm font-medium text-gray-600 mb-6 relative z-10">
              <div className="p-1 px-3 bg-gray-100 rounded">26/01/2025</div>
              <div className="p-1 px-3 bg-gray-100 rounded">Hanoi</div>
            </div>
            
            <div className="mb-2 text-sm font-bold text-gray-700 relative z-10">Time remaining</div>
            <div className="flex gap-4 sm:gap-6 text-center mb-6 relative z-10">
               <div className="w-16">
                 <div className="text-3xl font-extrabold text-brand-blue border-b-2 border-brand-blue pb-2 mb-2">4</div>
                 <div className="text-xs uppercase text-gray-500">Days</div>
               </div>
               <div className="w-16">
                 <div className="text-3xl font-extrabold text-brand-blue border-b-2 border-brand-blue pb-2 mb-2">8</div>
                 <div className="text-xs uppercase text-gray-500">Hours</div>
               </div>
               <div className="w-16">
                 <div className="text-3xl font-extrabold text-brand-blue border-b-2 border-brand-blue pb-2 mb-2">45</div>
                 <div className="text-xs uppercase text-gray-500">Minutes</div>
               </div>
               <div className="w-16">
                 <div className="text-3xl font-extrabold text-brand-blue border-b-2 border-brand-blue pb-2 mb-2">26</div>
                 <div className="text-xs uppercase text-gray-500">Seconds</div>
               </div>
            </div>
            <button className="bg-brand-light-blue hover:bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors relative z-10 shadow-sm">
              More details
            </button>
          </div>
          
          <div className="w-full lg:w-1/2 min-h-[300px] rounded-lg overflow-hidden shadow-sm relative text-center">
            <div className="absolute inset-0 bg-red-600 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
              <div className="w-16 h-16 mb-6 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Communist_star.svg/1200px-Communist_star.svg.png')] bg-contain bg-no-repeat bg-center"></div>
              <h3 className="text-yellow-400 font-bold text-3xl uppercase leading-tight shadow-sm drop-shadow-md">
                WELCOME TO THE 14TH NATIONAL CONGRESS OF THE COMMUNIST PARTY OF VIETNAM
              </h3>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="bg-blue-50 text-brand-blue p-4 rounded-full">
              <Users size={64} className="opacity-80" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-brand-blue mb-2">Workshop</h4>
              <p className="text-sm text-gray-600 mb-2">
                Promoting information on adolescents, relatives and domestic violence... in a civilized society...
              </p>
              <a href="#" className="text-sm font-semibold text-brand-light-blue hover:text-brand-blue">Learn more →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
             <div className="bg-blue-50 text-brand-blue p-4 rounded-full">
               <Laptop size={64} className="opacity-80" />
             </div>
             <div>
               <h4 className="text-lg font-bold text-brand-blue mb-2">Online lectures</h4>
               <p className="text-sm text-gray-600 mb-2">
                 Lectures and training programs that enhance legal knowledge and skills for citizens and businesses.
               </p>
               <a href="#" className="text-sm font-semibold text-brand-light-blue hover:text-brand-blue">Learn more →</a>
             </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
           <button className="bg-blue-800/50 hover:bg-blue-800 text-white border border-blue-400 px-6 py-2 rounded-full text-sm font-semibold transition-colors">
             More events
           </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
