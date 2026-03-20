import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Mail, CheckCircle, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubscribePage = () => {
  const [email, setEmail] = useState('');
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter an email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    // Simulate checking if email is already subscribed
    if (email === 'test@example.com') {
      setError('This email address is already subscribed.');
      return;
    }

    // Success
    setError('');
    setShowSuccessModal(true);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#f0f4f8] selection:bg-blue-200">
      <Header />
      
      {/* CPLQG-EN-228.MH01: Hero Section */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white pt-16 pb-24 px-4 relative overflow-hidden">
        {/* Abstract Backgrounds */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
           <div className="p-4 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20 shadow-xl">
              <Mail className="w-10 h-10 text-white" />
           </div>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
             Subscribe to Legal Updates
           </h1>
           <p className="text-lg md:text-xl text-blue-100 font-light max-w-2xl mx-auto leading-relaxed">
             Stay informed about the latest Vietnamese legal documents and regulations.
           </p>
        </div>
      </section>

      {/* Subscription Form */}
      <main className="flex-grow max-w-2xl mx-auto px-4 w-full relative z-20 -mt-10 pb-12">
         <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] p-8 md:p-12 border border-slate-100 relative">
            
            <form onSubmit={handleSubscribe} className="space-y-6">
               <div>
                 <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                   Email Address <span className="text-red-500">*</span>
                 </label>
                 <div className={`relative flex items-center bg-slate-50 rounded-xl border-2 transition-colors ${error ? 'border-red-300 focus-within:border-red-500' : 'border-slate-200 focus-within:border-blue-500'} p-1`}>
                    <div className="pl-4 pr-2">
                      <Mail className={`w-5 h-5 ${error ? 'text-red-400' : 'text-slate-400'}`} />
                    </div>
                    <input 
                      type="text" 
                      id="email"
                      value={email}
                      onChange={(e) => {
                         setEmail(e.target.value);
                         if(error) setError('');
                      }}
                      placeholder="Enter your email address"
                      className="w-full bg-transparent py-3 pr-4 outline-none text-slate-800 placeholder-slate-400 font-medium"
                    />
                 </div>
                 {error && (
                    <p className="mt-2 text-sm text-red-500 font-medium flex items-center gap-1.5">
                       <X className="w-4 h-4" /> {error}
                    </p>
                 )}
               </div>

               {/* CAPTCHA Widget (Simulated) */}
               <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-between shadow-sm max-w-[304px]">
                  <div className="flex items-center gap-3">
                     <div 
                       className={`w-7 h-7 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${captchaChecked ? 'bg-green-500 border-green-500' : 'bg-white border-slate-300 hover:border-slate-400'}`}
                       onClick={() => setCaptchaChecked(!captchaChecked)}
                     >
                       {captchaChecked && <CheckCircle className="w-5 h-5 text-white" strokeWidth={3} />}
                     </div>
                     <span className="text-sm font-medium text-slate-700 select-none">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                     <ShieldCheck className="w-8 h-8 text-blue-600 mb-1" />
                     <span className="text-[10px] text-slate-400 font-sans tracking-wide">reCAPTCHA</span>
                  </div>
               </div>

               <button 
                  type="submit"
                  disabled={!captchaChecked || !email}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
               >
                  Subscribe
               </button>

               <div className="text-center pt-2">
                  <Link to="/unsubscribe" className="text-sm text-blue-600 font-medium hover:text-blue-800 hover:underline transition-all">
                     Already subscribed? Unsubscribe here
                  </Link>
               </div>
            </form>

         </div>
      </main>

      {/* CPLQG-EN-228.MH02: Success Modal Overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
           <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden transform transition-all p-8 md:p-10 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                 <CheckCircle className="w-10 h-10 text-green-500" strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">
                 Subscription Confirmed!
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-10">
                 You have successfully subscribed to receive legal update notifications. Please check your inbox for a confirmation email.
              </p>
              <Link 
                 to="/"
                 className="flex items-center justify-center gap-2 w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-3.5 rounded-xl transition-colors shadow-md"
              >
                 Back to Home <ArrowRight className="w-5 h-5" />
              </Link>
           </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SubscribePage;
