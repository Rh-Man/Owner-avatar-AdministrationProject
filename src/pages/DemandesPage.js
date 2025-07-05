import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import './style/DemandesPage.css';

const DemandesPage = () => {
  const navigate = useNavigate();
  const demandesData = [];

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Tous');
  const [typeFilter, setTypeFilter] = useState('Tous');

  const getStatusClass = (status) => {
    switch (status) {
      case 'Val': return 'status-val';
      case 'Rej': return 'status-rej';
      case 'Enc': return 'status-enc';
      case 'Recu': return 'status-recu';
      case 'Pret': return 'status-pret';
      default: return '';
    }
  };

  return (
    <div className="demandes-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="demandes-container">
          <h2 className="page-title">Mes Demandes</h2>

          <div className="demandes-actions">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Rechercher" 
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="search-icon" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
            
            <div className="filters-container">
              <div className="filter-dropdown">
                <button className="filter-button">
                  Statut: {statusFilter} <span className="dropdown-arrow">▼</span>
                </button>
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={() => setStatusFilter('Tous')}>Tous</div>
                  <div className="dropdown-item" onClick={() => setStatusFilter('Val')}>Validé</div>
                  <div className="dropdown-item" onClick={() => setStatusFilter('Rej')}>Rejeté</div>
                  <div className="dropdown-item" onClick={() => setStatusFilter('Enc')}>En cours</div>
                  <div className="dropdown-item" onClick={() => setStatusFilter('Recu')}>Reçu</div>
                  <div className="dropdown-item" onClick={() => setStatusFilter('Pret')}>Prêt</div>
                </div>
              </div>
              
              <div className="filter-dropdown">
                <button className="filter-button">
                  Type: {typeFilter} <span className="dropdown-arrow">▼</span>
                </button>
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={() => setTypeFilter('Tous')}>Tous</div>
                  <div className="dropdown-item" onClick={() => setTypeFilter('CNI')}>CNI</div>
                  <div className="dropdown-item" onClick={() => setTypeFilter('Passeport')}>Passeport</div>
                  <div className="dropdown-item" onClick={() => setTypeFilter('Permis')}>Permis</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="demandes-table">
            <div className="table-header">
              <div className="header-cell type-cell">Type de demande</div>
              <div className="header-cell date-cell">Date</div>
              <div className="header-cell status-cell">Statut</div>
              <div className="header-cell document-cell">Document</div>
              <div className="header-cell actions-cell">Actions</div>
            </div>
            
            <div className="table-body">
              {demandesData.length > 0 ? (
                demandesData.map(demande => (
                  <div key={demande.id} className="table-row">
                    <div className="table-cell type-cell">{demande.type}</div>
                    <div className="table-cell date-cell">{demande.date}</div>
                    <div className="table-cell status-cell">
                      <div className={`status-badge ${getStatusClass(demande.statut)}`}>
                        {demande.statut}
                      </div>
                    </div>
                    <div className="table-cell document-cell">{demande.document}</div>
                    <div className="table-cell actions-cell">
                      <button className="action-button">{demande.action}</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-table-message">
                  Aucune demande trouvée
                </div>
              )}
            </div>
          </div>
          
          <div className="bottom-actions">
            <button className="primary-button" onClick={() => navigate('/demandes/nouvelle-demande')}>Demander</button>
            <button className="secondary-button">Signaler Perte</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandesPage;