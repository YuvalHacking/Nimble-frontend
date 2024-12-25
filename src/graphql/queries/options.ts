import { gql } from '@apollo/client';

export const GET_CUSTOMER_OPTIONS = gql`
  query GetCustomerOptions {
  suppliers {
    internal_id
    company_name
    }
  }
`;

export const GET_STATUS_OPTIONS = gql`
  query GetStatusOptions {
    invoiceStatuses {
      id
      name
    }
  }
`;


