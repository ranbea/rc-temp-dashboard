import { Meteor } from 'meteor/meteor';
import { Data } from '../imports/api/data.js';
import { formatData } from './formatter.js';
import * as Papa from 'papaparse';

/**
 * Method that runs whenever meteor starts up
 */
Meteor.startup(() => {
    const data_file = Assets.getText('room-temperatures.csv');
    const parsed_data = Papa.parse(data_file).data;
    const formatted_data = formatData(parsed_data);

    console.log(formatted_data);
});
