import './App.css';
import React from 'react';
import Header from './Components/Header/index.js';
import AboutMe from './Components/AboutMe/index.js';
import Skills from './Components/Skills/index.js';
import Footer from './Components/Footer/index.js';
import Button from './Components/Button/index.js';


const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
