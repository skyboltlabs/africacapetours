export type TourCategory = 'Day Tours' | 'Safari' | 'Wine & Dining' | 'Multi-Day Packages';

export interface TourPackage {
  id: string;
  title: string;
  category: TourCategory;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  priceEstimate?: string;
  imageUrl: string;
  highlights: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavigationLink {
  name: string;
  path: string;
}

export interface GalleryImage {
  src: string;
  category: 'Wildlife' | 'Scenery' | 'City' | 'Activities';
  alt: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}