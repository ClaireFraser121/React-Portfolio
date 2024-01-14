// src/components/Project.jsx
import React from 'react';
import "./style.css";

const Project = ({ title, description, imageUrl, deployedLink, githubLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Description: {description}</p>
      <img src={imageUrl} alt={title} />
      <p>Link to deployed version: <a href={deployedLink}>{deployedLink}</a></p>
      <p>Link to GitHub repository: <a href={githubLink}>{githubLink}</a></p>
    </div>
  );
}

export default Project;
