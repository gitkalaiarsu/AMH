import {
  GraduationCap,
  ShoppingBag,
  Car,
  Dumbbell,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import type { NearbyPlaceCategory } from "@/types/property";

/**
 * Icon mapping for nearby place categories
 */
const CATEGORY_ICONS: Record<NearbyPlaceCategory, LucideIcon> = {
  school: GraduationCap,
  retail: ShoppingBag,
  parking: Car,
  gym: Dumbbell,
};

/**
 * Color mapping for nearby place categories (Tailwind classes)
 */
const CATEGORY_COLORS: Record<NearbyPlaceCategory, string> = {
  school: "text-red-400",
  retail: "text-emerald-400",
  parking: "text-blue-400",
  gym: "text-purple-400",
};

/**
 * Get the icon component for a nearby place category
 */
export const getCategoryIcon = (category: NearbyPlaceCategory): LucideIcon => {
  return CATEGORY_ICONS[category] || MapPin;
};

/**
 * Get the color class for a nearby place category
 */
export const getCategoryColor = (category: NearbyPlaceCategory): string => {
  return CATEGORY_COLORS[category] || "text-muted-foreground";
};

/**
 * Group nearby places by category
 */
export const groupPlacesByCategory = <
  T extends { category: NearbyPlaceCategory },
>(
  places: T[],
): Record<NearbyPlaceCategory, T[]> => {
  return places.reduce(
    (acc, place) => {
      if (!acc[place.category]) {
        acc[place.category] = [];
      }
      acc[place.category].push(place);
      return acc;
    },
    {} as Record<NearbyPlaceCategory, T[]>,
  );
};
