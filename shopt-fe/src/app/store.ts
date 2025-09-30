import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/user/loginSlice";
import { themeReducer } from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    loginState: loginReducer,
  },
});

// Types for TS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
