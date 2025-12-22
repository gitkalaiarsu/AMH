export const PUBLIC_PATH = {
  LOGIN: "/login",
};

export const PRIVATE_PATH = {
  SEARCH_PROPERTY: "/property-search",
  PROPERTY_LIST: "/property-listing",
  PROPERTY_DETAIL: "/property/[id]",
};

export const ERROR_PATH = {
  NOT_FOUND: "/not-found",
};

export const ROUTES_PATH = {
  ...PUBLIC_PATH,
  ...PRIVATE_PATH,
  ...ERROR_PATH,
};

// Default pagination
export const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
} as const;

export const GAP_OPTIONS = [5, 10, 15, 30];
