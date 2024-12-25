/**
 * InvoicesOverdue Component
 * 
 * The InvoicesOverdue component displays a chart showing the trend of overdue invoices. 
 * The user can toggle between an area chart and a line chart to visualize the data. 
 * The data is retrieved from the store and passed to the respective chart component based on the user's selection.
 * 
 * @component
 * @example
 * return (
 *   <InvoicesOverdue />
 * )
 * 
 * @returns {JSX.Element} The InvoicesOverdue component, which includes a title, a menu for chart type selection, 
 *                        and a dynamically rendered chart (either an area chart or line chart).
 */

import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomAreaChart from "@customCharts/Area.chart";
import CustomLineChart from "@customCharts/Line.chart";
import "./InvoicesOverdue.scss";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

interface InvoicesOverdueProps {}

const InvoicesOverdue: React.FC<InvoicesOverdueProps> = () => {
  const [isAreaChart, setIsAreaChart] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const invoicesOverdue = useSelector((state: RootState) => state.charts.invoicesOverdue);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChartChange = (type: string) => {
    setIsAreaChart(type === "AreaChart");
    handleClose();
  };

  return (
    <div className="chart">
      <div className="top">
        <h1 className="title">Overdue Invoices Trend</h1>
        <Button onClick={handleClick}>
          <MoreVertIcon fontSize="small" />
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => handleChartChange("AreaChart")}>Area Chart</MenuItem>
          <MenuItem onClick={() => handleChartChange("LineChart")}>Line Chart</MenuItem>
        </Menu>
      </div>
      {isAreaChart ? (
        <CustomAreaChart data={invoicesOverdue} />
      ) : (
        <CustomLineChart data={invoicesOverdue} />
      )}
    </div>
  );
};

export default InvoicesOverdue;
