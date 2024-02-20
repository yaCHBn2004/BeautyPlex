import React, { useState } from "react";

const Nav = ({ scrollToSection }) => {
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
          <li className={linkState === 'home' ? 'active' : ''}><a onClick={() => handleLinkState('home')}>Home</a></li>
          <li className={linkState === 'product' ? 'active' : ''}><a onClick={() => handleLinkState('product')}>Product</a></li>
          <li className={linkState === 'about' ? 'active' : ''}><a onClick={() => handleLinkState('about')}>About</a></li>
          <li className={linkState === 'contact' ? 'active' : ''}><a onClick={() => handleLinkState('contact')}>Contact Us</a></li>
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
