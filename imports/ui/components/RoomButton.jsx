import React from 'react';
import "./RoomButton.css";

// callback is called upon button click, to change the graph's display
const RoomButton = ({ roomNum, roomVisibilityCallback, isTempVisible, avgTemp }) => {

  const COLOUR_COOLEST = "#D2E6FF";
  const COLOUR_WARMEST = "#779AC5";
  const COLOUR_DEFAULT = "#E4E4E4";

  const TEMPORARY_MIN = 0;
  const TEMPORARY_MAX = 50;
  const TEMPORARY_RANGE = TEMPORARY_MAX - TEMPORARY_MIN;

  const handleButtonClick = () => {
    roomVisibilityCallback(roomNum, !isTempVisible);
  }

  const getColour = (temp) => {
    if (!isTempVisible) {
      return COLOUR_DEFAULT;
    }
    const ratio = temp / TEMPORARY_RANGE;
    return lerpColour(COLOUR_COOLEST, COLOUR_WARMEST, ratio);
  }

  const lerpColour = (a, b, ratio) => {
    const aHex = +a.replace('#', '0x');
    const bHex = +b.replace('#', '0x');

    const aR = aHex >> 16;
    const aG = aHex >> 8 & 0xff;
    const aB = aHex & 0xff;

    const bR = bHex >> 16;
    const bG = bHex >> 8 & 0xff;
    const bB = bHex & 0xff;

    const mixedR = ratio * (bR - aR) + aR;
    const mixedG = ratio * (bG - aG) + aG;
    const mixedB = ratio * (bB - aB) + aB;

    const mixedHex = ((1 << 24) + (mixedR << 16) + (mixedG << 8) + (mixedB | 0)).toString(16).slice(1);

    return "#" + mixedHex;
  }

  return (
    <>
      <svg height="10vw" width="100%" onClick={handleButtonClick}>
        <rect
          width="100%"
          height="100%"
          fill={getColour(avgTemp)}
          stroke="#5A5A5A"
          strokeWidth='1px'
        />
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
          {`R${roomNum}`}
        </text>
        { isTempVisible && (
          <text
            x="50%"
            y="50%"
            fontSize="1.75vw"
            fontFamily="RobotoMono"
            fill="black"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {avgTemp.toFixed(1)}
          </text>
        )}
        <defs>
          <filter id="outer-drop-shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1" />
          </filter>
          <filter id="inset-shadow">
            <feGaussianBlur stdDeviation="5" result="blur"/>
            <feComposite operator="out" in="SourceGraphic" in2="blur" result="inverse"/>
            <feFlood floodColor="black" floodOpacity="0.75" result="color"/>
            <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
            <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default RoomButton;
