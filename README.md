# Mini SaaS Dashboard with Firebase Auth & Firestore
A modern, responsive SaaS-style dashboard built using React, Tailwind CSS, and Firebase. This project demonstrates a full-stack, production-ready mini application that allows authenticated users to manage their own set of projects in a secure and isolated environment using Google Firebase's powerful Authentication and Firestore database services.

Whether you're building a portfolio, a client workspace, or an internal tool, this project serves as a solid starting point for scalable web apps that require authentication and per-user data management.

<br />

### Live Demo
[Netlify](https://minisaasdashboard.netlify.app))

<br />


### Features
- Google Authentication via Firebase
- Displays user name, email, and avatar
- Project CRUD operations (Create, Read, Update, Delete)
- Projects are user-specific (each user sees only their projects)
- Responsive UI with Tailwind CSS
- Firestore backend for real-time database storage

  <br />

### Setup & Installation Instructions
#### Prerequisites
Ensure you have Node.js and npm installed on your machine.
Create a Firebase project and set up Authentication and Firestore.
Follow [this Firebase guide](https://firebase.google.com/docs/web/setup) to create a Firebase project.
#### 1. Clone the Repository
```bash
git clone https://github.com/kalpeshgajare/mini-saas-dashboard.git
cd mini-saas-dashboard
```
#### 2. Install Dependencies
```bash
npm install
```

### How to Use
#### Authentication
- Click on the Sign In with Google button to log in using your Google account.
- Once logged in, you will be redirected to the Dashboard page where you can add, edit, and delete your projects.

#### Project Management
- To add a new project, click the + Add Project button.
- You can edit or delete projects by clicking the Edit or Delete buttons next to each project.
- All changes are saved in Firebase Firestore and persist across sessions.

### Folder Structure
```tree
my-saas-dashboard/
├── public/                  # Static files
│   └── index.html
├── src/
│   ├── assets/              # Images or static assets
│   ├── components/          # Reusable UI components (buttons, cards, etc.)
│   ├── context/             # Auth context for managing login state
│   │   └── AuthContext.jsx
│   ├── firebase/            # Firebase configuration
│   │   └── config.js
│   ├── pages/               # Main views/pages (Dashboard, Login, etc.)
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── ProjectForm.jsx
│   ├── styles/              # Tailwind or custom CSS (if any)
│   │   └── Dashboard.css
│   ├── App.jsx              # App routes and structure
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind base config
├── .gitignore
├── package.json
├── README.md
└── vite.config.js          # Vite configuration
```



