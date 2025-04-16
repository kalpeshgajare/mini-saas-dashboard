import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust the path if needed
import ProjectForm from "./ProjectForm";
import "../styles/Dashboard.css"; // Tailwind via @apply used here

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("projects");
    if (stored) {
      setProjects(JSON.parse(stored));
    }
  }, []);

  const handleAddProject = () => {
    setIsEditing(true);
    setCurrentProject(null);
  };

  const handleEditProject = (project) => {
    setIsEditing(true);
    setCurrentProject(project);
  };

  const handleSaveProject = (updatedProject) => {
    const updatedProjects = currentProject
      ? projects.map((p) => (p.id === updatedProject.id ? updatedProject : p))
      : [...projects, updatedProject];

    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setIsEditing(false);
    setCurrentProject(null);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const updated = projects.filter((p) => p.id !== id);
      setProjects(updated);
      localStorage.setItem("projects", JSON.stringify(updated));
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  console.log("photoURL:", user?.photoURL);

  //   const fullName = user?.displayName;

  return (
    <div className="dashboard-container">
      <div className="user-bar">
        <div className="user-info">
          {/* <img
            src={user?.photoURL}
            alt={user?.displayName || "User"}
            className="user-avatar"
          /> */}
          <img
  src="https://avatars.githubusercontent.com/u/583231?v=4"
  alt="User"
  className="user-avatar"
/>
          <div>
            <p className="user-name">{user?.displayName}</p>
            <p className="user-email">{user?.email}</p>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      {isEditing ? (
        <ProjectForm
          project={currentProject}
          onSave={handleSaveProject}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <div className="projects-container">
          <h3 className="projects-title">Your Projects</h3>
          <button onClick={handleAddProject} className="add-project-btn">
            + Add Project
          </button>
          <ul className="projects-list">
            {projects.map((project) => (
              <li key={project.id} className="project-card">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-actions">
                  <button
                    onClick={() => handleEditProject(project)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
