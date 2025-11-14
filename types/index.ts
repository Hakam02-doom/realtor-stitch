/**
 * User types
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role?: "realtor" | "professional" | "client";
}

/**
 * Property types
 */
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  type: "house" | "apartment" | "condo" | "townhouse";
}

/**
 * Professional types
 */
export interface Professional {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  reviews: number;
  specialties: string[];
  location: string;
}

/**
 * Menu item types
 */
export interface MenuItem {
  id: string;
  icon: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

/**
 * Navigation link types
 */
export interface NavLink {
  href: string;
  label: string;
}

