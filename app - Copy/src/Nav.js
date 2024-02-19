import { useState } from "react";

const Nav = () => {
  const [ linkState , setLinkState] = useState('home') ;
  const [ search ,activateSearch ] = useState('fasle') ;

  
  
  const LinkState = (link) => {
    setLinkState(link) ; 
    
  };
  const handlSearch = () =>{
    if(search === 'false'){
      activateSearch('true'); 
      console.log(linkState) ; 
    }
    else{
      activateSearch('false'); 
    }
  }
  

    return (  
      <div className="nav" >
        <div className="navC" >
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
         
          </style>    
          <div className= "titre">
            <img id ="Logo" src="./logo.png" alt="Description of the image"/> 
          </div>
          <ul className="lien">
              <li className={linkState === 'home' ? 'active' : '' }><a  onClick={() => LinkState('home')}>Home</a></li>
              <li className={linkState === 'about' ? 'active' : '' }><a  onClick={() => LinkState('about')}>About</a></li>
              <li className={linkState === 'product' ? 'active' : ''} ><a  onClick={() => LinkState('product')}>Notre Produits</a></li>
              <li className={linkState === 'contact' ? 'active' : ''} ><a onClick={() => LinkState('contact')}>Contact</a></li>
          </ul>
          <div className="search">
            <button className="button" onClick={() => handlSearch()}>
              <img src="./search.png" alt="Button Image" />
            </button>
          
          </div>
          </div>
         <div className="searchInput" > 
          <input type="text"className = {search === 'true' ? 'avtiveIN' : 'closeIN'}></input>
          </div>
          </div>
        
        
    );
}
 
export default Nav;