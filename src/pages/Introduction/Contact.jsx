import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Send, ShieldCheck, Map } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agree: false
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, submitting, success
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[\d\s+\-]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) return;

    if (validate()) {
      setSubmitStatus('submitting');
      setTimeout(() => {
        setSubmitStatus('success');
      }, 1500); // simulate network request
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-slate-50 selection:bg-blue-200">
      <Header />

      {/* Hero Banner (CPLQG-EN-223.MH01) */}
      <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-50cb98976fea?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10 pt-10 flex flex-col items-center">
          <div className="flex justify-center mb-6">
            <img src="/favicon.svg" alt="National Emblem" className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" />
          </div>
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-100 font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
             <Map className="w-4 h-4" />
             Get in Touch
          </div> */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-xl text-white">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with the National Legal Portal administration for dedicated support and feedback.
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full mb-20 relative z-20">

        {/* 2 Column Layout (CPLQG-EN-223.MH02) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

              <h2 className="text-3xl font-bold text-slate-800 mb-2">Portal Information</h2>
              <p className="text-slate-500 mb-10 pb-6 border-b border-slate-100">Official contact details for the administrative committee.</p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-5 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors duration-300 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-1">Headquarters</span>
                    <p className="text-slate-700 leading-relaxed font-medium">60 Tran Phu Street, Ba Dinh District, <br /> Hanoi, Vietnam</p>
                  </div>
                </div>

                <div className="flex gap-5 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300 shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-1">Direct Line</span>
                    <a href="tel:02462739715" className="text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg block">024.62739715</a>
                    <span className="text-sm text-slate-500">Mon-Fri: 8:00 AM - 5:00 PM</span>
                  </div>
                </div>

                <div className="flex gap-5 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center shrink-0 group-hover/item:bg-fuchsia-600 group-hover/item:text-white transition-colors duration-300 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-1">Support Email</span>
                    <a href="mailto:ttddbpl@moj.gov.vn" className="text-slate-700 hover:text-fuchsia-600 transition-colors font-medium text-lg">ttddbpl@moj.gov.vn</a>
                  </div>
                </div>
              </div>

              {/* Google Map Embedded Iframe */}
              <div className="w-full h-80 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100 flex items-center justify-center relative group-hover:shadow-2xl transition-shadow duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.046180572019!2d105.83540600000002!3d21.032130000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba6aab9072b%3A0xc07c4b7556a3e5dc!2zQsOGIFTEsCBwaMOhcA!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.1) brightness(0.9)' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ministry of Justice Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Form (CPLQG-EN-223.MH03) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 h-full flex flex-col relative overflow-hidden">

              {submitStatus === 'success' ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-10 animate-[fadeIn_0.5s_ease-out]">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="w-28 h-28 bg-green-50 border-4 border-green-100 rounded-full flex items-center justify-center relative shadow-inner">
                      <CheckCircle className="w-14 h-14 text-green-500" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">Message Sent!</h2>
                  <p className="text-slate-500 mb-10 text-lg max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your query and will respond via your provided email address within 48 hours.
                  </p>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)] flex items-center gap-2"
                  >
                    Return to Homepage
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3 tracking-tight">Send a Message</h2>
                    <p className="text-slate-500 text-lg">Have a specific question, or encountered translating anomalies? Fill out the form below.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                        <div className={`relative rounded-xl border-2 transition-colors duration-300 ${errors.name ? 'border-red-400 bg-red-50' : focusedField === 'name' ? 'border-indigo-500 bg-white' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="John Doe"
                            className="w-full px-5 py-4 bg-transparent outline-none text-slate-800 placeholder-slate-400"
                          />
                        </div>
                        {errors.name && <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5 font-medium"><AlertCircle size={14} className="shrink-0" />{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                        <div className={`relative rounded-xl border-2 transition-colors duration-300 ${errors.phone ? 'border-red-400 bg-red-50' : focusedField === 'phone' ? 'border-indigo-500 bg-white' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="+84 987 654 321"
                            className="w-full px-5 py-4 bg-transparent outline-none text-slate-800 placeholder-slate-400"
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5 font-medium"><AlertCircle size={14} className="shrink-0" />{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <div className={`relative rounded-xl border-2 transition-colors duration-300 ${errors.email ? 'border-red-400 bg-red-50' : focusedField === 'email' ? 'border-indigo-500 bg-white' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="john.doe@example.com"
                          className="w-full px-5 py-4 bg-transparent outline-none text-slate-800 placeholder-slate-400"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5 font-medium"><AlertCircle size={14} className="shrink-0" />{errors.email}</p>}
                    </div>

                    {/* Message */}
                    <div className="flex-1 flex flex-col">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Message <span className="text-red-500">*</span></label>
                      <div className={`relative rounded-xl border-2 flex-1 transition-colors duration-300 min-h-[160px] ${errors.message ? 'border-red-400 bg-red-50' : focusedField === 'message' ? 'border-indigo-500 bg-white' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="How can we help you today?"
                          className="w-full h-full min-h-[160px] px-5 py-4 bg-transparent outline-none text-slate-800 placeholder-slate-400 resize-none"
                        ></textarea>
                      </div>
                      {errors.message && <p className="text-red-500 text-sm mt-2 flex items-center gap-1.5 font-medium"><AlertCircle size={14} className="shrink-0" />{errors.message}</p>}
                    </div>

                    {/* Checkbox */}
                    <div className="pt-4 border-t border-slate-100 flex items-start gap-4 mt-auto">
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          id="agree"
                          name="agree"
                          checked={formData.agree}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 transition-colors cursor-pointer"
                        />
                      </div>
                      <label htmlFor="agree" className="text-slate-600 leading-snug text-sm cursor-pointer select-none">
                        I consent to having this portal collect my details via this form. I understand my information will be handled according to the <a href="#" target="_blank" className="text-indigo-600 hover:text-indigo-800 font-semibold underline decoration-indigo-300 underline-offset-2">Privacy Policy</a>.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!formData.agree || submitStatus === 'submitting'}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex justify-center items-center gap-2 
                          ${formData.agree && submitStatus !== 'submitting'
                          ? 'bg-slate-900 text-white hover:bg-indigo-600 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)]'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'}`}
                    >
                      {submitStatus === 'submitting' ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className={`w-5 h-5 ${formData.agree ? 'block' : 'opacity-50'}`} />
                        </>
                      )}
                    </button>

                  </form>
                </>
              )}

              {/* Secure Badge */}
              <div className="absolute top-0 right-0 p-4 opacity-50 hidden md:block pointer-events-none">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" /> Secure Form
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
