import React from 'react';
import RoomButton from './RoomButton.jsx';
import "./FloorPlan.css";

const FloorPlan = ({ roomVisibility, roomVisibilityCallback, aveTemp }) => {

  return (
    <>
      <div className="floor-plan" >
        <div className="large-room-container">
          <RoomButton
            roomNum="0"
            isTempVisible={roomVisibility[0]}
            roomVisibilityCallback={roomVisibilityCallback}
            avgTemp={aveTemp[0]}
          />
        </div>
        <img className="unused-area-image" alt="unused area" src="images/floorPlanUnusedSpace.png" />
        <div className="small-rooms-container">
          {
            (
              roomVisibility
                .slice(1, roomVisibility.length)
                .map((visible, index) => <RoomButton
                      roomNum={index + 1}
                      isTempVisible={visible}
                      roomVisibilityCallback={roomVisibilityCallback}
                      avgTemp={aveTemp[index + 1]}
                      key={index}
                    />
                )
            )
          }
        </div>
      </div>
    </>
  );
}

export default FloorPlan;
