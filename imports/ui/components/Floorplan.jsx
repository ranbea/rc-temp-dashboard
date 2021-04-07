import React from 'react';
import "./FloorPlan.css";

const FloorPlan = () => {
  return (
    <>
      <div style={{maxWidth: "100%"}}>
        <img className="unused-area-image" alt="unused area" src="images/floor-plan-unused-spaces.png" />
        <div className="small-rooms-container">
          <div className="room-cell">Room 1</div>
          <div className="room-cell">Room 2</div>
          <div className="room-cell">Room 3</div>
          <div className="room-cell">Room 4</div>
          <div className="room-cell">Room 5</div>
          <div className="room-cell">Room 6</div>

        </div>
      </div>
    </>
  );
}

export default FloorPlan;
