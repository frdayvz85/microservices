## API Gateway for microservices

This API Gateway serves as an entry point for handling and forwarding requests to multiple backend services, specifically a Node.js project and a FastAPI project.

#### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project strutcure](#project-structure)

#### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/frdayvz85/microservices.git
   cd apigateway
   ```
2. Navigate to the project directory:
   ```bash
   cd apigateway
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
 Create a  `.env` file and configure any necessary environment variables.

#### Usage

1. Run the API Gateway:
    ```bash
    npm start
    ```
The API Gateway will be accessible at http://localhost:4000.

#### Configuration

Configure the API Gateway by updating the `.env` file with the required settings. These settings may include the URLs or endpoints of the backend services.

Create `.env` file:
```bash
NODE_API_URL=http://localhost:5000
FAST_API_URL=http://localhost:8000
```

#### Project Structure
```bash
apigateway/
│
├── .env
├── .env.example
├── .gitignore
├── .nvmrc
├── tsconfig.json
├── README.md
├── index.ts
└── package.json
```
