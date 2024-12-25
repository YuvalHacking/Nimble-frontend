export interface FilterOptions {
    customerOptions: customerOption[];
    statusOptions: StatusOption[];
  }

  export interface StatusOption {
    id: number; 
    name: string; 
  }

  export interface customerOption {
    internal_id: string; 
    company_name: string; 
  }