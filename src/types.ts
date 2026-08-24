export type CategoryType = 'nature' | 'heritage' | 'spiritual' | 'honeymoon';

export interface CategoryInfo {
  id: CategoryType;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  state: string;
  categoryTags: CategoryType[];
  shortTeaser: string;
  description: string;
  heroImage: string;
  thumbnail: string;
  bestTimeToVisit: string;
  nearestHub: string;
  highlights: string[];
  altitudeOrVibe?: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  subHeading?: string;
  activities: string[];
  meals?: string;
  stay?: string;
  notes?: string;
}

export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  duration: string; // e.g. "5 Days / 4 Nights"
  durationDays: number;
  durationNights: number;
  route: string; // e.g. "Delhi → Agra → Fatehpur Sikri → Delhi"
  routeArray: string[];
  primaryDestinationTags: string[];
  themeCategories: CategoryType[];
  heroImage: string;
  thumbnail: string;
  overview: string;
  highlights: string[];
  suitableFor?: string;
  dayWiseItinerary: DayItinerary[];
  inclusions: string[];
  exclusions: string[];
  operationalNotes?: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  tripTaken: string;
  quote: string;
  rating: number;
  avatar: string;
  date: string;
  verified: boolean;
}

export interface LeadEnquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  destination: string;
  packageId?: string;
  packageName?: string;
  startDate?: string;
  endDate?: string;
  travelers: number;
  hotelPreference?: string;
  requirements?: string;
  createdAt: string;
}
