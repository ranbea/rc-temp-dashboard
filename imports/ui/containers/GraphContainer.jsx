import React from 'react';
import Grid from '@material-ui/core/Grid';

import './GraphContainer.css';
import SectionHeader from '../components/SectionHeader.jsx';

const GraphContainer = ({ children }) => {
    return(
        <Grid className="graph-container" container item xs={12} sm={12} md={12} lg={7}>
            <SectionHeader name="Temperature Graph"/>
            { children }
        </Grid>
    );
}

export default GraphContainer;
