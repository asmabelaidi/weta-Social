import { User } from "@/models/user.model";
import { userApi } from "@/services/api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// const userInitialState  = {
//   user: {

//   },
// };
const authInitialState = {
  value: 0,
  // token: storedToken !== null ? storedToken : null,
  token: typeof window !== "undefined" ?  window.localStorage.getItem("token") : null,
  users: [] as User[], // Initialize users as an empty array of User type
  // [userApi.reducerPath]: usersReducer(undefined, { type: "INITIALIZE" }),
}
export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [userApi.reducerPath]: userApi.reducer,
      user: (state = authInitialState) => state,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  })
  setupListeners(store.dispatch)