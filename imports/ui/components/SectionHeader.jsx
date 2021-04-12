import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './SectionHeader.css';

const SectionHeader = ({ name }) => {
    return(
        <Grid item xs={12} className="section-header">
            <Typography className="section-header-text" variant="h4" align="center">
                { name }
            </Typography>
        </Grid>
    );
}

export default SectionHeader;