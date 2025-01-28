import React, { useState } from 'react';
import carsData from '../data.json'; // Ensure this is the correct path to your data

const CarGrid = () => {
  const [displayedCars, setDisplayedCars] = useState(12); // Show 12 cars initially
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [sortBy, setSortBy] = useState('model'); // Default sort by model
  const [isExpanded, setIsExpanded] = useState(false); // State to track whether to show all cars

  // Sort function
  const sortCars = (sortCriteria) => {
    let sortedCars = [...filteredCars];
    if (sortCriteria === 'price') {
      sortedCars.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === 'model') {
      sortedCars.sort((a, b) => a.model.localeCompare(b.model));
    }
    setFilteredCars(sortedCars);
  };

  // Handle sorting selection
  const handleSortChange = (e) => {
    const sortCriteria = e.target.value;
    setSortBy(sortCriteria);
    sortCars(sortCriteria);
  };

  // Handle "Load More" button click
  const handleLoadMore = () => {
    setDisplayedCars(filteredCars.length); // Show all cars when Load More is clicked
    setIsExpanded(true); // Set the state to indicate cars are fully expanded
  };

  // Handle "Show Less" button click
  const handleShowLess = () => {
    setDisplayedCars(12); // Show only 12 cars when Show Less is clicked
    setIsExpanded(false); // Set the state to indicate cars are collapsed
  };

  return (
    <div className="car-grid-container">
      <h2>All Cars</h2>

      {/* Sort options dropdown */}
      <div className="sort-options">
        <select onChange={handleSortChange} value={sortBy}>
          <option value="model">Sort by Model</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      {/* Car Grid */}
      <div className="car-grid" style={{ transition: 'height 0.5s ease-in-out' }}>
        {filteredCars.slice(0, displayedCars).map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-image-container">
              <img src={car.image} alt={car.model} />
            </div>
            <div className="car-content">
              <h3>{car.model}</h3>
              <p className="price">{car.price.toFixed(2)} DZD</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Show Less Button */}
      <div className="load-more-container">
        {isExpanded ? (
          <button onClick={handleShowLess} className="load-more-button">
            Show Less
          </button>
        ) : (
          displayedCars < filteredCars.length && (
            <button onClick={handleLoadMore} className="load-more-button">
              Load More
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default CarGrid;
