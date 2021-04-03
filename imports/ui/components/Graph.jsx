import React, { useEffect, useState } from 'react';
import Dygraph from 'dygraphs';

import { Grid } from '@material-ui/core';
import './Graph.css';

var globData = [
    [ 1496743541975, 68.70800018310547 ],
    [ 1496743542977, 68.70800018310547 ],
    [ 1496743543977, 68.1259994506836 ],
    [ 1496743544977, 69.87300109863281 ],
    [ 1496743545977, 67.54399871826172 ],
    [ 1496743546977, 68.70800018310547 ],
    [ 1496743547976, 68.1259994506836 ],
    [ 1496743548975, 68.70800018310547 ],
    [ 1496743549974, 66.37899780273438 ]
];

const Graph = () => {
    
    const [graph, setGraph] = useState();

    useEffect(() => {
        setGraph(
            new Dygraph(
                "dygraph", globData, 
                {
                    labels: ["MessageTime", "Signal"],
                    xlabel: "Date/Time",
                    ylabel: "T (°C)",
                    legend: "never",
                    axes: {
                        x: {
                            axisLabelFormatter: function(ms) {
                            let d = new Date(ms);
                            let hour = d.getUTCHours();
                            let mins = d.getUTCMinutes();
                            let secs = d.getUTCSeconds();
                            let msec = d.getUTCMilliseconds();
            
                            return hour + ":" + mins + ":" + secs + "." + msec;
                            }
                        }
                    }
                }
            ));
    }, []);

    return(
        <Grid container className="dygraph-container" justify="center">
            <Grid item xs={10} id="dygraph"/>   {/* Graph injected into div */}
            <Grid item xs={12}> {/* LEGEND */}
            </Grid>
        </Grid>
    );
}

export default Graph;