/* In this js file all the interactions with the DOM are defined
 and also the default charts are created */

// Once the DOM is loaded...
document.addEventListener("DOMContentLoaded", function () {

  // Interactions with the DOM (chart settings)
  document
    .getElementById("filter-items-chart-1")
    .addEventListener("change", function (e) {
      limit = document.getElementById("limit-select").value;
      year = document.getElementById("year-select-1").value;
      renderFirstChart(year, limit);
    });

  document
    .getElementById("filter-items-chart-2")
    .addEventListener("change", function (e) {
      year = document.getElementById("year-select-2").value;
      renderSecondChart(year);
    });

  document
    .getElementById("filter-items-chart-3")
    .addEventListener("change", function (e) {
      player = document.getElementById("player-select").value;
      openFilter(3); // to close the filter
      goBack(); // goes down to the chart's position
      renderThirdChart(player);
    });

  // This is for setting the third chart player selection
  let data = getAllPlayers().then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let option = document.createElement("option");
      option.text = data[i].Player_Name;
      option.value = data[i].Player_Name;
      document.getElementById("player-select").add(option);
    }
  });

  // Render chart functions
  function renderFirstChart(year, limit) {
    let data = getBestScores(year, limit).then((data) => {
      createFirstChart(data, year);
    });
  }

  function renderSecondChart(year) {
    let data = getGoalsPerLeague(year).then((data) => {
      createSecondChart(data, year);
    });
  }

  function renderThirdChart(name) {
    let data = getMatchesAndGoalsPerYear(name).then((data) => {
      createThirdChart(data, name);
    });
  }

  function renderFourthChart() {
    let data = externalApiCall().then((data) => {
      let names = [];
      let ages = [];
      let vari;
      for (let i = 0; i < data.length; i++) {
        let age = 0;
        for (let x = 0; x < data[i].players.length; x++) {
          age += parseInt(data[i].players[x].player_age);
        }
        names[i] = data[i].team_name;
        vari = age / data[i].players.length;
        vari = Number(vari.toFixed(2));
        ages[i] = vari;
      }
      console.log(ages);
      console.log(names);
      createFourthChart(names, ages);
    });
  }

  // Calling the render functions for the default charts, on page load
  renderFirstChart(2019, 10);
  renderSecondChart(2016);
  renderThirdChart("Lionel Messi");
  renderFourthChart();
});
