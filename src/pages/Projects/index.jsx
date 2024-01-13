// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectData from '../../data/projects.json'; 
import "../../components/Project/style.css";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
}

export default Projects;
