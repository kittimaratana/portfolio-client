#!/bin/bash

# Stop and remove existing container if it exists
docker stop portfolio-client 2>/dev/null || true
docker rm portfolio-client 2>/dev/null || true

# Build the Docker image
echo "🏗️  Building Docker image..."
docker build -t portfolio-client .

# Run the container
echo "🚀 Starting portfolio-client..."
docker run \
  --name portfolio-client \
  -p 3000:3000 \
  -e NODE_ENV=development \
  portfolio-client
