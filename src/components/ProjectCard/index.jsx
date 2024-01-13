// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../ProjectCard/style.css";

const ProjectCard = ({ id, title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <Link to={`/project/${id}`}>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default ProjectCard;
