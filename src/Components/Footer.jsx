import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../assets/Style/footer.css';
import Logo from '../assets/images/mainlogo1.png'; // Your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="company-info">
            <img src={Logo} alt="Pal Solar Logo" className="footer-logo" />
            <p>
              Leading provider of renewable energy solutions, specializing in solar and wind power installations, maintenance, and consultancy services.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><a href="/services">Solar Installation</a></li>
            <li><a href="/services">Wind Energy Solutions</a></li>
            <li><a href="/services">Maintenance Services</a></li>
            <li><a href="/services">Energy Consultation</a></li>
            <li><a href="/services">Power Solutions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={16} />
              <span>+91 9687330939</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+91 9723738399</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>palsolarsystem@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Shop No. 30, Ramdev Complex, Moti Bhoyan, Vadsar Road,Ta. Kalol, Dist. Gandhinagar, 382721.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Pal Solar. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;