import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

import { Grid, Typography, Slider, TextField } from '@material-ui/core';
import { 
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import './GraphController.css';

const GraphControls = () => {

    const [startDate, setStartDate] = React.useState(Date.now());
    const [endDate, setEndDate] = React.useState(Date.now());

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
        console.log(e.target.value);
    }

    const handleEndDate = (e) => {
        setEndDate(e.target.value);
        console.log(e.target.value);
    }

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="center" spacing={4}>
                <Grid item sm={2}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="start-date-picker"
                        label="Start Date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item sm={2}>
                    <form className="time-picker-container">
                        <TextField
                            id="start-time"
                            label="Start Time"
                            type="time"
                            defaultValue="07:45"
                            className="time-picker"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 900, // 15 min
                            }}
                        />
                    </form>
                </Grid>
                <Grid item sm={2}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="end-date-picker"
                        label="End Date"
                        value={endDate}
                        onChange={handleEndDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item sm={2}>
                    <form className="time-picker-container">
                        <TextField
                            id="end-time"
                            label="End time"
                            type="time"
                            defaultValue="07:45"
                            className="time-picker"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 900, // 15 min
                            }}
                        />
                    </form>
                </Grid>
                <Grid item sm={3}>
                    <Typography id="slider" gutterBottom>
                        Sample Size
                    </Typography>
                    <Slider
                        defaultValue={30}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={110}
                    />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default GraphControls;