// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div>
      {/* Your projects page content goes here */}
      <h2>Projects</h2>
      <ProjectCard
        title="Project 1"
        description="Description of Project 1"
        imageUrl="/images/project1-thumbnail.jpg"
      />
      {/* Add more ProjectCard components for other projects */}
    </div>
  );
}

export default Projects;
