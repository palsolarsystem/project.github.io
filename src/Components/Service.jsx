import React from "react";
import Card1 from "../assets/images/solarcard1.jpg";
import Card2 from "../assets/images/solarcard2.jpg";
import Card3 from "../assets/images/solarCard3.jpg";
import Card4 from "../assets/images/solarcard4.jpg";
import Card5 from "../assets/images/cardimage5.jpg";
import Card6 from "../assets/images/manpower.jpg";
import Card7 from "../assets/images/cardimage6.jpg";

import '../assets/Style/card.css'


function service() {
    return(
        <section id="services" className="section">
        <h2>Our Services</h2>
        <p>We offer a wide range of services to support your solar and wind turbine needs. Here's an overview of the projects we've successfully completed:</p>
        
        <div className="service-cards">
            <div className="service-card">
                <img src={Card1} />
                <h3>Solar Plant Installation & Commissioning</h3>
                <p>
                    Our team specializes in the complete installation and commissioning of solar plants. From site assessment to system design, installation, and commissioning, we ensure that your solar power system is efficiently set up for optimal performance.
                </p>
            </div>

            <div className="service-card">
                <img src={Card2}/>
                <h3>Wind Turbine 33 KV & 66 KV Line Work</h3>
                <p>
                    We handle the installation of 33 KV and 66 KV power transmission lines for wind turbines. This includes planning, execution, and ensuring that the transmission network is capable of handling high loads for optimal energy distribution.
                </p>
            </div>

            <div className="service-card">
                <img src={Card3} />
                <h3>Wind Turbine PCC, Steel Binding, Casting & Shuttering</h3>
                <p>
                    Our experienced crew is skilled in the construction of wind turbine foundations, including the PCC (Plain Cement Concrete) work, steel binding, casting, and shuttering for tower erection. We ensure that the structure is sturdy and safe for operation.
                </p>
            </div>

            <div className="service-card">
            <img src={Card4} />
                <h3>Solar Plant Operation & Maintenance</h3>
                <p>
                    We provide comprehensive operation and maintenance services for solar plants. Our team conducts regular inspections, cleaning, and repair services to ensure that your solar plant remains in peak condition and continues to generate clean energy efficiently.
                </p>
            </div>

            <div className="service-card">
            <img src={Card5} />
                <h3>Solar Module Cleaning</h3>
                <p>
                    We offer professional solar module cleaning services to ensure maximum energy generation. Regular cleaning prevents dust, dirt, and debris from obstructing the panels, thereby improving their efficiency and longevity.
                </p>
            </div>

            <div className="service-card">
            <img src={Card6} />
                <h3>Manpower Supply</h3>
                <p>
                    We provide skilled manpower for various projects related to solar and wind energy. Whether you need technicians for installation, maintenance, or operations, we ensure that you have qualified professionals to get the job done right.
                </p>
            </div>

            <div className="service-card">
            <img src={Card7}/>
                <h3>Inverter Servicing & Repairing</h3>
                <p>
                    Our team is highly experienced in servicing and repairing all kinds of solar inverters. Whether it's a routine service or a major repair, we ensure that your inverters operate at their best to maximize energy conversion and minimize downtime.
                </p>
            </div>
        </div>
    </section>
    );
}

export default service;