import React from 'react';
import "./css/Shopcard.css";


const BestsellersSection = () => {
  const products = [
    {
      id: 1,
      name: 'Keune Shampoo',
      image: "https://i.ibb.co/Z8DR3ND/wellaconditioner.jpg",
      price: 400,
      rating: 4.8,
      concern: 'Dry Hair',
    },
    {
      id: 2,
      name: 'Wella conditioner',
      image: "https://i.ibb.co/V9ZvgtP/keuneshampoo.jpg",
      price: 560,
      rating: 4.7,
      concern: 'Dry Hair',
    },
    {
      id: 3,
      name: 'Shea Moisture oil',
      image: "https://i.ibb.co/xjbjgxY/olivienthairoil.jpg",
      price: 320,
      rating: 4.9,
      concern: 'Beard Care',
    },
    {
      id: 4,
      name: 'Oliviert hair oil',
      image: "https://i.ibb.co/7KTrywG/sheamoisure.jpg",
      price: 350,
      rating: 4.8,
      concern: 'Dry Hair',
    }
    
  ];

  return (
    <div className="bestsellers">
      <h1 className="title">Our Bestsellers</h1>
      
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <button className="wishlist-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
              <div className="concern-tag">{product.concern}</div>
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="rating">
                {product.rating}/5 ★
              </div>
              <div className="price">₹ {product.price}</div>
              
              <div className="button-group">
                <button className="shop-now">Shop Now</button>
                <button className="add-cart">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default BestsellersSection;