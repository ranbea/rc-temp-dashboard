/**
 * Helper functions for formatting data from DB for Dygraph and FloorPlan
 */

/**
 * 1. Trim data according to sample size
 * 2. Sort data in chronological order
 * 3. Format data for Dygraph
 */
export function formatData(data, sample) {

    let intermediateData = [];

    /**
     * If data retrieved is larger than sample size,
     * trim data
     */
    if (data.length > sample) {
        const step = data.length / sample;

        let dataCount = 0;
        let index = 0;
        while (dataCount < sample) {
            intermediateData.push(data[Math.floor(index)]);
            index += step;
            dataCount += 1;
        }
    } else {
        intermediateData = data;
    }

    const comparator = (a, b) => a.date - b.date;
    intermediateData = intermediateData.slice().sort(comparator);

    let formattedData = [];

    intermediateData.forEach((d) => {
        formattedData.push([
            new Date(d["date"]),
            d["temp"]["0"],
            d["temp"]["1"],
            d["temp"]["2"],
            d["temp"]["3"],
            d["temp"]["4"],
            d["temp"]["5"],
            d["temp"]["6"],
        ]);
    });
    
    return formattedData;
}

/**
 * Function to calculate average data for a room across
 * all data points within a given range
 */
export function getAveTemp(data) {
    let room_t_total = [0, 0, 0, 0, 0, 0, 0];   // Total temp value for each room
    let room_c_total = [0, 0, 0, 0, 0, 0, 0];   // Total count of number of data items for each room
    
    // For each data item, get temp values for each room
    data.forEach((d) => {
        let room_t = [
            d["temp"]["0"],
            d["temp"]["1"],
            d["temp"]["2"],
            d["temp"]["3"],
            d["temp"]["4"],
            d["temp"]["5"],
            d["temp"]["6"]
        ];

        // For each temp value add to total and increment count
        for (let i = 0; i < 7; i++) {
            if (room_t[i] != null) {
                room_t_total[i] += room_t[i];
                room_c_total[i]++;
            }
        }
    });

    let r0 = room_t_total[0] / room_c_total[0];
    let r1 = room_t_total[1] / room_c_total[1];
    let r2 = room_t_total[2] / room_c_total[2];
    let r3 = room_t_total[3] / room_c_total[3];
    let r4 = room_t_total[4] / room_c_total[4];
    let r5 = room_t_total[5] / room_c_total[5];
    let r6 = room_t_total[6] / room_c_total[6];

    return [r0, r1, r2, r3, r4, r5, r6];
}
