import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import './style/Dashboard.css';

const Dashboard = () => {

  const regionData = {
    'Dakar': ['Dakar', 'Pikine', 'Guédiawaye', 'Rufisque'],
    'Diourbel': ['Diourbel', 'Bambey', 'Mbacké'],
    'Fatick': ['Fatick', 'Gossas', 'Foundiougne'],
    'Kaffrine': ['Kaffrine', 'Birkelane', 'Koungheul', 'Malem Hodar'],
    'Kaolack': ['Kaolack', 'Guinguinéo', 'Nioro du Rip'],
    'Kédougou': ['Kédougou', 'Salémata', 'Saraya'],
    'Kolda': ['Kolda', 'Vélingara', 'Médina Yoro Foulah'],
    'Louga': ['Louga', 'Linguère', 'Kébémer'],
    'Matam': ['Matam', 'Kanel', 'Ranérou'],
    'Saint-Louis': ['Saint-Louis', 'Dagana', 'Podor'],
    'Sédhiou': ['Sédhiou', 'Goudomp', 'Bounkiling'],
    'Tambacounda': ['Tambacounda', 'Bakel', 'Goudiry', 'Koumpentoum'],
    'Thiès': ['Thiès', 'Mbour', 'Tivaouane'],
    'Ziguinchor': ['Ziguinchor', 'Bignona', 'Oussouye']
  };
  
  const regionMaps = {
    'Dakar': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123742.19219449926!2d-17.535089985253905!3d14.716151499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0x5a46d7822d499cbb!2sDakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653674930592!5m2!1sen!2sus',
    'Diourbel': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123471.14639854265!2d-16.304765535602385!3d14.728566615463882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeeaee0093693505%3A0x1edb39da04645638!2sDiourbel%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653674960000!5m2!1sen!2sus',
    'Fatick': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61950.07503821809!2d-16.44412742089526!3d14.338895108207854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeeaef40783de3a5%3A0xebe8ae7c749ef3a9!2sFatick%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675000000!5m2!1sen!2sus',
    'Kaffrine': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62011.18424109034!2d-15.579748620953269!3d14.105813332672258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeeaec4838d6c42f%3A0x1e36c1800e0e9289!2sKaffrine%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675040000!5m2!1sen!2sus',
    'Kaolack': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123252.40601552894!2d-16.17461503558906!3d14.152150361583727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeeaec700cd4b0a3%3A0x8f83dcef56dee258!2sKaolack%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675080000!5m2!1sen!2sus',
    'Kédougou': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62435.81816372509!2d-12.207995021212471!3d12.55772886483686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xee3215dc6b5ab25%3A0xf40629ba1f34c593!2sK%C3%A9dougou%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675120000!5m2!1sen!2sus',
    'Kolda': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62293.70537084711!2d-14.989584021120314!3d12.909085827112859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xee164c8b6938477%3A0xf9f2085e0bb9be8!2sKolda%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675160000!5m2!1sen!2sus',
    'Louga': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123128.53132142024!2d-16.28175953552767!3d15.614621619285858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeeac4326a4d36ed%3A0xffe287743ed3c6d5!2sLouga%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675200000!5m2!1sen!2sus',
    'Matam': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61873.89183446711!2d-13.300236320485932!3d15.658493105901452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xed210e6b6d39a6d%3A0xb185470374562e18!2sMatam%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675240000!5m2!1sen!2sus',
    'Saint-Louis': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123124.60363477756!2d-16.59261453552186!3d16.0367563626912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe9658c6be1ad183%3A0x59a577da059a5acd!2sSaint-Louis%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675280000!5m2!1sen!2sus',
    'Sédhiou': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62240.5374071404!2d-15.592194021076844!3d12.70450727861075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xee17f7cde29da17%3A0x33da6d5e3f9cbe81!2sS%C3%A9dhiou%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675320000!5m2!1sen!2sus',
    'Tambacounda': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62208.00054173033!2d-13.707589021055493!3d13.786919812532025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xee3751ba3fbdd8d%3A0xfd619c9c9026d8cf!2sTambacounda%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675360000!5m2!1sen!2sus',
    'Thiès': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123409.57071245755!2d-16.97904853558209!3d14.790958123841492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeeade21dbc3371d%3A0xef9ddafe8383bbf7!2sThi%C3%A8s%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675400000!5m2!1sen!2sus',
    'Ziguinchor': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62173.18871788837!2d-16.309347021040069!3d12.565414589857564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xee9d6e8a95cb659%3A0xef85e5438932c7c3!2sZiguinchor%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675440000!5m2!1sen!2sus',
  };
  
  const communeMaps = {
    'Dakar': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123742.19219449926!2d-17.535089985253905!3d14.716151499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0x5a46d7822d499cbb!2sDakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653674930592!5m2!1sen!2sus',
    'Pikine': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61871.32279912565!2d-17.437441620845586!3d14.765463954104934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173b0083b33b9%3A0xe009c79fb7d4d2a7!2sPikine%2C%20Dakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653676000000!5m2!1sen!2sus',
    'Rufisque': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61876.335683355664!2d-17.302262621013!3d14.72850285968953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec16ebce33a1145%3A0xd3874eba3bcc15a3!2sRufisque%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653676040000!5m2!1sen!2sus',
    'Guédiawaye': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61867.94352448226!2d-17.420176620839706!3d14.78360518945561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec173a85c324ba5%3A0x436d3155bb785fab!2sGu%C3%A9diawaye%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653676080000!5m2!1sen!2sus',
    'Thiès': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123409.57071245755!2d-16.97904853558209!3d14.790958123841492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xeeade21dbc3371d%3A0xef9ddafe8383bbf7!2sThi%C3%A8s%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653675400000!5m2!1sen!2sus',
  };
  
  const [selectedRegion, setSelectedRegion] = useState('Dakar');
  const [selectedCommune, setSelectedCommune] = useState('Dakar');
  const [communes, setCommunes] = useState(regionData['Dakar']);
  const [mapSrc, setMapSrc] = useState(regionMaps['Dakar']);
  
  const generateCommuneMapUrl = (commune) => {

    if (communeMaps[commune]) {
      return communeMaps[commune];
    }
    
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-17!3d14.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${encodeURIComponent(commune)}%2C%20Senegal!5e0!3m2!1sen!2sus!4v1653676100000!5m2!1sen!2sus`;
  };
  
  const handleRegionChange = (e) => {
    const region = e.target.value;
    const regionCommunes = regionData[region];
    setSelectedRegion(region);
    setCommunes(regionCommunes);
    setSelectedCommune(regionCommunes[0]);
    setMapSrc(regionMaps[region]);
  };
  
  const handleCommuneChange = (e) => {
    const commune = e.target.value;
    setSelectedCommune(commune);
    setMapSrc(generateCommuneMapUrl(commune));
  };
  
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard-container">
          <h2 className="dashboard-title">Dashboard</h2>
          
          <div className="dashboard-row">
            {/* Derniere demande section */}
            <div className="dashboard-section">
              <div className="section-header">
                <h3>Derniere demande</h3>
                <Link to="/demandes" className="voir-tout">voir tout</Link>
              </div>
              <div className="demand-card">
                <div className="document-icon">
                  <img src="/document-icon.svg" alt="Document" />
                </div>
                <div className="demand-info">
                  <div className="demand-title">-</div>
                  <div className="demand-date">-</div>
                </div>
                <div className="#">-</div>
              </div>
            </div>
            
            {/* Prochain rendez-vous section */}
            <div className="dashboard-section">
              <div className="section-header">
                <h3>Prochain rendez-vous</h3>
                <Link to="/rendez-vous" className="voir-tout">voir tout</Link>
              </div>
              <div className="appointment-card">
                <div className="calendar-icon">
                  <img src="/calendar-icon.svg" alt="Calendar" />
                </div>
                <div className="appointment-info">
                  <div className="appointment-location">-</div>
                  <div className="appointment-date">-</div>
                </div>
                <div className="#">-</div>
              </div>
            </div>
          </div>
          
          {/* Nos Structures section */}
          <div className="structures-section">
            <div className="section-header">
              <h3>Nos Structures</h3>
            </div>
            <div className="structures-content">
              <div className="map-container">
                <iframe
                  title="Structures Map"
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="structures-filters">
                <div className="filter-dropdown">
                  <select 
                    name="region" 
                    value={selectedRegion}
                    onChange={handleRegionChange}
                  >
                    {Object.keys(regionData).map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>
                <div className="filter-dropdown">
                  <select 
                    name="commune" 
                    value={selectedCommune}
                    onChange={handleCommuneChange}
                  >
                    {communes.map(commune => (
                      <option key={commune} value={commune}>{commune}</option>
                    ))}
                  </select>
                </div>
                <div className="filter-dropdown">
                  <select name="type" defaultValue="Commissariat">
                    <option value="Commissariat">Commissariat</option>
                    <option value="Mairie">Mairie</option>
                    <option value="Prefecture">Prefecture</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="signal-buttons">
            <button className="signal-button">Signaler Perte</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
