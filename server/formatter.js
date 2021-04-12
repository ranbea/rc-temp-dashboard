/**
 * File to format parsed data into our desired Schema
 */

export function formatData(data) {
    const dateTimeSet = getDateTimeSet(data);
    const formattedData = dateTimeSet.map(
        (d) => {
            // Map every single date into JSON
            return ({
                "date": d,
                "temp": {
                    "0": null,
                    "1": null,
                    "2": null,
                    "3": null,
                    "4": null,
                    "5": null,
                    "6": null,
                }
            });
        }
    );

    /**
     * For each distinct date, traverse all data in the unformatted data
     * If the date of the row being looked at == distinct date being looked at
     * add the room temp into the array
     */
    for (let i = 0; i < formattedData.length; i++) {
        for (let j = 0; j < data.length; j++) {
            var d1 = new Date(data[j][1]);  // Date in 2nd col of CSV
            var d2 = formattedData[i]["date"];
            if (isSameDate(d1, d2)) {
                const roomID = data[j][0];
                const temp = parseFloat(data[j][2]);
                formattedData[i]["temp"][roomID] = temp;
            }
        }
    }

    return formattedData;
}

/**
 * Method to get a set of all the date/times, and convert
 * to JS Date object
 * Since timestamp is formatted in ISO, can
 * immediately create Date object from string
 */
const getDateTimeSet = (data) => {
    const dateTimeStrings = [...new Set(data.map((data) => data[1]))];
    const dateTimeSet = dateTimeStrings.map(
        (dateTime) => new Date(dateTime)
    );
    return dateTimeSet;
}

const isSameDate = (d1, d2) => {
    return (
        d1.getDate() == d2.getDate() &&
        d1.getMonth() == d2.getMonth() &&
        d1.getFullYear() == d2.getFullYear() &&
        d1.getTime() == d2.getTime()
    );
}
