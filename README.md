# Book Catalogue

This is a modern web application for managing a book catalogue, built with React, TypeScript, and a Node.js backend. It features a clean, responsive user interface created with Material-UI and leverages modern development tools for a robust and efficient workflow.

## Features

- **React & TypeScript**: A strong, type-safe foundation for the frontend.
- **Material-UI**: A comprehensive suite of UI tools for a beautiful and consistent design.
- **TanStack Query**: Powerful asynchronous state management for fetching and caching data.
- **React Hook Form & Zod**: Robust and type-safe form handling with validation.
- **Node.js & Express Server**: A simple backend to serve book data and handle CRUD operations.
- **Vite**: Next-generation frontend tooling for a fast development experience.
- **ESLint & Prettier**: Integrated linting and code formatting for high-quality code.

## Project Structure

- `src/`: Contains the frontend React application.
  - `components/`: Reusable UI components.
  - `constants/`: Shared constants like API URLs and routes.
  - `forms/`: Form-specific components.
  - `hooks/`: Custom React hooks for data fetching and other logic.
  - `mutations/`: TanStack Query mutations for creating/updating data.
  - `pages/`: Top-level page components.
  - `queries/`: TanStack Query definitions for fetching data.
  - `schemas/`: Zod validation schemas.
  - `services/`: Client-side services, like the query client.
  - `types/`: TypeScript type definitions.
  - `utils/`: Utility functions.
- `public/`: Static assets, including the `books.json` database file.
- `index.js`: The Node.js Express server file.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/) (or your preferred package manager)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Garik-Minasyan/book-catalogue
    ```
2.  Navigate to the project directory:
    ```bash
    cd book-catalogue
    ```
3.  Install the dependencies:
    ```bash
    pnpm install
    ```

### Running the Application

This project requires two processes to be running simultaneously: the frontend development server and the backend API server.

1.  **Start the Backend Server:**
    Open a terminal and run the following command to start the Node.js server. It will run on `http://localhost:3001`.

    ```bash
    pnpm run start:server
    ```

2.  **Start the Frontend Application:**
    In a separate terminal, run the following command to start the Vite development server. Your application will be available at `http://localhost:5173` (or the next available port).
    ```bash
    pnpm dev
    ```

Now you can open your browser and navigate to the frontend application's URL to use the Book Catalogue.
