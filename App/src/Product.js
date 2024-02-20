import { useState } from "react";
import ProductItem from "./ProductItem";



const Product = () => {
    const [Products , setproducts ] = useState(
        [
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/1.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/2.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/3.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/4.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/5.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/6.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/7.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/8.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/9.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/10.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/11.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/12.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/13.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/14.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/15.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/16.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/17.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/18.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/19.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/20.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/21.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/22.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/23.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/24.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/25.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/26.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/27.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/28.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/29.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/30.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/31.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/32.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/33.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/34.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/35.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/36.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/37.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/38.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/39.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/40.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/41.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/42.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/43.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/44.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/45.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/46.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/47.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/48.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/49.jpg' } , 
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING'  , price : 8400.00 , imgUrl:'./dataIMG/50.jpg' } , 
            
           
        
    ]
     ) ; 
    return ( 
        <div className="Product" >
            <h1>Notre Produits</h1>
        <div className="product">

           
            {
                Products.map( 
                    (productItem) => (
                    <>
                      <ProductItem productItem={productItem}/> 
                    </>
                ))
                
            }
            
        </div>
        </div>
     );
}
 
export default Product;