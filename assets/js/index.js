/* In this js file all the interactions with the DOM are defined
 and also the default charts are created */

document.addEventListener("DOMContentLoaded", function (e) {
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
      firstChartCall(year, limit);
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
  document
    .getElementById("goalsPerLeague")
    .addEventListener("change", function (e) {
      limit = document.getElementById("limit-select").value;
      year = document.getElementById("year-select").value;
      firstChartCall(year, limit);
      secondChartCall(year);
    });

  firstChartCall(2016, 10);
  secondChartCall(2016);
  thirdChartCall('Lionel Messi');
  /*callApi();*/
});


