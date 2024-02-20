import React,{ useState } from 'react';

function Footer({ scrollToSection }) {
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
    const handleLinkState = (link) => {
        setLinkState(link);
        scrollToSection(link); 
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
      <div>
      <ul className="footerlist">
      <li className={linkState === 'home' ? 'active' : ''}><a onClick={() => { handleLinkState("home"); scrollToTop(); }}>Accueil</a></li>
          <li className={linkState === 'product' ? 'active' : ''}><a onClick={() => {handleLinkState('product');scrollTopro();}}>Produit</a></li>
          <li className={linkState === 'about' ? 'active' : ''}><a onClick={() => handleLinkState('about')}>À propos</a></li>
          <li className={linkState === 'contact' ? 'active' : ''}><a href="mailto:Bioplexbioplex@gmail.com">Contact</a></li>

        </ul>
      </div>

      
      
      <p>© BEAUTYPLEX. All Rights Reserved 2024</p>
    </div>
    
  );
}

export default Footer;
