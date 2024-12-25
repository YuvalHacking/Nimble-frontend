import { gql } from '@apollo/client';

export const GET_WEEKLY_METRICS = gql`
  query GetWeeklyMetrics {
    getWeeklyMetrics {
      earnings {
        difference
        amount
      }
      invoices {
        difference
        amount
      }
      overdue {
        difference
        amount
      }
    }
  }
`;