import React from 'react';
import Nav from './components/Nav'
import './App.css'
import About from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='container'>
      <Nav/>
      <About />
      <Tech />
      <Projects />
      <Contact />
     
      
    </div>
  );
};

export default App;
