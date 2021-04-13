import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import MainHeader from './components/MainHeader.jsx';
import Graph from './components/Graph.jsx'
import GraphContainer from './containers/GraphContainer.jsx';
import FloorPlanContainer from './containers/FloorplanContainer.jsx';
import GraphControls from './components/GraphControls.jsx';
import FloorPlan from "./components/FloorPlan.jsx";
import './index.css';

export const App = () => {
	/**
	 * Global states
	 */
	const [startDate, setStartDate] = useState(new Date("2013-10-02T05:00:00"));
	const [endDate, setEndDate] = useState(new Date("2013-10-12T14:45:00"));
	const [sample, setSample] = useState(16);
	const [roomsVisibility, setRoomsVisibility] = useState([true, true, true, true, true, true, true]);	// State of room toggle on/off
	const [aveTemp, setAveTemp] = useState([20, 20, 20, 20, 20, 20, 20]);

	const updateRoomVisibility = (roomNum, isRoomVisible) => {
		const visibility = [...roomsVisibility];
		visibility[roomNum] = isRoomVisible;
		setRoomsVisibility(visibility);
	};

	return(
		<Container maxWidth="xl">
			<Grid container spacing={0} direction="row" justify="flex-start">
				<MainHeader/>
				<GraphContainer>
					<GraphControls
						startDate={startDate}
						setStartDate={setStartDate}
						endDate={endDate}
						setEndDate={setEndDate}
						sample={sample}
						setSample={setSample}
					/>
					<Graph
						startDate={startDate}
						setStartDate={setStartDate}
						endDate={endDate}
						setEndDate={setEndDate}
						sample={sample}
						roomsVisibility={roomsVisibility}
						setAveTemp={setAveTemp}
					/>
				</GraphContainer>
				<FloorPlanContainer>
					<FloorPlan
						roomVisibility={roomsVisibility}
						roomVisibilityCallback={updateRoomVisibility}
						aveTemp={aveTemp}
					/>
				</FloorPlanContainer>
			</Grid>
		</Container>
  	);
};
