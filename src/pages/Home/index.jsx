import React from 'react';
import "./style.css";

const Home = () => {
  return (
    <div className='home-container'>
      <h2>Welcome to Claire Fraser's Creative Hub</h2>
      
      <img
        src="/images/Claire Short hair.jpg"
        alt="Claire Fraser Headshot"
        style={{ width: '300px', height: 'auto', borderRadius: '20px 40px 20px 40px' }}
      />

      <h3>Unleashing Imagination through Code and Artistry</h3>
      <p>Hello there! I'm Claire Fraser, a passionate front-end web developer and a visual storyteller. Welcome to my digital realm where creativity meets cutting-edge technology. Dive into a world where every line of code weaves a tale, and every design element has a purpose.
</p>
<br></br>
<p>Welcome to my portfolio site! Explore my projects and learn more about my skills and experiences. I'm passionate about [your key interests or skills], and this space showcases my journey and contributions. Feel free to reach out and connect!</p>

    </div>
  );
}

export default Home;
