import React, { useEffect } from 'react';
import { SmoothProvider } from 'react-smooth-scrolling';
import './App.css';
import Awards from './sections/Awards';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Nav from './sections/Nav';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Start from './sections/Start';

const App = () => {
  useEffect(() => {
    document.title = "Angel Penchev | Software Developer"
  }, [])

  return (
    <div className="App">
        <nav className="app-nav">
          <Nav></Nav>
        </nav>
        <SmoothProvider skew={true} ease={0}>
          <header className="app-header">
            <Start></Start>
          </header>
          <main className="app-main">
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
}

export default App;
