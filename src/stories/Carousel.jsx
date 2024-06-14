import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './carousel.css';

const Carousel = ({ images, prevButton, nextButton, width, height, dotShape, dotColor, buttonSize, iconWidth, iconHeight, iconPadding, autoScroll, autoSlideTime }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let intervalId = null;

    if (autoScroll) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, (autoSlideTime * 1000));
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoScroll, images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider" style={{ width, height }}>
      <div className="carousel">
        <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((img, index) => (
            <img src={img} alt={`slide ${index}`} className="slide" key={index} />
          ))}
        </div>
        <div className="controls">
          <div className="control" onClick={goToPreviousSlide} style={{width: buttonSize, height: buttonSize}}>
            {prevButton ? <img src={prevButton} alt="" style={{ width: iconWidth, height: iconHeight, padding: iconPadding }} /> : <>&#9668;</>}
          </div>
          <div className="control" onClick={goToNextSlide} style={{width: buttonSize, height: buttonSize}}>
            {nextButton ? <img src={nextButton} alt="" style={{ width: iconWidth, height: iconHeight, padding: iconPadding }} /> : <>&#9658;</>}
          </div>
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${dotShape}`}
              style={{ backgroundColor: dotColor, opacity: index === currentSlide ? 1 : 0.5 }}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  prevButton: PropTypes.node,
  nextButton: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  dotShape: PropTypes.oneOf(['round', 'square', 'dash']),
  dotColor: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  iconPadding: PropTypes.string,
  autoScroll: PropTypes.bool,
  autoSlideTime: PropTypes.string
};

Carousel.defaultProps = {
  images: [
    'https://via.placeholder.com/800x300.png?text=Slide+1',
    'https://via.placeholder.com/800x300.png?text=Slide+2',
    'https://via.placeholder.com/800x300.png?text=Slide+3',
    'https://via.placeholder.com/800x300.png?text=Slide+4',
    'https://via.placeholder.com/800x300.png?text=Slide+5',
  ],
  prevButton: null,
  nextButton: null,
  width: '100%',
  height: 'auto',
  dotShape: 'round',
  dotColor: '#ffffff',
  iconWidth: '20px',
  iconHeight: '20px',
  iconPadding: '5px',
  autoScroll: false,
  autoSlideTime: null,
};

export default Carousel;
