import React from 'react';
import "./css/testimonial.css";
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Prabhas Chaukarey',
      rating: 4.5,
      text: 'Impressed with the quality of the grooming tools! They\'re durable and precise, making grooming routines effortless and efficient.'
    },
    {
      id: 2,
      name: 'Neha Sukheja',
      rating: 4.5,
      text: 'The skincare products exceeded my expectations! My skin feels rejuvenated and looks radiant after just a few uses.'
    },
    {
      id: 3,
      name: 'Ajay Ravelkar',
      rating: 4.5,
      text: 'Absolutely love the range of products available! From essentials to luxury items, this site has everything for grooming needs.'
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star">★</span>);
      } else if (hasHalfStar && i === fullStars) {
        stars.push(<span key={i} className="star">⭐</span>);
      } else {
        stars.push(<span key={i} className="star star-empty">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        <h1 className="title">
          Hear It From Our<br />Customers
        </h1>
        
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="star-rating">
                {renderStars(testimonial.rating)}
              </div>
              <h3 className="customer-name">{testimonial.name}</h3>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;