// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap'; // Importing Bootstrap components from react-bootstrap
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetail'; // Make sure this path is correct
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React Bootstrap App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={() => setCount((prevCount) => prevCount + 1)}>
              Increment Count
            </Button>
          </Container>
        </Navbar>

        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Home count={count} setCount={setCount} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
          </Routes>
        </Container>

        <Footer />
      </>
    </Router>
  );
}

export default App;
