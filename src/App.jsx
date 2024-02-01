import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import NavPage from './components/Nav';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetail';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/main.css'; // Import your custom styles
import './App.css';  // Custom styles for App component

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Portfolio</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href='/About'>About</Nav.Link>
              <Nav.Link href='/Skills'>Skills</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
            <Route path="/header" element={<Header />} />
            <Route path="/nav" element={<NavPage />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
