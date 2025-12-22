import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import layoutReducer from "./reducers/layoutReducer";
import propertyReducer from "./reducers/propertyReducer";
import searchReducer from "./reducers/searchReducer";

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
