import React, { useState } from 'react';
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Calendar, 
  Check, 
  X as CloseIcon, 
  ChevronDown, 
  ChevronRight, 
  Sparkles, 
  ShieldAlert, 
  PhoneCall, 
  MessageSquare,
  Send,
  Bed,
  Utensils,
  Car
} from 'lucide-react';
import { PACKAGES_DATA } from '../../data/packagesData';
import { DESTINATIONS_DATA } from '../../data/destinationsData';

interface PackageDetailPageProps {
  packageId: string;
  onNavigate: (route: string, param?: string) => void;
  onOpenEnquiry: (prefill?: { packageName?: string; destination?: string }) => void;
}

export const PackageDetailPage: React.FC<PackageDetailPageProps> = ({
  packageId,
  onNavigate,
  onOpenEnquiry,
}) => {
  const pkg = PACKAGES_DATA.find((p) => p.id === packageId) || PACKAGES_DATA[0];
  const primaryDest = DESTINATIONS_DATA.find((d) => pkg.primaryDestinationTags.includes(d.id)) || DESTINATIONS_DATA[0];

  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Sticky enquiry form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formPax, setFormPax] = useState('2');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    setIsSubmitted(true);
  };

  const relatedPackages = PACKAGES_DATA.filter(
    (p) => p.id !== pkg.id && p.primaryDestinationTags.some((t) => pkg.primaryDestinationTags.includes(t))
  ).slice(0, 3);

  return (
    <div className="bg-[#FBF9F5] min-h-screen pb-20">
      
      {/* Full-width Header Image Banner */}
      <div className="relative h-[420px] sm:h-[500px] bg-[#0B1B36] overflow-hidden">
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36] via-[#0B1B36]/60 to-[#0B1B36]/30" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-between py-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-neutral-300">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('destinations')} className="hover:text-white">Destinations</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('destination-detail', primaryDest.id)} className="hover:text-white">
              {primaryDest.name}
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E5C378] font-semibold line-clamp-1">{pkg.title}</span>
          </div>

          {/* Banner Title Area */}
          <div className="space-y-4 max-w-3xl text-white pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-md bg-[#C5A059] text-[#0B1B36] text-xs font-bold uppercase tracking-wider">
                {pkg.duration}
              </span>
              <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-white text-xs font-mono">
                {pkg.route}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif-heading leading-tight">
              {pkg.title}
            </h1>

            {/* Stated Pricing Philosophy Banner */}
            <div className="inline-block p-3 sm:p-4 rounded-xl bg-black/40 backdrop-blur-md border border-[#C5A059]/40 max-w-xl">
              <p className="text-xs sm:text-sm text-[#E5C378] italic font-serif">
                “We don't put the price — because we curate each itinerary around your requirements.”
              </p>
              <p className="text-[11px] text-neutral-300 pt-1">
                Hotel luxury tier, vehicle class, and paced stops are personalized to your group.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Itinerary Details, Inclusions, Notes, FAQs */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-4 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1B36] font-serif-heading">
                Journey Overview
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                {pkg.overview}
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-100 text-xs">
                <div>
                  <span className="text-stone-500 block text-[11px]">Duration</span>
                  <span className="font-bold text-[#0B1B36]">{pkg.duration}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">Route Style</span>
                  <span className="font-bold text-[#0B1B36]">Private Chauffeur</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">Meal Plan</span>
                  <span className="font-bold text-[#0B1B36]">Daily Breakfast</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">Pace</span>
                  <span className="font-bold text-[#0B1B36]">Bespoke / Flexible</span>
                </div>
              </div>
            </div>

            {/* Day-Wise Itinerary (Timeline Accordion) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
                    Detailed Route
                  </span>
                  <h2 className="text-2xl font-bold text-[#0B1B36] font-serif-heading">
                    Day-Wise Itinerary
                  </h2>
                </div>
                <button
                  onClick={() => setExpandedDay(expandedDay === null ? 1 : null)}
                  className="text-xs font-semibold text-[#0B1B36] hover:text-[#C5A059] underline"
                >
                  {expandedDay === null ? 'Expand Details' : 'Collapse'}
                </button>
              </div>

              <div className="space-y-3">
                {pkg.dayWiseItinerary.map((day) => {
                  const isOpen = expandedDay === day.day || expandedDay === null;
                  return (
                    <div
                      key={day.day}
                      className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => setExpandedDay(expandedDay === day.day ? 0 : day.day)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-9 h-9 rounded-lg bg-[#0B1B36] text-[#E5C378] flex items-center justify-center font-bold text-xs shrink-0 font-serif">
                            D{day.day}
                          </span>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-[#0B1B36]">
                              {day.title}
                            </h3>
                            {day.subHeading && (
                              <p className="text-xs text-stone-500">{day.subHeading}</p>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-stone-400 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-[#C5A059]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 border-t border-stone-100 space-y-3 bg-[#FBF9F5]/40 text-xs">
                          <ul className="space-y-1.5 text-stone-700">
                            {day.activities.map((act, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#C5A059] font-bold mt-0.5">•</span>
                                <span className="leading-relaxed">{act}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-4 pt-2 border-t border-stone-200/60 text-[11px] text-stone-600">
                            {day.meals && (
                              <span className="flex items-center gap-1">
                                <Utensils className="w-3.5 h-3.5 text-[#C5A059]" />
                                <span>Meals: {day.meals}</span>
                              </span>
                            )}
                            {day.stay && (
                              <span className="flex items-center gap-1 font-semibold text-[#0B1B36]">
                                <Bed className="w-3.5 h-3.5 text-[#C5A059]" />
                                <span>{day.stay}</span>
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-6 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1B36] font-serif-heading">
                Inclusions & Exclusions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                {/* Inclusions */}
                <div className="space-y-3 bg-emerald-50/50 p-5 rounded-xl border border-emerald-100">
                  <h3 className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" /> What’s Included
                  </h3>
                  <ul className="space-y-2 text-stone-700">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="space-y-3 bg-stone-50 p-5 rounded-xl border border-stone-200">
                  <h3 className="font-bold text-stone-800 text-sm flex items-center gap-2">
                    <CloseIcon className="w-4 h-4 text-rose-500" /> What’s Excluded
                  </h3>
                  <ul className="space-y-2 text-stone-600">
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CloseIcon className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Operational Notes for Travel Desk */}
            {pkg.operationalNotes && pkg.operationalNotes.length > 0 && (
              <div className="bg-[#0B1B36] text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-md">
                <div className="flex items-center gap-2 text-[#E5C378] text-xs font-bold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Important Operational Notes from Travel Desk</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-200 leading-relaxed">
                  {pkg.operationalNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#C5A059] font-bold mt-0.5">▪</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs Accordion */}
            {pkg.faqs && pkg.faqs.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1B36] font-serif-heading">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-2">
                  {pkg.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-[#0B1B36] flex justify-between items-center gap-4 hover:bg-stone-50"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-stone-400 transition-transform ${
                            expandedFaq === index ? 'rotate-180 text-[#C5A059]' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 pb-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-stone-100 bg-[#FBF9F5]/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Customize Repeat Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B1B36] to-[#152e59] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <h3 className="text-xl font-bold font-serif-heading text-[#E5C378]">
                  Want to Modify This Circuit?
                </h3>
                <p className="text-xs text-neutral-300 max-w-md">
                  Add extra nights, upgrade to a luxury heritage palace, or incorporate a wildlife safari.
                </p>
              </div>
              <button
                onClick={() => onOpenEnquiry({ packageName: pkg.title })}
                className="bg-[#C5A059] hover:bg-[#B89248] text-[#0B1B36] font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md shrink-0"
              >
                Customize This Trip
              </button>
            </div>

          </div>

          {/* Right Column: Sticky Booking & Consultation Desk */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Enquiry Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 space-y-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#C5A059] text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Direct Travel Desk</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B36] font-serif-heading">
                    Request Custom Quote
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Receive a tailored day-wise proposal and pricing breakdown for {pkg.title}.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                    <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-emerald-900 text-sm">Quote Request Sent</h4>
                    <p className="text-xs text-emerald-700">
                      Our planner will contact you at {formPhone} with your personalized proposal.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquiry} className="space-y-3 text-xs">
                    <div>
                      <label className="block text-stone-700 font-medium mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Alok Sharma"
                        className="w-full px-3 py-2 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-medium mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 9811240072"
                        className="w-full px-3 py-2 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-medium mb-1">Preferred Travel Date</label>
                      <input
                        type="text"
                        value={formDate}
                        onChange={(e) => setFormDate(e.target.value)}
                        placeholder="e.g. November 2026"
                        className="w-full px-3 py-2 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-medium mb-1">Number of Travelers</label>
                      <select
                        value={formPax}
                        onChange={(e) => setFormPax(e.target.value)}
                        className="w-full px-3 py-2 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-stone-800"
                      >
                        <option value="1">1 Solo</option>
                        <option value="2">2 (Couple)</option>
                        <option value="3-4">3–4 (Family)</option>
                        <option value="5+">5+ Group</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#C5A059] hover:bg-[#B89248] text-[#0B1B36] font-bold py-3 rounded-lg text-xs tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Enquiry</span>
                    </button>
                  </form>
                )}

                <div className="pt-3 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Or call Mandir Marg desk: <a href="tel:9811240072" className="font-bold text-[#0B1B36]">9811240072</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp: <a href="https://wa.me/919312640072" className="font-bold text-emerald-700">9312640072</a></span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
