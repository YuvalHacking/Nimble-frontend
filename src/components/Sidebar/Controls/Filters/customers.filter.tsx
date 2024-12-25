/**
 * CustomerFilter Component
 * 
 * The CustomerFilter component is a multi-select dropdown that allows users to filter customers by their company name.. 
 * The component allows users to select multiple customers from a list of available options and update the store with their selection.
 * 
 * @component
 * @example
 * return (
 *   <CustomerFilter />
 * )
 * 
 * @returns {JSX.Element} The customer filter dropdown component
 */

import React from "react";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { setCustomers } from "@store/features/filters.slice";

const useStyles = makeStyles(() => ({
  formControl: { width: "100%" },
  indeterminateColor: { color: "#f50057" },
}));

// MenuProps to control menu styling
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  anchorOrigin: {
    vertical: "bottom" as const,
    horizontal: "center" as const,
  },
  transformOrigin: {
    vertical: "top" as const,
    horizontal: "center" as const,
  },
  variant: "menu" as const,
};

function CustomerFilter() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customers = useSelector((state: RootState) => state.filtersOptions.customerOptions);
  const selectedCustomers = useSelector((state: RootState) => state.filters.customers);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value;
    dispatch(setCustomers(value));
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="mutiple-select-label">Customers</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selectedCustomers}
        onChange={handleChange}
        renderValue={(selected) =>
          customers
            .filter((customer) => (selected as string[]).includes(customer.internal_id))
            .map((customer) => customer.company_name)
            .join(", ")
        }
        MenuProps={MenuProps}
      >
        {/* List of customers */}
        {customers.map((customer) => (
          <MenuItem key={customer.internal_id} value={customer.internal_id}>
            <ListItemIcon>
              <Checkbox checked={selectedCustomers.includes(customer.internal_id)} />
            </ListItemIcon>
            <ListItemText primary={customer.company_name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomerFilter;
