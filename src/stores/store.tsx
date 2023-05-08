import { userApi } from "@/services/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [userApi.reducerPath]: userApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  })