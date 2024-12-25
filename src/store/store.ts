// Redux store configuration

import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './features/filters.slice';
import chartsReducer from './features/charts.slice';
import widgetReducer from './features/widgets.slice';
import filtersOptionsReducer from './features/filterOptions.slice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    charts: chartsReducer,
    widgets: widgetReducer,
    filtersOptions: filtersOptionsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
