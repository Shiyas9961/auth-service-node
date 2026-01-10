# Auth Microservice (Node.js + MongoDB)

## Overview

Production‑ready authentication microservice built with **Node.js
(Express)** and **MongoDB (Mongoose)**.

### Features

-   User CRUD (name, email, password)
-   Secure password hashing using bcrypt
-   JWT login & token validation API
-   Token verification endpoint for inter‑service communication (Go →
    Node)
-   Swagger API docs
-   Docker & Docker Compose support
-   Environment‑based configuration

## Tech Stack

  Component          Technology
  ------------------ -----------------------------------
  Runtime            Node.js 24
  Framework          Express.js
  Database           MongoDB
  ODM                Mongoose
  Auth               JWT (jsonwebtoken)
  Security           bcryptjs, crypto
  Docs               swagger‑jsdoc, swagger‑ui‑express
  Containerization   Docker, Docker Compose

------------------------------------------------------------------------

## Folder Structure

    auth‑service‑node/
    ├── src/
    │   ├── config/
    │   ├── controllers/
    │   ├── middlewares/
    │   ├── models/
    │   ├── routes/
    │   ├── services/
    │   ├── utils/
    │   └── app.js
    ├── server.js
    ├── .env
    ├── .gitignore
    ├── Dockerfile
    ├── docker‑compose.yml
    └── README.md

------------------------------------------------------------------------

## Setup & Run

### 1. Clone Repository

``` sh
git clone <repo-url>
cd auth‑service‑node
```

### 2. Install Dependencies

``` sh
npm install
```

### 3. Generate Secure JWT Secret

``` sh
node ‑e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4. Configure `.env`

    PORT=5000
    MONGO_URI=mongodb://shiyas:shiyas123@localhost:27017/auth‑service
    JWT_SECRET=<generated‑secret>

### 5. Run Locally

``` sh
node server.js
```

### 6. Access Swagger Docs

    /api/docs

------------------------------------------------------------------------

## Docker Run

### Build & Run

``` sh
docker build ‑t auth‑service .
docker run ‑p 5000:5000 ‑‑env‑file .env auth‑service
```

### Run with Docker Compose (includes MongoDB)

``` sh
docker compose up ‑d
```

------------------------------------------------------------------------

## API Endpoints

### Auth APIs

  Method   Endpoint               Description
  -------- ---------------------- -----------------
  POST     `/api/auth/login`      Login & get JWT
  POST     `/api/auth/validate`   Validate token

### User APIs (Protected)

  Method   Endpoint              Description
  -------- --------------------- -------------
  POST     `/api/users/create`   Create user
  GET      `/api/users/`         List users
  GET      `/api/users/:id`      Get user
  PUT      `/api/users/:id`      Update user
  DELETE   `/api/users/:id`      Delete user

------------------------------------------------------------------------

## Notes

-   `.env` is ignored via `.gitignore` and `.dockerignore`
-   Token must be passed as:

```{=html}
  Authorization: Bearer <token>
```

------------------------------------------------------------------------

## Author

**Shiyas**