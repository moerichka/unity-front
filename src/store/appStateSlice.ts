import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  authToken: string;
  isTgWebApp: boolean;
}

const initialState: InitialState = {
  authToken: "",
  isTgWebApp: false,
};

const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAuthToken(state, action: PayloadAction<string>) {
      state.authToken = action.payload;
    },
    dropAuthToken(state) {
      state.authToken = "";
    },
    setIsTgWebApp(state, action: PayloadAction<boolean>) {
      state.isTgWebApp = action.payload;
    },
  },
});

export const { setAuthToken, dropAuthToken, setIsTgWebApp } =
  appStateSlice.actions;

export const appStateReducer = appStateSlice.reducer;
