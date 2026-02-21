export interface NavigationItem {
  label: string;
  href: string;
}

export interface Vehicle {
  name: string;
  price: string;
  mileage: string;
  transmission: string;
  fuelType: string;
  image: string;
  badge?: string;
}

export interface Service {
  name: string;
  price: string;
  duration?: string;
  description: string;
  features?: string[];
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface ContactFieldOption {
  label: string;
  value: string;
}

export interface ContactField {
  name: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  label: string;
  required?: boolean;
  options?: string[];
}
