# Nodejs Authentication Project with MongoDB

## Overview

This project is a Nodejs application with MongoDB as the database. It provides APIs for managing Auth and Users

## Features

- **Auth API:** Login and Register.
- **Users API:** CRUD operations for managing users data.
- **MongoDB Integration:** Data is stored in a MongoDB database.

## Requirements

- Node.js (v14 or later recommended)
- Express
- Mongoose (MongoDB driver for Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/frdayvz85/microservices.git
   cd auth-nodejs
    ```
2. Configure `MongoDB`:
- Update the Port in the `.env` file..
- Update the Access token private key in the `.env` file..
- Update the MongoDB connection URI in the `.env` file.

3. Run the application::
   ```bash
    npm install
    ```
4. Run the nodejs application:
    ```bash
    npm run dev
    ```
 The API will be accessible at http://127.0.0.1:5000.

##### API Documentation
Access the Swagger documentation at http://127.0.0.1:5000/api-docs

##### Environment Variables
`PORT`: Add port.
`ACCESS_TOKEN_PRIVATE_KEY`: Access token private key.
`DATABASE_URL`: MongoDB connection URI.

#### Project Structure
```bash
auth-nodejs/
│
├── src/
│   ├── config/
│   │   ├── db.ts
│   │   ├── environment.ts
│   │   └── generateToken.ts
│   │
│   ├── docs/
│   │   ├── doc.ts
│   │   └── swagger-output.json
│   │
│   ├── modules/
│   │   ├── User/
│   │   │   ├── User.ts
│   │   │   ├── routes.ts
│   │   │   └── controllers.ts
│   │   
│   │
│   ├── types/
│   │   └── environment.ts
│   │
│   ├── utils/
│   │   └── validation.ts
│   │
│   ├── app.ts
│   └── index.ts
│
├── .env
├── .env.example
├── .eslintignore
├── .eslintrc.js
├── .eslintrc.js
├── .gitignore
├── .nvmrc
├── nodemon.json
├── README.md
├── tsconfig.json
└── tsconfig.prod.json

```