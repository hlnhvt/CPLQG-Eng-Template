import React from 'react';

const NewsArticle = ({ title, date, excerpt, imageUrl, large = false }) => (
  <div className={`flex ${large ? 'flex-col sm:flex-row' : 'flex-row'} gap-4 mb-6 hover:bg-gray-50 transition-colors rounded p-2`}>
    <img 
      src={imageUrl} 
      alt={title} 
      className={`object-cover rounded ${large ? 'w-full sm:w-1/2 h-44 sm:h-32' : 'w-32 h-24'}`}
    />
    <div className={`flex flex-col ${large ? 'w-full sm:w-1/2' : 'flex-1'}`}>
      <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 hover:text-brand-blue cursor-pointer">
        {title}
      </h3>
      <span className="text-xs text-gray-500 mb-1">{date}</span>
      <p className="text-xs text-gray-600 line-clamp-2 md:line-clamp-3">
        {excerpt}
      </p>
    </div>
  </div>
);

const News = () => {
  return (
    <section className="mt-12 w-full max-w-[1240px] mx-auto px-4 sm:px-0">
      <h2 className="text-2xl font-bold text-brand-blue mb-6 border-b-2 border-brand-blue inline-block pb-1">
        News
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold text-brand-blue mb-4">
            Steering Committee for Resolution No. 66-NQ/TW
          </h3>
          <NewsArticle 
            title="Nationwide Convention of the Digital Civil Judgment Enforcement Platform..."
            date="14/01/2025"
            excerpt="The Ministry of Justice held a Digital Civil Judgment Enforcement Platform conference combining direct and online forms."
            imageUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop"
            large={true}
          />
          <NewsArticle 
            title="The work of preventing and combating corruption, wastefulness, and misuses..."
            date="14/01/2025"
            excerpt="Comrade Le Quoc Minh - Secretary of the Party Central Committee, Head of the Central Propaganda Department..."
            imageUrl="https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=400&auto=format&fit=crop"
          />
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-brand-blue mb-4">
            Legal News
          </h3>
          <NewsArticle 
            title="Institutional breakthroughs to enhance the quality of education in the new era"
            date="21/01/2025"
            excerpt="Over the past 5 years, the 13th National Congress of the Party, closely following correctly, fundamentally..."
            imageUrl="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop"
            large={true}
          />
          <NewsArticle 
            title="Minister of Health Dao Hong Lan: Compact medical workforce for the..."
            date="21/01/2025"
            excerpt="Minister of Health Dao Hong Lan attended information and implementation of the Resolution 27-NQ/TW..."
            imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default News;
