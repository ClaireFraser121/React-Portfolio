import React from 'react';
import "./style.css";

const Contact = () => {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Email address: your@email.com</p>
      <p>Link to PDF version of CV: <a href="/path/to/cv.pdf">Download CV</a></p>
      <p>Link to GitHub profile: <a href="https://github.com/ClaireFraser121">GitHub Profile</a></p>
      <p>Link to LinkedIn page: <a href="https://www.linkedin.com/in/claire-fraser-5a9230280/">LinkedIn</a></p>
      {/* Add contact form */}
    </div>
  );
}

export default Contact;
