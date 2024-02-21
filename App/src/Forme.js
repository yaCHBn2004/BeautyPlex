import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav" ; 

const cities = ["Algiers", "Oran", "Constantine", "Annaba"];

const Forme = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNumber] = useState("");
  const [baladiya, setBaladiya] = useState("");
  const [city, setCity] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const storedProductInfo = localStorage.getItem("productInfo");
    if (storedProductInfo) {
      const productInfo = JSON.parse(storedProductInfo);

      setProductTitle(productInfo.title);
      setProductPrice(productInfo.price);
      setImgUrl(productInfo.imgUrl);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        user_info: {
          name,
          email,
          phoneNum,
          baladiya,
          city,
        },
        product_info: {
          title: productTitle,
          price: productPrice,
          imgUrl: imgUrl,
        },
      };
      const response = await axios.post(
        "http://127.0.0.1:8000/submit-form/",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      localStorage.removeItem("productInfo");
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
    <Nav></Nav>
    <div className="Form">
      <div className="ProductItem">
        <div className="img">
          <img id="ProductImg" src={imgUrl} alt="bioplex" />
        </div>
        <div className="desc">
          <h1>{productTitle}</h1>
          <p>Prix habituel : {productPrice} DZD</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            id="name"
            value={name}
            placeholder ="nom et prénom" 
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            value={email}
            placeholder ="Email" 

            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
          <input
            type="tel"
            id="phoneNum"
            value={phoneNum}
            placeholder ="numéro de téléphone" 

            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="baladiya">Baladiya:</label> */}
          <input
            type="text"
            id="baladiya"
            value={baladiya}
            placeholder ="commune" 
            onChange={(e) => setBaladiya(e.target.value)}
            required
          />
        </div>
        <div>
          {/* <label htmlFor="city">City:</label> */}
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Forme;
