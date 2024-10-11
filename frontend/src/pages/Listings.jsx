import React, { useEffect, useState } from 'react';
import './Listings.css'; // Import the CSS file

const Listings = () => {
  const [listings, setListings] = useState([]);

  // Fetch listings from the API
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/listings/');  // Full URL with correct port
        const data = await response.json();
        console.log(data.results); // Check if data is coming here
        setListings(data.results);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
  
    fetchListings();
  }, []);
  

  return (
    <div className="listings-container">
      {listings.length > 0 ? (
        listings.map(listing => (
          <div key={listing.title} className="listing-card">
            <img src={listing.photo_main} alt={listing.title} className="listing-image" />
            <h2 className="listing-title">{listing.title}</h2>
            <p className="listing-address">{listing.address}, {listing.city}</p>
            <p className="listing-description">{listing.description}</p>
          </div>
        ))
      ) : (
        <p>No listings found</p>
      )}
    </div>
  );
  
};

export default Listings;
