/**
 * Home component is the main page that displays various widgets and charts.
 * It fetches all necessary data on mount.
 */

import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import Sidebar from "@components/Sidebar/Sidebar";
import Widget from "@components/Widget/Widget";
import InvoiceStatusChart from "@components/Analysis/Entities/Invoice/InvoiceStatus/InvoiceStatus";
import InvoicesOverdueChart from "@components/Analysis/Entities/Invoice/InvoicesOverdue/InvoicesOverdue";
import InvoicesMonthly from "@components/Analysis/Entities/Invoice/InvoicesMonthly/InvoicesMonthly";
import CustomerAnalysis from "@components/Analysis/Entities/Customer/CustomerAnalysis";
import { useFilterOptions } from "@hooks/filterOptions.hook";
import { useSetCharts } from "@hooks/charts.hook";
import { useWeeklyMetrics } from "@hooks/widgets.hook";
import "./Home.scss";

const Home: React.FC = () => {
  const { fetchAllFilterOptions } = useFilterOptions();
  const { fetchAllCharts } = useSetCharts();
  const { fetchWeeklyMetrics } = useWeeklyMetrics();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      await Promise.all([
        fetchAllCharts(),
        fetchWeeklyMetrics(),
        fetchAllFilterOptions()
      ]);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {!loading && (
        <div className="home">
          <Sidebar />
          <div className="container">
            <div className="widgets">
              <Widget type="earnings" />
              <Widget type="invoices" />
              <Widget type="overdue" />
            </div>
            <div className="charts">
              <InvoiceStatusChart />
              <InvoicesOverdueChart />
            </div>
            <div className="charts">
              <InvoicesMonthly />
              <CustomerAnalysis />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;