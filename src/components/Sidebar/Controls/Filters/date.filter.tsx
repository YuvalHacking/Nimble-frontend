/**
 * DateRangeFilter Component
 * 
 * The DateRangeFilter component allows users to select a date range. 
 * 
 * @component
 * @example
 * return (
 *   <DateRangeFilter />
 * )
 * 
 * @returns {JSX.Element} The date range filter component
 */

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useDispatch } from 'react-redux';
import { setDateRange } from '@store/features/filters.slice';
import { Dayjs } from 'dayjs';

export default function DateRangeFilter() {
  const dispatch = useDispatch();

  const handleDateRangeChange = (newDateRange: [Dayjs | null, Dayjs | null]) => {

    dispatch(setDateRange([newDateRange[0]?.format('YYYY-MM-DD') || null, newDateRange[1]?.format('YYYY-MM-DD') || null]));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker
          onChange={handleDateRangeChange}
          slotProps={{
            actionBar: {
              actions: ['clear'],
            },
          }}
          localeText={{ start: 'Start Date', end: 'End Date' }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
