# User & Address Management Backend

This project is a simple backend built using **Node.js** with **TypeScript** and **PostgreSQL**. It allows users to register and store multiple addresses using a relational database. There is a **one-to-many** relationship between users and addresses. The project doesn't include authentication, and data submission is done through a simple form.

---

## Features

- User and Address storage using PostgreSQL
- One-to-many relationship between users and their addresses
- Built using **Express** and **pg** (PostgreSQL client)
- Modular code structure with controllers, routes, and models
- Type safety using **TypeScript**

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Database Configuration](#database-configuration)
- [Run the Project](#run-the-project)
- [API Endpoints](#api-endpoints)

---

## Prerequisites

To run this project, you need to have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [pgAdmin](https://www.pgadmin.org/download/) (optional for database management)

---

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/saurabhraut1212/smoke_tree_backend_assignment.git
   ```
2. **Navigate to the server directory**
   ```bash
   cd server
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Install TypeScript and PostgreSQL types:**
   ```bash
   npm install --save-dev typescript @types/pg
   ```
## Database Configuration
1. **Create PostgreSQL Database:**
  -Open pgAdmin or use the command line to create a new database:
   ```bash
   CREATE DATABASE smoke-tree;
   ```
2. **Create Tables**
   ```bash
   -- Create User table
   CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL
   );

   -- Create Address table with a foreign key referencing the User table
   CREATE TABLE addresses (
   id SERIAL PRIMARY KEY,
   street VARCHAR(255) NOT NULL,
   city VARCHAR(255) NOT NULL,
   zip_code VARCHAR(20) NOT NULL,
   user_id INT REFERENCES users(id) ON DELETE CASCADE
   );
   ```
3. **Update Database Credentials:**
   ```bash
   const pool = new Pool({
   user: 'your_db_user',
   host: 'localhost',
   database: 'your_database_name',
   password: 'your_db_password',
   port: 5432,
   });
   ```

## Run The Project
1. **First Command**
   ```bash
   npm run build:watch
   ```
2. **Second command on another terminal**
   ```bash
   npm run dev
   ```
3. **Server will start on http://localhost:8000**

## API Endpoint 
- [URL](#URL):POST api/users
- [Description](#Description): This endpoint creates a new user and stores an associated address.
- [Request_body](#Request_body):
  ```bash
  {
  "name": "John Doe",
  "street": "123 Main St",
  "city": "New York",
  "zipCode": "10001"
  }
  ```
