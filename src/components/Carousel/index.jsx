import React, { useState } from 'react';

const Carousel = ({ pictures, altText, className }) => {
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
    <div className={className}>
      <img
        src={pictures[currentPicture]}
        alt={altText}
        className={`${className}__picture`}
      />

      {pictures.length > 1 && (
        <React.Fragment>
          <button
            className={`${className}__button ${className}__button--prev`}
            onClick={handlePrevious}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            className={`${className}__button ${className}__button--next`}
            onClick={handleNext}
          >
            <i className="fas fa-chevron-right" />
          </button>
          <p className={`${className}__picture-index`}>
            {currentPicture + 1}/{pictures.length}
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default Carousel;
