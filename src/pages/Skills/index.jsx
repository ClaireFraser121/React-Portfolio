// Skills.jsx

import React from 'react';
import "./style.css";
const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills at a Glance</h2>

      {/* Code Artistry */}
      <section className="code-artistry">
        <h3>Code Artistry</h3>
        <ul>
          <li>HTML | CSS | JavaScript: Building the foundation of the web with elegance.</li>
          <li>UX Design Principles: Crafting visually pleasing and user-centric experiences.</li>
          {/* Add more code-related skills */}
        </ul>
      </section>

      {/* Development Arsenal */}
      <section className="development-arsenal">
        <h3>Development Arsenal</h3>
        <ul>
          <li>Node.js | Netlify: Exploring the realms of server-side and deployment.</li>
          <li>Agile Methodology: Adapting and evolving with the fast-paced world of web development.</li>
          {/* Add more development-related skills */}
        </ul>
      </section>

      {/* Creative Odyssey in Pixels and Ink */}
      <section className="creative-odyssey">
        <h2>Creative Odyssey in Pixels and Ink</h2>
        <p>My journey began as a self-taught digital artist, where I harnessed the power of Adobe Photoshop and Illustrator to bring vibrant and evocative visuals to life...</p>
        {/* Add more content related to digital artistry and storytelling */}
      </section>

      {/* Professional Adventures */}
      <section className="professional-adventures">
        <h2>Professional Adventures</h2>
        <p>In my previous roles as an Administrative Assistant and being self-employed, I honed essential soft skills such as problem-solving, effective communication, and team collaboration...</p>
        {/* Add more content related to previous roles and soft skills */}
      </section>

      {/* Soft Skills Mastery */}
      <section className="soft-skills">
        <h3>Soft Skills Mastery</h3>
        <ul>
          <li>Problem Solving: My roles demanded a keen problem-solving approach...</li>
          <li>Effective Communication: Whether communicating complex technical details or crafting compelling narratives...</li>
          <li>Team Collaboration: Thrived in collaborative environments...</li>
          {/* Add more soft skills */}
        </ul>
      </section>

      {/* Education and Growth */}
      <section className="education-and-growth">
        <h2>Education and Growth</h2>
        <p>Currently, I'm actively pursuing a Front-End Web Development course with a focus on HTML, CSS, and JavaScript...</p>
        {/* Add more content related to educational background and present endeavors */}
      </section>

      {/* Connect and Collaborate */}
      <section className="connect-and-collaborate">
        <h2>Connect and Collaborate</h2>
        <p>Ready to embark on a digital journey together? Whether it's coding a dynamic website, solving intricate problems, or breathing life into a new narrative...</p>
        {/* Add more content related to connecting and collaborating */}
      </section>
    </div>
  );
};

export default Skills;
