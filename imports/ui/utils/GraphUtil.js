import Dygraph from "dygraphs";
import moment from 'moment';

/**
 * Custom interaction model for Dygraph
 * Reference https://dygraphs.com/gallery/#g/interaction
 * takes 2 functions as arguments
 */
export function graphHandler(setStartDate, setEndDate) {
    return (
    {
        mousedown:
            function(event, graph, context) {
                context.initializeMouseDown(event, graph, context);
                if (event.shiftKey) {
                    Dygraph.startZoom(event, graph, context);
                } else {
                    Dygraph.startPan(event, graph, context);
                }
            },
        mousemove: 
            function(event, graph, context) {
                if (context.isPanning) {
                    Dygraph.movePan(event, graph, context);
                } 

                if (context.isZooming) {
                    Dygraph.moveZoom(event, graph, context);
                }
            },

        /**
         * When user releases mouse, set the start and end dates
         */
        mouseup:
            function(event, graph, context) {
                if (context.isZooming) {
                    Dygraph.endZoom(event, graph, context);
                }

                if (context.isPanning) {
                    Dygraph.endPan(event, graph, context);
                }
                setStartDate(new Date(graph.xAxisRange()[0]));
                setEndDate(new Date(graph.xAxisRange()[1]));
            }
    })
}

/**
 * Function to handle legend formatting
 * 
 * References
 *  https://stackoverflow.com/questions/41536131/adding-extra-information-to-dygraph-legend
 *  https://github.com/danvk/dygraphs/pull/683
 */
export function formatLegend(data) {
    let formattedHTML = '';

    // Check if user is highlighting the graph
    let isDataSelected = data.x !== undefined;

    // Format xLabel
    const xLabel = (text) => {
        return '<div class="dygraph-x-label">' + text + '</div>';
    }

    if (isDataSelected) {
        formattedHTML += xLabel(moment(data.x).format('DD/MM/YYYY @ hh:mm A'));
    } else {
        formattedHTML += xLabel('Date/Time');
    }

    // Format all the labels, put inside a flex container
    formattedHTML += '<div class="dygraph-label-container">';

    const colouredBox = (colour) => {
        return '<div class="dygraph-label-box" style="background:' + colour + ';"></div>';
    }

    const labelTitle = (labelHTML) => {
        return '<span class="dygraph-label-title">' + labelHTML + '&nbsp;</span>';
    }

    const labelValue = (labelValue) => {
        return '<span class="dygraph-label-value">' + labelValue.toFixed(1) + ' °C </span>';
    }

    // For each label, format 
    data.series.forEach((label) => {
        var formattedLabel = '<div class="dygraph-label">';
        
        if (label.isVisible) {
            formattedLabel += colouredBox(label.color) + '&nbsp;' + labelTitle(label.labelHTML);
        } else {
            formattedLabel += colouredBox('rgb(0, 0, 0, 0)') + '&nbsp;' + labelTitle('');
        }
        
        if (isDataSelected && (label.y !== undefined) && label.isVisible) {
            formattedLabel += labelValue(label.y);
        } 

        formattedLabel += '</div>';

        formattedHTML += formattedLabel;
    });

    return formattedHTML += '</div>';
}