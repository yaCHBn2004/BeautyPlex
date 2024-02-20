import React, { useState } from "react";

const Nav = ({ scrollToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  };
  const scrollTopro  = () => {
    const windowHeight = window.innerHeight;
    const middle = windowHeight / 2;
    window.scrollTo({
      top: middle,
      behavior: "smooth"
    });
  };
  const [linkState, setLinkState] = useState('home');
  const [search, activateSearch] = useState(false);

  const handleLinkState = (link) => {
    setLinkState(link);
    scrollToSection(link); 
  };

  const handleSearch = () => {
    activateSearch(!search);
  };

  return (  
    <div className="nav">
      <div className="navC">
        <div className="titre">
          <img id="Logo" src="./logo.png" alt="Description of the image" /> 
        </div>
        <ul className="lien">
          <li className={linkState === 'home' ? 'active' : ''}><a onClick={() => { handleLinkState("home"); scrollToTop(); }}>Accueil</a></li>
          <li className={linkState === 'product' ? 'active' : ''}><a onClick={() => {handleLinkState('product');scrollTopro();}}>Produit</a></li>
          <li className={linkState === 'about' ? 'active' : ''}><a onClick={() => handleLinkState('about')}>À propos</a></li>
          <li  className={linkState === 'contact' ? 'active' : ''}><a href="mailto:Bioplexbioplex@gmail.com">Contact</a></li>
        </ul>
        <div className="search">
          <button className="button" onClick={handleSearch}>
            <img src="./search.png" alt="Button Image" />
          </button>
        </div>
      </div>
      <div className="searchInput"> 
        <input type="text" className={search ? 'activeIN' : 'closeIN'} />
      </div>
    </div>
  );
}

export default Nav;
