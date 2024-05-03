import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Features/api/apiSlice";
import modalSlice from "./Features/modal/modalSlice";

export const store:any = configureStore({
  reducer: {
    modalSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
