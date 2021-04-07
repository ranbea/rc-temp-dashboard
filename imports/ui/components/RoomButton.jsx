import React, { useState } from 'react';

// callback is called upon button click, to change the graph's display
const RoomButton = ({ label, callback }) => {

  const [averageTemp, setAverageTemp] = useState(52.0);

  // TODO: onClick,
  // upon armed, start listening to changes in average temp for this room
  // upon unarmed, stop listening to these changes

  return (
    <>
      <svg height="10vw" width="100%">
        <rect width="100%" height="100%" fill="#E4E4E4" stroke="#5A5A5A" strokeWidth='1px'/>
        <text
          x="95%"
          y="5%"
          fontSize="2vw"
          fontFamily="OpenSans"
          fontWeight="600"
          fill="black"
          textAnchor="end"
          dominantBaseline="hanging"
        >
          {label}
        </text>
        <text
          x="50%"
          y="50%"
          fontSize="1.75vw"
          fontFamily="RobotoMono"
          fill="black"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {averageTemp.toFixed(1)}
        </text>
      </svg>
    </>
  );
}

export default RoomButton;
