# Sprint 10 – MongoDB Atlas REST API

A full-stack backend project built with **Node.js, Express.js, MongoDB Atlas and Mongoose**.

This project demonstrates how an in-memory REST API can be migrated to a persistent **MongoDB Atlas cloud database** with schema validation, relationships and data population.

---
# 🔗 Project Links

- **GitHub Repository:** https://github.com/sakshi192004/sprint-10
- **Live API:** https://sprint-10-osvi.onrender.com
- **Demo Video:** 
---

## 🚀 Features

- MongoDB Atlas cloud database integration
- Mongoose ODM
- User management
- Blog/Post management
- CRUD operations for posts
- User-Post relationship using `authorId`
- Mongoose `.populate()` for author details
- Top 3 most recent posts endpoint
- Environment variable based database configuration
- REST API testing with Postman
- Ready for Render deployment

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv**
- **Postman**
- **Render**

---

## 📁 Project Structure

```text
sprint-10/
│
├── models/
│   ├── Post.js
│   └── User.js
│
├── routes/
│   ├── postRoutes.js
│   └── userRoutes.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── Prompts.md
├── README.md
└── server.js