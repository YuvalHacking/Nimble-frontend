/**
 * Sidebar Component
 * 
 * The Sidebar component serves as a control panel for managing file uploads and
 * applying filters in the portal.
 * 
 * @component
 * @example
 * return (
 *   <Sidebar />
 * )
 * 
 * @returns {JSX.Element} The sidebar component containing file upload and filter controls
 */

import React from "react";
import DateRangeFilter from "./Controls/Filters/date.filter";
import CustomersFilter from "./Controls/Filters/customers.filter";
import StatusFilter from "./Controls/Filters/status.filter";
import InputFileUpload from "./Controls/Actions/ulpoadFile";
import ApplyFilterButton from "./Controls/Actions/applyFilters";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={require("@assets/pictures/nimble-logo.png")}
          alt="Logo"
          className="logo-img"
        />
      </div>
      <hr />
      <div className="upload-container">
        <div className="upload-section">
          <h3 className="section-title">Select CSV file to load the data</h3>
          <InputFileUpload />
        </div>
        <div className="filters-section">
          <h3 className="section-title">Filters</h3>
          <DateRangeFilter />
          <CustomersFilter />
          <StatusFilter />
          <ApplyFilterButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
