# Node.js Demo App

This is a simple Node.js application that shows how to use containerization and CI/CD automation.

## Overview

The app sets up a basic HTTP server that responds with "Hello from nodejs-demo-app". It includes:

- Docker containerization with multi-stage builds
- Automated testing and deployment using GitHub Actions
- Integration with DockerHub for building and publishing images

## Features

- Lightweight Node.js server
- CI/CD workflow for testing, building, and pushing Docker images
- Health checks and smoke tests included

## Getting Started

### Prerequisites

- Node.js version 18 or higher
- Docker installed
- Git installed

### Local Setup

Clone the repository:

```bash
git clone https://github.com/yallavinay/nodejs-demo-app.git
cd nodejs-demo-app
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

Visit http://localhost:3000 to see the app running.

Run the tests:

```bash
npm test
```

## Docker Usage

Build the Docker image:

```bash
docker build -t nodejs-demo-app .
```

Run the container:

```bash
docker run -p 3000:3000 nodejs-demo-app
```

Run in detached mode:

```bash
docker run -d -p 3000:3000 --name nodejs-demo nodejs-demo-app
```

Stop and remove the container:

```bash
docker stop nodejs-demo
docker rm nodejs-demo
```

## CI/CD Pipeline

The GitHub Actions workflow automates testing, building, and publishing:

**Test workflow** (runs on all pushes and pull requests):
- Installs dependencies
- Starts the app in the background
- Runs health checks and tests
- Stops the app

**Build and deploy workflow** (runs on pushes to the main branch):
- Builds Docker image using Buildx
- Pushes images to DockerHub with latest and commit SHA tags
- Uses caching for faster builds

## DockerHub Integration

To enable automated Docker image publishing, create DockerHub secrets in your GitHub repository:

1. Go to your repository → **Settings** → **Secrets** → **Actions**

2. Add the following secrets:
   - `DOCKERHUB_USERNAME` → Your DockerHub username
   - `DOCKERHUB_TOKEN` → DockerHub access token

### Creating a DockerHub Access Token

1. Sign in to [DockerHub](https://hub.docker.com/)
2. Navigate to **Account Settings** → **Security** → **New Access Token**
3. Give it a descriptive name (e.g., "GitHub Actions")
4. Grant permissions: read, write, delete
5. Copy the token and use it as `DOCKERHUB_TOKEN` in GitHub

## Project Structure

```
nodejs-demo-app
├── .github/workflows/main.yml   - CI/CD pipeline
├── package.json                 - Node.js dependencies and scripts
├── index.js                     - Main server file
├── test.js                      - Basic smoke test
├── Dockerfile                   - Docker configuration
└── README.md                    - Documentation
```

## Testing

- Sends a GET request to http://localhost:3000
- Checks that the response status is 200
- Exits with code 0 on success, 1 on failure

## Configuration

- `PORT` environment variable (default 3000)

## Docker Configuration

- Base image: `node:18-alpine`
- Exposes port 3000
- Runs as a non-root user
- Health check included

## Scripts

- `npm start` → Start the server
- `npm test` → Run smoke test

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request