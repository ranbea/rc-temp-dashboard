import React from 'react';
import "./RoomButton.css";

/**
 * The View and ViewModel of the RoomButton cells.
 * RoomButton calls roomVisibilityCallback to update the room's visibility status in the global state
 */
const RoomButton = ({ roomNum, roomVisibilityCallback, isTempVisible, aveTemp }) => {

  // The colour codes for the cell background
  const COLOUR_COOLEST = "#4BF4FF";
  const COLOUR_WARMEST = "#4087DA";
  const COLOUR_DEFAULT = "#E4E4E4";
  const COLOUR_NOT_APPLICABLE = "#FFFFFF";

  // The default min and max temperature range, used to calculate the colour of the cell
  const TEMPERATURE_MIN = 5;
  const TEMPERATURE_MAX = 30;
  const TEMPERATURE_RANGE = TEMPERATURE_MAX - TEMPERATURE_MIN;

  /**
   * Handles the button click event on the box, to toggle the temperature visibility status of the room cell
   */
  const handleButtonClick = () => {
    roomVisibilityCallback(roomNum, !isTempVisible);
  }

  /**
   * Method to get the colour of the cell for the current average temperature
   */
  const getColour = () => {
    if (!isTempVisible) {
      return COLOUR_DEFAULT;
    }

    if (Number.isNaN(aveTemp))
    {
      return COLOUR_NOT_APPLICABLE;
    }

    const ratio = aveTemp / TEMPERATURE_RANGE;
    return lerpColour(COLOUR_COOLEST, COLOUR_WARMEST, ratio);
  }

  /**
   * Method to linearly interpolate between colours a and b, and return the colour at the requested ratio.
   * Ratio is a value from [0, 1]
   *
   * Reference: https://www.alanzucconi.com/2016/01/06/colour-interpolation/
   */
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

  /**
   * Method to get the current average temperature, formatted to 1 decimal place
   */
  const getFormattedTemp = () => {
    if (Number.isNaN(aveTemp)) {
      return "N/A";
    }
    return aveTemp.toFixed(1);
  }

  return (
    <>
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" onClick={handleButtonClick}>
        <rect
          width="100%"
          height="100%"
          fill={getColour()}
          stroke="#5A5A5A"
          strokeWidth='0.5px'
        />
        <text
          x="95%"
          y="5%"
          fontSize="1.5rem"
          fontFamily="Open Sans"
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
            fontSize="1.25rem"
            fontFamily="Roboto Mono"
            fill="black"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {getFormattedTemp()}
          </text>
        )}
        <defs>
          <filter id="outer-drop-shadow">
            <feDropShadow floodColor="#575757" dx="0" dy="2" stdDeviation="0.75" result="shadow"/>
          </filter>
          <filter id="inset-shadow">
            <feGaussianBlur stdDeviation="1" result="blur"/>
            <feOffset in="blur" dx="0" dy="2" result="offset"/>
            <feComposite operator="out" in="SourceGraphic" in2="offset" result="inverse"/>
            <feFlood floodColor="black" floodOpacity="1" result="color"/>
            <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
            <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default RoomButton;
