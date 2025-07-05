import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AuthContainer from './components/auth/AuthContainer';
import Dashboard from './pages/Dashboard';
import DemandesPage from './pages/DemandesPage';
import RendezVousPage from './pages/RendezVousPage';
import ComptePage from './pages/ComptePage';
import NouvelleDemandePage from './pages/NouvelleDemandePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<AuthContainer />} />
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/demandes" element={<DemandesPage />} />
        <Route path="/rendez-vous" element={<RendezVousPage />} />
        <Route path="/account" element={<ComptePage />} />
        <Route path="/demandes/nouvelle-demande" element={<NouvelleDemandePage />} />
      </Routes>
    </Router>
  );
}

export default App;
