import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

const cities = [
  'Algiers',
  'Oran',
  'Constantine',
  'Annaba',
  // Add more cities here...
];

const Forme = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const productInfo = JSON.parse(localStorage.getItem('productInfo')); 

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const formData = { name, email, selectedCity, productInfo }; // Include product info in the form data
      const response = await axios.post('http://127.0.0.1:8000/submit-form/', formData); // Change URL to match your FastAPI server
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <select
          id="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
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
  );
};

export default Forme;
