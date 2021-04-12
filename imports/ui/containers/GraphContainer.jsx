import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './GraphContainer.css';
import SectionHeader from '../components/SectionHeader.jsx';

const GraphContainer = ({ children }) => {
    return(
        <Grid className="graph-container" container item xs={12} sm={12} md={12} lg={7}>
            <SectionHeader name="Room Temperature Over Time"/>
            { children }
        </Grid>
    );
}

export default GraphContainer;