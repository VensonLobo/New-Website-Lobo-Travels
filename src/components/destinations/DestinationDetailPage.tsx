import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Compass, 
  Plane, 
  Clock, 
  ChevronRight, 
  Sparkles,
  CheckCircle 
} from 'lucide-react';
import { DESTINATIONS_DATA } from '../../data/destinationsData';
import { PACKAGES_DATA } from '../../data/packagesData';

interface DestinationDetailPageProps {
  destinationId: string;
  onNavigate: (route: string, param?: string) => void;
  onOpenEnquiry: (prefill?: { destination?: string; packageName?: string }) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destinationId,
  onNavigate,
  onOpenEnquiry,
}) => {
  const destination = DESTINATIONS_DATA.find((d) => d.id === destinationId) || DESTINATIONS_DATA[0];

  // Find all packages matching this destination, sorted by duration (days ascending)
  const matchingPackages = PACKAGES_DATA.filter((pkg) =>
    pkg.primaryDestinationTags.includes(destination.id)
  ).sort((a, b) => a.durationDays - b.durationDays);

  return (
    <div className="bg-[#FBF9F5] min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative h-[380px] sm:h-[460px] bg-[#0B1B36] overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36] via-[#0B1B36]/60 to-transparent" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-between py-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-neutral-300">
            <button onClick={() => onNavigate('home')} className="hover:text-white">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('destinations')} className="hover:text-white">Destinations</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E5C378] font-semibold">{destination.name}</span>
          </div>

          {/* Title Area */}
          <div className="space-y-3 max-w-3xl text-white pb-4">
            <div className="flex flex-wrap gap-2">
              {destination.categoryTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-[#C5A059] text-[#0B1B36] text-xs font-bold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
              <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-white text-xs font-medium">
                {destination.state}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-serif-heading">
              {destination.name} Tour Packages
            </h1>
            <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
              {destination.shortTeaser}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        
        {/* Destination Facts Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-2xl shadow-xs border border-stone-200">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Best Time to Visit</span>
              <p className="text-xs font-semibold text-[#0B1B36]">{destination.bestTimeToVisit}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Plane className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Connectivity Hub</span>
              <p className="text-xs font-semibold text-[#0B1B36]">{destination.nearestHub}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Signature Character</span>
              <p className="text-xs font-semibold text-[#0B1B36]">{destination.altitudeOrVibe || 'Curated Heritage & Leisure'}</p>
            </div>
          </div>
        </div>

        {/* Destination Overview and Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-[#0B1B36] font-serif-heading">
              About {destination.name}
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed">
              {destination.description}
            </p>
          </div>

          <div className="bg-[#0B1B36] text-white p-6 rounded-2xl space-y-4 shadow-md">
            <h3 className="text-base font-bold text-[#E5C378] font-serif-heading">
              Top Sightseeing Highlights
            </h3>
            <ul className="space-y-2 text-xs">
              {destination.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-200">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Curated Itineraries for this Destination */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">
              Available Circuits
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B36] font-serif-heading">
              Curated Itineraries Featuring {destination.name}
            </h2>
            <p className="text-xs text-stone-500">
              Sorted by duration to easily compare weekend breaks against comprehensive regional circuits.
            </p>
          </div>

          {matchingPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={pkg.thumbnail}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1B36]/90 backdrop-blur-xs text-[#E5C378] text-xs font-bold px-3 py-1 rounded-md">
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-medium text-stone-500 uppercase tracking-wider">
                        {pkg.route}
                      </span>
                      <h3 className="text-base font-bold text-[#0B1B36] font-serif-heading group-hover:text-[#C5A059] transition-colors leading-snug">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {pkg.overview}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[11px] text-stone-500 italic">Custom Quote</span>
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
          ) : (
            <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center space-y-4">
              <Compass className="w-10 h-10 text-[#C5A059] mx-auto" />
              <h3 className="text-lg font-bold text-[#0B1B36] font-serif-heading">
                Looking for a Custom {destination.name} Itinerary?
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto">
                We design bespoke private journeys to {destination.name} tailored around your duration, flight connectivity, and hotel luxury tier.
              </p>
              <button
                onClick={() => onOpenEnquiry({ destination: destination.name })}
                className="bg-[#C5A059] hover:bg-[#B89248] text-[#0B1B36] font-bold text-xs px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Plan a Custom {destination.name} Trip
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
