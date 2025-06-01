import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="app-logo">DigiAdminSN</h1>
      </div>
      
      <nav className="sidebar-menu">
        <ul className="nav-list">
          <li className="nav-item active">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/demandes" className="nav-link">Mes Demandes</Link>
          </li>
          <li className="nav-item">
            <Link to="/rendez-vous" className="nav-link">Mes Rendez-vous</Link>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="account-section">
          <Link to="/account" className="account-link">Mon Compte</Link>
          <Link to="/logout" className="logout-link">| Déconnexion</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
