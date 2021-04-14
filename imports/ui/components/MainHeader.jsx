import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './MainHeader.css';

const MainHeader = () => {
    return(
        <Grid className="main-header" container item xs={12}>
            <Typography className="main-header-text" variant="h4">
                    RC Temperature Dashboard
            </Typography>
        </Grid>
    );
};

export default MainHeader;