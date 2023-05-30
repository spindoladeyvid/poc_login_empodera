# Use the official Node.js 14 image as the base image
FROM node:14
# Install Yarn
RUN npm install -g --force yarn

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY ./package*.json ./yarn.lock ./

# Copy the rest of the application files to the container
COPY . .

EXPOSE 8080

