import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { CONTACT_DETAILS } from '../../data/siteData';

interface FooterProps {
  onNavigate: (route: string, param?: string) => void;
  onOpenEnquiry: (prefill?: { destination?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <footer className="bg-[#071326] text-neutral-300 pt-16 pb-8 border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div onClick={() => onNavigate('home')} className="cursor-pointer inline-block">
              <BrandLogo variant="light" size="lg" />
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Lobo Travels is a premier, trust-driven Indian travel consultancy. We design bespoke, memory-rich itineraries tailored around your rhythm and accommodation preferences with 30+ years of craft.
            </p>
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-[#C5A059]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-medium">100% Curated Private Journeys</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase border-l-2 border-[#C5A059] pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" /> All 22 Destinations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" /> Curated Tour Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" /> The Lobo Difference & 30+ Years Heritage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#C5A059]" /> Lobo Travels Help Desk & Location
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquiry()} className="text-[#C5A059] hover:underline font-semibold flex items-center gap-1.5 pt-1">
                  <Sparkles className="w-3 h-3" /> Request Custom Itinerary
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Destination Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase border-l-2 border-[#C5A059] pl-2.5">
              Thematic Circuits
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button onClick={() => onNavigate('destinations', 'nature')} className="hover:text-white transition-colors">
                  <span className="text-white font-medium">Nature & Mountains:</span> Shimla, Manali, Mussoorie, Nainital, Kashmir
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations', 'heritage')} className="hover:text-white transition-colors">
                  <span className="text-white font-medium">Heritage & History:</span> Delhi, Agra, Jaipur, Udaipur, Amritsar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations', 'spiritual')} className="hover:text-white transition-colors">
                  <span className="text-white font-medium">Spiritual & Sanctums:</span> Haridwar, Rishikesh, Char Dham, Varanasi, Ayodhya
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations', 'honeymoon')} className="hover:text-white transition-colors">
                  <span className="text-white font-medium">Honeymoon Escapes:</span> Kashmir Valley, Udaipur Lakes, Manali
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Operational Travel Desk */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase border-l-2 border-[#C5A059] pl-2.5">
              Lobo Travels Help Desk
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Shop No. 12, NDMC Market, Near CNG Pump, Mandir Marg, New Delhi – 110001</span>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider">Direct Lines:</div>
                <div className="flex flex-col space-y-1">
                  <a href="tel:9811240072" className="flex items-center gap-1.5 text-white hover:text-[#C5A059] font-medium transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> +91 98112 40072 <span className="text-[10px] text-neutral-400 font-normal">(Bookings)</span>
                  </a>
                  <a href="tel:9891240072" className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> +91 98912 40072 <span className="text-[10px] text-neutral-400">(Support)</span>
                  </a>
                  <a 
                    href="https://wa.me/919312640072?text=Hello%20Lobo%20Travels,%20I%20would%20like%20to%20plan%20a%20journey."
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" color="#34D399" /> +91 93126 40072 <span className="text-[10px] text-neutral-400 font-normal">(WhatsApp)</span>
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <a href="mailto:info@lobotravels.com" className="flex items-center gap-1.5 text-neutral-300 hover:text-[#C5A059] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059]" /> info@lobotravels.com
                </a>
              </div>

              <div className="flex items-start gap-1.5 text-neutral-400 text-[11px] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Mon–Sat: 9:00 AM – 8:00 PM | 24/7 On-Trip Emergency Concierge</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Lobo Travels. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('privacy')} className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('terms')} className="hover:text-neutral-300 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-neutral-300 transition-colors">
              Office Location
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
