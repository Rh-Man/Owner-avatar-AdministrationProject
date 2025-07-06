import React, { useState } from 'react';
import './DynamicForm.css';

const DOCUMENTS_PAR_TYPE = {
  'Passeport': [
    { key: 'birth', label: "Extrait de naissance" },
    { key: 'cni', label: "Carte d'identité nationale" },
    { key: 'photos', label: "Photo d'identité" }
  ],
  "Carte d'identité": [
    { key: 'birth', label: "Extrait de naissance" },
    { key: 'residence', label: "Certificat de résidence" },
    { key: 'photos', label: "Photo d'identité" },
    { key: 'paiement', label: "Quittance de paiement" }
  ],
  "Extrait de naissance": [
    { key: 'cni', label: "Carte d'identité du déclarant" }
  ],
  "Certificat de résidence": [
    { key: 'cni', label: "Carte d'identité" },
    { key: 'lettre', label: "Demande manuscrite" },
    { key: 'temoignage', label: "Témoignage du chef de quartier" },
    { key: 'photos', label: "Photo d'identité" }
  ],
  "Visa": [
    { key: 'formulaire', label: "Formulaire de demande" },
    { key: 'passport', label: "Passeport" },
    { key: 'titre', label: "Titre de voyage aller-retour" },
    { key: 'photos', label: "Photo d'identité" }
  ]
};

const TYPES = Object.keys(DOCUMENTS_PAR_TYPE);

const DynamicForm = ({ onSubmit }) => {
  const [type, setType] = useState(TYPES[0]);
  const [files, setFiles] = useState({});

    const requiredDocs = DOCUMENTS_PAR_TYPE[type] || [];
  const handleFileChange = (key, file) => {
    setFiles(prev => ({ ...prev, [key]: file }));
  };

  const handleSubmit = (e, action) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ type, files, action });
  };

  return (
    <form className="dynamic-form-capture" onSubmit={e => handleSubmit(e, 'save')}>
      <div className="form-header-row">
        <div></div>
        <select
          className="type-dropdown"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          {TYPES.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="documents-grid">
        {requiredDocs.map(doc => (
          <div key={doc.key} className="document-upload-block">
            <div className="doc-label-row">
              <span>{doc.label}</span>
              <span className="upload-action">{files[doc.key] ? 'Uploadé' : 'Upload'}</span>
            </div>
            <label className="upload-area">
              {files[doc.key] ? (
                <div className="file-info">
                  <span>{files[doc.key].name}</span>
                  <span className="file-date">{files[doc.key].lastModified ? new Date(files[doc.key].lastModified).toLocaleDateString() : ''}</span>
                </div>
              ) : (
                <div className="upload-placeholder">
                  <span className="upload-icon">⬆️</span>
                  <span>Téléverser depuis l'ordinateur</span>
                </div>
              )}
              <input
                type="file"
                style={{ display: 'none' }}
                onChange={e => handleFileChange(doc.key, e.target.files[0])}
              />
            </label>
          </div>
        ))}
      </div>
      <div className="form-actions-row">
        <button
          type="button"
          className={`btn-pay${['Extrait de naissance', "Carte d'identité"].includes(type) ? ' disabled blurred' : ''}`}
          onClick={e => handleSubmit(e, 'pay')}
          disabled={['Extrait de naissance', "Carte d'identité"].includes(type)}
        >
          Payer maintenant
        </button>
        <button type="submit" className="btn-save">Enregistrer</button>
      </div>
    </form>
  );
};

export default DynamicForm;
