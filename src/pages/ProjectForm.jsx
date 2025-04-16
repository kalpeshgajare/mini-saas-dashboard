import React, { useState, useEffect } from "react";
import "../styles/ProjectForm.css"; // Import the Tailwind-based CSS file

const ProjectForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
  });

  useEffect(() => {
    if (project) {
      const tags = Array.isArray(project.tags) ? project.tags : [];
      setFormData({
        title: project.title,
        description: project.description,
        tags: tags.join(", "),
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, tags } = formData;
    const newTags = tags.split(",").map((tag) => tag.trim());
    const updatedProject = {
      id: project ? project.id : Date.now(),
      title,
      description,
      tags: newTags,
    };
    onSave(updatedProject);
  };

  return (
    <div className="project-form-container">
      <h2 className="project-form-heading">
        {project ? "Edit Project" : "Add New Project"}
      </h2>
      <form onSubmit={handleSubmit} className="project-form">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="project-input"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Project Description"
          className="project-input"
          required
        />
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="project-input"
        />
        <div className="project-form-buttons">
          <button
            type="button"
            onClick={onCancel}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="submit-btn"
          >
            {project ? "Save Changes" : "Add Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
