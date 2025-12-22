export interface Property {
  id: string;
  propertyId: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  images: string[];
  daysOnMarket: number;
  daysLeft?: number;
  status: PropertyStatus;
  tags: PropertyTag[];
  amenities: string[];
  yearBuilt?: number;
  lotSize?: number;
  propertyType: PropertyType;
  description: string;
  features: PropertyFeatures;
  nearbyPlaces: NearbyPlace[];
  rentalSalesComps: RentalSalesComps;
}

export type PropertyStatus = "vacant" | "occupied" | "pending" | "sold";

export type PropertyTag =
  | "AMH Built"
  | "AMH-built"
  | "Built 2020"
  | "Built 2025"
  | "Vacant"
  | "Pool"
  | "Compound"
  | "Rent"
  | "Aged";

export type PropertyType =
  | "single-family"
  | "multi-family"
  | "condo"
  | "townhouse"
  | "apartment";

export interface PropertyFeatures {
  garageAndParking: string[];
  yardAndExterior: string[];
  kitchen: string[];
  bedroomAndBath: string[];
  flooringAndFinish: string[];
}

export interface NearbyPlace {
  id: string;
  name: string;
  category: NearbyPlaceCategory;
  distance: string;
  time: string;
}

export type NearbyPlaceCategory = "school" | "retail" | "parking" | "gym";

export interface RentalSalesComps {
  purchaseCosts: number;
  rehabCosts: number;
}

export interface PropertyFilters {
  location?: string;
  status?: PropertyStatus;
  amenities?: string[];
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  maxBeds?: number;
  minBaths?: number;
  maxBaths?: number;
  minSqft?: number;
  maxSqft?: number;
}

export interface SearchHistoryItem {
  id: string;
  query: string;
  matches: number;
  filters: string;
  timestamp: Date;
  category: "today" | "yesterday" | "older";
}

export interface SavedProperty {
  id: string;
  property: Property;
  savedAt: Date;
}
