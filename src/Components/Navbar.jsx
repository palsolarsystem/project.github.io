import React, { useState, useEffect } from "react";
import "../assets/Style/navbar.css"
import logo from "../assets/images/mainlogo1.png";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate =  useNavigate();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  const handleOutsideClick = (e) => {
    if (menuOpen && !e.target.closest('.nav_items_container') && !e.target.closest('.hamburger')) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Our Clients', path: '/our-clients' },
    { name: 'Contact', path: '/contact-us' }
  ];

  const handleNavigation = (path) => {
    navigate(path)
    setMenuOpen(false);
  };

  return (
    <>
      <div className="nav_main">
        <div className="logo_main"> 
          <img src={logo} alt="logo" />
        </div>
        
        <div className={`nav_items_container ${menuOpen ? "open" : ""}`}> 
          <div className="nav_items">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="item"
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div 
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Header;