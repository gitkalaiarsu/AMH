import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
  Property,
  SavedProperty,
  PropertyFilters,
} from "@/types/property";

interface PropertyState {
  properties: Property[];
  savedProperties: SavedProperty[];
  selectedProperty: Property | null;
  filters: PropertyFilters;
  loading: boolean;
  error: string | null;
  totalResults: number;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: PropertyState = {
  properties: [],
  savedProperties: [],
  selectedProperty: null,
  filters: {},
  loading: false,
  error: null,
  totalResults: 0,
  currentPage: 1,
  itemsPerPage: 10,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<Property[]>) => {
      state.properties = action.payload;
    },
    setSavedProperties: (state, action: PayloadAction<SavedProperty[]>) => {
      state.savedProperties = action.payload;
    },
    addSavedProperty: (state, action: PayloadAction<SavedProperty>) => {
      state.savedProperties.push(action.payload);
    },
    removeSavedProperty: (state, action: PayloadAction<string>) => {
      state.savedProperties = state.savedProperties.filter(
        (p) => p.id !== action.payload,
      );
    },
    setSelectedProperty: (state, action: PayloadAction<Property | null>) => {
      state.selectedProperty = action.payload;
    },
    setFilters: (state, action: PayloadAction<PropertyFilters>) => {
      state.filters = action.payload;
    },
    updateFilters: (state, action: PayloadAction<Partial<PropertyFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {};
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setProperties,
  setSavedProperties,
  addSavedProperty,
  removeSavedProperty,
  setSelectedProperty,
  setFilters,
  updateFilters,
  clearFilters,
  setLoading,
  setError,
  setTotalResults,
  setCurrentPage,
} = propertySlice.actions;
export default propertySlice.reducer;
