import React from 'react';
import PropTypes from 'prop-types';

const CircleProgressBar = ({ progress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = (progress / (2 * 100)) * circumference;
  const initialRotation = 90;

  const finalRotation = initialRotation + (270 * progress) / 100;

  return (
    <svg className="circle-progress" width={radius * 2} height={radius * 2}>
      <circle
        className="circle-background"
        cx={radius}
        cy={radius}
        r={radius - 4}
        fill="transparent"
        strokeWidth="8"
        stroke="#e4e4e4"
      />
      <circle
        className="circle-fill"
        cx={radius}
        cy={radius}
        r={radius - 4}
        fill="transparent"
        strokeWidth="8"
        stroke="#0290ff"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(${initialRotation} ${radius} ${radius})`}
      >

        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`${initialRotation} ${radius} ${radius}`}
          to={`${finalRotation} ${radius} ${radius}`}
          dur="1s"
          fill="freeze"
        />
      </circle>
    </svg>
  );
};

CircleProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default CircleProgressBar;
