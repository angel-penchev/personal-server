import React from 'react';
import {SmoothProvider} from 'react-smooth-scrolling';
import './App.css';
import Awards from './sections/Awards/Awards';
import Contact from './sections/Contact/Contact';
import Education from './sections/Education/Education';
import Experience from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Nav from './sections/Nav/Nav';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Start from './sections/Start/Start';

const App = () => {
  return (
    <div className="App">
      <nav className="app-nav">
        <Nav></Nav>
      </nav>
      <SmoothProvider skew={false} ease={0}>
        <main className="app-main">
          <Start></Start>
          <Skills></Skills>
          <Projects></Projects>
          <Experience></Experience>
          <Education></Education>
          <Awards></Awards>
          <Contact></Contact>
        </main>
        <footer className="app-footer">
          <Footer></Footer>
        </footer>
      </SmoothProvider>
    </div>
  );
};

export default App;
