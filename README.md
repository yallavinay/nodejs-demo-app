# Node.js Demo App

A simple Node.js application demonstrating Docker containerization and CI/CD with GitHub Actions.

## 🚀 Features

- Simple HTTP server returning "Hello from nodejs-demo-app"
- Docker containerization with multi-stage builds
- Automated testing and deployment with GitHub Actions
- DockerHub integration for image publishing

## 📋 Prerequisites

- Node.js 18 or higher
- Docker (for containerization)
- Git (for version control)

## 🏃‍♂️ Local Development

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd nodejs-demo-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the application
```bash
npm start
```

The server will start on `http://localhost:3000`

### 4. Run tests
```bash
npm test
```

## 🐳 Docker

### Build the Docker image
```bash
docker build -t demo .
```

### Run the container
```bash
docker run -p 3000:3000 demo
```

The application will be available at `http://localhost:3000`

### Run in detached mode
```bash
docker run -d -p 3000:3000 --name nodejs-demo demo
```

### Stop the container
```bash
docker stop nodejs-demo
docker rm nodejs-demo
```

## 🔄 CI/CD Pipeline

This project includes a GitHub Actions workflow that:

1. **Tests**: Runs on every push and pull request
   - Installs dependencies with `npm ci`
   - Starts the application in background
   - Tests the application health with curl
   - Runs the test suite
   - Stops the application

2. **Build & Deploy**: Runs on pushes to `main` branch
   - Builds Docker image using Docker Buildx
   - Pushes to DockerHub with latest and commit SHA tags
   - Uses GitHub Actions cache for faster builds

### Setting up DockerHub Secrets

To enable automatic Docker image publishing, add these secrets to your GitHub repository:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   - **Name**: `DOCKERHUB_USERNAME`
     **Value**: Your DockerHub username

   - **Name**: `DOCKERHUB_TOKEN`
     **Value**: Your DockerHub access token

### Creating a DockerHub Access Token

1. Go to [DockerHub](https://hub.docker.com/)
2. Sign in to your account
3. Go to **Account Settings** → **Security**
4. Click **New Access Token**
5. Give it a name (e.g., "GitHub Actions")
6. Copy the generated token and use it as `DOCKERHUB_TOKEN`

## 📁 Project Structure

```
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml          # GitHub Actions CI/CD pipeline
├── package.json              # Node.js dependencies and scripts
├── index.js                  # Main application file
├── test.js                   # Basic smoke test
├── Dockerfile                # Docker container configuration
└── README.md                 # This file
```

## 🧪 Testing

The project includes a basic smoke test that:
- Sends a GET request to `http://localhost:3000`
- Verifies the response status is 200
- Exits with code 0 on success, 1 on failure

## 🔧 Configuration

### Environment Variables

- `PORT`: Server port (default: 3000)

### Docker Configuration

- Base image: `node:18-alpine`
- Port: 3000
- Non-root user for security
- Health check included

## 📝 Scripts

- `npm start`: Start the application
- `npm test`: Run the smoke test

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests locally
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
