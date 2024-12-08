import React, { useEffect } from 'react';
import '../assets/Style/clients.css';
import Logo1 from '../assets/images/client1.png';
import Logo2 from '../assets/images/client2.png';
import Logo3 from '../assets/images/client3.png';
import Logo4 from '../assets/images/rama.png';
import Logo5 from '../assets/images/npf.png';

const ClientSection = () => {
  const clients = [
    { id: 1, logo: Logo1, name: "Company 1" },
    { id: 2, logo: Logo2, name: "Company 2" },
    {id:3, logo: Logo3, name: "Company 3"},
    { id: 4, logo: Logo4, name: "Company 4" },
    { id: 5, logo: Logo5, name: "Company 5" },
    
  ];

  return (
    <section className="clients-section">
      <h2 className="clients-title">Our Trusted Clients</h2>
      <p className="clients-subtitle">Partnering with industry leaders in renewable energy</p>
      
      <div className="logos-container">
        <div className="logos-scroll">
          {clients.map((client) => (
            <div className="logo-item" key={client.id}>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        
        </div>
      </div>
    </section>
  );
};

export default ClientSection;