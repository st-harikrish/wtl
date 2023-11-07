import React from 'react';
import './ClientSection.css';

const ClientSection = ({ clientLogos }) => {
  return (
    <div className="client-section">
      <h2>Our Clients</h2>
      <div className="client-logos">
        {clientLogos.map((logo, index) => (
          <img src={logo} alt={`Client ${index + 1}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
