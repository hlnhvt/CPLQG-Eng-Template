import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageLayout = ({ title, children, breadcrumbs }) => {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-6 font-medium">
             <a href="/" className="hover:text-brand-blue">Home</a>
             <span className="mx-2">/</span>
             <a href="#" className="hover:text-brand-blue">Introduction</a>
             <span className="mx-2">/</span>
             <span className="text-gray-800">{title}</span>
          </div>
          
          <div className="bg-white rounded shadow-sm border border-gray-100 p-8 min-h-[500px]">
            <h1 className="text-2xl font-bold text-brand-blue mb-6 pb-2 border-b-2 border-brand-blue inline-block">
              {title}
            </h1>
            <div className="prose prose-blue max-w-none">
               {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
