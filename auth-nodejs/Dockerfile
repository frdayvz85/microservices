# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . /app

# Build the TypeScript project
RUN npm run build-linux

# Copy the swagger-output.json file to the dist/src directory
COPY src/docs/swagger-output.json dist/src/docs/swagger-output.json

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Define environment variable
ENV NODE_ENV=production

# Run app.js when the container launches
CMD ["npm", "prod"]
