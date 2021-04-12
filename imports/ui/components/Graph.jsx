import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';
import Dygraph from 'dygraphs';
import { Data } from '../../api/data.js';
import { formatData } from '../utils/DataUtil.js';
import { Grid } from '@material-ui/core';
import './Graph.css';
import { graphHandler } from '../utils/GraphUtil';

const Graph = ({
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        sample,
        rooms
    }) => {
    
    const [graph, setGraph] = useState(null);

    // Boolean to check if graph has been initialized
    const hasGraph =  graph !== null;

    // Placeholder data before data is ingested into graph
    var initialData = [];

    /**
     * Initialize Graph, equivelant to onComponentDidMount
     */
    useEffect(() => {
        /**
         * Get preliminary data
         */
        Meteor.subscribe("data", [startDate, endDate], () =>{
            const data = Data.find({"date" : { $gte: startDate, $lt: endDate }}).fetch();
            var initialData = formatData(data, sample);
            setGraph(
                new Dygraph(
                    "dygraph", initialData, 
                    {
                        labels: ["Date/Time", "R0", "R1", "R2", "R3", "R4", "R5", "R6"],
                        legend: "always",
                        interactionModel: graphHandler(setStartDate, setEndDate)
                    }
                )
            );
            
        })

        if (hasGraph) {
            graph.xAxisRange()[0] = startDate.getTime();
            graph.xAxisRange()[1] = endDate.getTime();
        }
    }, []);

    /**
     * Hook to update graph when startDate, endDate or sample is changed
     * from GraphController, and subscribe to data collection
     * 
     * Ref: https://docs.meteor.com/api/pubsub.html#Meteor-subscribe
     */
    useEffect(() => {
        if (hasGraph) {
            // Fetch data to put in graph
            Meteor.subscribe("data", [startDate, endDate], () => {
                const data = Data.find({"date" : { $gte: startDate, $lt: endDate }}).fetch();

                // Set file as 2D array generated from formatting
                var formattedData = formatData(data, sample);
                graph.updateOptions({ file: formattedData })
            });
            graph.xAxisRange()[0] = startDate.getTime();
            graph.xAxisRange()[1] = endDate.getTime();
        }
    }, [startDate, endDate, sample])

    /**
     * Hook to update graph when rooms are being toggled
     */
    useEffect(() => {
        if (hasGraph) {
            for (let i = 0; i < rooms.length; i++) {
                graph.setVisibility(i, rooms[i]);
            }
        }
    }, [rooms])

    return(
        <Grid container className="dygraph-container" justify="center">
            <Grid item xs={10} id="dygraph"/>   {/* Graph injected into div */}
            <Grid item xs={12}> {/* LEGEND */}
            </Grid>
        </Grid>
    );
}

export default Graph;