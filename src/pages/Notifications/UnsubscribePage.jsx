import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { MailX, BellOff, ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const UnsubscribePage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || 'valid-token'; // Default to valid for demo

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const maskedEmail = "h***@gmail.com";

  useEffect(() => {
    // Simulate token validation logic
    if (token === 'invalid') {
      setIsError(true);
    }
  }, [token]);

  const handleUnsubscribe = () => {
    // Simulate API call to unsubscribe
    setIsSuccess(true);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50 selection:bg-orange-200">
      <Header />

      {/* Background Decor */}
      <div className="absolute top-0 w-full h-80 bg-gradient-to-b from-slate-200/50 to-transparent -z-10"></div>

      <main className="flex-grow flex items-center justify-center py-12 px-4">

        {/* CPLQG-EN-229.MH02: Unsubscribe Confirmation */}
        {!isSuccess && !isError && (
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full max-w-lg p-8 md:p-12 border border-slate-100 text-center relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-red-500"></div>

            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-100">
              <MailX className="w-10 h-10 text-orange-500" />
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-6 tracking-tight">
              Unsubscribe from Notifications
            </h1>

            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-200 text-left">
              <p className="text-slate-600 text-[15px] leading-relaxed">
                You are about to unsubscribe <span className="font-bold text-slate-800 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-200 break-all">{maskedEmail}</span> from receiving legal update notifications.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed mt-2 font-medium">
                You will no longer receive emails about new legal documents.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleUnsubscribe}
                className="flex-1 text-sm bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <BellOff className="w-5 h-5" /> Confirm Unsubscribe
              </button>
              <Link
                to="/"
                className="flex-1 text-sm bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-600 font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center"
              >
                Cancel
              </Link>
            </div>
          </div>
        )}

        {/* Error State */}
        {isError && !isSuccess && (
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full max-w-lg p-8 md:p-12 border border-slate-100 text-center">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-100">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-800 mb-4 tracking-tight">
              Invalid Link
            </h1>
            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
              This unsubscribe link is invalid or has expired. Please contact support.
            </p>
            <Link
              to="/"
              className="inline-flex justify-center w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md"
            >
              Back to Home
            </Link>
          </div>
        )}

        {/* CPLQG-EN-229.MH03: Successfully Unsubscribed */}
        {isSuccess && (
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full max-w-lg p-8 md:p-12 border border-slate-100 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">

            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-slate-200">
              <BellOff className="w-10 h-10 text-slate-400" strokeWidth={2} />
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">
              Successfully Unsubscribed
            </h1>

            <p className="text-slate-600 text-[15px] leading-relaxed mb-10">
              You have been successfully unsubscribed from legal update notifications. You will no longer receive emails from the National Legal Portal.
            </p>

            <Link
              to="/"
              className="flex items-center justify-center gap-2 w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-3.5 rounded-xl transition-colors shadow-md mb-4"
            >
              Back to Home <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-sm text-slate-500">
              Changed your mind? <Link to="/subscribe" className="text-blue-600 font-bold hover:underline">Subscribe again</Link>
            </p>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default UnsubscribePage;
