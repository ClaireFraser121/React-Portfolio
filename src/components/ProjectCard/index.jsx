// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const ProjectCard = ({ title, description, imageUrl, projectId }) => {
  return (
    <Link to={`/project/${projectId}`} className="project-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default ProjectCard;
