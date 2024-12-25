/**
 * ApplyFilterButton Component
 * 
 * The ApplyFilterButton component is a button that triggers the application of filters and updates
 * the charts accordingly. It shows a loading state while the charts are being fetched and disables
 * the button during the loading process to prevent multiple submissions.
 * 
 * @component
 * @example
 * return (
 *   <ApplyFilterButton />
 * )
 * 
 * @returns {JSX.Element} The button component that applies filters and updates the charts
 */

import React, { useState } from "react";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CircularProgress from "@mui/material/CircularProgress";
import { useSetCharts } from '@hooks/charts.hook';

const ApplyFilterButton = () => {
  const { fetchAllCharts } = useSetCharts();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await fetchAllCharts();
    setLoading(false);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={!loading ? <FilterAltIcon /> : <CircularProgress size={24} />}
      className="apply-filters-btn"
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Loading..." : "Apply Filters"}
    </Button>
  );
};

export default ApplyFilterButton;