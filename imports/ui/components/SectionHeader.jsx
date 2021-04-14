import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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