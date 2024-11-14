import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Przywitanie</Link> | {" "}
        <Link to="projects">Projekty</Link> | {" "}
        <Link to="/contact">Kontakt</Link> {" "}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
