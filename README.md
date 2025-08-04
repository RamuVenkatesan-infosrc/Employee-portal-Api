# 🏢 Employee Portal API (Backend)
 
A RESTful API  for managing Employee Data. This API supports **CRUD operations**, **JWT Authentication**, and connects with **Angular Frontend**.
 
---
 
## 📦 Features
 
* ✅ Employee CRUD Operations (Create, Read, Update, Delete)
* ✅ JWT Authentication (Login & Secure API access)
* ✅ CORS enabled (Frontend-Backend communication)
* ✅ Structured API endpoints
 
---
 
## 🚀 Getting Started
 
### 1️⃣ Clone the Repository
 
```bash
git clone https://github.com/RamuVenkatesan-infosrc/Employee-portal-Api.git
cd employee-portal-api
```
 
## 🔐 Authentication (JWT)
 
1. Login API returns a JWT token.
2. Add token to the `Authorization` header for protected routes.
 
### Example:
 
```
Authorization: Bearer <your_token_here>
```
 
---
 
## 📚 API Endpoints
 
### 🔑 Auth APIs
 
| Method | Endpoint        | Description |
| ------ | --------------- | ----------- |
| POST   | /api/auth/login | User Login  |
 
#### Login Request Example:
 
```json
POST /api/auth/login
{
  "username": "admin",
  "password": "password123"
}
```
 
#### Login Response:
 
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
```
 
---
 
### 👩‍💼 Employee APIs (Protected Routes)
 
| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | /api/employees      | Get All Employees  |
| GET    | /api/employees/\:id | Get Employee by ID |
| POST   | /api/employees      | Add New Employee   |
| PUT    | /api/employees/\:id | Update Employee    |
| DELETE | /api/employees/\:id | Delete Employee    |
 
### Example: Add New Employee
---
```json
POST /api/employees
Headers: Authorization: Bearer <token>
 
Request Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "department": "Engineering"
}
```
 
---
 
## ⚡ Connect with Frontend
 
Make sure to:
 
1. Run this backend on **[http://localhost:5000](http://localhost:5000)**
2. Your Angular frontend connects via API calls.
 
---
 
