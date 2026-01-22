import { LayoutInitialState, SearchHistoryItem } from "@/types/layout-type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LayoutInitialState = {
  isSidebarOpen: false,
  searchHistory: [],
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
    setSearchHistory: (state, action: PayloadAction<SearchHistoryItem[]>) => {
      state.searchHistory = action.payload;
    }
  },
});

export const { setSidebar, setSearchHistory } = layoutSlice.actions;
export default layoutSlice.reducer;
