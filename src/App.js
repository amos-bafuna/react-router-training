import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Marketing from './components/Services/Marketing/Marketing';
import Development from './components/Services/Development/Development';
import './App.css';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
