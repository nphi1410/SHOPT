import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  isLogin: boolean;
}

const initialState: LoginState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogin = true;
    },
    logOut: (state) => {
      state.isLogin = false;
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
