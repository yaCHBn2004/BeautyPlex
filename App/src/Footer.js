import React,{ useState } from 'react';

function Footer({ scrollToSection }) {
    const [linkState, setLinkState] = useState('home');
    const handleLinkState = (link) => {
        setLinkState(link);
        scrollToSection(link); 
      };
  return (
    <div className='footer'>
      <div className='firstleft'>
        <h1>BEAUTYPLEX</h1>
        
      </div>
      <div>
      <ul className="footerlist">
          <li className={linkState === 'home' ? 'active' : ''}><a onClick={() => handleLinkState('home')}>Home</a></li>
          <li className={linkState === 'product' ? 'active' : ''}><a onClick={() => handleLinkState('product')}>Product</a></li>
          <li className={linkState === 'about' ? 'active' : ''}><a onClick={() => handleLinkState('about')}>About</a></li>
          <li className={linkState === 'contact' ? 'active' : ''}><a onClick={() => handleLinkState('contact')}>Contact Us</a></li>
        </ul>
      </div>

      
      
      <p>© BEAUTYPLEX. All Rights Reserved 2024</p>
    </div>
    
  );
}

export default Footer;
