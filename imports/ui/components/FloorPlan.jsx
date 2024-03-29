import React from 'react';
import RoomButton from './RoomButton.jsx';
import "./FloorPlan.css";

/**
 * The View and ViewModel of FloorPlan.
 * FloorPlan receives the room visibility and average temp states for all rooms and passes it to each RoomButton
 */
const FloorPlan = ({ roomVisibility, setRoomVisibilityCallback, aveTemp }) => {

  return (
    <>
      <div className="floor-plan-wrapper">
        <div className="large-room">
          <RoomButton
            roomNum="0"
            isTempVisible={roomVisibility[0]}
            roomVisibilityCallback={setRoomVisibilityCallback}
            aveTemp={aveTemp[0]}
          />
        </div>
        <img className="unused-area-image" alt="unused area" src="images/floorPlanUnusedSpace_compressed.png" />
        <div className="small-rooms-container">
          {
            (
              roomVisibility
                .slice(1, roomVisibility.length)
                .map((visible, index) => <RoomButton
                      className="small-room"
                      roomNum={index + 1}
                      isTempVisible={visible}
                      roomVisibilityCallback={setRoomVisibilityCallback}
                      aveTemp={aveTemp[index + 1]}
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
