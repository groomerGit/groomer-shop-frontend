import React, { useState } from 'react';
import "./css/ShopbyModule.css";

const ShopBySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const concerns = [
    { id: 1, name: 'Acne' },
    { id: 2, name: 'Dandruff' },
    { id: 3, name: 'Dryness' },
    { id: 4, name: 'Thinning Hair' },
    { id: 5, name: 'Blackheads' },
    { id: 6, name: 'Dark Spots' },
    { id: 7, name: 'Wrinkles' },
    { id: 8, name: 'Oily Skin' },
  ];

  const itemsPerSlide = window.innerWidth < 768 ? 3 : 6;
  const totalSlides = Math.ceil(concerns.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="shop-by-section">
      <h1 className="title">Shop By</h1>
      
      <div className="navigation">
        <button className={`nav-link ${currentSlide === 0 ? 'active' : ''}`}>Concerns</button>
        <button className="nav-link">Brands</button>
        <button className="nav-link">Categories</button>
      </div>

      <div className="concerns-container">
        <div 
          className="concerns-slider"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {concerns.map((concern) => (
            <div key={concern.id} className="concern-item">
              <div className="concern-circle">
                <span>{concern.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button 
          className="control-button"
          onClick={prevSlide}
          aria-label="Previous"
        >
          ←
        </button>
        <button 
          className="control-button"
          onClick={nextSlide}
          aria-label="Next"
        >
          →
        </button>
      </div>

      
    </div>
  );
};

export default ShopBySection;