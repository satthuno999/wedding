# Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the application using a lightweight web server
FROM node:18-alpine AS runner

# Set the NODE_ENV environment variable
ENV NODE_ENV production

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
