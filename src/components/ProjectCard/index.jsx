import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import your custom styles

const ProjectCard = ({ id, title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <Link to={`/project/${id}`}>
        <img src={imageUrl} alt={title} />
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
