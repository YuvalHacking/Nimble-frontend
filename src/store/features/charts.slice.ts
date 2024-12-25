// Redux slice for managing chart data related to several charts
// It includes actions to set different chart data 

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartData } from '@sharedTypes/charts';

interface DataState {
  customerAnalysis: ChartData[];
  invoicesMonthly: ChartData[];
  invoicesOverdue: ChartData[];
  invoiceStatus: ChartData[];
}

const initialState: DataState = {
  customerAnalysis: [],
  invoicesMonthly: [],
  invoicesOverdue: [],
  invoiceStatus: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCustomerAnalysis: (state, action: PayloadAction<ChartData[]>) => {
      state.customerAnalysis = action.payload;
    },
    setInvoicesMonthly: (state, action: PayloadAction<ChartData[]>) => {
      state.invoicesMonthly = action.payload;
    },
    setInvoicesOverdue: (state, action: PayloadAction<ChartData[]>) => {
      state.invoicesOverdue = action.payload;
    },
    setInvoiceStatus: (state, action: PayloadAction<ChartData[]>) => {
      state.invoiceStatus = action.payload;
    },
  },
});

export const {
  setCustomerAnalysis,
  setInvoicesMonthly,
  setInvoicesOverdue,
  setInvoiceStatus,
} = dataSlice.actions;

export default dataSlice.reducer;
