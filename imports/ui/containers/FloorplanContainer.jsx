import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import SectionHeader from './SectionHeaderContainer';
import './FloorplanContainer.css'

const FloorplanContainer = ({ children }) => {
    return(
        <Grid className="floorplan-container" container item xs={5}>
            <SectionHeader name="Floorplan"/>
            { children }
        </Grid>
    );
}

export default FloorplanContainer;