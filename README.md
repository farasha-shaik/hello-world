# Hello World CI/CD Pipeline

This repository contains a "Hello World" application and a GitLab CI/CD pipeline for one-click deployment.

## Features
- Secure secrets handling using GitLab Vault.
- Quality gate for scanning code before deployment.
- Branch-based deployment for production and staging environments.

## Steps to Deploy
1. Push your changes to the `main` or `development` branch.
2. CI/CD pipeline will:
   - Validate code.
   - Build the Docker image.
   - Run quality scans and tests.
   - Deploy to the environment.

## Requirements
- GitLab CI/CD configured.
- Kubernetes cluster for deployment.

## Local Development
1. Run `npm install` to install dependencies.
2. Run `node server.js` to start the application.
3. Open `http://localhost:8080` in your browser to see the "Hello World" message.
