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

    var comparator = (a, b) => a.date - b.date;
    intermediateData = intermediateData.slice().sort(comparator);

    const formattedData = [];

    for (let i = 0; i < data.length; i++) {
        formattedData.push([
            new Date(data[i]["date"]),
            data[i]["temp"]["0"],
            data[i]["temp"]["1"],
            data[i]["temp"]["2"],
            data[i]["temp"]["3"],
            data[i]["temp"]["4"],
            data[i]["temp"]["5"],
            data[i]["temp"]["6"],
        ]);
    }
    
    return formattedData;
}