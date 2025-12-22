import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SearchHistoryItem } from "@/types/property";

interface SearchState {
  query: string;
  searchHistory: SearchHistoryItem[];
  isSearching: boolean;
  recentSearches: string[];
}

const initialState: SearchState = {
  query: "",
  searchHistory: [],
  isSearching: false,
  recentSearches: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearchHistory: (state, action: PayloadAction<SearchHistoryItem[]>) => {
      state.searchHistory = action.payload;
    },
    addToSearchHistory: (state, action: PayloadAction<SearchHistoryItem>) => {
      state.searchHistory.unshift(action.payload);
    },
    removeFromSearchHistory: (state, action: PayloadAction<string>) => {
      state.searchHistory = state.searchHistory.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearSearchHistory: (state) => {
      state.searchHistory = [];
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    addRecentSearch: (state, action: PayloadAction<string>) => {
      if (!state.recentSearches.includes(action.payload)) {
        state.recentSearches.unshift(action.payload);
        state.recentSearches = state.recentSearches.slice(0, 10);
      }
    },
  },
});

export const {
  setQuery,
  setSearchHistory,
  addToSearchHistory,
  removeFromSearchHistory,
  clearSearchHistory,
  setIsSearching,
  addRecentSearch,
} = searchSlice.actions;
export default searchSlice.reducer;
