import React, { useState, useEffect } from 'react';
import './Profile.css';

const ProfileManagement = () => {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    bio: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('info');
  const [message, setMessage] = useState({ text: '', type: '' });
  
  // Mock user data fetch - would be replaced with actual API call
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProfileData(prevData => ({
        ...prevData,
        username: 'utilisateur_exemple',
        email: 'exemple@email.com',
        firstName: 'Jean',
        lastName: 'Dupont',
        bio: 'Biographie par défaut'
      }));
    }, 500);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };
  
  const validateProfileInfo = () => {
    let tempErrors = {};
    
    if (!profileData.username) tempErrors.username = "Nom d'utilisateur requis";
    if (!profileData.email) {
      tempErrors.email = "Email requis";
    } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
      tempErrors.email = "Adresse email invalide";
    }
    
    if (!profileData.firstName) tempErrors.firstName = "Prénom requis";
    if (!profileData.lastName) tempErrors.lastName = "Nom de famille requis";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  
  const validatePasswordChange = () => {
    let tempErrors = {};
    
    if (!profileData.currentPassword) tempErrors.currentPassword = "Mot de passe actuel requis";
    
    if (!profileData.newPassword) {
      tempErrors.newPassword = "Nouveau mot de passe requis";
    } else if (profileData.newPassword.length < 6) {
      tempErrors.newPassword = "Le nouveau mot de passe doit contenir au moins 6 caractères";
    }
    
    if (profileData.newPassword !== profileData.confirmPassword) {
      tempErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  
  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    
    if (validateProfileInfo()) {
      setIsSubmitting(true);
      
      try {
        // TODO: Replace with actual API call
        console.log('Updating profile info:', profileData);
        // Mock API call
        setTimeout(() => {
          setMessage({ text: "Informations de profil mises à jour avec succès!", type: "success" });
          setIsSubmitting(false);
          
          setTimeout(() => {
            setMessage({ text: '', type: '' });
          }, 3000);
        }, 1000);
      } catch (error) {
        console.error('Profile update error:', error);
        setMessage({ text: "Erreur lors de la mise à jour du profil", type: "error" });
        setIsSubmitting(false);
      }
    }
  };
  
  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    
    if (validatePasswordChange()) {
      setIsSubmitting(true);
      
      try {
        // TODO: Replace with actual API call
        console.log('Changing password:', {
          currentPassword: profileData.currentPassword,
          newPassword: profileData.newPassword
        });
        // Mock API call
        setTimeout(() => {
          setMessage({ text: "Mot de passe modifié avec succès!", type: "success" });
          setProfileData({
            ...profileData,
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          });
          setIsSubmitting(false);
          
          setTimeout(() => {
            setMessage({ text: '', type: '' });
          }, 3000);
        }, 1000);
      } catch (error) {
        console.error('Password change error:', error);
        setMessage({ text: "Erreur lors du changement de mot de passe", type: "error" });
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Gestion du Profil</h2>
        
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}
        
        <div className="profile-tabs">
          <button 
            className={activeTab === 'info' ? 'active' : ''} 
            onClick={() => setActiveTab('info')}
          >
            Informations personnelles
          </button>
          <button 
            className={activeTab === 'security' ? 'active' : ''} 
            onClick={() => setActiveTab('security')}
          >
            Sécurité
          </button>
        </div>
        
        {activeTab === 'info' && (
          <form onSubmit={handleSubmitInfo}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "error" : ""}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Nom</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "error" : ""}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                name="username"
                value={profileData.username}
                onChange={handleChange}
                className={errors.username ? "error" : ""}
              />
              {errors.username && <span className="error-message">{errors.username}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="bio">Biographie</label>
              <textarea
                id="bio"
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="profile-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enregistrement..." : "Enregistrer les modifications"}
            </button>
          </form>
        )}
        
        {activeTab === 'security' && (
          <form onSubmit={handleSubmitPassword}>
            <div className="form-group">
              <label htmlFor="currentPassword">Mot de passe actuel</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={profileData.currentPassword}
                onChange={handleChange}
                className={errors.currentPassword ? "error" : ""}
              />
              {errors.currentPassword && <span className="error-message">{errors.currentPassword}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="newPassword">Nouveau mot de passe</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={profileData.newPassword}
                onChange={handleChange}
                className={errors.newPassword ? "error" : ""}
              />
              {errors.newPassword && <span className="error-message">{errors.newPassword}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmer le nouveau mot de passe</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={profileData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "error" : ""}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>
            
            <button 
              type="submit" 
              className="profile-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Modification..." : "Modifier le mot de passe"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileManagement; 