import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const handleBuyClick = (
    productId,
    productPrice,
    productTitle,
    
    
  ) => {
    const productInfo = {
      id: productId,
      price: productPrice,
      title: productTitle,
      
    };
    localStorage.setItem("productInfo", JSON.stringify(productInfo));
    navigate("/forme");
  };

  const [Products, setproducts] = useState([
    {
      id: "1",
      title: 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING',
      price: 8400.0,
      imgUrl: "./Produit",
    },
    {
      id: "2",
      title: 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING',
      price: 8400.0,
      imgUrl: "./Produit",
    },
    {
      id: "3",
      title: 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING',
      price: 8400.0,
      imgUrl: "./Produit",
    },
    {
      id: "4",
      title: 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING',
      price: 8400.0,
      imgUrl: "./Produit",
    },
    {
      id: "5",
      title: 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING',
      price: 8400.0,
      imgUrl: "./Produit",
    },
  ]);

  return (
    <div className="Product">
      {Products.map((productItem) => (
        <div key={productItem.id}>
          {" "}
          {/* Assigning key prop here */}
          <div className="img">
            <img id="ProductImg" src={productItem.imgUrl} alt="bioplex" />
          </div>
          <div className="desc">
            <h1>{productItem.title}</h1>
            <p>{productItem.price}</p>
            <button
              onClick={() =>
                handleBuyClick(
                  productItem.id,
                  productItem.price,
                  productItem.title,
                  
                  
                )
              }
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
