/* In this js file all the interactions with the DOM are defined
 and also the default charts are created */

  /*let btn = e.currentTarget;
  let value = btn.name;
  console.log(value);
  switch (value) {
    case 1:
      document
    .getElementById("filter-items")
    .addEventListener("change", function (e) {
      limit = document.getElementById("limit-select").value;
      year = document.getElementById("year-select").value;
      renderFirstChart(year, limit);
    });
      break;
    case 2:
      document
    .getElementById("filter-items")
    .addEventListener("change", function (e) {
      year = document.getElementById("year-select").value;
      secondChartCall(year);
    });
      break;
    case 3:
      document
    .getElementById("filter-items")
    .addEventListener("change", function (e) {
      nam = document.getElementById("name-select").value;
      thirdChartCall()
    });
      break;
    default:
      break;
  }*/
  
  // To change the chart's year for the first chart
  document.addEventListener("DOMContentLoaded", function () {
    // To change the chart's year for the first chart
    document
      .getElementById("filter-items")
      .addEventListener("change", function (e) {
        limit = document.getElementById("limit-select").value;
        year = document.getElementById("year-select").value;
        renderFirstChart(year, limit);
        renderSecondChart(year);
        renderThirdChart();
      });

    // Render charts functions
    function renderFirstChart(year, limit){
      let data = getBestScores(year, limit).then((data) => {
        createFirstChart(data, year);
      });
    }

    // Calling the render functions for the default charts, on page load
    renderFirstChart(2019, 10);
    function renderSecondChart(year){
      let data = getGoalsPerLeague(year).then((data)=>{
        createChartGoalsPerLeague(data,year);
      });
    }
    function renderThirdChart(name){
      let data = getMatchesAndGoalsPerYear(name).then((data)=>{
        createThirdChart(data,name);
      });
    }

    // Calling the render functions for the default charts, on page load
    renderFirstChart(2019, 10);
    renderSecondChart(2016);
    renderThirdChart('Lionel Messi');

  /*callApi();*/
});
