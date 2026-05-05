# 🚀 TaskFlow — Team Task Manager

A full-stack team task management web application with role-based access control (Admin/Member), built with React, Node.js, Express, and MongoDB.

---

## 🌐 Live Demo

- **Frontend:** [https://your-frontend.up.railway.app](https://your-frontend.up.railway.app)
- **Backend API:** [https://task-manager-dashboard-production.up.railway.app](https://task-manager-dashboard-production.up.railway.app)

---


## ✨ Features

### 🔐 Authentication
- User Signup & Login with JWT
- Secure password hashing with bcryptjs
- Protected routes on frontend and backend

### 👥 Role-Based Access Control
- **Admin** — Create/edit/delete projects, manage members, assign tasks, change roles
- **Member** — View projects, update task status of assigned tasks

### 📁 Project Management
- Create and manage multiple projects
- Add/remove team members
- Set project status (Active, On Hold, Completed, Archived)
- Project-level dashboard with task statistics

### ✅ Task Management
- Create tasks with title, description, priority, due date
- Assign tasks to team members
- Track status: `Todo` → `In Progress` → `In Review` → `Done`
- Priority levels: Low, Medium, High, Critical
- Overdue task detection
- Comment on tasks

### 📊 Dashboard
- Personal task overview (total, in-progress, done, overdue)
- Recent tasks across all projects
- Project progress tracking

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, React Router v6 |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose ODM |
| Auth | JWT (JSON Web Tokens), bcryptjs |
| Deployment | Railway |
| Styling | Custom CSS with CSS Variables |

---

## 📁 Project Structure

```
Task-Manager-Dashboard/
├── server/                  # Backend
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   └── taskRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/                # Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── utils/
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Git

### 1. Clone the repository
```bash
git clone https://github.com/Sainiharsh25/Task-Manager-Dashboard.git
cd Task-Manager-Dashboard
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create a `.env` file inside `server/`:
```env
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

Start the backend:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:
```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |

### Projects
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects` | Get all user projects |
| POST | `/api/projects` | Create new project |
| GET | `/api/projects/:id` | Get project by ID |
| PUT | `/api/projects/:id` | Update project (Admin) |
| DELETE | `/api/projects/:id` | Delete project (Admin) |
| POST | `/api/projects/:id/members` | Add member (Admin) |
| DELETE | `/api/projects/:id/members/:userId` | Remove member (Admin) |

### Tasks
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks?project=:id` | Get tasks for a project |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |
| POST | `/api/tasks/:id/comments` | Add comment |

---

## ☁️ Deployment (Railway)

Both frontend and backend are deployed on [Railway](https://railway.app).

### Backend Environment Variables
```env
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
NODE_ENV=production
PORT=5000
CLIENT_URL=https://task-manager-dashboard-production.up.railway.app/
```

### Frontend Environment Variables
```env
VITE_API_URL=https://devoted-comfort-production-b337.up.railway.app/
```

---

## 👤 Author

**Harsh Saini**
- GitHub: https://github.com/Sainiharsh25

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
