import "./Product.css"

import React, { useState, useEffect } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('https://dummyjson.com/products/')
        .then(response => {
          return response.json();
        })
        .then(data => {
          setProducts(data.products); 
          setLoading(false);
        })
    }, []);
    return (
      <div>
        <h1 className="qwww">NEW ARRIVALS</h1>
        <div className="container">
          <div className="fetch__wrapper">
          {products.map(product => (
            <div className="fetch__div">
                <li key={product.id}>
                <img className="fetch__img" src={product.images} alt="" />
              <p>{product.description}</p>
              <h2>Price: ${product.price}</h2>
            </li>
            </div>
          )).slice(0, 3)}
          </div>
       </div>
      </div>

      
    );
  };

export default Product