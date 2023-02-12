import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Marketing from './components/Services/Marketing/Marketing';
import Development from './components/Services/Development/Development';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const panel = 'panel-' + theme;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${panel}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />}>
            <Route path="/services/marketing" element={<Marketing />} />
            <Route path="/services/development" element={<Development />} />
          </Route>
          <Route path="/profil/:id" element={<Profile />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
