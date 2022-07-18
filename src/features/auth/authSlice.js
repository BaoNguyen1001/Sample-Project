import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  error: false
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.logging = true;
    },
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailed(state, action) {
      state.logging = false;
      state.error = true;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.logging = false;
      state.error = false;
      state.currentUser = undefined;
    },
  },
})

//Actions
export const authActions = authSlice.actions

//Selectors
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectIsLogging = (state) => state.auth.logging
export const selectIsCurrentUser = (state) => state.auth.currentUser

//Reducers
export const authReducers = authSlice.reducer