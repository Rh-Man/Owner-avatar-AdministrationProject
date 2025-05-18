import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AuthContainer from './components/auth/AuthContainer';
import ProfileManagement from './components/profile/ProfileManagement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="home-container">
              <h1>Bienvenue sur Administration Project</h1>
              <p>Une application de gestion d'utilisateurs et de profils</p>
              <div className="home-links">
                <Link to="/register" className="home-btn">S'inscrire</Link>
                <Link to="/login" className="home-btn">Se connecter</Link>
              </div>
            </div>
          } />
          <Route path="/register" element={<AuthContainer />} />
          <Route path="/login" element={<AuthContainer />} />
          <Route path="/profile" element={<ProfileManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
