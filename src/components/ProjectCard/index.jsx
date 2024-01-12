// src/components/ProjectCard.jsx
import React from 'react';
import "../ProjectCard/style.css";

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
