/* In this js file all the interactions with the DOM are defined
 and also the default charts are created */

document.addEventListener("DOMContentLoaded", function () {
  // To change the chart's year for the first chart
  document
    .getElementById("filter-items")
    .addEventListener("change", function (e) {
      limit = document.getElementById("limit-select").value;
      year = document.getElementById("year-select").value;
      firstChartCall(year, limit);
      seconddChartCall(year);
    });

  firstChartCall(2016, 10);
  seconddChartCall(2016);
  thirdChartCall('Lionel Messi');
});
