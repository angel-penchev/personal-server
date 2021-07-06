import React from 'react';
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

function App() {
  return (
    <div className="App">
      <nav className="app-nav">
        <Nav></Nav>
      </nav>
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
    </div>
  );
}

export default App;
