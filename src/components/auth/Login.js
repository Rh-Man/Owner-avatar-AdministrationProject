import React, { useState } from 'react';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  
  const validate = () => {
    let tempErrors = {};
    
    if (!formData.email) {
      tempErrors.email = "Email requis";
    }
    
    if (!formData.password) {
      tempErrors.password = "Mot de passe requis";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        console.log('Submitting login:', formData);
        setTimeout(() => {
          alert("Connexion réussie! Redirection vers votre tableau de bord.");
          setIsSubmitting(false);
        }, 1000);
      } catch (error) {
        console.error('Login error:', error);
        setIsSubmitting(false);
        setErrors({ general: "Email ou mot de passe incorrect" });
      }
    }
  };
  
  return (
    <>
      <div className="login-header">
        <h3>WELCOME BACK,</h3>
        <h2>CONNECTEZ-VOUS</h2>
      </div>
      
      <form onSubmit={handleSubmit}>
        {errors.general && (
          <div className="error-banner">
            {errors.general}
          </div>
        )}
        
        <div className="form-group">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail ou CNI"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error" : ""}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        
        <div className="login-options">
          <div className="remember-option">
            <input 
              type="checkbox" 
              id="remember" 
              checked={rememberMe}
              onChange={handleRememberMe} 
            />
            <label htmlFor="remember">remember me</label>
          </div>
          <a href="#reset-password" className="forgot-password">Forgot Password?</a>
        </div>
        
        <button 
          type="submit" 
          className="connexion-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Chargement..." : "Connexion"}
        </button>
      </form>
    </>
  );
};

export default Login; 