// import React from 'react';
// import PropTypes from 'prop-types';

// const CircleProgressBar = ({ progress }) => {
//   // Logic to calculate the progress percentage and adjust circle properties
//   const radius = 50; // Adjust this value to set the size of the circle
//   const circumference = 2 * Math.PI * radius;
//   //   const offset = (progress / 100) * circumference;
//   const offset = circumference - (progress / 100) * circumference;

//   return (
//     <svg className="circle-progress" width={radius * 2} height={radius * 2}>
//       <circle
//         className="circle-background"
//         cx={radius}
//         cy={radius}
//         r={radius - 4}
//         fill="transparent"
//         strokeWidth="8" // Adjust this value to set the thickness of the circle
//         stroke="#e4e4e4" // Adjust this value to set the color of the circle background
//       />
//       <circle
//         className="circle-fill"
//         cx={radius}
//         cy={radius}
//         r={radius - 4}
//         fill="transparent"
//         strokeWidth="8" // Adjust this value to set the thickness of the circle
//         stroke="#0290ff" // Adjust this value to set the color of the filled circle
//         strokeDasharray={circumference}
//         strokeDashoffset={offset}
//       />
//     </svg>
//   );
// };

// CircleProgressBar.propTypes = {
//   progress: PropTypes.number.isRequired,
// };

// export default CircleProgressBar;
import React from 'react';
import PropTypes from 'prop-types';

const CircleProgressBar = ({ progress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = (progress / 100) * circumference;

  // Calculate the initial rotation angle based on the desired starting point
  const initialRotation = -90; // Default starting point is top center (12 o'clock)

  // Calculate the final rotation angle based on the progress
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
        stroke="#0290ff"
      />
      <circle
        className="circle-fill"
        cx={radius}
        cy={radius}
        r={radius - 4}
        fill="transparent"
        strokeWidth="8"
        stroke="#e4e4e4"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        // Apply the initial rotation to start the blue color from a specific point
        transform={`rotate(${initialRotation} ${radius} ${radius})`}
      >
        {/* Apply an additional rotation to ensure the blue color fills clockwise */}
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`${initialRotation} ${radius} ${radius}`}
          to={`${finalRotation} ${radius} ${radius}`}
          dur="1s" // You can adjust the duration of the animation if needed
          fill="freeze" // The animation will end in its final state
        />
      </circle>
    </svg>
  );
};

CircleProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default CircleProgressBar;
