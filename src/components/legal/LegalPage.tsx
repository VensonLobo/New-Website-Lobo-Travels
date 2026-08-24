import React from 'react';
import { ShieldCheck, FileText, ChevronRight } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (route: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="bg-[#FBF9F5] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <button onClick={() => onNavigate('home')} className="hover:text-[#0B1B36]">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0B1B36] font-semibold">{isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}</span>
        </div>

        <div className="space-y-3">
          <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest">
            Compliance & Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1B36] font-serif-heading">
            {isPrivacy ? 'Privacy & Data Protection Policy' : 'Booking Terms & Travel Conditions'}
          </h1>
          <p className="text-xs text-stone-500">
            Last Updated: January 2026 • Lobo Travels, Mandir Marg, New Delhi
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-xs space-y-6 text-xs text-stone-700 leading-relaxed">
          {isPrivacy ? (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#0B1B36]">1. Information Collection & Purpose</h2>
                <p>
                  Lobo Travels respects your privacy. When you request a custom travel itinerary, we collect contact information (name, phone number, email address), travel dates, accommodation preferences, and traveler counts exclusively to formulate your personalized travel proposal.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#0B1B36]">2. Zero Third-Party Data Selling</h2>
                <p>
                  We strictly do NOT sell, rent, or trade your personal information to third-party telemarketers or advertisers. Your details are shared solely with operational service partners (such as designated hoteliers, licensed safari authorities, and confirmed airline desks) as necessary to execute your journey.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#0B1B36]">3. Communication Consent</h2>
                <p>
                  By submitting an enquiry form on lobotravels.com or reaching out via phone or WhatsApp, you consent to receive direct travel consultations and operational booking updates from our authorized desk officers at Mandir Marg, New Delhi.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#0B1B36]">1. Bespoke Custom Itineraries</h2>
                <p>
                  All itineraries presented by Lobo Travels are curated around the specific travel dates, hotel tiers, vehicle category, and guest counts agreed upon at the time of final quotation. Any modifications to dates or guest counts may adjust the total cost accordingly.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#0B1B36]">2. Booking Confirmation & Payment Schedule</h2>
                <p>
                  Bookings are officially confirmed upon receipt of the agreed initial booking deposit. The remaining balance must be cleared as specified in your personalized confirmation voucher prior to journey departure.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#0B1B36]">3. Chauffeur & Vehicle Operations</h2>
                <p>
                  Dedicated private vehicles are deployed strictly according to the itinerary. Chauffeurs operate in full compliance with interstate road transport regulations, hill driving safety guidelines, and permitted municipal hours.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-[#0B1B36]">4. Weather & Force Majeure</h2>
                <p>
                  In the event of unforeseen high-altitude weather disruptions, road closures, or governmental restrictions (e.g. Rohtang Pass weather advisories or temple timings changes), our 24/7 on-trip concierge desk will coordinate alternate routes or rescheduling in the traveler’s best interest.
                </p>
              </section>
            </>
          )}

          <div className="pt-6 border-t border-stone-100 flex items-center justify-between text-stone-500">
            <span className="text-[11px]">Questions? Contact us at info@lobotravels.com</span>
            <span className="text-[11px] font-semibold text-[#0B1B36]">Shop No. 12, NDMC Market, Mandir Marg, New Delhi</span>
          </div>
        </div>

      </div>
    </div>
  );
};
