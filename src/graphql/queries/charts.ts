import { gql } from '@apollo/client';

export const GET_AMOUNTS_BY_STATUS = gql`
  query GetAmountsByStatus($supplierIds: [String!], $startDate: String, $endDate: String) {
    getAmountsByStatus(supplierIds: $supplierIds, startDate: $startDate, endDate: $endDate) {
      name
      value
    }
  }
`;

export const GET_OVERDUE_TREND = gql`
  query GetOverdueTrend($supplierIds: [String!], $startDate: String, $endDate: String) {
    getOverdueTrend(supplierIds: $supplierIds, startDate: $startDate, endDate: $endDate) {
      name
      value
    }
  }
`;

export const GET_MONTHLY_TOTALS = gql`
  query GetMonthlyTotals($supplierIds: [String!], $startDate: String, $endDate: String, $statusId: Int) {
    getMonthlyTotals(supplierIds: $supplierIds, startDate: $startDate, endDate: $endDate, statusId: $statusId) {
      name
      value
    }
  }
`;

export const GET_CUSTOMER_ANALYSIS = gql`
  query GetCustomerAnalysis($supplierIds: [String!], $startDate: String, $endDate: String, $statusId: Int) {
    getCustomerAnalysis(supplierIds: $supplierIds, startDate: $startDate, endDate: $endDate, statusId: $statusId) {
      name
      value
    }
  }
`;