import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import SectionHeader from './SectionHeaderContainer';
import './FloorPlanContainer.css'

const FloorPlanContainer = ({ children }) => {
    return(
        <Grid className="floor-plan-container" container item xs={5}>
            <SectionHeader name="Floor Plan"/>
            { children }
        </Grid>
    );
}

export default FloorPlanContainer;
