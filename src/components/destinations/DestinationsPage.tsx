import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, Mountain, Landmark, Heart, Sparkles, ChevronRight } from 'lucide-react';
import { DESTINATIONS_DATA } from '../../data/destinationsData';
import { PACKAGES_DATA } from '../../data/packagesData';

interface DestinationsPageProps {
  initialCategory?: string;
  onNavigate: (route: string, param?: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  initialCategory = 'all',
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Destinations (22)' },
    { id: 'nature', label: 'Nature & Mountains (7)', icon: Mountain },
    { id: 'heritage', label: 'Heritage & History (7)', icon: Landmark },
    { id: 'spiritual', label: 'Spiritual Sanctums (9)', icon: Sparkles },
    { id: 'honeymoon', label: 'Honeymoon (4)', icon: Heart },
  ];

  const filteredDestinations = DESTINATIONS_DATA.filter((dest) => {
    const matchesCategory =
      selectedCategory === 'all' || dest.categoryTags.includes(selectedCategory as any);
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.shortTeaser.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FBF9F5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <button onClick={() => onNavigate('home')} className="hover:text-[#0B1B36]">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0B1B36] font-semibold">Destinations</span>
        </div>

        {/* Page Header */}
        <div className="space-y-3">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
            Curated Indian Geography
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0B1B36] font-serif-heading">
            Explore Our Destinations
          </h1>
          <p className="text-sm text-stone-600 max-w-2xl">
            From the high alpine passes of Himachal and Kashmir to the sacred ghats of the Ganges and royal Rajasthan palaces, discover places handpicked for custom-curated journeys.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B1B36] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by destination name or state..."
              className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-stone-300 focus:outline-hidden focus:border-[#C5A059] text-xs"
            />
          </div>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-stone-200 space-y-3">
            <MapPin className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="text-lg font-bold text-stone-800">No destinations found</h3>
            <p className="text-xs text-stone-500">Try adjusting your search terms or category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#0B1B36] font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((dest) => {
              const matchingPackagesCount = PACKAGES_DATA.filter((p) =>
                p.primaryDestinationTags.includes(dest.id)
              ).length;

              return (
                <div
                  key={dest.id}
                  onClick={() => onNavigate('destination-detail', dest.id)}
                  className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dest.thumbnail}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                      {dest.categoryTags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-sm bg-black/60 backdrop-blur-xs text-white text-[9px] uppercase font-bold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <h3 className="text-lg font-bold font-serif-heading">{dest.name}</h3>
                      <span className="text-[11px] text-neutral-300">{dest.state}</span>
                    </div>
                  </div>

                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {dest.shortTeaser}
                    </p>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-stone-500 font-medium">
                        {matchingPackagesCount > 0
                          ? `${matchingPackagesCount} Curated Itinerar${matchingPackagesCount > 1 ? 'ies' : 'y'}`
                          : 'Custom Circuit Available'}
                      </span>
                      <span className="font-bold text-[#0B1B36] group-hover:text-[#C5A059] flex items-center gap-1">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
