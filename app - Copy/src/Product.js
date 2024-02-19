import { useState } from "react";

const Product = () => {
    const [Products , setproducts ] = useState(
        [
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./Produit' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./Produit' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./Produit' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./Produit' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./Produit' } , 
        ]
     ) ; 
    return ( 
        <div className="Product">
            {
                Products.map( 
                    (productItem) => (
                    <>
                        <div className="img">
                            <img id ="ProductImg" src={productItem.imgUrl} alt="bioplex"/> 
                        </div>
                        <div className="desc">
                            <h1>{productItem.title}</h1>
                            <p>{productItem.price}</p>
                            <button> buy it </button>
                        </div>

                    </>
                ))
                
            }
        </div>
     );
}
 
export default Product;