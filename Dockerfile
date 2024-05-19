# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for npm install
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the local code to the container's workspace
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "dist/main"]