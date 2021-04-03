import React from 'react';
import MainHeader from './components/MainHeader.jsx';
import GraphContainer from './containers/GraphContainer.jsx';
import FloorplanContainer from './containers/FloorplanContainer.jsx';
import { Container, Grid} from '@material-ui/core';
import GraphControls from './components/GraphControls.jsx';


export const App = () => {
	return(
		<Container maxWidth="xl">
			<Grid container spacing={0}>
				<MainHeader/>
				<GraphContainer>
					<GraphControls/>
				</GraphContainer>
				<FloorplanContainer>
				
				</FloorplanContainer>
			</Grid>
		</Container>
  	);
};
