import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AbsenceRecord {
  id: string;
  name: string;
  department: string;
  reason: string;
  long: string;
  status: string;
}

interface AbsenceState {
  records: AbsenceRecord[];
  loading: boolean;
  error: string | null;
}

const initialState: AbsenceState = {
  records: [],
  loading: false,
  error: null,
};

const absenceSlice = createSlice({
  name: "absence",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action: PayloadAction<AbsenceRecord[]>) => {
      state.records = action.payload;
      state.loading = false;
    },
    fetchFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = absenceSlice.actions;
export default absenceSlice.reducer;