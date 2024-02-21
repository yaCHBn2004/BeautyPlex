import React, { useRef } from "react";
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from "./Footer";

function App() {
  

  return (
    <div className="App">
      <Nav />
      
        <Home />
          
      <Footer />
      
    </div>
  );
}

export default App;
