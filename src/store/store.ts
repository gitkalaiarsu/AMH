import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-reducer";
import layoutReducer from "./reducers/layout-reducer";
import propertyReducer from "./reducers/property-reducer";
import searchReducer from "./reducers/search-reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
    property: propertyReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
