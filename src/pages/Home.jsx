import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Documents from '../components/Documents';
import News from '../components/News';
import Events from '../components/Events';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-8 relative z-20">
          <Documents />
          <News />
          <Events />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
