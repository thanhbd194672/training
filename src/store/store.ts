import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import absenceReducer from "./AbsenceStore";


const store = configureStore({
  reducer: {
    auth: authReducer,
    absence: absenceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
