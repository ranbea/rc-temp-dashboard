import Dygraph from "dygraphs";

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
            },

        /**
         * When user scrolling on the graph, zoom in
         */
        mousewheel: 
            function(event, graph, context) {
                calculateZoom(graph, event.wheelDelta > 0);  // delta > 0 = zoom in

                setStartDate(new Date(graph.xAxisRange()[0]));
                setEndDate(new Date(graph.xAxisRange()[1]));
                event.preventDefauly();
                event.stopPropagation();
            }
    })
}

/**
 * Helper function to calculate zoom for mousewheel scroll event
 */
function calculateZoom(graph, zoomIn) {
    var axis = graph.xAxisRange();
    var range = axis[1] - axis[0];

    var updatedAxis;

    var deltaL = range * 0.01;
    var deltaR = range * 0.01;

    if (zoomIn) {
        updatedAxis = [axis[0] + deltaL, axis[1] - deltaR];
    } else {
        updatedAxis = [axis[0] - deltaL, axis[1] + deltaR];
    }

    graph.updateOptions({ dateWindow: newAxis });
}