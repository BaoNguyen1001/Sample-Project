import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: false,
  loading: false,
  user: undefined
}

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUp(state, action) {
      state.loading = true;
    },
    signUpSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    }
  }
})


// https://stackoverflow.com/questions/68372311/need-help-to-implement-user-signup-in-redux-saga