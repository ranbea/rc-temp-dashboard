import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import './MainHeader.css';

const MainHeader = () => {
    return(
        <Grid className="main-header" container item xs={12}>
            <Typography className="main-header-text" variant="h3">
                    RC Temperature Dashboard
            </Typography>
        </Grid>
    );
};

export default MainHeader;