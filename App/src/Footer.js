import React,{ useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  const location = useLocation(); 

    const [linkState, setLinkState] = useState('home');
    const handleLinkState = (link) => {
        setLinkState(link);
      };
  return (
    <div className='footer'>
      <div className='firstleft'>
        <h1>BEAUTYPLEX</h1>
        <br/>
        <h4>
        Découvrez une sélection soigneusement choisie <br/> 
        pour sublimer votre beauté naturelle.
        </h4>
        
      </div>
      
      <ul >
      <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Accueil</Link></li>
          <li className={location.pathname === '/products' ? 'active' : ''}><Link to="/products">Produit</Link></li>
          <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">À propos</Link></li>
          <li ><a href="mailto:Bioplexbioplex@gmail.com">Contact</a></li>

        </ul>
    

      <div>
      <p>© BEAUTYPLEX. All Rights Reserved 2024</p>
      <a href="https://www.facebook.com/your-facebook-page"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.instagram.com/your-instagram-page"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
      
      
    </div>
    
  );
}

export default Footer;
