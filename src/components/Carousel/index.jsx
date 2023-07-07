import React, { useState } from 'react';

const Carousel = ({ pictures, altText, page }) => {
  const [currentPicture, setCurrentPicture] = useState(0);

  const handleNext = () => {
    setCurrentPicture(
      currentPicture === pictures.length - 1 ? 0 : currentPicture + 1
    );
  };

  const handlePrevious = () => {
    setCurrentPicture(
      currentPicture === 0 ? pictures.length - 1 : currentPicture - 1
    );
  };

  return (
    <div className={`carousel ${page}__carousel`}>
      <img
        src={pictures[currentPicture]}
        alt={altText}
        className="carousel__picture"
      />

      {pictures.length > 1 && (
        <React.Fragment>
          <button
            className="carousel__button carousel__button--prev"
            onClick={handlePrevious}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            className="carousel__button carousel__button--next"
            onClick={handleNext}
          >
            <i className="fas fa-chevron-right" />
          </button>
          <p className="carousel__picture-index">
            {currentPicture + 1}/{pictures.length}
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default Carousel;
