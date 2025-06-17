# Replit.md

## Overview

This is a full-stack web application built as a task management system (called "Executor") designed for retail associates to manage store operations tasks. The application features a mobile-first design with React frontend and Express backend, using PostgreSQL for data persistence and Drizzle ORM for database operations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and build processes
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with custom styling
- **Mobile-First Design**: Responsive design optimized for mobile devices

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Prepared for connect-pg-simple integration
- **API Design**: RESTful API with /api prefix routing

### Build and Development
- **Development**: Concurrent frontend (Vite) and backend (tsx) processes
- **Production Build**: Vite for frontend, esbuild for backend bundling
- **Deployment**: Configured for Replit autoscale deployment

## Key Components

### Database Schema
- **Users Table**: Stores user authentication and profile information (id, username, password, name, role)
- **Tasks Table**: Main task management with fields for title, description, location, priority, status, category, deadline, and assignment
- **Task Submissions Table**: Captures completed task data including form data, media files, and notes

### Authentication System
- Client-side authentication service with localStorage persistence
- Mock authentication for development (carlos@empresa.com/password123)
- Role-based access control structure in place

### Task Management
- Task creation, assignment, and status tracking
- Priority levels: urgent, normal, low
- Status workflow: pending, in_progress, completed
- Categories: operations (stock replenishment, display setup), audits (price verification, inventory checks), cleaning (store organization, PDV maintenance)

### Workflow System
- Multi-step task completion process:
  1. Check-in (QR code scanning simulation)
  2. Form filling (task-specific data entry)
  3. Media capture (photos/videos)
  4. Final submission

### Mobile Interface
- Bottom navigation bar for main sections
- Mobile-optimized form controls
- Touch-friendly interface elements
- Responsive design for various screen sizes

## Data Flow

1. **User Authentication**: Login → Local storage → Route protection
2. **Task Assignment**: Backend task creation → Client task list display
3. **Task Execution**: Check-in → Form completion → Media upload → Submission
4. **Data Persistence**: Form data serialized as JSON → Database storage
5. **Sync Status**: Real-time sync indicators for offline capability

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Radix UI components
- **Styling**: Tailwind CSS, class-variance-authority
- **Data Fetching**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: React Icons (FontAwesome 6)
- **Utilities**: date-fns for date manipulation

### Backend Dependencies
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESLint/Prettier**: Code formatting and linting
- **Vite**: Fast development server and build tool

## Deployment Strategy

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Development**: `npm run dev` - Concurrent frontend/backend
- **Production**: `npm run build` followed by `npm run start`
- **Port Configuration**: Backend on 5000, proxied to port 80
- **Auto-scaling**: Configured for Replit's autoscale deployment

### Build Process
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild bundles Express server to `dist/index.js`
3. Static files served from built frontend directory

### Database
- PostgreSQL database provisioned through Replit
- Drizzle migrations stored in `./migrations`
- Database URL configured via environment variables

## Changelog

```
Changelog:
- June 17, 2025. Initial setup
- June 17, 2025. Adapted content for retail operations - converted from maintenance tasks to retail activities (stock replenishment, price audits, display setup, store organization)
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```