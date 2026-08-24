import React, { useState } from 'react';
import { Search, ArrowRight, ChevronRight, Clock, MapPin } from 'lucide-react';
import { PACKAGES_DATA } from '../../data/packagesData';

interface PackagesPageProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenEnquiry: (prefill?: { packageName?: string }) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const themes = [
    { id: 'all', label: 'All Itineraries' },
    { id: 'heritage', label: 'Heritage & Forts' },
    { id: 'nature', label: 'Mountains & Alpine' },
    { id: 'spiritual', label: 'Spiritual Sanctums' },
    { id: 'honeymoon', label: 'Honeymoon Escapes' },
  ];

  const filteredPackages = PACKAGES_DATA.filter((pkg) => {
    const matchesTheme =
      selectedTheme === 'all' || pkg.themeCategories.includes(selectedTheme as any);
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTheme && matchesSearch;
  });

  return (
    <div className="bg-[#FBF9F5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <button onClick={() => onNavigate('home')} className="hover:text-[#0B1B36]">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0B1B36] font-semibold">Packages</span>
        </div>

        {/* Header */}
        <div className="space-y-2">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
            Bespoke Holiday Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0B1B36] font-serif-heading">
            Curated Tour Itineraries
          </h1>
          <p className="text-sm text-stone-600 max-w-2xl">
            Explore our complete collection of masterfully crafted itineraries across northern India, each adaptable to your exact pacing, vehicle class, and property preferences.
          </p>
        </div>

        {/* Filter / Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTheme(t.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedTheme === t.id
                    ? 'bg-[#0B1B36] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by circuit or destination..."
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-xs"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200 transition-all duration-300 flex flex-col justify-between group"
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
                  <span className="text-[11px] bg-black/70 backdrop-blur-xs text-white px-2.5 py-1 rounded-md font-mono">
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
                      <span key={i} className="px-2 py-0.5 rounded-sm bg-stone-100 text-stone-700 text-[10px]">
                        • {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 italic">
                    Bespoke Quote
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
      </div>
    </div>
  );
};
