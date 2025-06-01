import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AuthContainer from './components/auth/AuthContainer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/register" element={<AuthContainer />} />
        <Route path="/login" element={<AuthContainer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/demandes" element={<Dashboard />} />
        <Route path="/rendez-vous" element={<Dashboard />} />
        <Route path="/account" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
