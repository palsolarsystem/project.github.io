import React, { useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Typed from 'typed.js';
import SolarImage1 from '../assets/images/solarImage1.jpg'
import SolarImage2 from '../assets/images/solarimage2.jpg'
import SolarImage3 from '../assets/images/windmil1.jpg'
import "../assets/Style/coursel.css"

const Home = () => {
    const typedRef = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Solar Plant Operation & Maintenance",
          "Solar Module Cleaning",
          "Manpower Supply",
          "Inverter Servicing & Repairing",
          "Wind Turbine PCC",
          "Steel Binding",
          "Casting & Shuttering",
          "Wind Turbine 33 KV & 66 KV Line Work",
          "Solar Plant Installation & Commissioning"
        ],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return (
      <div className="home-container">
        <div className="content-row">
          <div className="carousel-column">
            <Carousel
              autoPlay
              infiniteLoop
              interval={1700}
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              showIndicators={false}
              className="carousel-wrapper"
            >
              <div className="carousel-slide">
                <img
                  src={SolarImage1}
                  alt="Solar Panel Installation"
                  className="carousel-image"
                />
              </div>
              <div className="carousel-slide">
                <img
                  src={SolarImage2}
                  alt="Solar Energy System"
                  className="carousel-image"
                />
              </div>
              <div className="carousel-slide">
                <img
                  src={SolarImage3}
                  alt="Wind Energy Solutions"
                  className="carousel-image"
                />
              </div>
            </Carousel>
          </div>
         
  
          <div className="content-column">
            <div className="content-glass-panel">
              <div className="content-wrapper">
                <h1 className="main-title">
                  Powering Tomorrow
                </h1>
                <div className="title-underline"></div>
                <p className="subtitle">
                  Sustainable Energy Solutions for a Brighter Future
                </p>
  
                <div className="services-container">
                  <h2 className="services-title">
                    Our Services
                  </h2>
                  <div className="typing-wrapper">
                    <span
                      ref={typedRef}
                      className="typing-text"
                    ></span>
                  </div>
                </div>
  
                <div className="branding-section">
                  <h6 className="company-tagline">
                    TRANSFORMING ENERGY • EMPOWERING FUTURES
                  </h6>
                  <div className="company-name">
                    <span className="plus-text">PAL</span>
                    <span className="solar-text">SOLAR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;