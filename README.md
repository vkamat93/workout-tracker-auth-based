# Workout Tracker (Full Stack MERN App)

A full stack workout tracker application with authentication, built using the MERN stack (MongoDB, Express, React, Node.js). Users can sign up, log in, and manage their personal workout records securely.

---

## Features

- User authentication (signup & login) with JWT
- Secure password hashing (bcrypt)
- Each user can create, view, update, and delete their own workouts
- Workouts are private to each user
- Responsive React frontend
- Protected API routes

---

## Folder Structure

```
backend/
  controllers/
  middleware/
  models/
  routes/
  .env
  package.json
  server.js

frontend/
  public/
  src/
    components/
    context/
    hooks/
    pages/
    App.js
    index.js
    index.css
  package.json
```

---

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB database (local or Atlas)

---

### 1. Clone the repository

```sh
git clone <repo-url>
cd workout-tracker-auth-based
```

---

### 2. Setup Backend

```sh
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```
PORT=4000
MONGO_URI=<your-mongodb-uri>
SECRET_KEY=<your-secret-key>
```

Start the backend server:

```sh
npm run dev
```

---

### 3. Setup Frontend

```sh
cd ../frontend
npm install
```

Start the frontend React app:

```sh
npm start
```

---

### 4. Usage

- Visit [http://localhost:3000](http://localhost:3000)
- Sign up for a new account
- Log in
- Add, view, and delete your workouts

---

## API Endpoints

### Auth

- `POST /api/user/signup` — Register a new user
- `POST /api/user/login` — Log in

### Workouts (Protected)

- `GET /api/workouts` — Get all workouts for the logged-in user
- `POST /api/workouts` — Create a new workout
- `GET /api/workouts/:id` — Get a single workout
- `DELETE /api/workouts/:id` — Delete a workout
- `PATCH /api/workouts/:id` — Update a workout

---

## Technologies Used

- **Frontend:** React, Context API, CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, validator
- **Authentication:** JWT (JSON Web Tokens)
- **Password Security:** bcrypt hashing

---

## License

This project is licensed under the MIT License.

---

## Author

- Vikrant Kamat

---

## Acknowledgements

- Inspired by the playlist 'MERN Auth Tutorial' on Youtube by Net Ninja: https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT
- driven by fascination of MERN stack and modern authentication best practices.

---

**Happy Tracking!**
