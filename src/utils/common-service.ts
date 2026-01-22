import { toast } from "react-toastify";

export const forSuccess = (message: string, id?: string) =>
  toast.success(message, { autoClose: 3000, toastId: id ?? 1 });

export const forError = (message: string, id?: string) =>
  toast.error(message, { autoClose: 3000, toastId: id ?? 1 });

export const forWarning = (message: string, id?: string) =>
  toast.warning(message, { autoClose: 3000, toastId: id ?? 1 });

// export const BED_OPTIONS = [
//   { id: "bed-all", value: "all", label: "All" },
//   { id: "bed-1", value: "1", label: "1" },
//   { id: "bed-2", value: "2", label: "2" },
//   { id: "bed-3", value: "3", label: "3" },
//   { id: "bed-4", value: "4", label: "4" },
//   { id: "bed-5", value: "5", label: "5" },
//   { id: "bed-6", value: "6", label: "6" },
//   { id: "bed-7", value: "7", label: "7" },
//   { id: "bed-8", value: "8", label: "8" },
// ];

// export const BATH_OPTIONS = [
//   { id: "bath-all", value: "all", label: "All" },
//   { id: "bath-1", value: "1", label: "1" },
//   { id: "bath-2", value: "2", label: "2" },
//   { id: "bath-3", value: "3", label: "3" },
//   { id: "bath-4", value: "4", label: "4" },
//   { id: "bath-5", value: "5", label: "5" },
//   { id: "bath-6", value: "6", label: "6" },
//   { id: "bath-7", value: "7", label: "7" },
//   { id: "bath-8", value: "8", label: "8" },
//   { id: "bath-9", value: "9", label: "9" },
//   { id: "bath-10", value: "10", label: "10" },
// ];

// export const STATUS_OPTIONS = [
//   { id: "status-all", value: "all", label: "All" },
//   { id: "status-1", value: "Listed For Sale", label: "Listed For Sale" },
//   { id: "status-2", value: "Occupied No Notice", label: "Occupied No Notice" },
//   { id: "status-3", value: "Notice Unrented", label: "Notice Unrented" },
//   { id: "status-4", value: "Sold - (I)", label: "Sold - (I)" },
//   { id: "status-5", value: "Vacant Unrented Ready (RESERVED)", label: "Vacant Unrented Ready (RESERVED)" },
//   { id: "status-6", value: "Pass - (I)", label: "Pass - (I)" },
//   { id: "status-7", value: "Future Construction", label: "Future Construction" },
//   { id: "status-8", value: "Rescinded", label: "Rescinded" },
//   { id: "status-9", value: "Under Construction", label: "Under Construction" },
//   { id: "status-10", value: "Lost - (I)", label: "Lost - (I)" },
//   { id: "status-11", value: "Common Area", label: "Common Area" },
//   { id: "status-12", value: "Escrow", label: "Escrow" },
//   { id: "status-13", value: "Vacant Rented Ready", label: "Vacant Rented Ready" },
//   { id: "status-14", value: "Community", label: "Community" },
//   { id: "status-15", value: "Vacant Unrented Not Ready", label: "Vacant Unrented Not Ready" },
//   { id: "status-16", value: "Offer", label: "Offer" },
//   { id: "status-17", value: "Vacant Rented Not Ready", label: "Vacant Rented Not Ready" },
//   { id: "status-18", value: "Notice Rented", label: "Notice Rented" },
//   { id: "status-19", value: "Out of Service", label: "Out of Service" },
//   { id: "status-20", value: "Pass", label: "Pass" },
//   { id: "status-21", value: "Lost", label: "Lost" },
//   { id: "status-22", value: "Exception", label: "Exception" },
// ];

// export const AMENITIES_OPTIONS = [
//   { id: "amenity-all", value: "all", label: "All" },
//   { id: "amenity-1", value: "Pool", label: "Pool" },
//   { id: "amenity-2", value: "Gym", label: "Gym" },
//   { id: "amenity-3", value: "Parking", label: "Parking" },
//   { id: "amenity-4", value: "Laundry", label: "Laundry" },
//   { id: "amenity-5", value: "Pet Friendly", label: "Pet Friendly" },
//   { id: "amenity-6", value: "Balcony", label: "Balcony" },
// ];

export const featureCards = [
    {
      id: "1",
      iconSrc: "/house.svg",
      title: "Property ID / Address Example",
      description:
        "Search by property ID, full address, or zip code to view detailed listings instantly.",
      iconBgColor: "rgba(74, 217, 145, 0.21)",
    },
    {
      id: "2",
      iconSrc: "/ep_location.svg",
      title: "City / Zip Example",
      description:
        "Find properties in Mesa, Arizona 85209 under $3000 with at least 3 bedrooms.",
      iconBgColor: "rgba(254, 197, 61, 0.21)",
    },
    {
      id: "3",
      iconSrc: "/swimming-pool.svg",
      title: "Amenities / Nearby Example",
      description:
        "List houses near shopping center that include a backyard patio or swimming pool.",
      iconBgColor: "rgba(130, 128, 255, 0.21)",
    },
  ];


  // ============================================
// TYPES
// ============================================

export interface MultiSelectOption {
  readonly id: string | number;
  readonly value: string;
  readonly label: string;
}

export interface GroupedMultiSelectOption {
  readonly id: string;
  readonly label: string;
  readonly options: MultiSelectOption[];
}


export const BED_OPTIONS: MultiSelectOption[] = [
  { id: "bed-all", value: "all", label: "All" },
  { id: "bed-1", value: "1", label: "1" },
  { id: "bed-2", value: "2", label: "2" },
  { id: "bed-3", value: "3", label: "3" },
  { id: "bed-4", value: "4", label: "4" },
  { id: "bed-5", value: "5", label: "5" },
  { id: "bed-6", value: "6", label: "6" },
  { id: "bed-7", value: "7", label: "7" },
  { id: "bed-8", value: "8", label: "8" },
];

export const BATH_OPTIONS: MultiSelectOption[] = [
  { id: "bath-all", value: "all", label: "All" },
  { id: "bath-1", value: "1", label: "1" },
  { id: "bath-2", value: "2", label: "2" },
  { id: "bath-3", value: "3", label: "3" },
  { id: "bath-4", value: "4", label: "4" },
  { id: "bath-5", value: "5", label: "5" },
  { id: "bath-6", value: "6", label: "6" },
  { id: "bath-7", value: "7", label: "7" },
  { id: "bath-8", value: "8", label: "8" },
  { id: "bath-9", value: "9", label: "9" },
  { id: "bath-10", value: "10", label: "10" },
];

export const STATUS_OPTIONS: GroupedMultiSelectOption[] = [
  {
    id: "vacant",
    label: "Vacant",
    options: [
      { id: "vac-1", value: "listed-for-sale", label: "Listed For Sale" },
    ],
  },
  {
    id: "occupied",
    label: "Occupied",
    options: [
      { id: "occ-1", value: "occupied-no-notice", label: "Occupied No Notice" },
      { id: "occ-2", value: "notice-unrented", label: "Notice Unrented" },
      { id: "occ-3", value: "sold-i", label: "Sold - (I)" },
      { id: "occ-4", value: "vacant-unrented-ready-reserved", label: "Vacant Unrented Ready (RESERVED)" },
      { id: "occ-5", value: "pass-i", label: "Pass - (I)" },
      { id: "occ-6", value: "future-construction", label: "Future Construction" },
      { id: "occ-7", value: "rescinded", label: "Rescinded" },
      { id: "occ-8", value: "under-construction", label: "Under Construction" },
      { id: "occ-9", value: "lost-i", label: "Lost - (I)" },
      { id: "occ-10", value: "common-area", label: "Common Area" },
      { id: "occ-11", value: "escrow", label: "Escrow" },
      { id: "occ-12", value: "vacant-rented-ready", label: "Vacant Rented Ready" },
      { id: "occ-13", value: "community", label: "Community" },
      { id: "occ-14", value: "vacant-unrented-not-ready", label: "Vacant Unrented Not Ready" },
      { id: "occ-15", value: "offer", label: "Offer" },
      { id: "occ-16", value: "vacant-rented-not-ready", label: "Vacant Rented Not Ready" },
      { id: "occ-17", value: "notice-rented", label: "Notice Rented" },
      { id: "occ-18", value: "out-of-service", label: "Out of Service" },
      { id: "occ-19", value: "pass", label: "Pass" },
      { id: "occ-20", value: "lost", label: "Lost" },
      { id: "occ-21", value: "exception", label: "Exception" },
      { id: "occ-22", value: "null", label: "Null" },
    ],
  },
];


export const AMENITIES_OPTIONS: GroupedMultiSelectOption[] = [
  {
    id: "interior",
    label: "Interior",
    options: [
      { id: "int-1", value: "1-car-garage", label: "1 Car Garage" },
      { id: "int-2", value: "1-spot", label: "1 Spot" },
      { id: "int-3", value: "2-car-garage", label: "2 Car Garage" },
      { id: "int-4", value: "2-spot", label: "2 Spot" },
      { id: "int-5", value: "3-car-garage", label: "3 Car Garage" },
      { id: "int-6", value: "arched-window", label: "Arched Window" },
      { id: "int-7", value: "back-yard-grass", label: "Back Yard Grass" },
      { id: "int-8", value: "basement", label: "Basement" },
      { id: "int-9", value: "bathroom", label: "Bathroom" },
      { id: "int-10", value: "bathtub", label: "Bathtub" },
      { id: "int-11", value: "bedroom", label: "Bedroom" },
      { id: "int-12", value: "black-cooktop", label: "Black Cooktop" },
      { id: "int-13", value: "black-dishwasher", label: "Black Dishwasher" },
      { id: "int-14", value: "black-double-oven", label: "Black Double Oven" },
      { id: "int-15", value: "black-microwave-oven", label: "Black Microwave Oven" },
      { id: "int-16", value: "black-range", label: "Black Range" },
      { id: "int-17", value: "black-refrigerator", label: "Black Refrigerator" },
      { id: "int-18", value: "black-wall-oven", label: "Black Wall Oven" },
      { id: "int-19", value: "built-in-workspace", label: "Built-in Workspace" },
      { id: "int-20", value: "carpet", label: "Carpet" },
      { id: "int-21", value: "carport", label: "Carport" },
      { id: "int-22", value: "chandelier", label: "Chandelier" },
      { id: "int-23", value: "dark-cabinets", label: "Dark Cabinets" },
      { id: "int-24", value: "detached-garage", label: "Detached Garage" },
      { id: "int-25", value: "dining-room", label: "Dining Room" },
      { id: "int-26", value: "dome-light", label: "Dome Light" },
      { id: "int-27", value: "double-width-driveway", label: "Double Width Driveway" },
      { id: "int-28", value: "dual-sink", label: "Dual Sink" },
      { id: "int-29", value: "en-suite", label: "En Suite" },
      { id: "int-30", value: "extra-storage", label: "Extra Storage" },
      { id: "int-31", value: "finished-basement", label: "Finished Basement" },
      { id: "int-32", value: "first-floor-primary", label: "First-floor Primary" },
      { id: "int-33", value: "front-yard-grass", label: "Front Yard Grass" },
      { id: "int-34", value: "granite-backsplash", label: "Granite Backsplash" },
      { id: "int-35", value: "granite-countertops", label: "Granite Countertops" },
      { id: "int-36", value: "half-bathroom", label: "Half Bathroom" },
      { id: "int-37", value: "jack-and-jill", label: "Jack and Jill" },
      { id: "int-38", value: "kitchen", label: "Kitchen" },
      { id: "int-39", value: "kitchen-island", label: "Kitchen Island" },
      { id: "int-40", value: "laundry-room", label: "Laundry Room" },
      { id: "int-41", value: "light-cabinets", label: "Light Cabinets" },
      { id: "int-42", value: "living-room", label: "Living Room" },
      { id: "int-43", value: "luxury-vinyl-plank-flooring", label: "Luxury Vinyl Plank Flooring" },
      { id: "int-44", value: "office", label: "Office" },
      { id: "int-45", value: "one-story", label: "One Story" },
      { id: "int-46", value: "open-floorplan", label: "Open Floorplan" },
      { id: "int-47", value: "outdoor-fencing", label: "Outdoor Fencing" },
      { id: "int-48", value: "oversized-bathtub", label: "Oversized Bathtub" },
      { id: "int-49", value: "pantry", label: "Pantry" },
      { id: "int-50", value: "pendant-lights", label: "Pendant Lights" },
      { id: "int-51", value: "pool", label: "Pool" },
      { id: "int-52", value: "quartz-countertops", label: "Quartz Countertops" },
      { id: "int-53", value: "reach-in-closet", label: "Reach-in Closet" },
      { id: "int-54", value: "recessed-lighting", label: "Recessed Lighting" },
      { id: "int-55", value: "separate-shower", label: "Separate Shower" },
      { id: "int-56", value: "single-sink", label: "Single Sink" },
      { id: "int-57", value: "single-width-driveway", label: "Single Width Driveway" },
      { id: "int-58", value: "stainless-steel-cooktop", label: "Stainless Steel Cooktop" },
      { id: "int-59", value: "stainless-steel-dishwasher", label: "Stainless Steel Dishwasher" },
      { id: "int-60", value: "stainless-steel-double-oven", label: "Stainless Steel Double Oven" },
      { id: "int-61", value: "stainless-steel-microwave-oven", label: "Stainless Steel Microwave Oven" },
      { id: "int-62", value: "stainless-steel-range", label: "Stainless Steel Range" },
      { id: "int-63", value: "stainless-steel-refrigerator", label: "Stainless Steel Refrigerator" },
      { id: "int-64", value: "stainless-steel-wall-oven", label: "Stainless Steel Wall Oven" },
      { id: "int-65", value: "standard-ceiling-fan", label: "Standard Ceiling Fan" },
      { id: "int-66", value: "subway-tile-backsplash", label: "Subway Tile Backsplash" },
      { id: "int-67", value: "tile-flooring", label: "Tile Flooring" },
      { id: "int-68", value: "tray-ceilings", label: "Tray Ceilings" },
      { id: "int-69", value: "triple-width-driveway", label: "Triple Width Driveway" },
      { id: "int-70", value: "two-story", label: "Two Story" },
      { id: "int-71", value: "vaulted-ceilings", label: "Vaulted Ceilings" },
      { id: "int-72", value: "walk-in-closet", label: "Walk-in Closet" },
      { id: "int-73", value: "walk-out-basement", label: "Walk-out Basement" },
      { id: "int-74", value: "white-cooktop", label: "White Cooktop" },
      { id: "int-75", value: "white-dishwasher", label: "White Dishwasher" },
      { id: "int-76", value: "white-double-oven", label: "White Double Oven" },
      { id: "int-77", value: "white-microwave-oven", label: "White Microwave Oven" },
      { id: "int-78", value: "white-range", label: "White Range" },
      { id: "int-79", value: "white-refrigerator", label: "White Refrigerator" },
      { id: "int-80", value: "white-wall-oven", label: "White Wall Oven" },
    ],
  },
  {
    id: "parcel",
    label: "Parcel",
    options: [
      { id: "par-1", value: "corner-lot", label: "Corner Lot" },
      { id: "par-2", value: "cul-de-sac", label: "Cul De Sac" },
      { id: "par-3", value: "entrance-home", label: "Entrance Home" },
      { id: "par-4", value: "end-home", label: "End Home" },
      { id: "par-5", value: "faces-busy-street", label: "Faces Busy Street" },
      { id: "par-6", value: "backs-busy-street", label: "Backs Busy Street" },
      { id: "par-7", value: "north-facing", label: "North Facing" },
      { id: "par-8", value: "east-facing", label: "East Facing" },
      { id: "par-9", value: "south-facing", label: "South Facing" },
      { id: "par-10", value: "west-facing", label: "West Facing" },
      { id: "par-11", value: "oversized-lot", label: "Oversized Lot" },
      { id: "par-12", value: "undersized-lot", label: "Undersized Lot" },
      { id: "par-13", value: "front-garage", label: "Front Garage" },
      { id: "par-14", value: "rear-garage", label: "Rear Garage" },
    ],
  },
  {
    id: "exterior",
    label: "Exterior",
    options: [
      { id: "ext-1", value: "mountains", label: "Mountains" },
      { id: "ext-2", value: "waterview", label: "Waterview" },
      { id: "ext-3", value: "ocean", label: "Ocean" },
      { id: "ext-4", value: "golf-course", label: "Golf Course" },
      { id: "ext-5", value: "walking-path", label: "Walking Path" },
      { id: "ext-6", value: "city-view", label: "City View" },
      { id: "ext-7", value: "drainway", label: "Drainway" },
      { id: "ext-8", value: "greenbelt", label: "Greenbelt" },
      { id: "ext-9", value: "neighborhood", label: "Neighborhood" },
      { id: "ext-10", value: "trailer-park", label: "Trailer Park" },
      { id: "ext-11", value: "obstructed", label: "Obstructed" },
    ],
  },
  {
    id: "proximity",
    label: "Proximity",
    options: [
      { id: "prox-1", value: "gym", label: "Gym" },
      { id: "prox-2", value: "school", label: "School" },
      { id: "prox-3", value: "bus-stop", label: "Bus Stop" },
      { id: "prox-4", value: "airport", label: "Airport" },
      { id: "prox-5", value: "church", label: "Church" },
      { id: "prox-6", value: "retail", label: "Retail" },
      { id: "prox-7", value: "park", label: "Park" },
      { id: "prox-8", value: "cemetery", label: "Cemetery" },
      { id: "prox-9", value: "train-tracks", label: "Train Tracks" },
      { id: "prox-10", value: "parking-lot", label: "Parking Lot" },
    ],
  },
];