import { TourPackage, Testimonial, FAQ, NavigationLink, GalleryImage, HeroSlide } from './types';
import { MapPin, Camera, Wine, Plane, Compass, ShieldCheck, Users, Calendar } from 'lucide-react';

export const COMPANY_NAME = "Africa Cape Tours & Adventures";
export const COMPANY_PHONE = "+27 21 123 4567";
export const COMPANY_WHATSAPP = "27211234567"; // For WA Link
export const COMPANY_EMAIL = "bookings@africacapetours.co.za";
export const COMPANY_ADDRESS = "V&A Waterfront, Cape Town, 8001";

export const NAV_LINKS: NavigationLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Tours', path: '/tours' },
  { name: 'About Us', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1699020494335-0ef05048f299?q=80&w=1920&auto=format&fit=crop',
    title: 'Wild Beauty. Unforgettable Journeys.',
    subtitle: 'Curated private tours, luxury safaris, and authentic Western Cape experiences.',
  },
  {
    image: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?q=80&w=1920&auto=format&fit=crop',
    title: 'Taste the Cape Winelands',
    subtitle: 'Explore historic estates and award-winning wines in Stellenbosch & Franschhoek.',
  },
  {
    image: 'https://images.unsplash.com/photo-1591303872989-2640dc28185b?q=80&w=1920&auto=format&fit=crop',
    title: 'Majestic Table Mountain',
    subtitle: 'Discover one of the New 7 Wonders of Nature from a new perspective.',
  },
];

export const FEATURE_HIGHLIGHTS = [
  { icon: Compass, title: 'Guided Tours', desc: 'Expert local guides for every journey.' },
  { icon: Camera, title: 'Safari Experiences', desc: 'Big 5 encounters in luxury reserves.' },
  { icon: Wine, title: 'Wine Farm Tours', desc: 'Taste the best of Stellenbosch & Franschhoek.' },
  { icon: Plane, title: 'Airport Transfers', desc: 'Seamless pickups and drop-offs.' },
];

export const TRUST_STATS = [
  { icon: Calendar, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '5k+', label: 'Happy Travelers' },
  { icon: ShieldCheck, value: '100%', label: 'Safety Record' },
  { icon: Compass, value: '50+', label: 'Unique Itineraries' },
];

export const TOURS: TourPackage[] = [
  {
    id: 'cape-peninsula',
    title: 'Cape Peninsula Tour',
    category: 'Day Tours',
    shortDescription: 'Experience the spectacular coastline, Cape Point, and the penguins at Boulders Beach.',
    fullDescription: 'Join us for a breathtaking journey around the Cape Peninsula. Drive along the scenic Chapman’s Peak, visit the Cape of Good Hope Nature Reserve, see the African Penguins at Boulders Beach, and explore the colorful bathing boxes at Muizenberg.',
    duration: 'Full Day (8 Hours)',
    imageUrl: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=800&auto=format&fit=crop',
    highlights: ['Chapman’s Peak Drive', 'Cape Point', 'Boulders Beach Penguins', 'Kirstenbosch Gardens'],
  },
  {
    id: 'table-mountain-city',
    title: 'Table Mountain & City Tour',
    category: 'Day Tours',
    shortDescription: 'Discover the rich history of Cape Town and the panoramic views from the top of the mountain.',
    fullDescription: 'A comprehensive city orientation tour starting with a cable car ride up Table Mountain (weather permitting). Explore the Company’s Gardens, the Castle of Good Hope, and the vibrant Bo-Kaap neighborhood.',
    duration: 'Half Day (4 Hours)',
    imageUrl: 'https://images.unsplash.com/photo-1696074396971-f361e9fa90ec?q=80&w=800&auto=format&fit=crop',
    highlights: ['Table Mountain Cableway', 'Bo-Kaap Malay Quarter', 'Castle of Good Hope', 'Greenmarket Square'],
  },
  {
    id: 'winelands',
    title: 'Classic Winelands',
    category: 'Wine & Dining',
    shortDescription: 'Indulge in world-class wines and culinary delights in Stellenbosch and Franschhoek.',
    fullDescription: 'Visit 3 top wine estates in the heart of the Cape Winelands. Enjoy cheese and wine pairings, a cellar tour, and a stroll through the historic town of Stellenbosch with its Oak-lined streets.',
    duration: 'Full Day (8 Hours)',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop',
    highlights: ['3 Wine Tastings', 'Cheese Pairing', 'Cellar Tour', 'Franschhoek Tram option'],
  },
  {
    id: 'safari-day',
    title: 'Aquila Safari Day Trip',
    category: 'Safari',
    shortDescription: 'Witness the Big 5 just a couple of hours outside of Cape Town.',
    fullDescription: 'Enjoy a welcome drink upon arrival at a private game reserve. Embark on a 2-3 hour game drive in an open 4x4 vehicle with an experienced ranger to spot Lion, Elephant, Rhino, Buffalo, and Leopard.',
    duration: 'Full Day (10 Hours)',
    imageUrl: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=800&auto=format&fit=crop',
    highlights: ['Big 5 Game Drive', 'Buffet Lunch', 'Welcome Drinks', 'Scenic Transfer'],
  },
  {
    id: 'garden-route',
    title: 'Garden Route Adventure',
    category: 'Multi-Day Packages',
    shortDescription: 'A multi-day adventure exploring the verdant forests and lagoons of the Garden Route.',
    fullDescription: 'A 4-day adventure traveling from Cape Town to Knysna. Visit the Cango Caves in Oudtshoorn, ride an ostrich, hike in Tsitsikamma National Park, and enjoy a sunset cruise on the Knysna Lagoon.',
    duration: '4 Days / 3 Nights',
    imageUrl: 'https://images.unsplash.com/photo-1746850727152-ca7e8067829d?q=80&w=800&auto=format&fit=crop',
    highlights: ['Cango Caves', 'Ostrich Farm', 'Tsitsikamma Forest', 'Knysna Heads'],
  },
  {
    id: 'hermanus-whales',
    title: 'Hermanus Whale Watching',
    category: 'Day Tours',
    shortDescription: 'Visit the whale capital of the world and enjoy the scenic coastal drive.',
    fullDescription: 'Travel along the scenic Clarence Drive to Hermanus. Spot Southern Right Whales from the cliffs (seasonal: Jun-Nov) or take an optional boat trip. Visit a local wine estate in the Hemel-en-Aarde valley on the way back.',
    duration: 'Full Day (9 Hours)',
    imageUrl: 'https://images.unsplash.com/photo-1541954902471-4503b47641a4?q=80&w=800&auto=format&fit=crop',
    highlights: ['Whale Watching', 'Clarence Drive', 'Hemel-en-Aarde Wine', 'Old Harbour'],
  },
  {
    id: 'kruger-cape-combo',
    title: 'Cape & Kruger Luxury Combo',
    category: 'Multi-Day Packages',
    shortDescription: 'The ultimate South African experience combining the Mother City with the wild Kruger National Park.',
    fullDescription: 'A 7-day premier package. Spend 4 nights exploring Cape Town’s highlights, followed by a flight to the Greater Kruger National Park for 3 nights of luxury safari accommodation and daily game drives.',
    duration: '7 Days / 6 Nights',
    imageUrl: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800&auto=format&fit=crop',
    highlights: ['Table Mountain', 'Cape Peninsula', 'Kruger Game Drives', 'Luxury Lodging', 'Internal Flights'],
  },
  {
    id: 'foodie-tour',
    title: 'Cape Town Foodie Experience',
    category: 'Wine & Dining',
    shortDescription: 'Taste your way through Cape Town with coffee, chocolate, gin, and local cuisine.',
    fullDescription: 'A treat for the senses. Start with artisan coffee roasting, sample local chocolates, visit a gin distillery, and end with a traditional Cape Malay lunch in the Bo-Kaap.',
    duration: 'Half Day (5 Hours)',
    imageUrl: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=800&auto=format&fit=crop',
    highlights: ['Coffee Tasting', 'Chocolate Tasting', 'Gin Distillery', 'Cape Malay Lunch'],
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1635624290529-e66e69cf6fe3?q=80&w=1200', category: 'Wildlife', alt: 'Lion in the wild' },
  { src: 'https://images.unsplash.com/photo-1577985759186-0854dfd3f218?q=80&w=1200', category: 'Scenery', alt: 'Table Mountain view' },
  { src: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=1200', category: 'Activities', alt: 'Wine tasting' },
  { src: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1200', category: 'City', alt: 'Cape Town City Bowl' },
  { src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200', category: 'Wildlife', alt: 'Elephant herd' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200', category: 'Scenery', alt: 'Camps Bay Beach' },
  { src: 'https://images.unsplash.com/photo-1471180625745-944903837c22?q=80&w=1200', category: 'Activities', alt: 'Local cuisine' },
  { src: 'https://images.unsplash.com/photo-1704823826283-5797f4b46623?q=80&w=1200', category: 'Wildlife', alt: 'Boulders Beach Penguins' },
  { src: 'https://images.unsplash.com/photo-1704034451908-cb1b500900bc?q=80&w=1200', category: 'Scenery', alt: 'Tsitsikamma Forest' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "United Kingdom",
    comment: "Absolutely the highlight of our trip! The Winelands tour was exquisite, and our guide was so knowledgeable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael & Jenny",
    location: "USA",
    comment: "We felt safe and well taken care of during our Safari day trip. Seeing the elephants up close was magical.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lerato M.",
    location: "Johannesburg",
    comment: "Professional service from start to finish. The airport transfer was punctual, and the city tour was fun!",
    rating: 4,
  },
];

export const FAQS: FAQ[] = [
  {
    question: "Do you offer custom private tours?",
    answer: "Yes, absolutely! We specialize in tailor-made itineraries. Contact us via WhatsApp or email to build your dream trip."
  },
  {
    question: "Is hotel pick-up included?",
    answer: "Yes, we collect you from your accommodation in the Cape Town City Bowl, Atlantic Seaboard, and immediate surrounds."
  },
  {
    question: "What should I bring on a safari?",
    answer: "We recommend comfortable clothing, a warm jacket (it gets cold on open vehicles), sunscreen, sunglasses, and your camera!"
  },
  {
    question: "Are entrance fees included?",
    answer: "Generally, yes. Our packages specify exactly what is included. Meals are usually excluded unless stated otherwise."
  }
];