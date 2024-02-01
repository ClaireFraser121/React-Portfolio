// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectData from '../../data/projects.json'; 
import "../../components/Project/style.css";


const Project = ({ title, description, imageUrl, deployedLink, githubLink }) => {
  return (
    <div className="project-container">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">Description: {description}</p>
      <img
        src={imageUrl}
        alt={title}
        className="project-image"
        style={{ width: '300px', height: 'auto' }}
      />
      <div className="project-links">
        <p>
          <strong>Deployed Version:</strong>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            {deployedLink}
          </a>
        </p>
        <p>
          <strong>GitHub Repository:</strong>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            {githubLink}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;