import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Breed } from "../../api/types.ts";
import { IApiSlice } from "../types.ts";
import { loginSpace } from "../../api/auth.ts";


export interface IAuthState extends IApiSlice<Breed> {
  isLoggedIn: boolean
}

export const initialState: IAuthState = {
  isLoggedIn: false, fetching: false, error: undefined,
};

export const extraActions = {
  logIn: createAsyncThunk('auth/logIn', () => loginSpace())
};

const slice = createSlice({
  name: 'auth', initialState, reducers: {}, extraReducers: (builder) => {
    builder
      .addCase(extraActions.logIn.pending, (state) => {
        state.isLoggedIn = false;
        state.fetching = true;
        state.error = undefined;
      })
      .addCase(extraActions.logIn.fulfilled, (state) => {
        state.isLoggedIn = true;
        state.fetching = false;
      })
      .addCase(extraActions.logIn.rejected, (state, action) => {
        state.fetching = false;
        state.error = action.error;
      });
  },
});

export const authActions = {
  ...slice.actions, ...extraActions,
};

export default slice;