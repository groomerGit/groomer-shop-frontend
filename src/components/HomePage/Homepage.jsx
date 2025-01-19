import React from "react";
import home_us_img from "../images/backgroundimg.jpg";
import Footer from "../Footer.jsx";
import "../css/HomePage.css";

import ShopBySection from "./LandingUI/ShopbyModule.jsx";
import ShopByCards from "./LandingUI/Shopcards.jsx";
import TestimonialSection from "./LandingUI/testimonial.jsx";

function HomePage() {
  return (
    <div>
      <div className="landing-container">
      <div className="background-overlay"></div>
      
      <div className="content-container">
        <h1 className="main-heading">
          Grromer With <br/>
          Confidence
        </h1>

        <p className="subheading">
          Whether it's indulgent skincare or top-notch grooming tools, we provide all the
          essentials for achieving your desired aesthetic. Start shopping today to groom
          with assurance!
        </p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search for products and brands"
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>

    </div>
    <ShopBySection/>
    <ShopByCards/>
    <TestimonialSection/>
      
     
      <Footer />
    </div>
  );
}
export default HomePage;
