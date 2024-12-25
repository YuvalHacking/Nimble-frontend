# Nimble Frontend

This is the frontend portion of the Nimble Invoice Management Portal. It provides a user-friendly dashboard to visualize and interact with invoice data, including filtering and toggling between various visualizations.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Design Choices](#design-choices)
- [Project Structure](#project-structure)
- [Prerequisites](#Prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [UI Picture](#ui-picture)


## Features

- **Visualization**:
  - Displays invoice totals by status (e.g., Paid, Overdue, Pending) using a pie/bar chart.
  - Tracks overdue invoice trends over time in a line/area chart.
  - Summarizes monthly invoice totals in a bar/line chart.
  - Analyzes customer-specific data (e.g., total amounts) via horizontal bar charts.
  - Display last 2 weeks metrics (e.g., earnings, invoice counts, overdue counts) along with percentage changes
  
- **Interactivity**:
  - Filters invoices by date range, status, and customer.
  - Toggles between visualizations .


## Technologies Used

- **Frontend Framework**: React with TypeScript
- **State Management**: Redux
- **API**: GraphQL
- **UI Components**: Recharts for data visualization

## Design Choices

- **GraphQL Integration**: The frontend communicates with the backend via GraphQL, enabling flexible and efficient data queries.
- **Reusable Components**: The component-based architecture ensures modularity and ease of maintenance.
- **Charts and Visualizations**: Leveraged Recharts for dynamic and visually appealing data displays.
- **State Management**: Centralized state using Redux simplifies application-wide state handling.
- **Scalability**: Designed with modularity in mind to accommodate additional features or datasets.

## Project Structure

```
Nimble-frontend
├── .env
├── .gitignore 
├── craco.config.js
├── package-lock.json
├── package.json ------------------------------------ Node.js dependencies
├── README.md 
├── tsconfig.json
├── public/ 
│   ├── favicon.ico 
│   ├── index.html
│   ├── manifest.json
│   └── nimble-logo.png 
├── src/ -------------------------------------------- Source code
│   ├── App.tsx ------------------------------------- Main application component
│   ├── index.css 
│   ├── index.tsx ----------------------------------- Application entry point
│   ├── assets/ ------------------------------------- Asset files
│   │   └── pictures/ 
│   │       └── nimble-logo.png 
│   ├── common/ ------------------------------------- Shared utilities and constants
│   │   └── constants.ts ---------------------------- Constants
│   ├── components/ --------------------------------- Reusable components
│   │   ├── Analysis/ ------------------------------- Data analysis components
│   │   │   ├── Charts/ ----------------------------- Chart components
│   │   │   │   ├── Area.chart.tsx
│   │   │   │   ├── Bar.chart.tsx
│   │   │   │   ├── HorizontalBar.chart.tsx
│   │   │   │   ├── Line.chart.tsx
│   │   │   │   ├── Pie.chart.tsx
│   │   │   │   └── utils/ -------------------------- Chart utilities
│   │   │   │       └── label.utils.tsx
│   │   │   ├── Entities/ --------------------------- Analysis by entity
│   │   │   │   ├── Customer/ ----------------------- Customer analysis
│   │   │   │   │   ├── CustomerAnalysis.scss
│   │   │   │   │   └── CustomerAnalysis.tsx
│   │   │   │   └── Invoice/ ------------------------ Invoice analysis
│   │   │   │       ├── InvoicesMonthly/ ----------- Monthly invoices
│   │   │   │       │   ├── InvoicesMonthly.scss
│   │   │   │       │   └── InvoicesMonthly.tsx
│   │   │   │       ├── InvoicesOverdue/ ----------- Overdue invoices
│   │   │   │       │   ├── InvoicesOverdue.scss
│   │   │   │       │   └── InvoicesOverdue.tsx
│   │   │   │       └── InvoiceStatus/ ------------- Invoice status
│   │   │   │           ├── InvoiceStatus.scss
│   │   │   │           └── InvoiceStatus.tsx
│   │   ├── Sidebar/ -------------------------------- Sidebar navigation
│   │   │   ├── Sidebar.scss
│   │   │   ├── Sidebar.tsx
│   │   │   └── Controls/ --------------------------- Sidebar controls
│   │   │       ├── Actions/ ------------------------ Action components
│   │   │       │   ├── applyFilters.tsx
│   │   │       │   └── uploadFile.tsx
│   │   │       └── Filters/ ------------------------ Filter components
│   │   │           ├── customers.filter.tsx
│   │   │           ├── date.filter.tsx
│   │   │           └── status.filter.tsx
│   │   └── Widget/ --------------------------------- General-purpose widgets
│   │       ├── Widget.scss
│   │       └── Widget.tsx
│   ├── graphql/ ------------------------------------ GraphQL operations
│   │   ├── apolloClient.ts ------------------------- Apollo client setup
│   │   ├── mutations/ ------------------------------ GraphQL mutations
│   │   │   └── uploadData.ts
│   │   └── queries/ -------------------------------- GraphQL queries
│   │       ├── charts.ts
│   │       ├── options.ts
│   │       └── widgets.ts
│   ├── hooks/ -------------------------------------- Custom hooks
│   │   ├── charts.hook.ts
│   │   ├── filterOptions.hook.ts
│   │   ├── uploadData.hook.ts
│   │   └── widgets.hook.ts
│   ├── pages/ -------------------------------------- Page components
│   │   └── Home/ ----------------------------------- Home page
│   │       ├── Home.scss
│   │       └── Home.tsx
│   ├── routes/ ------------------------------------- Routing setup
│   │   └── Routes.tsx
│   ├── store/ -------------------------------------- State management
│   │   ├── store.ts -------------------------------- Redux store setup
│   │   └── features/ ------------------------------- Redux slices
│   │       ├── charts.slice.ts
│   │       ├── filterOptions.slice.ts
│   │       ├── filters.slice.ts
│   │       └── widgets.slice.ts
│   └── types/ -------------------------------------- TypeScript types
│       ├── api.ts
│       └── charts.ts
```

## Prerequisites

Before you can run the frontend application, make sure you have the following installed on your system:

- **Node.js**: Version 20 or higher.
- **npm**
- **Make sure the server is up and running** 

## Setup

1. **Clone the repository**:
    ```sh
    git clone https://github.com/YuvalHacking/Nimble-frontend
    cd Nimble-frontend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

1. **Start the app**:
    ```sh
    npm start
    ```

2. Open the application in your browser at `http://localhost:3000`.

## UI Picture
<img width="827" alt="screen" src="https://github.com/user-attachments/assets/16147e2f-1aa3-4ecd-b6fe-1e9593f6ed97" />
