import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import './Auth.css';

const AuthContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === '/login';
  
  const handleToggle = (target) => {
    navigate(target);
  };
  
  return (
    <div className="modern-auth-container">
      <div className="modern-auth-card">
        {isLoginPage ? (
          <>
            <div className="login-content">
              <Login />
            </div>
            <div className="signup-panel">
              <div className="panel-content">
                <h3>Nouveau chez nous?</h3>
                <p>Créez un compte pour profiter de toutes les fonctionnalités et services.</p>
                <button 
                  className="signup-button" 
                  onClick={() => handleToggle('/register')}
                >
                  Inscrivez-vous
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="signup-panel">
              <div className="panel-content">
                <h3>Déjà inscrit?</h3>
                <p>Connectez-vous pour accéder à votre espace personnel.</p>
                <button 
                  className="signup-button" 
                  onClick={() => handleToggle('/login')}
                >
                  Connectez-vous
                </button>
              </div>
            </div>
            <div className="login-content">
              <Register />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthContainer;