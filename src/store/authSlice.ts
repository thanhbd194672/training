import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { email: string, name : string, access_token: string } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action:  PayloadAction<{ email: string; response: { name: string; access_token: string } }>
    ) => {
      state.user = {
        email: action.payload.email,
        name: action.payload.response.name,
        access_token: action.payload.response.access_token,
      };
      localStorage.setItem("access_token", action.payload.response.access_token);
      localStorage.setItem("name", action.payload.response.name);
      window.dispatchEvent(new Event("storage"));
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
