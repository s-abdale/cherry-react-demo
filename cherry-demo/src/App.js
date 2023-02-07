// general imports:
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// component imports:
import Home from './components/Home';
import About from './components/About';
import Mystery from './components/Mystery';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/mystery" element={<Mystery/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
