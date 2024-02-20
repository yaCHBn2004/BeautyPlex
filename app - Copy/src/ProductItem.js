import { useState } from "react";


const ProductItem = (props ) => {
      const productItem = props.productItem ; 
      const [Order , activateOrder] = useState("") ; 
      const handlclick = () => {
         activateOrder("");
      } ;
    return  (  
        <div className="ProductItem">
            

            <button className="button" id="ClickProduct" onClick={() => handlclick()}>
        
                 <div className="img">
                    <img id ="ProductImg" src={productItem.imgUrl} alt="bioplex"/>
                </div>
                <div className="desc">
                    <h1>{productItem.title}</h1>
                    <p>Prix habituel : {productItem.price} DZD</p>
                </div>
            </button>
        </div>
    );
}
 
export default ProductItem;