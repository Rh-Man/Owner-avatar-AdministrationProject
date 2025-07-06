import React from 'react';
import DynamicForm from '../components/demandes/DynamicForm';
import Sidebar from '../components/sidebar/Sidebar';

import Header from '../components/header/Header';

const NouvelleDemandePage = () => {
  return (
    <div className="demandes-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="demandes-container">
          <h2 className="page-title">Nouvelle Demande</h2>
          <div className="formulaire-demande-container">
            <DynamicForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NouvelleDemandePage;
