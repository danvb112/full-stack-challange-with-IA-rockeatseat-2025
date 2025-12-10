# full-stack-challange-with-IA-rockeatseat-2025

In this project, we implemented an integration with the Google Gemini API (gemini-2.0-flash-exp) using Vercel AI SDK for automatic generation of TypeScript code for webhook handlers. A payload analysis system with structure detection and correction suggestions was implemented. An interactive interface for code generation included webhook selection checkboxes. Seeders were used with Faker.js for test data. An optimized production build was created with Vite.

## Installation

### Prerequisites
- Node.js 18+ and npm/pnpm
- Docker and Docker Compose (for the database)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd full-stack-challange-with-IA-rockeatseat-2025
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` in the `api` directory (if available)
   - Add your Google Gemini API key to the environment variables

4. **Start the database**
   ```bash
   cd api
   docker-compose up -d
   ```

5. **Run database migrations**
   ```bash
   pnpm run db:migrate
   ```

## Running the Project

### Development Mode

Start both the API and web servers in development mode:

```bash
# From the root directory
pnpm run dev
```

This will:
- Start the API server (typically on `http://localhost:3000`)
- Start the web development server (typically on `http://localhost:5173`)

### Individual Services

**Run API server only:**
```bash
cd api
pnpm run dev
```

**Run web app only:**
```bash
cd web
pnpm run dev
```

### Production Build

**Build the web app for production:**
```bash
cd web
pnpm run build
```

**Start production server:**
```bash
cd api
pnpm run build
pnpm run start
```

## Project Structure

- `api/` - Backend server with webhooks and code generation
- `web/` - Frontend application built with Vite and React
- `api/src/db/` - Database configuration and migrations
- `api/src/routes/` - API route handlers

## Technologies Used

- **Backend:** TypeScript, Node.js, Drizzle ORM
- **Frontend:** React, TypeScript, Vite
- **Database:** PostgreSQL (via Docker)
- **AI Integration:** Google Gemini API with Vercel AI SDK
- **Testing Data:** Faker.js
- **Code Quality:** Biome