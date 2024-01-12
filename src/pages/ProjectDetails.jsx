// src/pages/ProjectDetails.jsx
import React from 'react';

const ProjectDetails = ({ match }) => {
  // Access project ID from the URL parameters
  const projectId = match.params.id;

  return (
    <div>
      {/* Your project details page content goes here */}
      <h2>Project Details</h2>
      <p>Project ID: {projectId}</p>
    </div>
  );
}

export default ProjectDetails;
