import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Mountain, 
  Landmark, 
  Heart, 
  Calendar, 
  MapPin, 
  Clock, 
  Star, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { DESTINATIONS_DATA } from '../../data/destinationsData';
import { PACKAGES_DATA } from '../../data/packagesData';
import { TRUST_STATS, WHY_CHOOSE_US, TESTIMONIALS_DATA } from '../../data/siteData';

interface HomePageProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenEnquiry: (prefill?: { destination?: string; packageName?: string }) => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=2000&q=85',
    category: 'Heritage & History',
    title: 'Immortal Marble Poetry & Royal Forts',
    subtitle: 'Taj Mahal & The Golden Triangle Circuit',
  },
  {
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=2000&q=85',
    category: 'Honeymoon & Nature',
    title: 'Serene Alpine Valleys & Houseboats',
    subtitle: 'Kashmir Paradise & Dal Lake Luxury',
  },
  {
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85',
    category: 'Royal Rajasthan',
    title: 'Amber Ramparts at Golden Hour',
    subtitle: 'Palaces & Wildlife Safaris in Jaipur',
  },
  {
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=85',
    category: 'Nature & Mountains',
    title: 'High-Altitude Himalayan Sanctuaries',
    subtitle: 'Pine Valleys of Manali & Shimla',
  },
];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');
  
  // Home Form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formDest, setFormDest] = useState('Delhi');
  const [formDates, setFormDates] = useState('');
  const [formTravelers, setFormTravelers] = useState('2 Travelers');
  const [formMsg, setFormMsg] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Top 5 destinations specifically specified in brief: Delhi, Jaipur, Manali, Shimla, Agra
  const topFiveDestinations = ['delhi', 'jaipur', 'manali', 'shimla', 'agra']
    .map(id => DESTINATIONS_DATA.find(d => d.id === id))
    .filter(Boolean);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const filteredPackages = selectedCategoryTab === 'all'
    ? PACKAGES_DATA.slice(0, 6)
    : PACKAGES_DATA.filter(p => p.themeCategories.includes(selectedCategoryTab as any)).slice(0, 6);

  const handleHomeFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-0">
      
      {/* 2.1 Hero Section */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0B1B36]">
        {/* Background Image Carousel with Smooth Fade */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            } transition-transform duration-10000`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Elegant deep navy gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36] via-[#0B1B36]/60 to-[#0B1B36]/40" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white space-y-6 pt-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-serif-heading leading-tight text-balance">
            Journeys Crafted <span className="italic font-normal text-[#E5C378]">Around You</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
            Tailor-made itineraries designed exclusively around your rhythm, accommodation preferences, and pace across India’s premier circuits.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('destinations')}
              className="w-full sm:w-auto bg-[#C5A059] hover:bg-[#B89248] text-[#0B1B36] font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all tracking-wide flex items-center justify-center gap-2"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenEnquiry()}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Plan a Custom Trip</span>
            </button>
          </div>

          {/* Quick Category Chips */}
          <div className="pt-6 hidden sm:flex items-center justify-center gap-3">
            <span className="text-xs text-neutral-300 mr-1">Quick Browse:</span>
            {[
              { id: 'nature', label: 'Nature & Mountains', icon: Mountain },
              { id: 'heritage', label: 'Heritage & Forts', icon: Landmark },
              { id: 'spiritual', label: 'Spiritual Sanctums', icon: Sparkles },
              { id: 'honeymoon', label: 'Honeymoon', icon: Heart },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate('destinations', id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-[#C5A059] hover:text-[#0B1B36] text-neutral-200 text-xs font-medium backdrop-blur-xs border border-white/15 transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center gap-2 pt-4">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-8 bg-[#C5A059]' : 'w-2 bg-white/40'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#0B1B36] text-white py-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0 px-2 space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#E5C378] font-serif-heading">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-neutral-200 tracking-wider uppercase">
                  {stat.label}
                </div>
                <div className="text-[11px] text-neutral-400 font-light">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.2 Top Destinations Section (5 Columns: Delhi, Jaipur, Manali, Shimla, Agra) */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
                Iconic Circuits
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B36] font-serif-heading">
                Top Destinations
              </h2>
              <p className="text-sm text-stone-600 max-w-xl">
                The most sought-after cultural, mountain, and heritage centers anchoring Lobo Travels’ premier routes.
              </p>
            </div>
            <button
              onClick={() => onNavigate('destinations')}
              className="text-xs font-bold text-[#0B1B36] hover:text-[#C5A059] flex items-center gap-1.5 group transition-colors self-start sm:self-auto"
            >
              <span>View All 22 Destinations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 5-Column Grid on Desktop / Horizontal Scroll Strip on Mobile */}
          <div className="flex overflow-x-auto pb-4 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-5 snap-x">
            {topFiveDestinations.map(dest => {
              if (!dest) return null;
              return (
                <div
                  key={dest.id}
                  onClick={() => onNavigate('destination-detail', dest.id)}
                  className="min-w-[260px] sm:min-w-0 bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between snap-start"
                >
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <img
                      src={dest.thumbnail}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {dest.categoryTags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-xs text-white text-[10px] uppercase font-semibold tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-lg font-bold font-serif-heading leading-tight">
                        {dest.name}
                      </h3>
                      <p className="text-[11px] text-neutral-300">{dest.state}</p>
                    </div>
                  </div>

                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {dest.shortTeaser}
                    </p>
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0B1B36] group-hover:text-[#C5A059] transition-colors">
                      <span>Explore Itineraries</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2.3 Featured Experiences / Packages Section */}
      <section className="py-20 bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
              Signature Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B36] font-serif-heading">
              Featured Experiences
            </h2>
            <p className="text-sm text-stone-600">
              Thoughtfully paced multi-day journeys connecting northern India’s spiritual sanctums, Himalayan passes, and royal kingdoms.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'All Curations' },
                { id: 'heritage', label: 'Heritage & Forts' },
                { id: 'nature', label: 'Mountains & Alpine' },
                { id: 'spiritual', label: 'Spiritual Sanctums' },
                { id: 'honeymoon', label: 'Honeymoon Special' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategoryTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategoryTab === tab.id
                      ? 'bg-[#0B1B36] text-white shadow-sm'
                      : 'bg-white/80 text-stone-700 hover:bg-white border border-stone-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Packages Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredPackages.map(pkg => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.thumbnail}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1B36]/90 backdrop-blur-xs text-[#E5C378] text-xs font-bold px-3 py-1 rounded-md">
                    {pkg.duration}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[11px] bg-black/60 backdrop-blur-xs text-white px-2.5 py-1 rounded-md font-mono font-medium">
                      {pkg.route}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0B1B36] font-serif-heading group-hover:text-[#C5A059] transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {pkg.overview}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-sm bg-stone-100 text-stone-700 text-[10px] font-medium"
                        >
                          • {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 italic">
                      Bespoke Pricing
                    </span>
                    <button
                      onClick={() => onNavigate('package-detail', pkg.id)}
                      className="text-xs font-bold bg-[#0B1B36] hover:bg-[#C5A059] text-white hover:text-[#0B1B36] px-4 py-2 rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>View Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('packages')}
              className="inline-flex items-center gap-2 bg-[#0B1B36] text-white hover:bg-[#C5A059] hover:text-[#0B1B36] px-6 py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
            >
              <span>Explore All Curated Itineraries ({PACKAGES_DATA.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2.4 Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
              The Lobo Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B36] font-serif-heading">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="text-sm text-stone-600">
              No generic bulk tours. We craft bespoke journeys with personalized concierge oversight at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-[#FBF9F5] border border-stone-200/80 space-y-3 text-center flex flex-col items-center justify-start hover:border-[#C5A059] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#0B1B36] text-[#E5C378] flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-[#0B1B36]">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Testimonials Section */}
      <section className="py-20 bg-[#0B1B36] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
              Guest Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading">
              Stories from Our Travelers
            </h2>
            <p className="text-sm text-neutral-300">
              Authentic reflections from families, couples, and private groups who entrusted their journeys to the Lobo Travels Help Desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#E5C378]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#C5A059]/40"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.name}</h4>
                    <p className="text-[10px] text-[#C5A059]">{t.tripTaken}</p>
                    <p className="text-[10px] text-neutral-400">{t.location} • {t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.6 CTA / Enquiry Form Section */}
      <section className="py-20 bg-[#FBF9F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-8 sm:p-10 space-y-6">
            <div className="text-center space-y-2">
              <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
                Start Planning
              </span>
              <h2 className="text-3xl font-bold text-[#0B1B36] font-serif-heading">
                Let’s Plan Your Journey
              </h2>
              <p className="text-xs text-stone-600 max-w-md mx-auto">
                Tell us your travel vision. Our senior journey planners at Lobo Travels Help Desk will curate a custom day-wise itinerary with verified stays.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-900 font-serif-heading">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you, {formName}. We have received your request for {formDest}. A dedicated travel consultant will call you at {formPhone} within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-bold text-[#0B1B36] underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleHomeFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="e.g. 9811240072"
                      className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Email</label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. vikram@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Destination</label>
                    <select
                      value={formDest}
                      onChange={(e) => setFormDest(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm text-stone-800"
                    >
                      {DESTINATIONS_DATA.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                      <option value="Golden Triangle">Golden Triangle (Delhi-Agra-Jaipur)</option>
                      <option value="Himachal Circuit">Himachal (Shimla-Manali)</option>
                      <option value="Char Dham / Spiritual">Char Dham / Spiritual</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Travel Dates</label>
                    <input
                      type="text"
                      value={formDates}
                      onChange={(e) => setFormDates(e.target.value)}
                      placeholder="e.g. Oct 15 - 22"
                      className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Number of Travelers</label>
                    <select
                      value={formTravelers}
                      onChange={(e) => setFormTravelers(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm text-stone-800"
                    >
                      <option value="1 Solo">1 Solo Traveler</option>
                      <option value="2 Couple">2 Travelers (Couple)</option>
                      <option value="3-4 Family">3–4 Family Members</option>
                      <option value="5+ Group">5+ Group / Family</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Special Preferences / Notes</label>
                  <textarea
                    rows={2}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="Tell us any specific sights, luxury hotel preferences, or dietary requirements..."
                    className="w-full px-3.5 py-2.5 bg-[#FBF9F5] rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#C5A059] hover:bg-[#B89248] text-[#0B1B36] font-bold py-3.5 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Get a Custom Itinerary</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-stone-500 pt-2">
                    No spam, just a callback from our travel expert within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
