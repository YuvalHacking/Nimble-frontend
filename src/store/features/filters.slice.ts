// Redux slice for managing filter state

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  customers: string[];
  dateRange: [String | null, String | null]; 
  status: number | null ; 
}

const initialState: FiltersState = {
  customers: [],
  dateRange: [null, null],
  status: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<string[]>) => {
      state.customers = action.payload;
    },
    setDateRange: (state, action: PayloadAction<[String | null, String | null]>) => {
      state.dateRange = action.payload;
    },
    setStatus: (state, action: PayloadAction<number>) => {
      state.status = action.payload;
    },
  },
});

export const { setCustomers, setDateRange, setStatus } = filtersSlice.actions;
export default filtersSlice.reducer;
