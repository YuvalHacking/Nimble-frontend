/**
 * InvoicesMonthly Component
 * 
 * The InvoicesMonthly component displays a chart showing monthly invoice totals. 
 * The user can toggle between a bar chart and a line chart to visualize the data. 
 * The data is retrieved from the store and passed to the respective chart component based on the user's selection.
 * 
 * @component
 * @example
 * return (
 *   <InvoicesMonthly />
 * )
 * 
 * @returns {JSX.Element} The InvoicesMonthly component, which includes a title, a menu for chart type selection, 
 *                        and a dynamically rendered chart (either a bar chart or line chart).
 */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Menu, MenuItem, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { RootState } from "@store/store";
import CustomLineChart from "@customCharts/Line.chart";
import CustomBarChart from "@customCharts/Bar.chart";
import "./InvoicesMonthly.scss";

const InvoicesMonthly: React.FC = () => {
  const [isBarChart, setIsBarChart] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const invoicesMonthly = useSelector((state: RootState) => state.charts.invoicesMonthly);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChartChange = (type: string) => {
    setIsBarChart(type === "BarChart");
    handleClose();
  };

  return (
    <div className="chart">
      <div className="top">
        <h1 className="title">Monthly Invoice Totals</h1>
        <Button onClick={handleClick}>
          <MoreVertIcon fontSize="small" />
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => handleChartChange("BarChart")}>Bar Chart</MenuItem>
          <MenuItem onClick={() => handleChartChange("LineChart")}>Line Chart</MenuItem>
        </Menu>
      </div>
      {isBarChart ? (
        <CustomBarChart data={invoicesMonthly} />
      ) : (
        <CustomLineChart data={invoicesMonthly} />
      )}
    </div>
  );
};

export default InvoicesMonthly;