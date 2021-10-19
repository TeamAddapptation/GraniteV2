export default function graniteRangeChart(jsonBlock, jsonTheme) {
  const graniteDiv = document.getElementById("overview-section-2");
  graniteDiv.innerHTML = "";

  var rangeData = [
    ["January", 5, 9],
    ["February", 3, 7],
    ["March", 4, 10],
    ["April", 2, 6],
  ];

  // create a chart
  var rangeChart = anychart.area();

  // turn on chart animation
  rangeChart.animation(true);

  // Disable X and Y Axis
  rangeChart.yAxis().enabled(false);
  rangeChart.xAxis().enabled(false);

  rangeChart.xScale().mode("continuous");

  var yAxis = rangeChart.yAxis();
  var greatestMarker = rangeChart.lineMarker(0);
  greatestMarker.axis(yAxis);
  greatestMarker.value(10);
  greatestMarker.stroke({
    // set stroke thickness
    thickness: 1,
    // set stroke color
    color: "#bfbfbf",
    // set dashes and gaps
    dash: "20 20",
  });

  var averageMarker = rangeChart.lineMarker(1);
  averageMarker.axis(yAxis);
  averageMarker.value(5);

  // create a range area series and set the data
  var series = rangeChart.rangeArea(rangeData);

  series.normal().fill("#D9EE9B");
  series.normal().highStroke("#AED440", 2);
  series.normal().lowStroke("#AED440", 2);

  // set the container id
  rangeChart.container("overview-section-2");

  // initiate drawing the chart
  rangeChart.draw();
}
