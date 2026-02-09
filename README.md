# Classroom Frontend

This is the frontend application for the Classroom Management System, built with modern web technologies to provide a responsive and intuitive user interface for students, teachers, and administrators.

## 🚀 Features

-   **Role-Based Access Control (RBAC)**: Distinct interfaces and permissions for Students, Teachers, and Admins.
-   **Authentication**: Secure sign-up and login powered by `better-auth`.
    -   Support for Email/Password registration.
    -   Role selection during sign-up.
-   **Class Management**: (Implied) Functionality to manage subjects, classes, and departments.
-   **Dashboard**: Overview of activities and metrics.
-   **Responsive Design**: optimized for various device sizes using Tailwind CSS.
-   **Dark Mode Support**: Built-in theme switching.

## 🛠️ Tech Stack

-   **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
-   **Framework**: [Refine](https://refine.dev/) (Headless React framework for web applications)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/)
-   **State Management & Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) (via Refine)
-   **Forms**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) (Validation)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Authentication**: [better-auth](https://better-auth.com/)

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Shadcn UI, Refine components)
├── constants/      # App-wide constants (Roles, Configs)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and library configurations (e.g., auth client)
├── pages/          # Application pages and route components
├── providers/      # Refine data and auth providers
├── types/          # TypeScript type definitions
└── App.tsx         # Main application component with Refine setup
```

## ⚡ Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm, yarn, or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the frontend directory:
    ```bash
    cd classroom-frontend
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
VITE_BACKEND_URL=http://localhost:8000  # URL of your backend API
```

### Running the App

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📜 Available Scripts

-   `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
-   `npm run build`: Compiles the application for production usage.
-   `npm run start`: Previews the production build locally.
-   `npm run refine`: Runs the Refine CLI.
