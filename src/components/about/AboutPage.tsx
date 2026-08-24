import React from 'react';
import { ShieldCheck, Compass, MapPin, Award, Users, HeartHandshake, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="bg-[#FBF9F5] min-h-screen py-12 space-y-16">
      
      {/* Hero Intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
          The Lobo Travels Heritage
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#0B1B36] font-serif-heading">
          Crafting Tailor-Made Indian Journeys with Aviation-Grade Precision
        </h1>
        <p className="text-base text-stone-600 leading-relaxed font-light">
          Founded on the principle that no two travelers share the same rhythm, Lobo Travels has spent over 30 years turning northern India’s richest cultural, mountain, and spiritual circuits into seamless personal odysseys.
        </p>
      </div>

      {/* Philosophy Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80"
              alt="Lobo Travels Heritage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-xs text-[#E5C378] font-mono uppercase">Lobo Travels Help Desk • New Delhi</span>
              <p className="text-lg font-serif font-bold">30+ Years of Curating Uncompromising Travel Experiences</p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-stone-700">
            <h2 className="text-2xl font-bold text-[#0B1B36] font-serif-heading">
              Why We Refuse to Sell Fixed Packages Off a Shelf
            </h2>
            <p className="leading-relaxed">
              Most travel portals treat journeys as commodities: identical bus seats, cookie-cutter hotel blocks, and rushed sightseeing checklists. We operate differently.
            </p>
            <p className="leading-relaxed">
              At Lobo Travels, our journey consultants in New Delhi personally listen to your family’s walking pace, dietary nuances, room preferences, and travel milestones before proposing a single day's plan.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
                <span className="font-bold text-[#0B1B36] text-sm">Physical Property Vetting</span>
                <p className="text-stone-500">Every resort, heritage haveli, and houseboat is inspected.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
                <span className="font-bold text-[#0B1B36] text-sm">Dedicated Chauffeurs</span>
                <p className="text-stone-500">Seasoned mountain drivers and expressway licensed professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Anchor */}
      <div className="bg-[#0B1B36] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#E5C378]">
              The Core Pillars of Trust
            </h2>
            <p className="text-xs text-neutral-300">
              How our Lobo Travels Help Desk guarantees peace of mind for every guest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
              <h3 className="text-base font-bold text-white">Transparent Pricing</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Zero ambiguous asterisks. All interstate road taxes, toll passes, green fees, and driver allowances are clear upfront.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-3">
              <Compass className="w-8 h-8 text-[#C5A059]" />
              <h3 className="text-base font-bold text-white">24x7 Active Concierge</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                You are never handed off to a chatbot. A named travel officer oversees your flight updates, hotel check-ins, and on-trip requests.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-3">
              <Award className="w-8 h-8 text-[#C5A059]" />
              <h3 className="text-base font-bold text-white">Tailored Pace & Rhythm</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Whether accommodating elderly parents seeking relaxed darshans or couples looking for romantic seclusion, your itinerary breathes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B36] font-serif-heading">
          Ready to Experience the Lobo Difference?
        </h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onOpenEnquiry()}
            className="bg-[#C5A059] hover:bg-[#B89248] text-[#0B1B36] font-bold text-xs px-8 py-3.5 rounded-xl shadow-md transition-all uppercase tracking-wider"
          >
            Start Planning With an Expert
          </button>
        </div>
      </div>

    </div>
  );
};
