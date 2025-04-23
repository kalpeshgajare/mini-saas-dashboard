# Mini SaaS Dashboard with Firebase Auth & Firestore
A modern, responsive SaaS-style dashboard built using React, Tailwind CSS, and Firebase. This project demonstrates a full-stack, production-ready mini application that allows authenticated users to manage their own set of projects in a secure and isolated environment using Google Firebase's powerful Authentication and Firestore database services.

Whether you're building a portfolio, a client workspace, or an internal tool, this project serves as a solid starting point for scalable web apps that require authentication and per-user data management.


### Live Demo
[Netlify](https://minisaasdashboard.netlify.app)


### Features
- Google Authentication via Firebase
- Displays user name, email, and avatar
- Project CRUD operations (Create, Read, Update, Delete)
- Projects are user-specific (each user sees only their projects)
- Responsive UI with Tailwind CSS
- Firestore backend for real-time database storage

  <br />

  <img  alt="Screenshot 2025-04-17 at 07 53 39" src="https://github.com/user-attachments/assets/defea5e9-c4e4-43a9-9e83-e48906f55aa3" />
![Untitled Design - 1 - Edited](https://github.com/user-attachments/assets/b6625d8f-1831-480f-9975-307cfc90a531)
<img width="1414" alt="Screenshot 2025-04-17 at 07 55 09" src="https://github.com/user-attachments/assets/7ebd0e92-b8c7-471d-835e-21595077c7be" />
<img width="1412" alt="Screenshot 2025-04-17 at 07 56 05" src="https://github.com/user-attachments/assets/e7768b90-930d-41a5-b5fc-5ee7cbc4a119" />
<img width="1415" alt="Screenshot 2025-04-17 at 07 56 28" src="https://github.com/user-attachments/assets/2d5d3445-4d4b-40d3-9ac3-cff031529c0b" />



### Technologies Used
- **React**: Frontend framework.  
- **Firebase**: For Authentication (Google Sign-in) and Firestore database.  
- **Tailwind CSS**: For responsive design and styling.  
- **React Context API**: For global state management.  
- **Firestore**: For storing user data and projects.  

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
#### 3. Configure Firebase
Create a .env file in the root of the project.
Add your Firebase credentials in the .env file as shown below:
```env
REACT_APP_API_KEY=your-api-key
REACT_APP_AUTH_DOMAIN=your-auth-domain
REACT_APP_PROJECT_ID=your-project-id
REACT_APP_STORAGE_BUCKET=your-storage-bucket
REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_APP_ID=your-app-id
REACT_APP_MEASUREMENT_ID=your-measurement-id
```
You can find these credentials in the Firebase Console under Project Settings.

#### 4. Start the Development Server
Once the Firebase configuration is done, you can start the app with:
```bash
npm start
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
│   ├── pages/               # Main views/pages (Dashboard, Login, etc.)
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   └── ProjectForm.jsx
│   ├── styles/              # Tailwind or custom CSS (if any)
│   │   └── Dashboard.css
│   │   └── Login.css
│   │   └── Pageform.css
│   ├── App.jsx              # App routes and structure
│   ├── firebase.js          # Firebase configuration
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind base config
├── .gitignore
├── package.json
├── README.md
└── .env                     # .env file
```

### Contributing
Contributions are always welcome! Feel free to submit an issue or a pull request.

### Acknowledgments
- [React](react.dev)
- [Firebase](firebase.google.com)
- [Tailwind CSS](tailwindcss.com)

## 📄 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this software for any purpose, with proper attribution.  
See the [LICENSE](LICENSE) file for full details.





