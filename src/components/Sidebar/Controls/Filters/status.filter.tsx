/**
 * StatusFilter Component
 * 
 * The StatusFilter component is a dropdown filter that allows users to select a status from the available options. 
 * 
 * @component
 * @example
 * return (
 *   <StatusFilter />
 * )
 * 
 * @returns {JSX.Element} The status filter dropdown component
 */

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@store/store";
import { setStatus } from '@store/features/filters.slice';
import { StatusOption } from '@sharedTypes/api';

export default function StatusFilter() {
  const dispatch = useDispatch();
  const statusOptions = useSelector((state: RootState) => state.filtersOptions.statusOptions);
  const [status, setStatusLocal] = React.useState<number | null>(null); 

  const handleChange = (event: SelectChangeEvent) => {
    const selectedStatusId = Number(event.target.value);
    setStatusLocal(selectedStatusId);
    dispatch(setStatus(selectedStatusId)); 
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={String(status)} 
          label="Status"
          onChange={handleChange}
        >
          <MenuItem key="" value="">
            All
          </MenuItem>
          {statusOptions.map((statusOption: StatusOption) => (
            <MenuItem key={statusOption.id} value={statusOption.id}> 
              {statusOption.name} 
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
