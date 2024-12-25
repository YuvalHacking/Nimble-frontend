// Redux slice for managing widget data

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WidgetData {
  difference: number;
  amount: number;
}

interface WidgetState {
  earnings: WidgetData;
  invoices: WidgetData;
  overdue: WidgetData;
}

const initialState: WidgetState = {
  earnings: {
    difference: 0,
    amount: 0,
  },
  invoices: {
    difference: 0,
    amount: 0,
  },
  overdue: {
    difference: 0,
    amount: 0,
  },
};

const widgetReducer = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    setEarnings: (state, action: PayloadAction<WidgetData>) => {
      state.earnings = action.payload;
    },
    setInvoices: (state, action: PayloadAction<WidgetData>) => {
      state.invoices = action.payload;
    },
    setOverdue: (state, action: PayloadAction<WidgetData>) => {
      state.overdue = action.payload;
    },
  },
});

export const { setEarnings, setInvoices, setOverdue } = widgetReducer.actions;
export default widgetReducer.reducer;
