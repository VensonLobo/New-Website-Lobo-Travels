import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { CONTACT_DETAILS } from '../../data/siteData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('New Journey Consultation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FBF9F5] min-h-screen py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4 text-center">
        <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
          Headquarters & Operations
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#0B1B36] font-serif-heading">
          Get in Touch with Lobo Travels
        </h1>
        <p className="text-sm text-stone-600 max-w-2xl mx-auto">
          Visit the Lobo Travels Help Desk in New Delhi, or connect directly with our senior itinerary planners via phone, WhatsApp, or email.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Information & Phone Lines */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B1B36] text-[#E5C378] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base text-[#0B1B36] font-serif-heading">
                    Lobo Travels Help Desk & Office
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Shop No. 12, NDMC Market, Near CNG Pump, Mandir Marg, New Delhi – 110001
                  </p>
                  <p className="text-[11px] text-stone-500">Landmark: Opposite Mandir Marg Police Post & Near CNG Station</p>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="pt-4 border-t border-stone-100 space-y-3">
                <h4 className="text-xs font-bold text-[#0B1B36] uppercase tracking-wider">
                  Direct Phone Lines
                </h4>
                
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#0B1B36] block">Bookings & Senior Planners</span>
                      <a href="tel:9811240072" className="text-stone-700 hover:text-[#C5A059] font-semibold text-sm">
                        +91 98112 40072
                      </a>
                    </div>
                    <a href="tel:9811240072" className="p-2 bg-[#0B1B36] text-[#E5C378] rounded-md hover:bg-[#152e59]">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#0B1B36] block">On-Trip Support Desk</span>
                      <a href="tel:9891240072" className="text-stone-700 hover:text-[#C5A059] font-semibold text-sm">
                        +91 98912 40072
                      </a>
                    </div>
                    <a href="tel:9891240072" className="p-2 bg-stone-200 text-stone-800 rounded-md hover:bg-stone-300">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-emerald-900 block">WhatsApp Consultation Desk</span>
                      <a href="https://wa.me/919312640072" className="text-emerald-800 font-semibold text-sm">
                        +91 93126 40072
                      </a>
                    </div>
                    <a 
                      href="https://wa.me/919312640072?text=Hello%20Lobo%20Travels,%20I%20would%20like%20to%20consult%20about%20a%20trip."
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 flex items-center justify-center"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Email & Hours */}
              <div className="pt-4 border-t border-stone-100 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-stone-700">
                  <Mail className="w-4 h-4 text-[#C5A059]" />
                  <span>Email: <a href="mailto:info@lobotravels.com" className="font-semibold hover:underline">info@lobotravels.com</a></span>
                </div>
                <div className="flex items-start gap-2 text-stone-600">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-800">Desk Hours: Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p className="text-[11px] text-stone-500">24/7 Dedicated Support for Traveling Guests</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Consultation Message Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-[#0B1B36] font-serif-heading">
                Send Us a Message
              </h3>
              <p className="text-xs text-stone-500">
                Share your dates, destinations, or inquiry details and our team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-sm">Message Sent Successfully</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you {name}. Our travel team will reach out to you at {phone} within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Meenakshi Sharma"
                        className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 9811240072"
                        className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. meenakshi@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Inquiry Subject</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-stone-800"
                      >
                        <option value="New Journey Consultation">New Journey Consultation</option>
                        <option value="Custom Group / Corporate Trip">Custom Group / Corporate Trip</option>
                        <option value="Existing Booking Inquiry">Existing Booking Inquiry</option>
                        <option value="Partner or Vehicle Inquiry">Partner or Vehicle Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Your Message / Query</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention your planned destinations, number of guests, or specific questions..."
                      className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0B1B36] hover:bg-[#C5A059] hover:text-[#0B1B36] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="p-3.5 bg-[#0B1B36] text-white flex items-center justify-between text-xs">
                <span className="font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Mandir Marg, New Delhi – Location Map</span>
                </span>
                <span className="text-[11px] text-[#E5C378]">Central Delhi</span>
              </div>
              <div className="h-64 w-full bg-stone-100">
                <iframe
                  title="Lobo Travels Mandir Marg Location"
                  src="https://maps.google.com/maps?q=Mandir%20Marg,%20New%20Delhi%20110001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
