import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "@/services/api";
import { User } from "@/models/user.model"; // Import the User type

const usersReducer = userApi.reducer;

// Get the token from localStorage, or set it to null if not present
// const storedToken = typeof window !== "undefined" ?  window.localStorage.getItem("token");
const authInitialState = {
  value: 0,
  // token: storedToken !== null ? storedToken : null,
  token: typeof window !== "undefined" ?  window.localStorage.getItem("token") : null,
  users: [] as User[], // Initialize users as an empty array of User type
  [userApi.reducerPath]: usersReducer(undefined, { type: "INITIALIZE" }),
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    // Your own reducers for the 'auth' slice can be added here.
  },
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       userApi.endpoints.login.matchFulfilled,
//       (state, action) => {
//         // Assuming your LoginResponse contains a 'token' property
//         state.token = action.payload;
//         localStorage.setItem("token", action.payload); // Save the token to localStorage
//       }
//     );

//     builder.addMatcher(
//       userApi.endpoints.getAllUsers.matchFulfilled,
//       (state, action) => {
//         // Assuming the API response contains an array of users
//         state.users = action.payload;
//       }
//     );
//   },
});

export default authSlice.reducer;
