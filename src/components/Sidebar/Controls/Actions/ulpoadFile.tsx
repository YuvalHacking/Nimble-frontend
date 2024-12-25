/**
 * InputFileUpload Component
 * 
 * The InputFileUpload component is a button that allows users to upload CSV files. Upon file selection,
 * it validates the file type, uploads the file, and provides feedback through a Snackbar with a success or error message.
 * The component also handles displaying a loading state while the file is being uploaded.
 * 
 * @component
 * @example
 * return (
 *   <InputFileUpload />
 * )
 * 
 * @returns {JSX.Element} The input file upload button with a Snackbar for feedback
 */

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useUploadCSV } from '@hooks/uploadData.hook';  
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'; 

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
  const { uploadFile, loading} = useUploadCSV(); 
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<'success' | 'error'>('success');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'text/csv') {
        setSnackbarMessage('Please upload a CSV file.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return; 
      }

      try {
        const success = await uploadFile(file);
        if (success) {
          setSnackbarMessage('CSV uploaded and processed successfully');
          setSnackbarSeverity('success');
        }
      } catch (err) {
        const errorMessage = err?.message || 'Error uploading file';
        setSnackbarMessage(errorMessage); 
        setSnackbarSeverity('error');
      }
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        disabled={loading} 
      >
        {loading ? 'Uploading...' : 'Upload Data'}
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange} 
          accept=".csv"
          multiple={false}
        />
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
