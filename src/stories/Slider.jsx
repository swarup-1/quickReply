import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './slider.css';

const Slider = ({ min, max, changeBy = 1, onChange, NodeColor, minColor, maxColor, rangeColor, trackColor }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const rangeRef = useRef(null);

  const getPercent = (value) => Math.round(((value - min) / (max - min)) * 100);

  useEffect(() => {
    if (maxValRef.current && rangeRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(Number(maxValRef.current.value));

      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current && rangeRef.current) {
      const minPercent = getPercent(Number(minValRef.current.value));
      const maxPercent = getPercent(maxVal);

      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        step={changeBy}
        value={minVal}
        ref={minValRef}
        onChange={(e) => {
          setMinVal(Math.min(Number(e.target.value), maxVal - changeBy));
        }}
        className="thumb index-3"
        style={{
          zIndex: minVal > max - 100 ? 5 : 3,
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={changeBy}
        value={maxVal}
        ref={maxValRef}
        onChange={(e) => {
          setMaxVal(Math.max(Number(e.target.value), minVal + changeBy));
        }}
        className="thumb index-4"
      />

      <div className="slider">
        <div className="slider-track" style={{ backgroundColor: trackColor }} />
        <div ref={rangeRef} className="slider-range" style={{ backgroundColor: rangeColor }} />
        <div className="slider-left-value" style={{ color: minColor }}>{minVal}</div>
        <div className="slider-right-value" style={{ color: maxColor }}>{maxVal}</div>
      </div>

      <style jsx>{`
        .thumb::-webkit-slider-thumb {
          background-color: ${NodeColor};
        }
        .thumb::-moz-range-thumb {
          background-color: ${NodeColor};
        }
      `}</style>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  changeBy: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  NodeColor: PropTypes.string,
  minColor: PropTypes.string,
  maxColor: PropTypes.string,
  rangeColor: PropTypes.string,
  trackColor: PropTypes.string,
};

export default Slider;
