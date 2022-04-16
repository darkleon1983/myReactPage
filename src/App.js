import './App.css';
import React from 'react';
import Header from './Components/Header/Header.jsx';
import AboutMe from './Components/AboutMe/AboutMe.jsx';
import Skills from './Components/Skills/Skills.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Button from './Components/Button/Button.jsx';


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
