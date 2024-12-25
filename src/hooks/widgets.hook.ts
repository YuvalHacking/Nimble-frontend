import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { GET_WEEKLY_METRICS } from '@graphql/queries/widgets';
import { setEarnings, setInvoices, setOverdue } from '@store/features/widgets.slice';

/**
 * Custom hook for fetching weekly metrics and dispatching the results to the store.
 * 
 * This hook performs a GraphQL query to fetch weekly metrics (earnings, invoices, and overdue) 
 * and dispatches the results to the store. It also returns a method to refetch the metrics.
 * 
 * @returns {Object} An object containing the `fetchWeeklyMetrics` function to refetch the weekly metrics.
 */
export const useWeeklyMetrics = () => {
  const dispatch = useDispatch();

  let refetch;
  
  try {
    const queryResult = useQuery(GET_WEEKLY_METRICS, {
      skip: true,  
      onCompleted: (data) => {
        dispatch(setEarnings(data?.getWeeklyMetrics?.earnings));
        dispatch(setInvoices(data?.getWeeklyMetrics?.invoices));
        dispatch(setOverdue(data?.getWeeklyMetrics?.overdue));
      },
      onError: (error) => {
        console.error("Error fetching weekly metrics:", error.message);
        throw new Error(`Error fetching weekly metrics: ${error.message}`);
      }
    });

    refetch = queryResult.refetch;
  } catch (error) {
    console.error("Caught an error:", error.message);
    throw error;
  }

  return { fetchWeeklyMetrics: refetch };
};
