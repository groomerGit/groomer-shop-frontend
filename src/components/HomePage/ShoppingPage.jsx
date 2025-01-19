import React, { useState } from 'react';
import "../css/shoppingpage.css";
import Swal from 'sweetalert2';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('50 ml');
  const sizes = ['50 ml', '200 ml'];
  
  const thumbnails = [
    'https://i.ibb.co/Z8DR3ND/wellaconditioner.jpg',
    'https://i.ibb.co/V9ZvgtP/keuneshampoo.jpg',
    'https://i.ibb.co/xjbjgxY/olivienthairoil.jpg'
  ];

  const reviews = [
    {
      id: 1,
      author: 'Subash',
      rating: 5,
      text: 'Service was very good however the behavior of the delivery was a bit rude.'
    },
    {
      id: 2,
      author: 'Aman',
      rating: 5,
      text: 'The Komso was very nice! Excellent service and hosting. Would definitely recommend!'
    }
  ];

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-images">
          <img 
            src="https://i.ibb.co/xjbjgxY/olivienthairoil.jpg" 
            alt="Olivient Virgin Olive Oil" 
            className="main-image"
          />
          <div className="thumbnail-grid">
            {thumbnails.map((thumb, index) => (
              <img 
                key={index} 
                src={thumb} 
                alt={`Product view ${index + 1}`} 
                className="thumbnail"
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">Olivient Virgin Olive Oil</h1>
          <div className="product-price">
            <span className="currency">₹</span>
            <span>320</span>
          </div>
          
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="star">★</span>
            ))}
          </div>

          <p className="description">
            Experience the naturally refined act of virgin olive oil to your hair. Rich in antioxidants and
            vitamins, it strengthens, softens, and adds shine for a lustrous locks that radiate health and
            vitality.
          </p>

          <div className="ingredients">
            <h3 className="ingredients-title">Ingredients:</h3>
            <p>Dimethicone, Glycerin, Citric Acid, Essential Oils (Lavender & Rosemary)</p>
          </div>

          <div className="size-selector">
            <h3 className="ingredients-title">Quantity</h3>
            <div className="size-grid">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="purchase-button" onClick={showAvailability}>
            Purchase The Product
          </button>

          <div className="reviews-section">
            <div className="reviews-header">
              <h2>Reviews</h2>
              <button className="write-review">Write a review</button>
            </div>
            
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-author">
                  <div className="author-initial">
                    {review.author[0]}
                  </div>
                  <span>{review.author}</span>
                </div>
                <div className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="star">★</span>
                  ))}
                </div>
                <p>{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const stores = [
    {
      id: 1,
      name: 'Amazon',
      logo: 'A',
      price: 330,
      link: '#'
    },
    {
      id: 2,
      name: 'Flipkart',
      logo: 'F',
      price: 355,
      link: '#'
    },
    {
      id: 3,
      name: 'Nykaa',
      logo: 'N',
      price: 420,
      link: '#'
    }
  ];
  const showAvailability = () => {
    Swal.fire({
      title: 'Availability',
      html: `
        <div class="store-list">
          ${stores.map(store => `
            <div class="store-item">
              <div class="store-info">
                <div class="store-logo">${store.logo}</div>
                <div class="store-name">Shop from ${store.name}</div>
              </div>
              <div class="store-price">
                <span class="price-symbol">₹</span>
                <span>${store.price}</span>
                <button class="buy-now" onclick="window.location.href='${store.link}'">Buy Now</button>
              </div>
            </div>
          `).join('')}
        </div>
      `,
      showConfirmButton: false,
      customClass: {
        popup: 'availability-popup',
        content: 'availability-content'
      },
      showCloseButton: true,
      background: 'transparent'
    });
  };



export default ProductDetail;