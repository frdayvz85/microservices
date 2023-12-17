# Education Platform

A basic education project that includes features for teachers, students, and courses.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)


## Features
- Teachers, Students, and Courses management.
- User authentication (Login and Register).
- Responsive navigation with a Navbar.
- Animated cards for Teachers, Students, and Courses.
- 404 Not Found page.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- `Node.js` installed
- `Yarn` or `npm` installed

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:

```bash
  git clone https://github.com/frdayvz85/microservices.git
  cd client
```
2. Install dependencies:

```bash
  # With yarn
  yarn

  # or with npm
  npm install
```

3. Create `.env`:
-  Add server API url.

4. Start the application:
```bash
  # With yarn
  yarn dev

  # or with npm
  npm run dev
```
Open your browser and navigate to http://localhost:5173 to see your app.

## Environment Variables
`VITE_SERVER_URL`: Add server url.

## Project structure
```bash
client/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Teachers.tsx
  │   │   ├── Students.tsx
  │   │   ├── Courses.tsx
  │   │   ├── Navbar.tsx
  │   │   ├── Footer.tsx
  │   │   ├── Login.tsx
  │   │   ├── Register.tsx
  │   │   └── NotFound.tsx
  │   ├── App.tsx   
  │   ├── index.css   
  │   └── main.tsx
  ├── .gitignore
  ├── .index.html
  ├── .env
  ├── .env.example
  ├── package.json
  ├── tsconfig.json
  ├── tsconfig.node.json
  ├── postcss.config.json
  ├── tailwind.config.js
  ├── vite.config.ts
  └── README.md
```