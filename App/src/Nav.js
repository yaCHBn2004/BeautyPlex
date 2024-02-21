import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom'; 
const Nav = () => {
  const location = useLocation(); 
  const [resNav, activateResVane] = useState(false);
  const [search, activateSearch] = useState(false);

  const handleSearch = () => {
    activateSearch(!search);
  };
  const handleNav = () => {
    activateResVane(!resNav) ;
 }

  return (  
    <div className="nav">
      <div className="navC">
        <div className="titre">
          <img id="Logo" src="./logo.png" alt="Description of the image" /> 
        </div>
        {/* <ul className="lienLarge" Id={resNav === true ? "resTon":"resToff"}>          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Accueil</Link></li>
          <li className={location.pathname === '/products' ? 'active' : ''}><Link to="/products">Produit</Link></li>
          <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">À propos</Link></li>
          <li><a href="mailto:Bioplexbioplex@gmail.com">Contact</a></li>
        </ul> */}
         <div className="lien">
          <ul className="lienLarge" id={resNav === true ? "resTon":"resToff"}>
          <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Accueil</Link></li>
          <li className={location.pathname === '/products' ? 'active' : ''}><Link to="/products">Produit</Link></li>
          <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">À propos</Link></li>
          <li><a href="mailto:Bioplexbioplex@gmail.com">Contact</a></li>
          </ul>
          <button className="res-nav" onClick={handleNav}>
          <img
            id="res-nav"
            src="./res-nav.png"
            alt="Description of the image"
          /></button>
        </div>
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
