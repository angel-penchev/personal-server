import React from 'react';
import './App.css';
import Awards from './sections/Awards';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Start from './sections/Start';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Header></Header>
      </header>
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
    </div>
  );
}

export default App;
