import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import SectionHeader from '../components/SectionHeader.jsx';
import './FloorplanContainer.css'

const FloorPlanContainer = ({ children }) => {
    return(
        <Grid className="floor-plan-container" item xs={12} sm={12} md={12} lg={5}>
            <SectionHeader name="Floor Plan"/>
            { children }
        </Grid>
    );
}

export default FloorPlanContainer;
