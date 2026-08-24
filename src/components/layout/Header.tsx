import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Compass, 
  Mountain, 
  Landmark, 
  Heart, 
  Sparkles 
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { DESTINATIONS_DATA, CATEGORIES_DATA } from '../../data/destinationsData';
import { CONTACT_DETAILS } from '../../data/siteData';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string, param?: string) => void;
  onOpenEnquiry: (prefill?: { destination?: string; packageName?: string }) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { key: 'nature', icon: Mountain, label: 'Nature & Mountains' },
    { key: 'heritage', icon: Landmark, label: 'Heritage & History' },
    { key: 'spiritual', icon: Sparkles, label: 'Spiritual' },
    { key: 'honeymoon', icon: Heart, label: 'Honeymoon' },
  ];

  return (
    <>
      {/* Top Utility Bar (Desktop only) */}
      <header className="w-full relative z-50">
        <div className="hidden lg:block bg-[#0B1B36] text-neutral-300 text-xs py-2 px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Shop No. 12, NDMC Market, Near CNG Pump, Mandir Marg, New Delhi – 110001</span>
              </span>
              <a href="mailto:info@lobotravels.com" className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>info@lobotravels.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-neutral-400">Lobo Travels Help Desk:</span>
              <a href="tel:9811240072" className="flex items-center gap-1 text-white font-medium hover:text-[#C5A059] transition-colors">
                <Phone className="w-3 h-3 text-[#C5A059]" /> 9811240072
              </a>
              <a href="tel:9891240072" className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors">
                9891240072
              </a>
              <a 
                href="https://wa.me/919312640072?text=Hello%20Lobo%20Travels,%20I%20would%20like%20to%20plan%20a%20trip."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" color="#34D399" /> WhatsApp: 9312640072
              </a>
            </div>
          </div>
        </div>

        {/* Main Sticky Navigation Bar */}
        <nav
          className={`sticky top-0 left-0 right-0 w-full transition-all duration-300 ${
            isScrolled || currentRoute !== 'home'
              ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-md border-b border-stone-200 py-3 text-[#0B1B36]'
              : 'bg-[#0B1B36]/80 lg:bg-[#0B1B36]/50 backdrop-blur-sm text-white py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2 cursor-pointer"
            >
              <BrandLogo 
                variant={isScrolled || currentRoute !== 'home' ? 'dark' : 'light'} 
                size="md" 
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => onNavigate('home')}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  currentRoute === 'home'
                    ? 'text-[#C5A059] font-semibold'
                    : isScrolled || currentRoute !== 'home' ? 'hover:text-[#C5A059]' : 'hover:text-[#C5A059]'
                }`}
              >
                Home
              </button>

              {/* Destinations with Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <button
                  onClick={() => onNavigate('destinations')}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors py-2 ${
                    currentRoute.startsWith('destination')
                      ? 'text-[#C5A059] font-semibold'
                      : isScrolled || currentRoute !== 'home' ? 'hover:text-[#C5A059]' : 'hover:text-[#C5A059]'
                  }`}
                >
                  <span>Destinations</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu Dropdown */}
                {isMegaMenuOpen && (
                  <div className="absolute top-full -left-48 w-[840px] bg-white text-[#0B1B36] rounded-xl shadow-2xl border border-stone-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-4 gap-6">
                      {categories.map(({ key, icon: Icon, label }) => {
                        const catInfo = CATEGORIES_DATA[key];
                        const catDestinations = DESTINATIONS_DATA.filter(d => d.categoryTags.includes(key as any));
                        return (
                          <div key={key} className="space-y-3">
                            <div className="relative rounded-lg overflow-hidden h-24 group">
                              <img 
                                src={catInfo?.thumbnail} 
                                alt={label}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B36]/90 via-[#0B1B36]/40 to-transparent flex items-end p-2.5">
                                <span className="text-white text-xs font-bold tracking-wide flex items-center gap-1.5">
                                  <Icon className="w-3.5 h-3.5 text-[#C5A059]" /> {label}
                                </span>
                              </div>
                            </div>
                            <ul className="space-y-1 text-xs">
                              {catDestinations.slice(0, 7).map(dest => (
                                <li key={dest.id}>
                                  <button
                                    onClick={() => {
                                      setIsMegaMenuOpen(false);
                                      onNavigate('destination-detail', dest.id);
                                    }}
                                    className="text-stone-600 hover:text-[#0B1B36] hover:font-semibold transition-colors py-0.5 block w-full text-left"
                                  >
                                    {dest.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-100 flex justify-between items-center bg-stone-50 -mx-6 -mb-6 p-4 rounded-b-xl">
                      <span className="text-xs text-stone-500">
                        22 Handpicked Destinations across India’s premier circuits
                      </span>
                      <button
                        onClick={() => {
                          setIsMegaMenuOpen(false);
                          onNavigate('destinations');
                        }}
                        className="text-xs font-bold text-[#0B1B36] hover:text-[#C5A059] flex items-center gap-1 transition-colors"
                      >
                        <span>View All 22 Destinations</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => onNavigate('packages')}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  currentRoute === 'packages'
                    ? 'text-[#C5A059] font-semibold'
                    : isScrolled || currentRoute !== 'home' ? 'hover:text-[#C5A059]' : 'hover:text-[#C5A059]'
                }`}
              >
                Packages
              </button>

              <button
                onClick={() => onNavigate('about')}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  currentRoute === 'about'
                    ? 'text-[#C5A059] font-semibold'
                    : isScrolled || currentRoute !== 'home' ? 'hover:text-[#C5A059]' : 'hover:text-[#C5A059]'
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  currentRoute === 'contact'
                    ? 'text-[#C5A059] font-semibold'
                    : isScrolled || currentRoute !== 'home' ? 'hover:text-[#C5A059]' : 'hover:text-[#C5A059]'
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://wa.me/919312640072?text=Hello%20Lobo%20Travels,%20I%20would%20like%20to%20plan%20a%20journey."
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-full transition-colors flex items-center justify-center ${
                  isScrolled || currentRoute !== 'home'
                    ? 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                    : 'bg-emerald-600/80 text-white hover:bg-emerald-600'
                }`}
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenEnquiry()}
                className="bg-[#C5A059] hover:bg-[#B89248] text-[#0B1B36] font-bold text-xs px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all tracking-wide flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenEnquiry()}
                className="bg-[#C5A059] text-[#0B1B36] font-bold text-xs px-3 py-1.5 rounded-md"
              >
                Enquire
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg ${
                  isScrolled || currentRoute !== 'home' ? 'text-[#0B1B36]' : 'text-white'
                }`}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Accordion Drawer */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[#0B1B36] text-white px-4 pt-3 pb-6 border-t border-white/10 space-y-4 max-h-[85vh] overflow-y-auto">
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => {
                    onNavigate('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-sm font-medium border-b border-white/10"
                >
                  Home
                </button>

                {/* Destinations Mobile Collapsible */}
                <div>
                  <button
                    onClick={() => onNavigate('destinations')}
                    className="w-full flex justify-between items-center py-2 text-sm font-medium text-[#C5A059]"
                  >
                    <span>All Destinations (22)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pl-3 space-y-2 border-l border-[#C5A059]/30 mt-1 mb-2">
                    {categories.map(({ key, label, icon: Icon }) => (
                      <div key={key}>
                        <button
                          onClick={() => setExpandedMobileCategory(expandedMobileCategory === key ? null : key)}
                          className="flex items-center justify-between w-full text-xs text-neutral-300 py-1.5"
                        >
                          <span className="flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5 text-[#C5A059]" /> {label}
                          </span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedMobileCategory === key ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedMobileCategory === key && (
                          <div className="pl-4 py-1 space-y-1 bg-white/5 rounded-md my-1">
                            {DESTINATIONS_DATA.filter(d => d.categoryTags.includes(key as any)).map(d => (
                              <button
                                key={d.id}
                                onClick={() => {
                                  onNavigate('destination-detail', d.id);
                                  setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-left text-[11px] text-neutral-400 hover:text-white py-1"
                              >
                                • {d.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    onNavigate('packages');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-sm font-medium border-b border-white/10"
                >
                  Curated Packages
                </button>

                <button
                  onClick={() => {
                    onNavigate('about');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-sm font-medium border-b border-white/10"
                >
                  About Lobo Travels
                </button>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-sm font-medium border-b border-white/10"
                >
                  Contact Desk & Map
                </button>
              </div>

              {/* Mobile Phone & WhatsApp links */}
              <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                <div className="text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">Direct Travel Desk</div>
                <div className="flex flex-col space-y-1.5">
                  <a href="tel:9811240072" className="flex items-center gap-2 text-neutral-200">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> +91 98112 40072 (Bookings)
                  </a>
                  <a href="tel:9891240072" className="flex items-center gap-2 text-neutral-200">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> +91 98912 40072 (Support)
                  </a>
                  <a href="https://wa.me/919312640072" className="flex items-center gap-2 text-emerald-400">
                    <WhatsAppIcon className="w-3.5 h-3.5" color="#34D399" /> +91 93126 40072 (WhatsApp)
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
