
# 🛒 MERN E-commerce Application

This is a microservice-based e-commerce application built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). It includes modular services for products, users, and orders, and is containerized using Docker, deployed to **Azure Container Apps**, and managed with a full **CI/CD pipeline via GitHub Actions**.

---

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 🛍️ Product Catalog & Shopping Cart
- 📦 Order Management
- 📁 Modular Microservices
- ⚙️ Docker Containerization
- ☁️ Azure Deployment (Container Apps)
- 🔄 CI/CD via GitHub Actions

---

## 🧱 Microservices Architecture

This project follows a **modular microservices design**, separating responsibilities into distinct services:

| Service     | Responsibility             | Folder       |
|-------------|-----------------------------|--------------|
| User Service | Handles authentication and user data | `/server/user` |
| Product Service | Manages product catalog        | `/server/product` |
| Order Service | Manages shopping cart and orders | `/server/order` |
| Frontend     | User interface (React)           | `/client`     |

Each service can be built, tested, and deployed independently using Docker.

---

## 🧰 Tech Stack

| Category       | Tech                          |
|----------------|-------------------------------|
| Frontend       | React, Bootstrap              |
| Backend        | Node.js, Express              |
| Database       | MongoDB Atlas                 |
| Containerization| Docker                        |
| Deployment     | Azure Container Apps          |
| CI/CD          | GitHub Actions                |
| Secrets Mgmt   | GitHub Secrets                |

---

## 🐳 Docker

Each service and the client are containerized using Docker.

### Build and Run with Docker

```bash
# Build and run containers
docker-compose up --build
````

### Docker Best Practices Used

* ✅ Multi-stage builds for production-ready images
* ✅ `.dockerignore` for clean builds
* ✅ Secrets managed via environment variables
* ✅ Small, secure base images (e.g., `node:18-alpine`)
* ✅ Proper port exposure and health checks

---

## 🔄 CI/CD Pipeline with GitHub Actions

This project uses **GitHub Actions** for automating:

* 🔍 Linting & Testing
* 🐳 Docker image building
* 🚀 Deployment to Azure Container Apps

### Example Workflow Trigger

```yaml
on:
  push:
    branches: [main]
```

### Secrets in GitHub

| Secret Name                    | Description                        |
| ------------------------------ | ---------------------------------- |
| `DOCKER_USERNAME`              | Docker Hub username                |
| `DOCKER_PASSWORD`              | Docker Hub token/password          |
| `AZURE_WEBAPP_PUBLISH_PROFILE` | Azure publish profile (Base64 XML) |

---

## ☁️ Azure Deployment

The app is deployed on **Azure Container Apps**, with container-level scaling and ingress.

### Key Azure Configuration

* ✅ Ingress enabled via Azure Portal
* ✅ Correct internal ports mapped (e.g., 3000)
* ✅ Role-Based Access Control (RBAC) configured:

  * `Owner`: Chalani
  * `Container Apps Contributor`: Team members

---

## 📦 Project Structure

```
/client           → React frontend
/server/user      → User service
/server/product   → Product service
/server/order     → Order service
/docker           → Dockerfiles & compose
.github/workflows → GitHub Actions CI/CD
```

---

## 📥 API Endpoints

| Method | Endpoint           | Service         | Description       |
| ------ | ------------------ | --------------- | ----------------- |
| GET    | `/api/products`    | Product Service | List all products |
| POST   | `/api/users/login` | User Service    | User login        |
| POST   | `/api/orders`      | Order Service   | Place a new order |

---

## 🧪 Getting Started (Local Development)

1. **Clone the repo**

   ```bash
   git clone https://github.com/chalaniS/Ecommerce_Application___CTSE---MERN.git
   cd Ecommerce_Application___CTSE---MERN
   ```

2. **Create `.env` files** for each service with DB and auth config.

3. **Start with Docker Compose**

   ```bash
   docker-compose up --build
   ```

---

## 📷 Screenshots
