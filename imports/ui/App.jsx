import React from 'react';
import { Container, Grid } from '@material-ui/core';
import MainHeader from './components/MainHeader.jsx';
import GraphContainer from './containers/GraphContainer.jsx';
import FloorPlanContainer from './containers/FloorPlanContainer.jsx';
import GraphControls from './components/GraphControls.jsx';
import FloorPlan from "./components/FloorPlan.jsx";

export const App = () => {
	return(
		<Container maxWidth="xl">
			<Grid container spacing={0}>
				<MainHeader/>
				<GraphContainer>
					<GraphControls/>
				</GraphContainer>
				<FloorPlanContainer>
					<FloorPlan/>
				</FloorPlanContainer>
			</Grid>
		</Container>
  	);
};
