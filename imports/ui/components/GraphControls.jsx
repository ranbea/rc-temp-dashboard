import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

import { Grid, Typography, Slider, TextField } from '@material-ui/core';
import { 
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
} from '@material-ui/pickers';

import './GraphController.css';

/**
 * Parameters passed to GraphControls from Graph component
 */
const GraphControls = ({startDate, endDate, setStartDate, setEndDate, sample, setSample}) => {

    const calculateStep = (n) => {
        for (let i = 1; i <= 12; i++) {
            if (n == Math.pow(2, i)) {
                return i;
            } 

            if (n < Math.pow(2, i)) {
                return i;
            }
        }
        return null;
    }

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="center" spacing={4}>
                <Grid item xs={8} sm={8} md={5} lg={2}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="start-date-picker"
                        label="Start Date"
                        value={ startDate }
                        onChange={ (d) => setStartDate(d) }
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item xs={8} sm={8} md={5} lg={2}>
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Start Time"
                        value={ startDate.getTime() }
                        onChange={ (d) => setStartDate(d) }
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    {/* 
                    <form className="time-picker-container">
                        <TextField
                            id="start-time"
                            label="Start Time"
                            type="time"
                            className="time-picker"
                            value={ startDate.getTime().toString() }
                            onChange= { (d) => setStartDate(d) }
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 900, // 15 min
                            }}
                        />
                    </form>
                    */}
                </Grid>
                <Grid item xs={8} sm={8} md={5} lg={2}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="end-date-picker"
                        label="End Date"
                        value={ endDate }
                        onChange={ (d) => setEndDate(d) }
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Grid item xs={8} sm={8} md={5} lg={2}>
                    <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="End Time"
                        value={ endDate.getTime() }
                        onChange={ (d) => setEndDate(d) }
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                    {/* 
                    <form className="time-picker-container">
                        <TextField
                            id="end-time"
                            label="End time"
                            type="time"
                            className="time-picker"
                            value={ endDate.getTime().toString() }
                            onChange={ (d) => setEndDate(d) }
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 900, // 15 min
                            }}
                        />
                    </form>*/}
                </Grid>
                <Grid item xs={8} sm={8} md={10} lg={2}>
                    <Typography id="slider" gutterBottom>
                        Sample Size
                    </Typography>
                    <Slider
                        marks
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={12}
                        value={calculateStep(sample)}
                        onChange={(e, v) => { setSample(2 ** v)} }
                        valueLabelFormat={(x) => "2^"+x}
                        getAriaValueText={(x) => "2^"+x} 
                    />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default GraphControls;