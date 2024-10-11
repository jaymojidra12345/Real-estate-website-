import React from "react";
import "./AboutUs.css"; // Import the CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="title">Our Agency Story</h1>
        <p className="subtitle">Get to know us and our journey</p>
        <p className="description">
          We are committed to delivering high-quality services to our clients.
          Our team works together to achieve outstanding results. Explore more
          about our story and values.
        </p>
        <button> <a className="realtor-link" href="/contact">Contact Our Realtors </a></button>
      
      </div>
      <div className="about-us-image">
        <img 
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabianwiktor-994605.jpg&fm=jpg" 
          alt="Our story" 
        />
      </div>
    </div>
  );
};

export default AboutUs;
