import React from 'react';
import '../assets/Style/about.css';
import CompanyImage from '../assets/images/mainlogo1.png'; 
import { Sun, Wind, Users, Award } from 'lucide-react'; 

const AboutUs = () => {
  const stats = [
    { icon: <Sun size={32} />, value: "500+", label: "Solar Installations" },
    { icon: <Wind size={32} />, value: "200+", label: "Wind Projects" },
    { icon: <Users size={32} />, value: "1000+", label: "Satisfied Clients" },
    { icon: <Award size={32} />, value: "10+", label: "Years Experience" },
  ];

  return (
    <section className="about-section">
  <div className="section-title">
    <h2>About PalSolar</h2>
  </div>
      <div className="about-container">

               <div className="about-image">
          <img src={CompanyImage} alt="Pal Solar Company" />
        </div>
        <div className="about-content">
          <div className="about-text">
      
        
            <p className="main-text">
              Since our establishment, Pal Solar has been at the forefront of renewable energy solutions in India. 
              We specialize in comprehensive solar and wind energy services, from installation to maintenance, 
              helping businesses and communities transition to sustainable energy sources.
            </p>
            <p className="sub-text">
              Our team of experienced professionals is dedicated to delivering excellence in every project, 
              ensuring optimal performance and maximum returns on your renewable energy investments.
            </p>
            
            <div className="mission-vision">
              <div className="mission">
                <h3>Our Mission</h3>
                <p>To accelerate the world's transition to sustainable energy through innovative solutions and exceptional service.</p>
              </div>
              <div className="vision">
                <h3>Our Vision</h3>
                <p>To be the leading provider of renewable energy solutions, creating a cleaner, sustainable future for generations to come.</p>
              </div>
            </div>
          </div>
        </div>

 
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">
              {stat.icon}
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;