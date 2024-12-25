import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { GET_STATUS_OPTIONS, GET_CUSTOMER_OPTIONS } from '@graphql/queries/options';
import { setCustomerOptions, setStatusOptions } from '@store/features/filterOptions.slice';

/**
 * Custom hook for fetching the filter options.
 * 
 * This hook performs GraphQL queries to fetch the filter options and dispatches the
 * results to the store. It also provides a method to fetch all filter options at once.
 * 
 * @returns {Object} An object containing the `fetchAllFilterOptions` function to refetch the filter options.
 */
export const useFilterOptions = () => {
  const dispatch = useDispatch();

  let refetchStatusOptions;
  let refetchCustomerOptions;

  /**
   * Fetches and dispatches status options (invoice statuses) to the store.
   */
  try {
    const queryResult = useQuery(GET_STATUS_OPTIONS, {
      skip: true, 
      onCompleted: (data) => {
        dispatch(setStatusOptions(data?.invoiceStatuses || []));
      },
      onError: (error) => {
        console.error("Error fetching status options:", error.message);
        throw new Error(`Error fetching status options: ${error.message}`);
      }
    });
    refetchStatusOptions = queryResult.refetch;
  } catch (error) {
    console.error("Caught an error:", error.message);
    throw error;
  }

  /**
   * Fetches and dispatches customer options (suppliers) to the store.
   */
  try {
    const queryResult = useQuery(GET_CUSTOMER_OPTIONS, {
      skip: true, 
      onCompleted: (data) => {
        dispatch(setCustomerOptions(data?.suppliers || []));
      },
      onError: (error) => {
        console.error("Error fetching customer options:", error.message);
        throw new Error(`Error fetching customer options: ${error.message}`);
      }
    });
    refetchCustomerOptions = queryResult.refetch;
  } catch (error) {
    console.error("Caught an error:", error.message);
    throw error;
  }

  /**
   * Fetches all filter options by triggering the other filters refetch .
   * 
   * @returns {Promise<void>} A promise that resolves when all filter options are successfully fetched.
   */
  const fetchAllFilterOptions = async () => {
    try {
      await refetchStatusOptions();
      await refetchCustomerOptions();
    } catch (error) {
      console.error("Error fetching all filter options:", error.message);
      throw error;
    }
  };

  return { fetchAllFilterOptions };
};
