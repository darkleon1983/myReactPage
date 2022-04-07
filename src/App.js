import './App.css';
import React from 'react';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
