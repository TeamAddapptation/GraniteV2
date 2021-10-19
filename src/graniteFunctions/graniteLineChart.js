export default function graniteLineChart(jsonBlock, jsonTheme) {
  const graniteDiv = document.getElementById("overview-section-1");
  graniteDiv.innerHTML = "";

  // create data set on our data
  var dataSet = anychart.data.set(getData());

  // map data for the first series, take x from the zero column and value from the first column of data set
  var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

  // map data for the second series, take x from the zero column and value from the second column of data set
  var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

  // map data for the third series, take x from the zero column and value from the third column of data set
  var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

  // map data for the fourth series, take x from the zero column and value from the third column of data set
  var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });

  // create line chart
  var chart = anychart.line();

  // turn on chart animation
  chart.animation(true);

  // set chart padding
  chart.padding([0, 0, 0, 0]);

  //Tooltip
  chart.tooltip().fontColor("#5d5d5d");
  chart.tooltip().background().fill("#ffffff");

  // turn on the crosshair
  chart.crosshair().enabled(true).yLabel(false).yStroke(null);

  // enable minor grids
  chart.yMinorGrid().enabled(true);

  // set tooltip mode to point
  chart.tooltip().positionMode("point");

  // set yAxis title
  chart.yAxis().enabled(false);
  chart.xAxis().labels().padding(5);

  chart.xScale().mode("continuous");

  // create first series with mapped data
  var firstSeries = chart.spline(firstSeriesData);
  firstSeries.name("Data Quality");
  firstSeries.stroke("2 #AED440");
  firstSeries.hovered().markers().enabled(true).type("circle").size(4);
  firstSeries
    .tooltip()
    .position("right")
    .anchor("left-center")
    .offsetX(5)
    .offsetY(5);

  // create second series with mapped data
  var secondSeries = chart.spline(secondSeriesData);
  secondSeries.name("Outreach");
  secondSeries.stroke("2 #50A9DC");
  secondSeries.hovered().markers().enabled(true).type("circle").size(4);
  secondSeries
    .tooltip()
    .position("right")
    .anchor("left-center")
    .offsetX(5)
    .offsetY(5);

  // create third series with mapped data
  var thirdSeries = chart.spline(thirdSeriesData);
  thirdSeries.name("revenue");
  thirdSeries.stroke("2 #E25B66");
  thirdSeries.hovered().markers().enabled(true).type("circle").size(4);
  thirdSeries
    .tooltip()
    .position("right")
    .anchor("left-center")
    .offsetX(5)
    .offsetY(5);

  var fourthSeries = chart.spline(fourthSeriesData);
  fourthSeries.name("Score");
  fourthSeries.stroke("2 #DC66DE");
  fourthSeries.hovered().markers().enabled(true).type("circle").size(6);
  fourthSeries
    .tooltip()
    .position("right")
    .anchor("left-center")
    .offsetX(5)
    .offsetY(5);

  // turn the legend on
  chart.legend().enabled(true).fontSize(13).padding([25, 0, 25, 0]);
  chart.legend().align("left");

  // set container id for the chart
  chart.container("overview-section-1");
  // initiate chart drawing
  chart.draw();

  function getData() {
    return [
      ["1", 9, 7, 4, 3],
      ["5", 7, 4, 6, 2],
      ["10", 6, 5, 7, 4],
      ["15", 5, 3, 6, 3],
      ["20", 8, 5, 10, 4],
      ["25", 8, 6, 6, 5],
      ["30", 5, 7, 9, 6],
    ];
  }
}
