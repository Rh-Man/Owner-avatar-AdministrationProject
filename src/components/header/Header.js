import React from 'react';
import './Header.css';

const Header = () => {
  
  return (
    <header className="app-header">
      <div className="header-left">
        Bon retour, <span className="user-name"></span>
      </div>
      <div className="header-right">
        <div className="notification-icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="bell-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        <div className="user-info">
          <div className="user-avatar">
            <span>-</span>
          </div>
          <span className="user-display-name"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
