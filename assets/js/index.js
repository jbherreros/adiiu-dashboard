/* In this js file all the interactions with the DOM are defined
 and also the default charts are created */

document.addEventListener("DOMContentLoaded", function () {
  // To change the chart's year for the first chart
  document
    .getElementById("filter-items")
    .addEventListener("change", function (e) {
      limit = document.getElementById("limit-select").value;
      year = document.getElementById("year-select").value;
      renderFirstChart(year, limit);
    });

    // Render charts functions
    function renderFirstChart(year, limit){
      let data = getBestScores(year, limit).then((data) => {
        createFirstChart(data, year);
      });
    }

    // Calling the render functions for the default charts, on page load
    renderFirstChart(2019, 10);
});
