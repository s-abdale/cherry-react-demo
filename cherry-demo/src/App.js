// general imports:
import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// component imports:
import Home from './components/Home';
import About from './components/About';
import Mystery from './components/Mystery';
import Quiz from './components/quiz/Quiz';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';


function App() {
  // setup state and useState. set default theme to light
  const [theme, setTheme] = useState('light');

  // function to switch themes. if theme is light then set theme to dark, and vice versa
  const toggleTheme = () => {
    theme === 'light'
      ? setTheme('dark')
      : setTheme('light');
  };

  // update the className to whatever the theme is
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    // the ${theme} class is a variable theme that switches between 'light' and 'dark'
    <div className={`main-app-body ${theme}`}>
      
      <Router>
        <header className="header-container">
          <Header/>
          <button onClick={toggleTheme} className="theme-button">{theme === 'light' ? '🌙' : '☀️'}</button>
        </header>

        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/mystery" element={<Mystery/>}></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
        </Routes>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
