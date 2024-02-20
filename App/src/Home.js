import React from "react";

const Home = () => {
   const scrollTopro  = () => {
      const windowHeight = window.innerHeight;
      const middle = windowHeight / 2;
      window.scrollTo({
        top: middle,
        behavior: "smooth"
      });
    };
    
    return ( 
        <div className="Home">
            <div className="Left">
               <h1>BEAUTYPLEX</h1>
               <h2>Bienvenue dans notre boutique de produits cosmétiques, où chaque produit est soigneusement sélectionné pour vous offrir une expérience de beauté incomparable </h2>
               <h3>Découvrez une sélection soigneusement choisie pour sublimer votre beauté naturelle.</h3>
               <button onClick={scrollTopro} id="ExploreProduct">Explorer les produits</button>
            </div>
            <div className="Right">
               <img id ="product" src="./bioplex.png" alt="bioplex"/> 
            </div>
        </div>
     );
}
 
export default Home;
