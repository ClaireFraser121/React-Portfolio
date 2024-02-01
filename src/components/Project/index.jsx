// src/components/Project.jsx
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projects.json'; // Adjust the path accordingly
import "./style.css"; // Import your custom styles

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map(project => (
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
