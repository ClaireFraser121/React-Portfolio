// src/pages/ProjectDetails.jsx
import React from 'react';
import Project from '../../components/Project';
import projectData from '../../data/projects.json';

const ProjectDetails = ({ match }) => {
  // Access project ID from the URL parameters
  const projectId = parseInt(match.params.projectId, 10);

  // Find the project with the matching ID
  const selectedProject = projectData.find(project => project.id === projectId);

  if (!selectedProject) {
    return <p>Project not found!</p>;
  }

  return (
    <div>
      {/* Display the details of the selected project */}
      <h2>Project Details</h2>
      <Project
        id={selectedProject.id}
        title={selectedProject.title}
        description={selectedProject.description}
        imageUrl={selectedProject.imageUrl}
        deployedLink={selectedProject.deployedLink}
        githubLink={selectedProject.githubLink}
      />
    </div>
  );
}

export default ProjectDetails;

