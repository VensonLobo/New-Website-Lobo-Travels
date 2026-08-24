import { Testimonial } from '../types';

export const TRUST_STATS = [
  { value: '30+', label: 'Years of Craft', description: 'Curating bespoke journeys from New Delhi' },
  { value: '45,000+', label: 'Delighted Travelers', description: 'Families, couples & private groups' },
  { value: '22+', label: 'Curated Destinations', description: 'Himalayan, Heritage & Spiritual circuits' },
  { value: '4.9/5', label: 'Guest Satisfaction', description: 'Verified reviews on service & transparency' },
  { value: '100%', label: 'Custom Tailored', description: 'Zero off-the-shelf fixed templates' },
];

export const WHY_CHOOSE_US = [
  {
    id: 'bespoke',
    title: 'Custom-Crafted Itineraries',
    description: 'We never sell generic off-the-shelf packages. Every day, halt, hotel, and pace is calibrated around your family or group preferences.',
    icon: 'Sparkles',
  },
  {
    id: 'concierge',
    title: '24x7 On-Trip Concierge',
    description: 'Direct phone & WhatsApp access to your designated senior travel desk officer in New Delhi throughout your trip from pickup to departure.',
    icon: 'PhoneCall',
  },
  {
    id: 'stays',
    title: 'Handpicked Verified Stays',
    description: 'From historic Rajput havelis and alpine pine cottages to super-deluxe Dal Lake houseboats, every property is physically vetted for quality.',
    icon: 'ShieldCheck',
  },
  {
    id: 'chauffeurs',
    title: 'Expert Chauffeurs & Guides',
    description: 'Professional commercial vehicles with vetted, polite mountain and expressway chauffeurs and licensed monument historians.',
    icon: 'Compass',
  },
  {
    id: 'pricing-clarity',
    title: 'Zero Hidden Costs',
    description: 'Complete transparency in inclusions, vehicle permits, toll taxes, and driver allowances. No surprise extras during your journey.',
    icon: 'BadgePercent',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh & Sunita Mehra',
    location: 'Mumbai',
    tripTaken: 'Delhi, Shimla & Manali Circuit',
    quote: 'Lobo Travels curated our family trip to Himachal with unbelievable attention to detail. The vehicle was immaculate, the driver was safe on mountain hairpin bends, and the hotel views in Manali were breathtaking. Noticeably superior to standard tour operators.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300&q=80',
    date: 'January 2026',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Vikram & Ananya Singhania',
    location: 'Bengaluru',
    tripTaken: 'Golden Triangle with Leopard Safari',
    quote: 'The Jhalana Leopard Safari in Jaipur was arranged seamlessly—we spotted two leopards at dusk! Their recommendation for sunrise at the Taj Mahal saved us from massive queues. Truly a bespoke luxury experience without any false promises.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=300&q=80',
    date: 'December 2025',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Dr. Alok & Meenakshi Sharma',
    location: 'Ahmedabad',
    tripTaken: 'Delhi, Haridwar, Nainital & Bhimtal',
    quote: 'Our spiritual trip to Haridwar Ganga Aarti followed by peaceful yachting in Nainital was organized like clockwork. The team at Lobo Travels Help Desk was always accessible on phone and accommodated my elderly parents with ground-floor rooms and comfortable pace.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80',
    date: 'November 2025',
    verified: true,
  },
  {
    id: 'test-4',
    name: 'Rohan & Tanya Kapoor',
    location: 'Pune',
    tripTaken: 'Kashmir Paradise Valley Honeymoon',
    quote: 'From the luxury cedar houseboat on Dal Lake with warm kehwa on arrival to our private Shikara and Pahalgam riverside suite, Lobo Travels gave us memories of a lifetime. The personalized care is why we will book with them again.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    date: 'October 2025',
    verified: true,
  },
];

export const CONTACT_DETAILS = {
  name: 'Lobo Travels',
  tagline: 'Journeys Crafted Around You',
  address: {
    line1: 'Shop No. 12, NDMC Market, Near CNG Pump',
    line2: 'Mandir Marg, New Delhi – 110001',
    landmark: 'Near CNG Pump, Mandir Marg',
    city: 'New Delhi',
    pincode: '110001',
    state: 'Delhi',
    country: 'India',
  },
  phones: [
    { number: '9811240072', display: '+91 98112 40072', purpose: 'Direct Bookings & Senior Itinerary Planners', isPrimary: true },
    { number: '9891240072', display: '+91 98912 40072', purpose: 'Customer Support & On-Trip Concierge Desk' },
    { number: '9312640072', display: '+91 93126 40072', purpose: 'WhatsApp Consultation Desk', isWhatsApp: true },
  ],
  email: 'info@lobotravels.com',
  workingHours: {
    weekdays: 'Monday to Saturday: 9:00 AM – 8:00 PM IST',
    sunday: 'Sunday: 10:00 AM – 6:00 PM IST',
    emergency: '24/7 Dedicated Support for On-Trip Guests',
  },
  socials: {
    instagram: 'https://instagram.com/lobotravels',
    facebook: 'https://facebook.com/lobotravels',
    youtube: 'https://youtube.com/lobotravels',
    whatsapp: 'https://wa.me/919312640072?text=Hello%20Lobo%20Travels,%20I%20would%20like%20to%20plan%20a%20custom%20itinerary.',
  },
};
