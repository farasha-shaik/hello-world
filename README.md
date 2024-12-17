# Hello World Application - GitLab CI/CD Pipeline

This repository demonstrates a basic **Hello World** web application with an automated **CI/CD pipeline** using **GitLab CI/CD**. The pipeline includes stages for building, testing (quality gate), and deploying the application with a focus on security and deployment control.

## Overview

This repository contains a simple web application, which is built into a Docker image and deployed through GitLab CI/CD. The pipeline is configured to:

1. Build the Docker image.
2. Run a security scan as a quality gate to ensure the image is free from vulnerabilities.
3. Deploy the image to the appropriate environment based on the Git branch (`master` or `develop`).

## Secrets Management
Sensitive information such as credentials, access tokens, and other secrets should never be hardcoded in the codebase. In this repository, we use GitLab CI/CD environment variables to store sensitive data securely.

Required Secrets:
CI_REGISTRY_USER: The username for the Docker registry (e.g., GitLab username).
CI_REGISTRY_PASSWORD: The password or access token for the Docker registry.
CI_REGISTRY: The URL of the GitLab registry (usually registry.gitlab.com).
These secrets are stored in GitLab CI/CD environment variables, ensuring they are kept out of version control and are not exposed in job logs.

## CI/CD Pipeline Structure

The pipeline consists of three stages:

### 1. **Build**
- The Docker image for the Hello World application is built and pushed to GitLab's container registry.
- It uses the `docker:dind` service (Docker-in-Docker) to facilitate the build process.

### 2. **Quality Gate**
- A **security scan** using **Trivy** is run to ensure the Docker image is free from known vulnerabilities. 
- If vulnerabilities are found, the pipeline will fail, ensuring that only secure images are deployed.

### 3. **Deploy**
- Based on the Git branch (`master` or `develop`), the image is deployed to the appropriate environment.
- For this example, the deployment stage only outputs a message to simulate the deployment.

## Branch Deployment Control

- **`master` branch**: This branch is intended for production. The pipeline deploys the image to the production environment.
- **`develop` branch**: This branch is for development. The pipeline deploys the image to the development/staging environment.

## Security Quality Gate

- The **Trivy** security scanner is integrated into the CI pipeline to scan the Docker image for vulnerabilities.
- If any critical vulnerabilities are detected, the build will fail, preventing the insecure image from being deployed.
  
**Example:**

```bash
trivy image --exit-code 1 --no-progress $IMAGE_NAME:latest
