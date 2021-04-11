import React from 'react';
import { Container, Grid } from '@material-ui/core';
import MainHeader from './components/MainHeader.jsx';
import Graph from './components/Graph.jsx'
import GraphContainer from './containers/GraphContainer.jsx';
import FloorPlanContainer from './containers/FloorplanContainer.jsx';
import GraphControls from './components/GraphControls.jsx';
import FloorPlan from "./components/FloorPlan.jsx";
import './index.css';

export const App = () => {
	return(
		<Container maxWidth="xl">
			<Grid container spacing={0}>
				<MainHeader/>
				<GraphContainer>
					<GraphControls/>
					<Graph/>
				</GraphContainer>
				<FloorPlanContainer>
					<FloorPlan/>
				</FloorPlanContainer>
			</Grid>
		</Container>
  	);
};
