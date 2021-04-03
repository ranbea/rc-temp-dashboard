import { Meteor } from 'meteor/meteor';
import { Data } from '../imports/api/data.js';

const fs = require('fs');
const Parser = require('papaparse');
const data = fs.createReadStream('./data/room-temperatures.csv');

var parsed_data;

/**
 * Method that runs whenever meteor starts up
 */
Meteor.startup(() => {
    parsed_data = Parser.parse(data, {
        header: true,
        worker: true,
        dynamicTyping: true,
        step: (row) => {
            console.log("Row: " + row.data);
        },
        complete: () => {
            console.log("Done");
        }
    });
});

export default parsed_data;
