import React, { useState, useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import carsData from '../data.json'; // Make sure this is the correct path to your data

const NewCars = () => {
  const allCars = carsData.map((car) => car); // Flattening the car data array (if needed)

  let [panier, setPanier] = useState([]);
  const splideRef = useRef(null);

  let click = (id) => {
    let car = allCars.find((car) => car.id === id);

    setPanier((prev) => {
      return [...prev, car];
    });
  };

  useEffect(() => {
    console.log('Updated panier:', panier);
  }, [panier]);

  return (
    <div className="newCars">
      <h2 className="collection-title">New Car Collection</h2>
      <Splide
        ref={splideRef}
        options={{
          perPage: 4,
          gap: '1.5rem',
          pagination: false,
          arrows: false,
          autoplay: true,
          type: 'loop',
          interval: 4000,
          speed: 1500,
          breakpoints: {
            1200: { perPage: 3 },
            768: { perPage: 2 },
            480: { perPage: 1, interval: 2000, speed: 1000 },
          },
        }}
      >
        {allCars.map((car) => (
          <SplideSlide key={car.id}>
            <div className="card">
              <div className="card-image-container">
                <img src={car.image} alt={car.model} />
              </div>
              <div className="card-content">
                <h3>{car.model}</h3>
                <p className="price">{car.price.toFixed(2)} DZD</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div className="carousel-buttons">
        <button
          className="prev-button"
          onClick={() => splideRef.current?.go('<')}
        >
          &lt;
        </button>
        <button
          className="next-button"
          onClick={() => splideRef.current?.go('>')}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default NewCars;
