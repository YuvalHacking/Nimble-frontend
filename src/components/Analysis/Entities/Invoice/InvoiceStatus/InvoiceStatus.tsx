/**
 * InvoiceStatus Component
 * 
 * The InvoiceStatus component displays a pie chart showing the distribution of invoice amounts 
 * based on their current status. The data is retrieved from the store and passed to the 
 * `CustomPieChart` component for rendering.
 * 
 * @component
 * @example
 * return (
 *   <InvoiceStatus />
 * )
 * 
 * @returns {JSX.Element} The InvoiceStatus component, which includes a title and a pie chart visualizing 
 *                        invoice amounts by status.
 */

import React from "react";
import "./InvoiceStatus.scss";
import CustomPieChart from "@customCharts/Pie.chart";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";

const InvoiceStatus: React.FC = () => {

  const invoiceStatus = useSelector((state: RootState) => state.charts.invoiceStatus);

  return (
    <div className="invoiceStatus">
      <div className="top">
        <h1 className="title">Invoice Amounts by Status</h1>
      </div>
      <div className="bottom">
        <div className="invoiceStatusChart">
          <CustomPieChart data={invoiceStatus} />
        </div>
      </div>
    </div>
  );
};

export default InvoiceStatus;
