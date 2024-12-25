/**
 * CustomerAnalysis Component
 * 
 * The CustomerAnalysis component displays a chart that visualizes customer data. 
 * It retrieves customer analysis data from the store and passes it to a custom horizontal bar chart component for rendering.
 * 
 * @component
 * @example
 * return (
 *   <CustomerAnalysis />
 * )
 * 
 * @returns {JSX.Element} The CustomerAnalysis component, which includes a title and a horizontal bar chart
 */

import React from "react";
import { useSelector } from "react-redux";  
import { RootState } from "@store/store"; 
import CustomHorizontalBarChart from "@customCharts/HorizontalBar.chart";
import "./CustomerAnalysis.scss";

const CustomerAnalysis: React.FC = () => {
  const customerAnalysis = useSelector((state: RootState) => state.charts.customerAnalysis);

  return (
    <div className="chart">
      <div className="top">
        <h1 className="title">Customer Analysis</h1>
      </div>
      <CustomHorizontalBarChart data={customerAnalysis} /> 
    </div>
  );
};

export default CustomerAnalysis;
