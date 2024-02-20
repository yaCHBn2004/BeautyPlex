import React, { useRef } from "react";
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Product from './Product';
import Footer from "./Footer";

function App() {
  const homeRef = useRef(null);
  const productRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } 
  };

  return (
    <div className="App">
      <Nav scrollToSection={scrollToSection} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={productRef}>
        <Product />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
}

export default App;
