# 🔐 Simple Login App (Full Stack)

A basic full-stack login system using:

- **Frontend**: React + TypeScript + Axios + React Hook Form
- **Backend**: Express + TypeScript
- No database, no JWT, no encryption — just a simple demo!

---

## 🧱 Project Structure

/project-root │ ├── backend/ │ ├── app.ts │ ├── routes/ │ │ └── index.ts │ ├── controllers/ │ │ └── userController.ts │ ├── middlewares/ │ │ └── errorHandler.ts │ └── ... │ └── frontend/ ├── src/ │ ├── App.tsx │ └── ... └── ...

## ⚙️ Backend (Express + TypeScript)

### 📚 Libraries Used

- `express`
- `cors`
- `typescript`
- `ts-node-dev`

### ▶️ How to Run

```bash
cd backend

# Install dependencies
npm install

# Run server
npm run dev

📌 By default, backend runs on http://localhost:3000.

📂 Backend Key Files
app.ts: Main server setup

routes/index.ts: Defines /login route

controllers/userController.ts: Handles login logic

middlewares/errorHandler.ts: Handles 404 and errors

💻 Frontend (React + TypeScript)
📚 Libraries Used
react

react-dom

axios

react-hook-form

typescript

vite (for local dev)

▶️ How to Run
bash
Copy
Edit
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
📌 Frontend runs on http://localhost:5173 (by Vite)

📂 Frontend Key Files
App.tsx: Renders login form and home screen conditionally

Uses axios to post to http://localhost:3000/login

🔐 How Authentication Works
Frontend sends a POST request to http://localhost:3000/login with UID and password.

Backend checks a hardcoded user list (no database).

If valid, responds with success → frontend redirects to home screen.

✅ Default login credentials:

UID: Admin

Password: Admin

🚀 To Test Login
Run both frontend and backend.

Go to http://localhost:5173.

Enter:

UID: admin

Password: admin

You’ll be redirected to the home screen on success.

📦 Future Improvements
Add JWT or sessions for real auth

Connect to a database (e.g., MongoDB or PostgreSQL)

Add user registration

Use React Router for navigation

🛠 Troubleshooting
Network Error → Check if backend is running & CORS settings

404 → Make sure /login is correctly defined and imported

CORS error → Ensure ports are correct (5173 frontend, 3000 backend)

