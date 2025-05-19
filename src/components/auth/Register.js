import React, { useState } from 'react';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const validate = () => {
    let tempErrors = {};
    
    if (!formData.firstName) tempErrors.firstName = "Prénom requis";
    if (!formData.lastName) tempErrors.lastName = "Nom requis";
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Adresse email invalide";
    }
    
    if (!formData.phone) tempErrors.phone = "Numéro de téléphone requis";
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      tempErrors.phone = "Numéro de téléphone invalide";
    }
    
    if (!formData.address) tempErrors.address = "Adresse requise";
    if (!formData.username) tempErrors.username = "Nom d'utilisateur requis";
    
    if (!formData.password) {
      tempErrors.password = "Mot de passe requis";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    }
    
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        console.log('Submitting registration:', formData);
        setTimeout(() => {
          alert("Inscription réussie! Vous pouvez maintenant vous connecter.");
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            username: '',
            password: '',
            confirmPassword: ''
          });
          setIsSubmitting(false);
        }, 1000);
      } catch (error) {
        console.error('Registration error:', error);
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <>
      <div className="login-header">
        <h3>CREATE ACCOUNT,</h3>
        <h2>INSCRIVEZ-VOUS</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Prénom"
              value={formData.firstName}
              onChange={handleChange}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>
          
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Nom"
              value={formData.lastName}
              onChange={handleChange}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>
        </div>
        
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email (optionnel)"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Numéro de téléphone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Adresse"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? "error" : ""}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>
        
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Nom d'utilisateur"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? "error" : ""}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
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
        
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "error" : ""}
          />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>
        
        <div className="terms-policy">
          <p>En vous inscrivant, vous acceptez nos <a href="#terms">Conditions d'utilisation</a> et notre <a href="#privacy">Politique de confidentialité</a></p>
        </div>
        
        <button 
          type="submit" 
          className="connexion-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Chargement..." : "S'inscrire"}
        </button>
      </form>
    </>
  );
};

export default Register; 