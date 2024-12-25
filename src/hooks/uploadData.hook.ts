import { useMutation } from '@apollo/client';
import { UPLOAD_CSV } from '@graphql/mutations/uploadData'; 
import { useSetCharts } from './charts.hook';
import { useWeeklyMetrics } from './widgets.hook';

/**
 * Custom hook for handling CSV file uploads and triggering necessary updates.
 * 
 * This hook performs a mutation to upload a CSV file, and after a successful upload,
 * it triggers the refetch of filter options, charts data, and weekly metrics.
 * It returns a function to upload the file and provides the mutation's loading, error, and data states.
 * 
 * @returns {Object} An object containing:
 *   - `uploadFile` function to upload a CSV file.
 *   - `loading` state from the `useMutation` hook.
 *   - `error` state from the `useMutation` hook.
 *   - `data` state from the `useMutation` hook.
 */
export const useUploadCSV = () => {
  const [uploadCSV, { loading, error, data }] = useMutation(UPLOAD_CSV);

  const { fetchAllCharts } = useSetCharts();
  const { fetchWeeklyMetrics } = useWeeklyMetrics();

  /**
   * Handles the CSV file upload process to load the data for the application.
   * 
   * This function performs the file upload mutation, and upon successful upload,
   * it triggers the fetching of filter options, charts data, and weekly metrics.
   * 
   * @param {File} file - The CSV file to be uploaded.
   * @returns {Promise<Object>} The data returned from the file upload mutation.
   * @throws {Error} If an error occurs during the file upload process.
   */
  const uploadFile = async (file) => {
    try {
      const { data } = await uploadCSV({ variables: { file } });

      // Trigger the refetch of everything by the new uploaded data
      fetchAllCharts();
      fetchWeeklyMetrics();

      return data.uploadCSV;
    } catch (err) {
      console.error('Error uploading file:', err);
      throw err;
    }
  };

  return { uploadFile, loading, error, data };
};
