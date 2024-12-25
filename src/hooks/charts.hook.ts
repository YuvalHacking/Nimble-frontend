import { useQuery } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { GET_AMOUNTS_BY_STATUS, GET_CUSTOMER_ANALYSIS, GET_MONTHLY_TOTALS, GET_OVERDUE_TREND } from "@graphql/queries/charts";
import { RootState } from "@store/store";
import {
  setInvoiceStatus,
  setCustomerAnalysis,
  setInvoicesMonthly,
  setInvoicesOverdue,
} from "@store/features/charts.slice";

/**
 * Custom hook for fetching and managing chart data.
 * 
 * This hook performs GraphQL queries to fetch for the chart data by filter
 * parameters. It dispatches the results to the store and provides a method 
 * to fetch all charts' data in one function.
 * 
 * @returns {Object} An object containing the `fetchAllCharts` function to refetch data for all charts.
 */
export const useSetCharts = () => {

  const dispatch = useDispatch();

  // State selectors for filter parameters
  const supplierIds = useSelector((state: RootState) => state.filters.customers);
  const startDate = useSelector((state: RootState) => state.filters.dateRange[0]);
  const endDate = useSelector((state: RootState) => state.filters.dateRange[1]);
  const statusId = useSelector((state: RootState) => state.filters.status);

  let refetchAmountsByStatus;
  let refetchCustomerAnalysis;
  let refetchMonthlyTotals;
  let refetchOverdueTrend;

  /**
   * Fetches and dispatches amounts by status to the store.
   */
  try {
    const queryResult = useQuery(GET_AMOUNTS_BY_STATUS, {
      variables: { supplierIds, startDate, endDate },
      skip: true, 
      onCompleted: (data) => {
        console.log("data", data);
        dispatch(setInvoiceStatus(data?.getAmountsByStatus || []));
      },
      onError: (error) => {
        console.error("Error fetching amounts by status:", error.message);
        throw new Error(`Error fetching amounts by status: ${error.message}`);
      }
    });
    refetchAmountsByStatus = queryResult.refetch;
  } catch (error) {
    console.error("Caught an error:", error.message);
    throw error;
  }

  /**
   * Fetches and dispatches customer analysis data to the store.
   */
  try {
    const queryResult = useQuery(GET_CUSTOMER_ANALYSIS, {
      variables: { supplierIds, startDate, endDate, statusId },
      skip: true,
      onCompleted: (data) => {
        dispatch(setCustomerAnalysis(data?.getCustomerAnalysis || []));
      },
      onError: (error) => {
        console.error("Error fetching customer analysis:", error.message);
        throw new Error(`Error fetching customer analysis: ${error.message}`);
      }
    });
    refetchCustomerAnalysis = queryResult.refetch;
  } catch (error) {
    console.error("Caught an error:", error.message);
    throw error;
  }

  /**
   * Fetches and dispatches monthly totals data to the store.
   */
  try {
    const queryResult = useQuery(GET_MONTHLY_TOTALS, {
      variables: { supplierIds, startDate, endDate, statusId },
      skip: true, 
      onCompleted: (data) => {
        dispatch(setInvoicesMonthly(data?.getMonthlyTotals || []));
      },
      onError: (error) => {
        console.error("Error fetching monthly totals:", error.message);
        throw new Error(`Error fetching monthly totals: ${error.message}`);
      }
    });
    refetchMonthlyTotals = queryResult.refetch;
  } catch (error) {
    console.error("Caught an error:", error.message);
    throw error;
  }

  /**
   * Fetches and dispatches overdue trend data to the store.
   */
  try {
    const queryResult = useQuery(GET_OVERDUE_TREND, {
      variables: { supplierIds, startDate, endDate },
      skip: true,
      onCompleted: (data) => {
        dispatch(setInvoicesOverdue(data?.getOverdueTrend || []));
      },
      onError: (error) => {
        console.error("Error fetching overdue trend:", error.message);
        throw new Error(`Error fetching overdue trend: ${error.message}`);
      }
    });
    refetchOverdueTrend = queryResult.refetch;
  } catch (error) {
    console.error("Caught an error:", error.message);
    throw error;
  }

  /**
   * Fetches all chart data by triggering the refetch of each individual chart data query.
   * 
   * @returns {Promise<void>} A promise that resolves when all chart data is successfully fetched.
   */
  const fetchAllCharts = async () => {
    try {
      await refetchAmountsByStatus();
      await refetchCustomerAnalysis();
      await refetchMonthlyTotals();
      await refetchOverdueTrend();
    } catch (error) {
      console.error("Error fetching all charts data:", error.message);
      throw error;
    }
  };

  return { fetchAllCharts };
};
