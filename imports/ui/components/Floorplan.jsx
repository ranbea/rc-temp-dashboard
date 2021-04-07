import React from 'react';
import RoomButton from './RoomButton.jsx';
import "./FloorPlan.css";

const FloorPlan = () => {
  return (
    <>
      {/* TODO: remove weird margin between image and svg */}
      <div style={{padding: "0px", margin: "0px"}}>
        <div className="large-room-container">
          <RoomButton label="R0" />
        </div>
        <img className="unused-area-image" alt="unused area" src="images/floorPlanUnusedSpace.png" />
        <div className="small-rooms-container">
          <RoomButton label="R1" />
          <RoomButton label="R2" />
          <RoomButton label="R3" />
          <RoomButton label="R4" />
          <RoomButton label="R5" />
          <RoomButton label="R6" />
        </div>
      </div>
    </>
  );
}

export default FloorPlan;
