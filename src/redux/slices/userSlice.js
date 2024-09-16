// src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  page: 1,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsersRequest(state) {
      state.isLoading = true;
    },
    fetchUsersSuccess(state, action) {
      state.users = [...state.users, ...action.payload.users];
      state.page = action.payload.page;
      state.isLoading = false;
    },
    fetchUsersFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    resetUsers(state) {
      state.users = [];
      state.page = 1;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  resetUsers,
} = userSlice.actions;

export default userSlice.reducer;
