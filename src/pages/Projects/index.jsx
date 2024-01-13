// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectData from '../../data/projects.json'; // Assuming you have a JSON file with project data
import "../../components/Project/style.css";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projectData.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default Projects;
