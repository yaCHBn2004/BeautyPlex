import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ productItem }) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    const { price, title,imgUrl } = productItem;
    const productInfo = {
      price,
      title,
      imgUrl,
    };
    localStorage.setItem("productInfo", JSON.stringify(productInfo));
    navigate("/forme");
  };

  return (
    <div className="ProductItem">
      <button className="button" id="ClickProduct" onClick={handleBuyClick}>
        <div className="img">
          <img id="ProductImg" src={productItem.imgUrl} alt="bioplex" />
        </div>
        <div className="desc">
          <h1>{productItem.title}</h1>
          <p>Prix habituel : {productItem.price} DZD</p>
        </div>
      </button>
    </div>
  );
};

export default ProductItem;
