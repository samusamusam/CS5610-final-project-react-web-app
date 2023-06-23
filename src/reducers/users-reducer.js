import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsersThunk,
  getUserByIDThunk,
  createUserThunk,
  deleteUserThunk,
  updateUserThunk,
} from "../services/users-thunk";

const initialState = {
  users: [],
  error: null,
  loading: false,
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getAllUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getAllUsersThunk.rejected]: (state, action) => {
      state.users = [];
      state.error = action.error;
      state.loading = false;
    },
    [getAllUsersThunk.pending]: (state, action) => {
      state.users = [];
      state.loading = true;
      state.error = null;
    },
    [getUserByIDThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getUserByIDThunk.rejected]: (state, action) => {
      state.currentUser = null;
      state.error = action.error;
      state.loading = false;
    },
    [getUserByIDThunk.pending]: (state, action) => {
      state.currentUser = null;
      state.loading = true;
      state.error = null;
    },
    [createUserThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.users = [...state.users, state.currentUser];
      state.loading = false;
      state.error = null;
    },
    [createUserThunk.rejected]: (state, action) => {
      state.currentUser = null;
      state.error = action.error;
      state.loading = false;
    },
    [createUserThunk.pending]: (state, action) => {
      state.currentUser = null;
      state.loading = true;
      state.error = null;
    },
    [deleteUserThunk.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    [deleteUserThunk.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
    [deleteUserThunk.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.users = [...state.users, state.currentUser];
      state.loading = false;
      state.error = null;
    },
    [updateUserThunk.rejected]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = action.error;
    },
    [updateUserThunk.pending]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = true;
      state.error = null;
    },
  },
});

export default usersSlice.reducer;
