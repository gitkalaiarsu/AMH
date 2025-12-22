/**
 * Design tokens for consistent styling across the application
 * Based on Figma design specifications
 */

export const COLORS = {
  // Card backgrounds
  cardBg: "#343540",
  cardBgDark: "#24272f",
  cardBgLight: "#fff",

  // Accent colors
  accent: "#1867d2",
  accentBlue: "#427eff",

  // Text colors
  textMuted: "#68737a",
  textDark: "#1a1a1a",

  // Status colors
  statusRed: "#ef4444",
  statusGreen: "#10b981",
  statusAmber: "#f59e0b",
  statusBlue: "#3b82f6",
} as const;

export const HEIGHTS = {
  // Row 1 cards
  cardRow1: "498px",
  mainImage: "380px",
  mapCard: "226px",

  // Row 2 cards
  tabsCard: "510px",

  // Feature list items
  placeItemRow: "14px",
} as const;

export const SPACING = {
  // Feature list spacing
  sectionGap: "30px",
  itemGap: "13.5px",
  bulletGap: "7px",
  categoryGap: "11px",

  // Underline width
  underlineWidth: "254px",
  underlineHeight: "3px",
} as const;

export const TYPOGRAPHY = {
  // Font sizes
  sectionTitle: "18px",
  itemText: "14px",
  smallText: "13px",

  // Letter spacing
  tight: "-0.01em",
  tighter: "-0.02em",

  // Line heights
  small: "13.86px",
} as const;

export const SIZES = {
  // Bullet points
  bulletLg: "8.6px",
  bulletSm: "6px",

  // Icons
  iconLg: "24px",
  iconMd: "20px",
  iconSm: "16px",
} as const;

// Type exports for type safety
export type ColorKey = keyof typeof COLORS;
export type HeightKey = keyof typeof HEIGHTS;
export type SpacingKey = keyof typeof SPACING;
