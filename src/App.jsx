// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  const [count, setCount] = useState(0);

  // Your component logic here

  return (
    <>
      <Header />

      {/* Example: Render Home page */}
      <Home count={count} setCount={setCount} />

      {/* Example: Render Projects page */}
      <Projects />

      {/* Example: Render ProjectDetails page */}
      {/* Note: Use React Router to pass dynamic project ID */}
      <ProjectDetails />

      <Footer />
    </>
  );
}

export default App;
