import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, PhoneCall } from 'lucide-react';
import { DESTINATIONS_DATA } from '../../data/destinationsData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
  initialPackageName?: string;
  onSubmitSuccess?: (refCode: string) => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialDestination = '',
  initialPackageName = '',
  onSubmitSuccess,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(initialDestination || 'Delhi');
  const [travelDates, setTravelDates] = useState('');
  const [travelers, setTravelers] = useState('2 Travelers');
  const [requirements, setRequirements] = useState(
    initialPackageName ? `Interested in: ${initialPackageName}` : ''
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const code = 'LT-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(code);
    setIsSubmitted(true);
    if (onSubmitSuccess) onSubmitSuccess(code);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FBF9F5] w-full max-w-lg rounded-2xl shadow-2xl border border-stone-200 overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-[#0B1B36] p-1.5 rounded-full hover:bg-stone-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1B36] font-serif-heading">
              Custom Itinerary Request Received
            </h3>
            <p className="text-xs text-stone-600">
              Reference Code: <span className="font-mono font-bold text-[#0B1B36]">{refCode}</span>
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Thank you, <span className="font-semibold text-[#0B1B36]">{name}</span>. Our senior itinerary planner from the Lobo Travels Help Desk will review your requirements and call you at <span className="font-semibold text-[#0B1B36]">{phone}</span> within 24 hours with a custom proposal.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full bg-[#0B1B36] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#152e59] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="space-y-1 pr-6">
              <div className="flex items-center gap-1.5 text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Travel Consultation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B36] font-serif-heading">
                Let’s Plan Your Journey
              </h3>
              <p className="text-xs text-stone-500">
                Share your travel preferences and we will curate a personalized itinerary around your rhythm.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3 py-2 bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9811240072"
                    className="w-full px-3 py-2 bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rajesh@example.com"
                    className="w-full px-3 py-2 bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Destination</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm text-stone-800"
                  >
                    {DESTINATIONS_DATA.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.state})
                      </option>
                    ))}
                    <option value="Multiple / Custom Circuit">Multiple / Custom Circuit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Tentative Dates</label>
                  <input
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    placeholder="e.g. Next month / 15-22 Oct"
                    className="w-full px-3 py-2 bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Number of Travelers</label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full px-3 py-2 bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm text-stone-800"
                  >
                    <option value="1 Solo Traveler">1 Solo Traveler</option>
                    <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                    <option value="3-4 Family Members">3-4 Family Members</option>
                    <option value="5-8 Group / Family">5-8 Group / Family</option>
                    <option value="9+ Large Group">9+ Large Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Specific Requirements or Hotel Preference
                </label>
                <textarea
                  rows={2}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="e.g., Prefer heritage hotels, senior-friendly pacing, sunrise Taj Mahal tour..."
                  className="w-full px-3 py-2 bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C5A059] hover:bg-[#B89248] text-[#0B1B36] font-bold py-3 rounded-lg text-sm transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Get a Custom Itinerary</span>
              </button>

              <p className="text-[11px] text-center text-stone-500 pt-1">
                No spam, just a direct callback from our travel expert within 24 hours.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
