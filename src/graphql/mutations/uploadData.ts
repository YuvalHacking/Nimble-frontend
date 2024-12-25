import { gql } from 'graphql-tag';

export const UPLOAD_CSV = gql`
  mutation uploadCSV($file: Upload!) {
    uploadCSV(file: $file)
  }
`;
