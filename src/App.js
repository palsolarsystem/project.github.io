import logo from './logo.svg';
import Navbar from '../src/Components/Navbar'
import Home from '../src/Components/Homepage'
import Service from '../src/Components/Service'
import AboutUs from '../src/Components/Aboutus'
import ContactUs from '../src/Components/Contactus'
import Footer from '../src/Components/Footer'
import ClientSection from '../src/Components/OurClients'
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Home />
          <Service />
          <hr></hr>
          <ClientSection />
          <hr></hr>
          <AboutUs />
          <hr></hr>
          <ContactUs />
        </>} />
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<>
          <Home />
          <Service />
        </>} />
        <Route path="/our-clients" element={<><Home /><ClientSection /></>} />
        <Route path="/about-us" element={<><Home /><AboutUs /></>} />
        <Route path="/contact-us" element={<><Home /><ContactUs /></>} />
      </Routes>
      {/* <hr></hr>
      <ClientSection />
      <hr></hr>
      <AboutUs />
      <hr></hr>
      <ContactUs /> */}
      <Footer />
    </div>
    //   <>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/services" element={<Service />} />
    //     
    //     
    //    
    //   </Routes>
    //   <Footer />
    // </>
  );
}

export default App;
