# STAGE 1: Build Stage
FROM node:20-alpine AS builder
WORKDIR /portfolio-client

# Copy package files first (for better caching)
COPY package*.json ./
RUN npm ci

# Copy all source files and build
COPY . .
RUN npm run build

# STAGE 2: Production Stage
FROM node:20-alpine
WORKDIR /portfolio-client

# Install serve package globally
RUN npm install -g serve

# Copy only the build folder from builder
COPY --from=builder /portfolio-client/build ./build

# Configure production environment
ENV NODE_ENV=production
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]