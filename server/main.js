import { Meteor } from 'meteor/meteor';
import { Data } from '../imports/api/data.js';
import { formatData } from './formatter.js';
import * as Papa from 'papaparse';

/**
 * Publish data collection
 * Please refer to client/ui/components/Graph to see where client
 * subscribes to the data collection
 * 
 * Reference: https://docs.meteor.com/api/pubsub.html#Meteor-subscribe
 */
 if (Meteor.isServer) {
    Meteor.publish("data", function(range) {
        let startDate = range[0];
        let endDate =  range[1];
        return Data.find({ 'date' : { $gte : startDate, $lt: endDate }});
    })
}

/**
 * Method that runs whenever meteor starts up
 */
Meteor.startup(() => {
    const data_file = Assets.getText('room-temperatures.csv');
    
    console.log("Parsing data...");
    const parsed_data = Papa.parse(data_file).data;
    console.log("Parsed " + parsed_data.length + " rows");
    
    console.log("Formatting data... Will take about to 2 minutes");
    const formatted_data = formatData(parsed_data);
    console.log("Data formatting complete: formatted", formatted_data.length, "items");

    // Delete all data from the DB before re-insertion.
    Data.remove({});

    console.log("Inserting data into DB");
    formatted_data.forEach((d) => Data.insert(d));
    console.log("Data insertion complete: inserted", Data.find().count(), "items");
});
