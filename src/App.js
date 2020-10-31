import './App.css';
import React from 'react';
import NavBar from './component/NavBar/NavBar.js';
import LeadContent from './component/LeadContent/LeadContent.js';
import AboutMe from "./component/AboutMe/AboutMe.js"
import Experience from './component/Experience/Experience';
import Education from './component/Education/Education';
import Homework from './component/Homework/Homework';
import Projects from './component/Projects/Projects';
import Footer from './component/Footer/Footer';
import Skills from './component/Skills/Skills';
import Contact from './component/Contact/Contact';


function App() {
  return (
    <div id="root">
      <NavBar />
      <LeadContent />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Homework />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;