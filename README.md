# Aptech Midterms 1

A React application built with Vite for managing student information.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher recommended) - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** (optional package manager)

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd midterm-activity-1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the App

To start the development server:

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:5173` (or the URL shown in the terminal) to view the application.

## Editing the App

This project is set up with:

- **React 19** for building the user interface
- **Vite** as the build tool for fast development and hot module replacement
- **React Router DOM** for client-side routing
- **ESLint** for code linting and maintaining code quality

### Development Workflow

1. Make changes to the source files in the `src/` directory
2. The development server will automatically reload the page when you save changes
3. Run `npm run lint` to check for code quality issues
4. Use `npm run build` to create a production build
5. Use `npm run preview` to preview the production build locally

### Project Structure

- `src/` - Source code directory
  - `App.jsx` - Main application component
  - `Home.jsx` - Home page component
  - `About.jsx` - About page component
  - `Students.jsx` - Students list component
  - `StudentDetails.jsx` - Student details component
- `public/` - Static assets
- `vite.config.js` - Vite configuration
- `eslint.config.js` - ESLint configuration

## Building for Production

To build the app for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Additional Notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
