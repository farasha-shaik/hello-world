# Use the official Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose port 8080 for the app
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
