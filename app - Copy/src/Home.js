const Home = () => {
    return ( 
        <div className="Home">
            <div className="Left">
               <h1>BEAUTYPLEX</h1>
               <h2>Bienvenue dans notre boutique de produits cosmétiques, où chaque produit est soigneusement sélectionné pour vous offrir une expérience de beauté incomparable </h2>
               <h3>Découvrez une sélection soigneusement choisie pour sublimer votre beauté naturelle.</h3>
               <button id="ExploreProduct">Explore Produits</button>
            </div>
            <div className="Right">
               <img id ="product" src="./bioplex.png" alt="bioplex"/> 
            </div>
        </div>
     );
}
 
export default Home;