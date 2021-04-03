import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './GraphContainer.css';
import SectionHeader from './SectionHeaderContainer';

const GraphContainer = ({ children }) => {
    return(
        <Grid className="graph-container" container item xs={7}>
            <SectionHeader name="Room Temperature Over Time"/>
            { children }
        </Grid>
    );
}

export default GraphContainer;