import React, { useState } from 'react';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="carousel-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="carousel-image" />
        <div className="carousel-buttons">
          <button onClick={handlePrevClick}>
            <img src='left-arrow.png' alt="Previous" style={{ width: '50%' }}/>
          </button>
          <button onClick={handleNextClick}>
            <img src='right-arrow.png' alt="Next" style={{ width: '50%' }}/>
          </button>
        </div>
      </div>
    );
  }
  
  export default Carousel;