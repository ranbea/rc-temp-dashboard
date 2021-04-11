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
                    "0": 0.000,
                    "1": 0.000,
                    "2": 0.000,
                    "3": 0.000,
                    "4": 0.000,
                    "5": 0.000,
                    "6": 0.000
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
            var d1 = new Date(data[j][1]);
            try {
            var d2 = formattedData[i]["date"];
            } catch (e) {
                console.log(i);
            }
            if (isSameDate(d1, d2)) {
                const roomID = data[j][0];
                const temp = parseFloat(data[j][2]);
                // console.log(roomID);
                // console.log(temp);
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