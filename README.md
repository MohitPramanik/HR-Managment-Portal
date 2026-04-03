# Vertex

Vertex is a full-stack HR management portal built to streamline core people operations in one place. The application includes authentication, authorization, role-based access control (RBAC), employee and department management, recruitment workflows, leave handling, payroll-related views, attendance/timesheet tracking, dashboards, reports, and organization settings.

The repository is split into:

- `client/` - Angular frontend
- `server/` - Node.js + Express backend API

## Core Features

- Secure user signup and login flow
- Authentication with JWT-based access tokens
- Authorization with role-aware route protection
- Role-based access control for `superAdmin`, `admin`, `hr`, `manager`, `employee`, and `candidate`
- Employee management and employee directory
- Department management
- Recruitment modules for jobs and candidates
- Leave application, leave requests, and leave balance tracking
- Attendance records and timesheet management
- Payslips and salary structure screens
- Dashboard summaries and reporting pages
- Profile, notifications, and company settings
- Password reset screen and protected navigation guards

## Technologies Used

### Frontend

- Angular 21
- TypeScript
- Angular Router
- SCSS
- Tailwind CSS

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT (`jsonwebtoken`)
- Bcrypt
- Joi

## Application Highlights

- Full-stack architecture with separate frontend and backend applications
- MongoDB-backed data layer for users, employees, departments, leaves, jobs, holidays, dashboards, and leave balances
- Password hashing using `bcrypt`
- Request validation using `Joi`
- REST API structure under `/api`
- Route guards on the frontend for authentication, auto-login, role checks, and unsaved changes protection
- Lazy-loaded Angular pages for major modules
- Centralized Express error handling and async controller utilities

## Main Modules

- Authentication
- Dashboard
- Employees
- Departments
- Recruitment
- Leave Management
- Leave Balance
- Holiday Calendar
- Timesheet
- Attendance Records
- Payslips
- Salary Structure
- Reports
- Company Settings
- Notifications
- Profile

## Setup

### Prerequisites

- Node.js
- npm
- MongoDB connection string

### 1. Install frontend dependencies

```bash
cd client
npm install
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside `server/` and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

### 4. Start the backend server

```bash
cd server
npm run dev
```

### 5. Start the frontend application

```bash
cd client
npm start
```

Frontend default URL:

```text
http://localhost:4200
```

Backend default URL:

```text
http://localhost:8000
```

## Available Scripts

### Client

```bash
npm start
npm run build
npm run watch
npm test
```

### Server

```bash
npm run dev
npm run build
npm start
```

## Notes

- The frontend uses local storage for session persistence after login.
- The application includes route-level protection for authenticated and role-based access.
- The backend connects to MongoDB using Mongoose and exposes REST endpoints through Express.
- The codebase is written in TypeScript across both frontend and backend.

## Summary

Vertex is a modern HR management portal that combines Angular on the frontend with an Express and MongoDB backend. It is designed as a role-aware full-stack application covering employee operations, recruitment, attendance, leave, payroll-oriented screens, and organizational administration.
