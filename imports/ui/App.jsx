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
	const [rooms, setRooms] = useState([true, true, true, true, true, true, true]);	// State of room toggle on/off

	return(
		<Container maxWidth="xl">
			<Grid container spacing={0}>
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
						rooms={rooms}
					/>
				</GraphContainer>
				<FloorPlanContainer>
					<FloorPlan/>
				</FloorPlanContainer>
			</Grid>
		</Container>
  	);
};
