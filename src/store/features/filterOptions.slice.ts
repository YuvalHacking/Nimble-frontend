// Redux slice for managing the filter drop down options

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { customerOption, FilterOptions, StatusOption } from '@sharedTypes/api';


const initialState: FilterOptions = {
  customerOptions: [],
  statusOptions: [], 
};

const filtersOptionsReducer = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCustomerOptions: (state, action: PayloadAction<customerOption[]>) => {
      state.customerOptions = action.payload;
    },
    setStatusOptions: (state, action: PayloadAction<StatusOption[]>) => {
      state.statusOptions = action.payload;
    },
  },
});

export const { 
  setCustomerOptions, 
  setStatusOptions 
} = filtersOptionsReducer.actions;

export default filtersOptionsReducer.reducer;
