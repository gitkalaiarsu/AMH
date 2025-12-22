import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutPreferences {
  theme: "light" | "dark";
  notifications: boolean;
  language: string;
}

interface LayoutState {
  preferences: LayoutPreferences;
  isSidebarOpen: boolean;
}

const initialState: LayoutState = {
  preferences: {
    theme: "dark",
    notifications: true,
    language: "en",
  },
  isSidebarOpen: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setPreferences: (
      state,
      action: PayloadAction<Partial<LayoutPreferences>>,
    ) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.preferences.theme = action.payload;
    },
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setPreferences, setTheme, setSidebar } = layoutSlice.actions;
export default layoutSlice.reducer;
