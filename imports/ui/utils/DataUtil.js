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